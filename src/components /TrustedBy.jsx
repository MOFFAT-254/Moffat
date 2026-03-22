const BRANDS = ['Kenya Power', 'KPLC', 'Safaricom HQ', 'Nairobi County', 'KenGen'];

export default function TrustedBy() {
  return (
      <div style={{
            padding: '36px 0',
                  borderTop: '1px solid rgba(255,255,255,.06)',
                        borderBottom: '1px solid rgba(255,255,255,.06)',
                            }}>
                                  <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
                                          <span style={{ fontSize: 12, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600, whiteSpace: 'nowrap' }}>
                                                    Trusted By
                                                            </span>
                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
                                                                              {BRANDS.map(name => (
                                                                                          <span key={name} style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,.25)', textTransform: 'uppercase', letterSpacing: 2 }}>
                                                                                                        {name}
                                                                                                                    </span>
                                                                                                                              ))}
                                                                                                                                      </div>
                                                                                                                                            </div>
                                                                                                                                                </div>
                                                                                                                                                  );
                                                                                                                                                  }