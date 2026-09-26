import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">❄ POLAR SCIENCE • EXPLORATION • DISCOVERY</p>

          <h1>
            Explore the
            <span> Polar World</span>
          </h1>

          <p className="hero-description">
            Discover polar research, scientific knowledge, research stations,
            wildlife and stories from the Arctic and Antarctic regions.
          </p>

          <div className="hero-buttons">
           <Link to="/repository" className="primary-btn">
  Explore Repository →
</Link>

<Link to="/map" className="secondary-btn">
  Explore Polar Map →
</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>
          <div className="ice-card">
            <div className="ice-icon">❄</div>
            <h3>POLARIS</h3>
            <p>Connecting science with exploration.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <p className="section-label">DISCOVER POLAR SCIENCE</p>
        <h2>Everything Polar, In One Place</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Knowledge Repository</h3>
            <p>
              Explore articles, research and information about the Arctic,
              Antarctic, climate and wildlife.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Interactive Polar Map</h3>
            <p>
              Discover research stations and important locations across the
              polar regions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎥</div>
            <h3>Media & Outreach</h3>
            <p>
              Stay connected with polar news, images, videos and scientific
              updates.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom Banner */}
      <section className="explore-banner">
        <div>
          <p className="section-label">THE POLAR REGIONS AWAIT</p>
          <h2>Discover. Learn. Explore.</h2>
        </div>

        <button className="primary-btn">Start Exploring →</button>
      </section>

    </div>
  );
}

export default Home;