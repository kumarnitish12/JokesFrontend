import "./App.css";

function App() {
  const places = [
    "Bali, Indonesia",
    "Paris, France",
    "Manali, India",
    "Santorini, Greece",
    "Dubai, UAE",
    "Goa, India",
    "Tokyo, Japan",
    "New York, USA",
    "Rome, Italy",
    "Maldives",
    "Sydney, Australia",
    "Cape Town, South Africa",
    "Iceland",
    "Switzerland Alps",
    "Thailand Beaches"
  ];

  const blogs = places.map((place, i) => ({
    id: i + 1,
    title: place,
    content:
      "A breathtaking destination filled with culture, beauty, and unforgettable experiences 🌍✈️",
    image: `https://picsum.photos/500/300?random=${i + 1}`,
  }));

  return (
    <div className="app">

      {/* VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="container">
        <h1 className="heading">🌍 Travel Blog</h1>
        <p className="subheading">Explore the world through stories</p>

        <div className="grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <img src={blog.image} alt={blog.title} />
              <div className="card-content">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <button>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;