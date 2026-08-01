import { aboutParagraphs, site, socialLinks } from '../data/content'

export function About() {
  return (
    <article className="article">
      <header className="about-intro">
        <img
          className="about-photo"
          src={site.photoUrl}
          alt={`${site.name}`}
          width={800}
          height={800}
          sizes="(min-width: 64rem) 10rem, (min-width: 40rem) 8rem, 5.5rem"
          decoding="async"
          fetchPriority="high"
        />
        <div className="about-intro-text">
          <h1 className="page-title">{site.name}</h1>
          <p className="page-subtitle">{site.title}</p>
        </div>
      </header>

      <div className="prose">
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.map((part, partIndex) =>
              part.href ? (
                <a
                  key={partIndex}
                  href={part.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  {part.text}
                </a>
              ) : (
                <span key={partIndex}>{part.text}</span>
              ),
            )}
          </p>
        ))}
      </div>

      <div className="social-row">
        {socialLinks.flatMap((link, index) => {
          const anchor = (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'me noopener noreferrer'}
              className="social-link"
            >
              {link.label}
            </a>
          )
          if (index === 0) return [anchor]
          return [
            <span key={`${link.label}-sep`} className="social-sep">
              //
            </span>,
            anchor,
          ]
        })}
      </div>
    </article>
  )
}
