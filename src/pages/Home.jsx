import React from "react";
import Banner from "../components/Banner";
import CardsList from "../components/CardsList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        text="Chez vous, partout et ailleurs"
        className="bannerhomepage"
      />
      <CardsList />
      <Footer />
    </div>
  );
};

export default Home;
