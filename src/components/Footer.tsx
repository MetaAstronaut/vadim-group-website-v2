import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#070B12',
      color: '#F8FAFC',
      padding: '3rem 2rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Company Info */}
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#C6A778' }}>The Vadim Group</h3>
          <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.6' }}>
            Premium repair services for homes, businesses and marine vessels throughout the Orlando area.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Quick Links
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/" style={footerLinkStyle}>Home</Link>
            <Link to="/home-repairs" style={footerLinkStyle}>Home Repairs</Link>
            <Link to="/specialized-services" style={footerLinkStyle}>Specialized Services</Link>
            <Link to="/marine-rv" style={footerLinkStyle}>Marine & RV</Link>
            <Link to="/commercial" style={footerLinkStyle}>Commercial</Link>
            <Link to="/blog" style={footerLinkStyle}>Blog</Link>
            <Link to="/contact" style={footerLinkStyle}>Contact</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94A3B8', fontSize: '0.875rem' }}>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:info@thevadimgroup.com" style={{ color: '#C6A778', textDecoration: 'none' }}>
                info@thevadimgroup.com
              </a>
            </p>
            <p>
              <strong>Service Area:</strong><br />
              Orlando, Lake Nona, Hunters Creek & surrounding areas
            </p>
          </div>
        </div>

        {/* Social (placeholder) */}
        <div>
          <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Follow Us
          </h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Facebook</a>
            <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid #1C2630',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.875rem',
        color: '#94A3B8'
      }}>
        <p>© {currentYear} The Vadim Group. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle: React.CSSProperties = {
  color: '#94A3B8',
  textDecoration: 'none',
  fontSize: '0.875rem',
  transition: 'color 0.2s'
};