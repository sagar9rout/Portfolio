import { FIELD_NOTES_URL } from '../data/labs';

/* IMAGE_ASSET: ronin-field-notes-samurai.jpg */
// Matches the file in src/assets by name, whatever its extension (.jpg / .jpeg / .png / .webp).
// If the file is missing the panel still renders (red gradient) instead of breaking the build.
const art = Object.values(
  import.meta.glob('../assets/ronin-field-notes-samurai.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
)[0];

const focusAreas = ['Web Exploitation', 'Digital Forensics', 'General Security Skills', 'Reverse Engineering'];

const HandsOn = () => (
  <div className="section">
    <div className="container section-pad">
      <div className="section-label">HANDS-ON SECURITY</div>

      <article className="fn-panel" aria-labelledby="fn-title">
        <div className="fn-body">
          <h2 id="fn-title" className="h2">SECURITY FIELD NOTES</h2>
          <p className="lead">
            Practical investigations, CTF write-ups, security testing methodology, evidence, and lessons learned.
          </p>
          <ul className="fn-focus" aria-label="Focus areas">
            {focusAreas.map((f) => <li key={f} className="tag">{f}</li>)}
          </ul>
          <div>
            <a className="btn btn-primary fn-link" href={FIELD_NOTES_URL} target="_blank" rel="noreferrer noopener">
              EXPLORE FIELD NOTES →<span className="sr-only"> (opens the GitHub repository in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="fn-art" aria-hidden="true">
          {art && <img src={art} alt="" loading="lazy" />}
        </div>
      </article>
    </div>
  </div>
);
export default HandsOn;