# Header CTA Dynamic Scroll Behavior

## Overview
Динамическое появление CTA кнопки "Free WhatsApp Estimate" в header при прокрутке страницы вниз после Hero секции.

## Implementation Details

### ✅ Core Functionality

1. **Initial State**
   - CTA кнопка скрыта при загрузке страницы
   - `opacity: 0`, `translateY(-8px)`, `pointer-events: none`

2. **Trigger Point**
   - Intersection Observer отслеживает Hero секцию с атрибутом `[data-hero-section]`
   - Threshold: `0` (срабатывает когда Hero полностью выходит из viewport)
   - `rootMargin: '0px'`

3. **Visibility Logic**
   - `showCTA = !entry.isIntersecting`
   - Когда Hero НЕ пересекается с viewport → показать CTA
   - Когда Hero возвращается в viewport → скрыть CTA

### 🎨 Animation Specs

```css
transition: all 400ms ease-out
will-change: opacity, transform

/* Hidden State */
opacity: 0
transform: translateY(-8px)
pointer-events: none

/* Visible State */
opacity: 1
transform: translateY(0)
pointer-events: auto
```

### 📱 Responsive Design

#### Desktop (lg+)
- Height: `h-9` (36px) - на 20% меньше чем Hero CTA
- Padding X: `px-5` (20px) - компактнее
- Font size: `text-sm` (14px)
- Appears in header next to navigation

#### Mobile
- Height: `h-12` (48px)
- Font size: `text-base` (16px)
- Appears in mobile menu overlay
- Same animation timing

### ♿ Accessibility

1. **ARIA Attributes**
   - `aria-hidden={!showCTA}` - скрывает от screen readers когда не видна
   
2. **Keyboard Navigation**
   - `tabIndex={showCTA ? 0 : -1}` - доступна для Tab только когда видна
   - Focus state корректно работает при появлении

3. **Screen Reader Friendly**
   - Button label остается понятным: "Free WhatsApp Estimate"
   - Открывается в новой вкладке с правильным `rel="noopener noreferrer"`

### ⚡ Performance

1. **Intersection Observer API**
   - Более производительно чем scroll listeners
   - Нативная оптимизация браузером
   - Автоматический cleanup при unmount

2. **CSS Optimizations**
   - `will-change: opacity, transform` для GPU acceleration
   - `pointer-events: none` когда скрыта (не блокирует клики)
   - Single reflow на transition

3. **Re-observation on Route Change**
   - Observer пересоздается при изменении `location`
   - Гарантирует корректную работу на всех страницах

## Usage

### In Page Component

```tsx
// Add data-hero-section attribute to Hero section
<div 
  className="hero-section"
  data-hero-section
>
  {/* Hero content */}
</div>
```

### In Header Component

Header автоматически находит элемент с `[data-hero-section]` и отслеживает его видимость.

## Testing Checklist

- [ ] CTA скрыта при загрузке страницы
- [ ] CTA появляется плавно при скролле вниз (Hero выходит из viewport)
- [ ] CTA исчезает плавно при скролле вверх (Hero входит в viewport)
- [ ] Анимация работает без лагов при быстром скролле
- [ ] Desktop: кнопка корректно отображается в header
- [ ] Mobile: кнопка корректно отображается в меню
- [ ] Keyboard navigation работает (Tab доступен только когда видна)
- [ ] Screen reader корректно объявляет состояние (aria-hidden)
- [ ] Ссылка открывается в новой вкладке (WhatsApp)
- [ ] При переходе между страницами Observer пересоздается

## Files Modified

1. `src/components/layout/Header.tsx`
   - Added `showCTA` state
   - Added Intersection Observer logic
   - Updated CTA button with animation classes
   - Added accessibility attributes

2. `src/pages/HomePage.tsx`
   - Added `data-hero-section` attribute to Hero div

3. `src/content/partials/header.md`
   - Updated CTA label to "Free WhatsApp Estimate"

## Browser Support

✅ All modern browsers supporting Intersection Observer API:
- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, CTA will remain visible (graceful degradation).

