import './Countrycard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="Blogcard">
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/80x60/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
