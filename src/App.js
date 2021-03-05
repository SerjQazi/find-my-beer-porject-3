import './styles/sass/styles.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

// OpenBrewerDB API base URL https://api.openbrewerydb.org/breweries

    //todo: call the API using axios, params will be by_state: "" 
    //todo: (state name will be collected from the dropdown useState will keep track of it)
      //? when the user selects the state, and city we will filter by city to display the information.
      

//! in what component and through what functionality will you make the call

//! what is the informational flow of your app (i.e. how is the user's "State" selection being passed to the API call being passed to the card)

  //? useState is updated when the user selects a "satae", which then loads all the breweries for that state
    //? after the user enters a specific 

//! where and what props will you require to display all of the necessary information within each respective component

    //todo: once useState has been selected, the information we need from the object are {name, type, city, state, coutry, phoneNumber, address, postalCode, websiteURL}

      //? once we have the above information, in a component for the card (the back of the card will update the info in the original div that contains the info for the front of the card)

      //? the "cardComponent" will be the component with the most functionality in it...
        //? the props will change the <li> base on useState inside of the "cardComponent"
    
    
    // need a component that container the header including the dropdown menus

    // a main div that will display 5 cards, single row with a scroller that allows us to see the rest of the cards

    // cards will be a component that is dynamically poplated base of the state selected.

    // cards will be contained in their own divs, each card will have a front and back side to it.

    // front and back will be container (maybe inside the card component)

    // component for favorite section, when button is clicked, that card selected by ID will be stored in an object

    // that favorite object will be displayed below the main section

    // finally a footer component



function App() {
  useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://api.openbrewerydb.org/breweries',
			dataResponse: 'JSON',
			params: {
				by_state: 'new_york',
			},
		}).then(response => {
			console.log(response);
		});
	}, []);

  return (
    <div className="App">
      
    <h1>hello</h1>
    
    
    
    </div>
  );
}

export default App;
