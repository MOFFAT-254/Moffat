const STEPS = [
    { n: '01', title: 'Contact Us', desc: 'Reach us via WhatsApp, call, or email. Describe your project and location for a quick response.', active: false },
    { n: '02', title: 'Free Site Visit', desc: 'Our engineer visits your property, assesses the work, and provides a detailed free quotation.', active: true },
    { n: '03', title: 'Installation', desc: 'Our certified team executes the project to spec, on time, with zero disruption to your routine.', active: false },
    { n: '04', title: 'Handover & Support', desc: 'Sign-off, documentation, warranty activation, and 24/7 post-installation support.', active: false },
];

export default function Process() {
    return (
        <>
            <style>{`
                                .proc-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; position: relative; }
                                        .proc-line { position: absolute; top: 36px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg,transparent,rgba(245,196,0,.3),rgba(245,196,0,.3),transparent); }
                                                @media (max-width: 768px) { .proc-grid { grid-template-columns: repeat(2,1fr) !important; } .proc-line { display: none !important; } }
                                                        @media (max-width: 480px) { .proc-grid { grid-template-columns: 1fr !important; } }
                                                              `}</style>
            <section id="process" style={{ padding: '80px 0', background: 'var(--dark-2)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 52 }}>
                        <div style={{ fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: 12 }}>How It Works</div>
                        <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(32px,6vw,52px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.05 }}>
                            Simple <span style={{ color: 'var(--yellow)' }}>4-Step</span> Process
                        </h2>
                        <p style={{ color: 'var(--gray-light)', fontSize: 16, fontWeight: 300, maxWidth: 480, margin: '14px auto 0' }}>
                            From first contact to completed project, we make it easy.
                        </p>
                    </div>
                    <div className="proc-grid">
                        <div className="proc-line" />
                        {STEPS.map(s => (
                            <div key={s.n} style={{ textAlign: 'center', position: 'relative' }}>
                                <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px', background: s.active ? 'var(--yellow)' : 'var(--dark-3)', border: `2px solid ${s.active ? 'var(--yellow)' : 'rgba(245,196,0,.25)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontSize: 28, fontWeight: 800, color: s.active ? 'var(--dark)' : 'var(--yellow)', boxShadow: s.active ? '0 0 30px rgba(245,196,0,.4)' : 'none', position: 'relative', zIndex: 1 }}>{s.n}</div>
                                <h4 style={{ fontFamily: 'var(--fh)', fontSize: 17, fontWeight: 700, textTransform: 'uppercase', marginBottom: 10 }}>{s.title}</h4>
                                <p style={{ color: 'var(--gray)', fontSize: 13 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
