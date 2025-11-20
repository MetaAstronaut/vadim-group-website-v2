import React from 'react';

export const DesignSystemExample = () => {
  return (
    <div className="min-h-screen bg-surface-body p-8 space-y-12 font-body text-text-primary">
      
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-5xl font-heading font-bold text-brand-primary">Design System V2</h1>
        <p className="text-xl text-text-secondary max-w-2xl">
          European Precision & Calm Authority. A demonstration of the token system.
        </p>
      </div>

      {/* Colors Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-heading font-semibold border-b border-border-light pb-4">Colors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Colors */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Brand</h3>
            <ColorCard name="brand-primary" className="bg-brand-primary text-white" />
            <ColorCard name="brand-secondary" className="bg-brand-secondary text-white" />
            <ColorCard name="brand-accent" className="bg-brand-accent text-brand-primary" />
            <ColorCard name="brand-accent-hover" className="bg-brand-accent-hover text-brand-primary" />
          </div>

          {/* Backgrounds */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Backgrounds</h3>
            <ColorCard name="bg-body" className="bg-surface-body border border-border-light" />
            <ColorCard name="bg-surface" className="bg-surface border border-border-light" />
            <ColorCard name="bg-dark" className="bg-surface-dark text-white" />
            <ColorCard name="bg-subtle" className="bg-surface-subtle border border-border-light" />
          </div>

          {/* Text Colors */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Text</h3>
            <div className="bg-white p-4 rounded-md border border-border-light space-y-2">
              <p className="text-text-primary">Text Primary</p>
              <p className="text-text-secondary">Text Secondary</p>
              <p className="text-text-muted">Text Muted</p>
            </div>
            <div className="bg-brand-primary p-4 rounded-md space-y-2">
              <p className="text-text-inverse">Text Inverse</p>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Semantic</h3>
            <ColorCard name="success" className="bg-semantic-success text-white" />
            <ColorCard name="error" className="bg-semantic-error text-white" />
            <ColorCard name="warning" className="bg-semantic-warning text-white" />
            <ColorCard name="info" className="bg-semantic-info text-white" />
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-heading font-semibold border-b border-border-light pb-4">Typography</h2>
        
        <div className="space-y-8">
          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-6xl font-heading font-bold">Display Heading (6xl)</h1>
            <h1 className="text-5xl font-heading font-bold">Heading 1 (5xl)</h1>
            <h2 className="text-4xl font-heading font-bold">Heading 2 (4xl)</h2>
            <h3 className="text-3xl font-heading font-semibold">Heading 3 (3xl)</h3>
            <h4 className="text-2xl font-heading font-medium">Heading 4 (2xl)</h4>
          </div>

          {/* Body Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-text-primary">Body Large</h4>
              <p className="text-lg text-text-secondary">
                The Vadim Group delivers personal, high-skill service that restores spaces beautifully, reliably, and right the first time.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-text-primary">Body Base</h4>
              <p className="text-base text-text-secondary">
                The Vadim Group delivers personal, high-skill service that restores spaces beautifully, reliably, and right the first time.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-text-primary">Small / Label</h4>
              <p className="text-sm text-text-muted uppercase tracking-wide font-medium">
                Project Specifications
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-text-primary">Monospace</h4>
              <p className="font-mono text-sm text-text-secondary bg-surface-subtle p-2 rounded">
                {`{ "precision": "100%", "status": "verified" }`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-heading font-semibold border-b border-border-light pb-4">Components & Styles</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Buttons</h3>
            <div className="flex flex-col gap-4 items-start">
              <button className="btn-premium">
                Primary Action
              </button>
              <button className="btn-secondary">
                Secondary Action
              </button>
              <button className="btn-accent">
                Accent Action
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cards</h3>
            <div className="card-premium p-6 space-y-3">
              <h4 className="text-xl font-heading font-semibold text-brand-primary">Service Card</h4>
              <p className="text-text-secondary">
                Hover over this card to see the elevation lift and border transition. This uses the premium card utility.
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Forms</h3>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-text-primary">Email Address</label>
              <input 
                type="email" 
                placeholder="client@example.com"
                className="w-full h-12 px-4 rounded-md border border-border-light bg-surface focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
              />
              <p className="text-xs text-text-muted">We'll never share your email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6 pt-8 border-t border-border-light">
        <h2 className="text-2xl font-heading font-semibold">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-dark text-text-inverse p-6 rounded-lg">
            <h3 className="text-lg font-mono mb-2 text-brand-accent">Tailwind Classes</h3>
            <code className="block text-sm opacity-80">
              className="bg-brand-primary text-white p-4 rounded-sm"
            </code>
          </div>
          <div className="bg-surface-subtle p-6 rounded-lg border border-border-light">
            <h3 className="text-lg font-mono mb-2 text-brand-primary">CSS Variables</h3>
            <code className="block text-sm text-text-secondary">
              {`style={{ background: 'var(--color-brand-primary)' }}`}
            </code>
          </div>
        </div>
      </section>

    </div>
  );
};

const ColorCard = ({ name, className }: { name: string, className: string }) => (
  <div className={`h-24 rounded-md flex items-center justify-center ${className} shadow-sm`}>
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default DesignSystemExample;

