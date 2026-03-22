const WA_LINK = `https://wa.me/254700000000?text=Hello%20Moffat%20Tech!%20I%20need%20a%20free%20consultation.`;

export default function Hero() {
    const stats = [
        { num: '500+', label: 'Projects Done' },
        { num: '10+', label: 'Years Exp.' },
        { num: '98%', label: 'Satisfaction' },
    ];
    const mini = [
        { val: '4.2kW', key: 'Generation' },
        { val: '82%', key: 'Efficiency' },
        { val: '320kWh', key: 'This Month' },
        { val: 'KSh 12k', key: 'Saved' },
    ];

    return (
        <>
            <style>{`
                                                        .hero-grid {
                                                                  display: grid; grid-template-columns: 1fr 1fr;
                                                                            gap: 60px; align-items: center;
                                                                                    }
                                                                                            .hero-card-col { display: flex; justify-content: center; }
                                                                                                    @media (max-width: 768px) {
                                                                                                              .hero-grid { grid-template-columns: 1fr; text-align: center; }
                                                                                                                        .hero-card-col { display: none !important; }
                                                                                                                                  .hero-actions { justify-content: center !important; }
                                                                                                                                            .hero-stats  { justify-content: center !important; }
                                                                                                                                                    }
                                                                                                                                                            @keyframes floatCard   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                                                                                                                                                                    @keyframes floatBadge  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)}  }
                                                                                                                                                                            @keyframes pulse       { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
                                                                                                                                                                                  `}</style>

            <section id="home" style={{
                minHeight: '100vh', display: 'flex', alignItems: 'center',
                position: 'relative', overflow: 'hidden', paddingTop: 80,
            }}>
                {/* BG */}
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 60% 40%,rgba(245,196,0,.07),transparent 60%),radial-gradient(ellipse 50% 50% at 10% 80%,rgba(0,200,255,.06),transparent 50%),linear-gradient(180deg,#0A0E17,#111827)` }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(245,196,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,196,0,.04) 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />

                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1, width: '100%' }}>
                    <div className="hero-grid">

                        {/* ── Text ── */}
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'rgba(245,196,0,.1)', border: '1px solid rgba(245,196,0,.2)', borderRadius: 100, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: 24 }}>
                                <span style={{ width: 6, height: 6, background: 'var(--yellow)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                                Available for Projects
                            </div>

                            <h1 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(44px,8vw,76px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: .95, marginBottom: 24 }}>
                                <span style={{ display: 'block' }}>Power Your</span>
                                <span style={{ display: 'block', color: 'var(--yellow)' }}>World With</span>
                                <span style={{ display: 'block' }}>Expertise</span>
                            </h1>

                            <p style={{ color: 'var(--gray-light)', fontSize: 16, fontWeight: 300, marginBottom: 36, maxWidth: 440 }}>
                                Moffat Tech delivers professional electrical engineering and solar energy solutions — trusted across Kenya.
                            </p>

                            <div className="hero-actions" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
                                <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, background: 'var(--yellow)', color: 'var(--dark)', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', textDecoration: 'none' }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                    Our Services
                                </a>
                                <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, background: 'transparent', color: 'var(--white)', border: '1.5px solid rgba(255,255,255,.25)', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', textDecoration: 'none' }}>
                                    Free Consultation
                                </a>
                            </div>

                            <div className="hero-stats" style={{ display: 'flex', gap: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.08)', flexWrap: 'wrap' }}>
                                {stats.map(s => (
                                    <div key={s.label}>
                                        <div style={{ fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 800, color: 'var(--yellow)' }}>{s.num}</div>
                                        <div style={{ fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Floating Card ── */}
                        <div className="hero-card-col">
                            <div style={{ position: 'relative' }}>
                                {/* Top badge */}
                                <div style={{ position: 'absolute', top: -20, right: -20, zIndex: 2, background: 'var(--dark-2)', border: '1px solid rgba(34,197,94,.3)', borderRadius: 100, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--green)', whiteSpace: 'nowrap', animation: 'floatBadge 3s ease-in-out infinite' }}>
                                    <span style={{ width: 6, height: 6, background: 'var(--green)', borderRadius: '50%', animation: 'pulse 2s infinite' }} /> Solar System Live
                                </div>

                                {/* Card */}
                                <div style={{ width: 340, background: 'var(--dark-3)', border: '1px solid rgba(245,196,0,.15)', borderRadius: 20, padding: 32, boxShadow: '0 0 40px rgba(245,196,0,.18)', animation: 'floatCard 4s ease-in-out infinite', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: -1, left: 20, right: 20, height: 2, background: 'linear-gradient(90deg,transparent,var(--yellow),transparent)', borderRadius: 2 }} />
                                    <div style={{ width: 64, height: 64, background: 'rgba(245,196,0,.12)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, border: '1px solid rgba(245,196,0,.2)' }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                                        </svg>
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Solar Dashboard</h3>
                                    <p style={{ color: 'var(--gray-light)', fontSize: 14, marginBottom: 20 }}>Real-time system monitoring & performance</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>   
                                        {mini.map(m => (
                                            <div key={m.key} style={{ background: 'rgba(255,255,255,.04)', borderRadius: 10, padding: 12, border: '1px solid rgba(255,255,255,.06)' }}>
                                                <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 800, color: 'var(--yellow)' }}>{m.val}</div>
                                                <div style={{ fontSize: 11, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: 1 }}>{m.key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom badge */}
                                <div style={{ position: 'absolute', bottom: -20, left: -20, zIndex: 2, background: 'var(--dark-2)', border: '1px solid rgba(34,197,94,.3)', borderRadius: 100, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--green)', whiteSpace: 'nowrap', animation: 'floatBadge 3s ease-in-out 1.5s infinite' }}>
                                    <span style={{ width: 6, height: 6, background: 'var(--green)', borderRadius: '50%', animation: 'pulse 2s infinite' }} /> Grid Connected
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}