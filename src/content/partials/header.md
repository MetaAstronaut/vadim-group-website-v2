---
component: "header"
description: "Global navigation and primary call-to-action for The Vadim Group website."
---

## [brand]
name: "The Vadim Group"
logo: null   # update later if logo file or text changes

---

## [navigation]
items:
  - name: "Home"
    path: "/"
  - name: "Home Repairs"
    path: "/home-repairs"
  - name: "Specialized Services"
    path: "/other-services"
  - name: "Emergency"
    path: "/emergency-services"
  - name: "Blog"
    path: "/blog"
  - name: "Contact"
    path: "/contact"

---

## [cta]
desktop:
  label: "Get a Quote"
  action: "/contact"  # currently routed via button component

mobile:
  label: "Get a Quote"
  action: "/contact"