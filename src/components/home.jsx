
const Home = () => {
  return (
    <main>
      <header>
        <h2>Home Page</h2>
        <nav>
          <span>Home</span> | <span>Profile</span>
        </nav>
      </header>

      <section>
        <article>
          <h3>Friend 1</h3>
          <p>Top 5</p>
        </article>
        <article>
          <h3>Friend 2</h3>
          <p>Top 5</p>
        </article>
        <article>
          <h3>Friend 3</h3>
          <p>Top 5</p>
        </article>
      </section>

      <section>
        <button>Song Selector</button>
        <button>Select Friend</button>
        <button>Recommendation Submit</button>
      </section>

      <footer>
        <h3>MEDIA PLAYER</h3>
      </footer>
    </main>
  );
};

export default Home;