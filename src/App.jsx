import { useEffect, useState } from 'react';
import './styles/styles.scss';
import axios from 'axios';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import WelcomePage from './WelcomePage';

function App() {
  //todo: using a useState store the data from the API (brewery)
  //todo: using another useState store the user choice and pass that into the API (state)

  const [brewery, setBrewery] = useState([]);
  const [state, setState] = useState('');

  //todo: call the API using axios, params will be by_state: "" when the user selects a state from the dropdown menu
  //todo: (state name will be collected from the dropdown useState will keep track of it)
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.openbrewerydb.org/breweries',
      dataResponse: 'JSON',
      params: {
        by_state: state,
      },
    })
      .then((response) => {
        response = response.data;
        setBrewery(response);
      })
      //todo: using .cathc() to output an error message to the user if the API is not working properly
      .catch((error) => {
        console.log(error);
      });
    //todo: update the params of by_state using the useState of "state"
  }, [state]);

  return (
    <>
    <Header onChange={(e) => setState(e.target.value)} />
      <div className="wrapper">
        {/**when the user has selected something from the dropdown, get the value from the dropdown and (update) setState */}

        {/* a mainContentContainer that contains all the cards that will be displayed on the page */}
        <div className="mainContentContainer">
          {/**before the user has made a selection, disply a message for the user to make a selection 
           * using a ternary operator, display the initial load message that asks the user to pick a state*/}
          {!state
            ? <WelcomePage />
            : brewery.map((breweries) => {
              //todo: after mapping thru the data received from the API, destructure the info needed
              const {
                id,
                brewery_type,
                name,
                street,
                postal_code,
                phone,
                city,
                state,
                country,
                website_url,
              } = breweries;

              return (
                <Card
                  key={id}
                  type={brewery_type}
                  name={name}
                  address={street}
                  postal={postal_code}
                  phone={phone}
                  city={city}
                  state={state}
                  country={country}
                  url={website_url}
                />
              );
            })}
        </div> {/**end of mainContentContainer */}
      </div> {/**end of wrapper div */}
        <Footer />
    </>
  );
}

export default App;
