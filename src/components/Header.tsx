import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={{
      background: '#0F172A',
      color: '#F8FAFC',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          The Vadim Group
        </Link>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/home-repairs" style={linkStyle}>Home Repairs</Link>
          <Link to="/specialized-services" style={linkStyle}>Specialized Services</Link>
          <Link to="/marine-rv" style={linkStyle}>Marine & RV</Link>
          <Link to="/commercial" style={linkStyle}>Commercial</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          
          {/* CTA Button */}
          <Link 
            to="/contact" 
            style={{
              background: '#C6A778',
              color: '#0F172A',
              padding: '0.75rem 1.5rem',
              borderRadius: '2px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

const linkStyle: React.CSSProperties = {
  color: '#F8FAFC',
  textDecoration: 'none',
  transition: 'color 0.2s'
};