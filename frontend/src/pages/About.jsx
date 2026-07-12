import React from "react";

const stats = [
  { label: "Products Listed", value: "500+" },
  { label: "Happy Customers", value: "10K+" },
  { label: "Categories", value: "20+" },
  { label: "Cities Served", value: "50+" },
];

const values = [
  {
    title: "Quality First",
    desc: "Every product on ShopNest is vetted for quality before it reaches our catalog.",
  },
  {
    title: "Fair Pricing",
    desc: "We work directly with sellers to cut out middlemen and pass the savings to you.",
  },
  {
    title: "Fast & Reliable",
    desc: "From checkout to delivery, we optimize every step so orders arrive on time.",
  },
  {
    title: "Customer Care",
    desc: "Real support from real people — we're here before, during, and after your purchase.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
        }

        .about-hero-wrap {
          margin: 2rem 2rem 0;
        }

        .about-hero {
          border-radius: 1rem;
          padding: 3rem 3rem;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 60%, #4a2a0a 100%);
        }

        .about-eyebrow {
          color: #fb923c;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .about-title {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .about-hero p {
          color: #d1d5db;
          font-size: 1.125rem;
          max-width: 640px;
          line-height: 1.6;
        }

        .about-stats {
          max-width: 1152px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .about-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          background: #171717;
          border: 1px solid #262626;
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.2s ease;
        }

        .stat-card:hover {
          border-color: rgba(249, 115, 22, 0.5);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #fb923c;
        }

        .stat-label {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .about-mission {
          max-width: 1152px;
          margin: 0 auto;
          padding: 2rem 2rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .about-mission {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-mission h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .about-mission p {
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .mission-card {
          background: #171717;
          border: 1px solid #262626;
          border-radius: 1rem;
          padding: 2rem;
        }

        .mission-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fb923c;
          margin-bottom: 0.5rem;
        }

        .mission-card p {
          color: #9ca3af;
          line-height: 1.7;
          margin: 0;
        }

        .about-values {
          max-width: 1152px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .about-values h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .value-card {
          background: #171717;
          border: 1px solid #262626;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.2s ease;
        }

        .value-card:hover {
          border-color: rgba(249, 115, 22, 0.5);
        }

        .value-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #fb923c;
          margin-bottom: 0.5rem;
        }

        .value-card p {
          color: #9ca3af;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        .about-cta-wrap {
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 2rem 5rem;
        }

        .about-cta {
          border-radius: 1rem;
          padding: 3rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, #2a1a0a 0%, #4a2a0a 100%);
        }

        .about-cta h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .about-cta p {
          color: #d1d5db;
          margin-bottom: 1.5rem;
        }

        .about-cta-btn {
          display: inline-block;
          background: #f97316;
          color: #000;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .about-cta-btn:hover {
          background: #ea580c;
        }
      `}</style>

      {/* Hero */}
      <div className="about-hero-wrap">
        <div className="about-hero">
          <p className="about-eyebrow">Our Story</p>
          <h1 className="about-title">About ShopNest</h1>
          <p>
            We started ShopNest with a simple idea: online shopping should
            feel effortless, honest, and a little delightful. Today we
            connect thousands of shoppers with the products they love — at
            prices that make sense.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="about-mission">
        <div>
          <h2>Our Mission</h2>
          <p>
            ShopNest exists to make discovering and buying great products as
            simple as possible. We built our platform on the MERN stack to
            keep things fast, secure, and reliable — so you can focus on
            shopping, not loading screens.
          </p>
          <p>
            Whether you're browsing featured picks or hunting for something
            specific, we're constantly improving the experience based on
            what our community tells us matters most.
          </p>
        </div>
        <div className="mission-card">
          <h3>Why "ShopNest"?</h3>
          <p>
            A nest is where things are gathered, cared for, and kept safe.
            That's exactly what we wanted our platform to feel like — a
            trusted home for every product you're looking for.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="about-values">
        <h2>What We Stand For</h2>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta-wrap">
        <div className="about-cta">
          <h2>Ready to explore ShopNest?</h2>
          <p>Discover the best products at unbeatable prices.</p>
          <a href="/shop" className="about-cta-btn">
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
