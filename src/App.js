import './App.css';
import { getCountries } from './countries';
import { useState, useEffect } from 'react';
import CountryCard from './countrycard/Countrycard';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((c) => {
      return (
        c.name.toLowerCase().includes(query) && (c.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <div className="App">
      <h1> Country List</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="All">All</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="SouthAmerica">South America</option>
        <option value="NorthAmerica">North America</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
      </select>
      <div className="flags">
        {filterCountries().map((c) => (
          <CountryCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}

export default App;
