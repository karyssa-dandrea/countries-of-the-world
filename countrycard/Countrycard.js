import './Countrycard.css';

export default function CountryCard({ name, iso2, continent }) {
  return (
    <div className="Blogcard">
      <img src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
      <h1>{name}</h1>
      <h2>{continent}</h2>
    </div>
  );
}
