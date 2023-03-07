import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Home</h1>
        </div>
    );
};

export default Home;

/*
const Home = ({
    match: {
      params: { logement },
    },
  }) => (
    // props.match.params.logement
    <Fragment>
      {logement !== "Titre de la location" ? <Navigate to="/" /> : null}
      <h1>Accueil {logement}</h1>
      <Text />
    </Fragment>
  )
  */