const REVIEWS = [
    { initials: 'JK', name: 'James Kamau', role: 'Homeowner, Kiambu', grad: 'linear-gradient(135deg,#F5C400,#00C8FF)', text: '"Moffat Tech installed a complete 5kW solar system for my home. Professional team, clean installation, and my electricity bill dropped by 80%. Highly recommend!"' },
    { initials: 'FO', name: 'Faith Otieno', role: 'Operations Manager, Ruiru', grad: 'linear-gradient(135deg,#22C55E,#00C8FF)', text: '"We hired them for our warehouse 3-phase electrical installation. On-time delivery, proper documentation, and excellent workmanship. Worth every shilling."' },
    { initials: 'PM', name: 'Peter Mwangi', role: 'Property Developer, Nairobi', grad: 'linear-gradient(135deg,#a064ff,#F5C400)', text: '"Emergency rewiring done overnight! Their 24/7 response is real. The team was courteous and the job was flawless. Moffat Tech is our go-to for all electrical work."' },
];

export default function Testimonials() {
    return (
        <>
            <style>{`
                              .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
                                      @media (max-width: 768px) { .testi-grid { grid-template-columns: 1fr !important; } }
                                            `}</style>
            <section id="reviews" style={{ padding: '80px 0', background: 'var(--dark)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: 12 }}>Client Reviews</div>
                    <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(32px,6vw,52px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 52 }}>
                        What Our <span style={{ color: 'var(--yellow)' }}>Clients</span> Say
                    </h2>
                    <div className="testi-grid">
                        {REVIEWS.map(r => (
                            <div key={r.name}
                                style={{ background: 'var(--dark-3)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12, padding: 28, transition: 'all .3s' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,196,0,.15)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ color: 'var(--yellow)', fontSize: 14, marginBottom: 16 }}>★★★★★</div>
                                <p style={{ color: 'var(--gray-light)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>{r.text}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: r.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontSize: 18, fontWeight: 800, color: 'var(--dark)', flexShrink: 0 }}>{r.initials}</div>
                                    <div>
                                        <div style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 700, textTransform: 'uppercase' }}>{r.name}</div>
                                        <div style={{ fontSize: 12, color: 'var(--gray)' }}>{r.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

