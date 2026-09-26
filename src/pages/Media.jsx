const mediaItems = [
  {
    title: "Life in Antarctica",
    type: "VIDEO",
    description:
      "Explore life, research and scientific activities in Antarctica."
  },
  {
    title: "Indian Polar Research",
    type: "NEWS",
    description:
      "Discover India's contribution to polar science and research."
  },
  {
    title: "Understanding Polar Climate",
    type: "ARTICLE",
    description:
      "Learn how polar regions influence Earth's climate system."
  },
  {
    title: "Antarctic Wildlife",
    type: "MEDIA",
    description:
      "Explore the unique wildlife and ecosystems of Antarctica."
  }
];

function Media() {
  return (
    <div className="media-page">

      <div className="media-header">
        <p className="section-label">POLAR MEDIA & OUTREACH</p>

        <h1>Discover What's Happening</h1>

        <p>
          Explore polar news, scientific updates, media and stories.
        </p>
      </div>

      <div className="media-grid">

        {mediaItems.map((item) => (

          <div className="media-card" key={item.title}>

            <div className="media-image">
              ❄
            </div>

            <div className="media-content">

              <span>{item.type}</span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <button>
                Explore →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Media;