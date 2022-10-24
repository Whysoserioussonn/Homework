import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Container, Dimmer, Loader } from 'semantic-ui-react';
import './App.css';
import Films from './components/Films';
import Home from './components/Home';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';


function App() {
const [people, setPeople]= useState([]);
const [planets, setPlanets]= useState ([]);
const [starships, setStarships] = useState([]);
const [vehicles, setVehicles] = useState([]);
const [species, setSpecies] = useState([]);
const [films, setFilms] = useState([]);
const [loading, setLoading]= useState(true); // variable to keep track of data when we are actually fetching from the api
                                            // indicate some loading so we know we are fetching data

// next we set data fetch for people by setting up the UseEffect, pass in a callback function, then pass in an empty dependency array because we only want to call  once it mounts to the DOM so only gonna be called one time
//inside callback function, do an async function to fetch people
useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

//lets go to next one, data fetching of planets
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
// lets do one more, data fecthing for starships
async function fetchStarships() {
  let res = await fetch('https://swapi.dev/api/starships/?format=json');
  let data = await res.json();
  setStarships(data.results);
  setLoading(false);
}
// lets do one more, data fecthing for vehicles
async function fetchVehicles() {
  let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
  let data = await res.json();
  setVehicles(data.results);
  setLoading(false);
}
// lets do one more, data fecthing for species
async function fetchSpecies() {
  let res = await fetch('https://swapi.dev/api/species/?format=json');
  let data = await res.json();
  setSpecies(data.results);
  setLoading(false);
}
// lets do one more, data fecthing for films
async function fetchFilms() {
  let res = await fetch('https://swapi.dev/api/films/?format=json');
  let data = await res.json();
  setFilms(data.results);
  setLoading(false);
}



//down here, we will call the functions
fetchPeople();
fetchPlanets();
fetchStarships();
fetchVehicles();
fetchSpecies();
fetchFilms();


}, [])

//down here we do the console.log to see if we get the data back, 1st param can name whatever you want
// then inspect and look under console tab for the array 'datawata' and see if data shows
//can comment out after data shows, next thing we do is create the components! start with Navbar.js
//console.log('datawata' , people);


// erase contents of return except for div and insert a phrase to see react page display phrase
// after creating Navbar.js component, come back here and replace your phrase with the '<Navbar />' component
// after Navbar displays, create the other components  - Home.js, Planets.js , People.js, and Starships.js
  return (
    
    <>
    <Router>
   <Navbar />
   <Container>
    {loading ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ): (
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/people' element={<People data={people}/>}/>
      <Route exact path='/planets' element={<Planets data={planets}/>}/>
      <Route exact path='/starships' element={<Starships data={starships}/>}/>
      <Route exact path='/vehicles' element={<Vehicles data={vehicles}/>}/>     
      <Route exact path='/species' element={<Species data={species}/>}/>     
      <Route exact path='/films' element={<Films data={films}/>}/>          
    </Routes>
    )}    
   </Container>
   </Router>   
    </>
  );
}

export default App;


// after creating components, import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; so we click on menu links, it will navigate to those components