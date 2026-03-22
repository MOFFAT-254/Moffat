import { useState, useEffect } from 'react';

const WA_LINK = `https://wa.me/254700000000?text=Hello%20Moffat%20Tech,%20I%20need%20electrical%20services`;

const NAV_LINKS = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <style>{`
                                                  .nav-link {
                                                            font-family: var(--fh); font-weight: 600; font-size: 14px;
                                                                      letter-spacing: 1px; text-transform: uppercase;
                                                                                color: var(--gray-light); transition: color .2s; text-decoration: none;
                                                                                        }
                                                                                                .nav-link:hover { color: var(--white); }
                                                                                                        @media (max-width: 768px) {
                                                                                                                  .nav-desktop { display: none !important; }
                                                                                                                            .hamburger   { display: flex !important; }
                                                                                                                                    }
                                                                                                                                            @media (min-width: 769px) {
                                                                                                                                                      .hamburger { display: none !important; }
                                                                                                                                                              }
                                                                                                                                                                    `}</style>

            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                padding: scrolled ? '12px 0' : '16px 0',
                background: scrolled ? 'rgba(10,14,23,.93)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(245,196,0,.1)' : 'none',
                transition: 'all .3s',
            }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Logo */}
                    <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                        <div style={{ width: 42, height: 42, background: 'var(--yellow)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0E17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </div>
                        <div style={{ fontFamily: 'var(--fh)' }}>
                            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1, color: 'var(--white)' }}>
                                MOFFAT <span style={{ color: 'var(--yellow)' }}>TECH</span>
                            </div>
                            <div style={{ fontSize: 10, color: 'var(--gray)', letterSpacing: 2, textTransform: 'uppercase' }}>
                                Electrical & Solar Engineering
                            </div>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="nav-desktop" style={{ display: 'flex', gap: 32 }}>
                        {NAV_LINKS.map(l => (
                            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a className="nav-desktop" href={WA_LINK} target="_blank" rel="noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '11px 22px', borderRadius: 12, background: 'var(--yellow)',
                        color: 'var(--dark)', fontFamily: 'var(--fh)', fontWeight: 700,
                        fontSize: 15, textTransform: 'uppercase', textDecoration: 'none',
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get Quote
                    </a>

                    {/* Hamburger */}
                    <button className="hamburger" onClick={() => setMenuOpen(true)} style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        flexDirection: 'column', gap: 5, padding: 4,
                    }}>
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{ display: 'block', width: 24, height: 2, background: 'var(--white)', borderRadius: 2 }} />
                        ))}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'var(--dark-2)', zIndex: 999,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
                }}>
                    <button onClick={() => setMenuOpen(false)} style={{
                        position: 'absolute', top: 24, right: 24, background: 'none',
                        border: 'none', color: 'var(--white)', fontSize: 28, cursor: 'pointer',
                    }}>✕</button>
                    {NAV_LINKS.map(l => (
                        <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
                            fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 800,
                            textTransform: 'uppercase', color: 'var(--white)', letterSpacing: 2, textDecoration: 'none',
                        }}>{l.label}</a>
                    ))}
                    <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} style={{
                        padding: '14px 28px', borderRadius: 12, background: 'var(--yellow)',
                        color: 'var(--dark)', fontFamily: 'var(--fh)', fontWeight: 700,
                        fontSize: 16, textTransform: 'uppercase', textDecoration: 'none',
                    }}>WhatsApp Us</a>
                </div>
            )}
        </>
    );
}
