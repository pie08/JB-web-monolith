import business from "../business.json";

const b = business;
const tel = b.phone ? b.phone.replace(/[^\d+]/g, "") : "";

export default function Home() {
  return (
    <>
      <header className="top">
        <div className="wrap row">
          <img className="logo" src={b.logoUrl} alt={`${b.name} logo`} />
          <nav aria-label="Sections">
            <a href="#services">Services</a>
            {b.reviews.length > 0 && <a href="#reviews">Reviews</a>}
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <h1>{b.copy.heroHeadline}</h1>
            <p className="lead">{b.copy.heroSub}</p>
            <div className="cta">
              {tel ? (
                <a className="btn" href={`tel:${tel}`}>Call {b.phone}</a>
              ) : (
                <a className="btn" href="#contact">Call for Details</a>
              )}
              <a className="btn ghost" href="#contact">Request a Quote</a>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="wrap">
            <p>{b.copy.intro}</p>
          </div>
        </section>

        <section id="services" className="block">
          <div className="wrap">
            <h2>{b.copy.servicesIntro || "Services"}</h2>
            <ul className="services">
              {b.services.map((s) => (
                <li key={s.name}>
                  <h3>{s.name}</h3>
                  {s.description && <p>{s.description}</p>}
                  <p className="price">{s.price ? s.price : "Call for Details"}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {b.photos.length > 0 && (
          <section className="block alt" aria-label="Our work">
            <div className="wrap gallery">
              {b.photos.map((p) => (
                <img key={p.url} src={p.url} alt={p.alt || `${b.name} work`} loading="lazy" />
              ))}
            </div>
          </section>
        )}

        {b.reviews.length > 0 && (
          <section id="reviews" className="block">
            <div className="wrap">
              <h2>What customers say</h2>
              <div className="reviews">
                {b.reviews.map((r) => (
                  <blockquote key={r.text}>
                    <p>{r.text}</p>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="contact" className="block alt">
          <div className="wrap">
            <h2>Request a Quote</h2>
            <p>
              {tel ? (
                <>Call <a href={`tel:${tel}`}>{b.phone}</a> and tell us what you need.</>
              ) : (
                <>Call for Details.</>
              )}
            </p>
            {b.email && (
              <p><a href={`mailto:${b.email}`}>{b.email}</a></p>
            )}
            <p className="muted">{b.name}, {b.city}</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">{b.name}</div>
      </footer>
    </>
  );
}
