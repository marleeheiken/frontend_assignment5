import Hero from '../components/Hero';


function HomePage() {
  return (
    <>
      <Hero 
        heroTitle={
          <>
            Welcome to <br />
            ComponentCorner
          </>
        }
        heroPara={
          <>
            Discover amazing products built <br />
            using React components
          </>
        }
        heroButton="Shop now"
        image="https://placehold.co/1200x400/667eea/ffffff?text"
      />

      <section className="why-shop">
        <h2>Why Shop with Us?</h2>
        <p>ComponentCorner is committed to providing you with the best selection, competitive prices, and a shopping experience you can trust. This is the place for you if you are looking for school or office supplies!</p>
      </section>
    </>
  );
}

export default HomePage;