import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCuontries></LoadCuontries>
    </div>
  );
}
const LoadCuontries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      <h1>World Tour</h1>
      <div>
        {
          countries.map(country => <Country country={country}></Country>)
        }
      </div>
    </div>
  )
}
const Country = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.country.name.common}</h2>
    </div>
  )
}

export default App;
