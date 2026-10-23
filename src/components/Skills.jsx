const groups = [
  { label: 'SECURITY', items: ['IAM', 'RBAC', 'VAPT', 'Web Security', 'OSINT', 'Zero Trust', 'Threat Modeling'] },
  { label: 'NETWORKING', items: ['TCP/IP', 'DNS', 'HTTP/S', 'Firewalls', 'VPN'] },
  { label: 'TOOLS', items: ['Kali Linux', 'Nmap', 'Burp Suite', 'Wireshark', 'Docker', 'Keycloak'] },
  { label: 'PROGRAMMING', items: ['Python', 'JavaScript', 'Node.js', 'Express.js'] },
];

const Skills = () => (
  <div className="section" style={{ background: 'var(--bg-1)' }}>
    <div className="container section-pad">
      <div className="section-label">SKILLS</div>
      <h2 className="h2" style={{ marginBottom: '2.5rem' }}>Technical capabilities.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: '1.2rem' }}>
        {groups.map((g) => (
          <div key={g.label} className="card" style={{ padding: '1.6rem', borderTop: '2px solid var(--red)' }}>
            <div className="mono" style={{ color: '#fff', letterSpacing: '.18em', fontSize: '.85rem', marginBottom: '1.1rem' }}>{g.label}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.55rem' }}>
              {g.items.map((i) => <span key={i} className="tag" style={{ fontSize: '.84rem', color: 'var(--text)' }}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Skills;