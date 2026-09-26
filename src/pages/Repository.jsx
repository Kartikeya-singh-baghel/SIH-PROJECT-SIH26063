import { useState } from "react";
import articles from "../data/articles";
import SearchBar from "../components/SearchBar";

function Repository() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [topic, setTopic] = useState("All");

  const filteredArticles = articles.filter((article) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      article.title.toLowerCase().includes(searchText) ||
      article.description.toLowerCase().includes(searchText);

    const matchesType =
      type === "All" || article.type === type;

    const matchesTopic =
      topic === "All" || article.label === topic;

    return matchesSearch && matchesType && matchesTopic;
  });

  return (
    <div className="repository-page">

      <div className="repository-header">
        <p className="section-label">POLAR KNOWLEDGE</p>

        <h1>Knowledge Repository</h1>

        <p>
          Explore articles, research and information about the
          Arctic and Antarctic regions.
        </p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="filters">

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Article">Articles</option>
          <option value="Research">Research</option>
        </select>

        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="All">All Topics</option>
          <option value="Arctic">Arctic</option>
          <option value="Climate">Climate</option>
          <option value="Wildlife">Wildlife</option>
          <option value="India">Indian Polar Missions</option>
        </select>

      </div>

      <div className="repository-results">

        {filteredArticles.length > 0 ? (

          filteredArticles.map((article) => (

            <div className="article-card" key={article.id}>

              <span className="article-type">
                {article.type}
              </span>

              <h2>{article.title}</h2>

              <p className="article-topic">
                {article.label}
              </p>

              <p>{article.description}</p>

              <button className="read-button">
                Read More →
              </button>

            </div>

          ))

        ) : (

          <div className="no-results">
            <h2>No results found</h2>
            <p>Try a different search or filter.</p>
          </div>

        )}

      </div>

    </div>
  );
}

export default Repository;