import React from "react";
import Navigation from "../../components/Navigation/Navigation";

const Hero = () => {
  return (
    <main className="hero">
      <Navigation />
      <div className="hero-cover">
        <h2>
          Welcome to <em>Colige</em>
        </h2>

        <h3>your lifetime task managing website</h3>
      </div>
    </main>
  );
};

export default Hero;
