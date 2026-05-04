import { Link } from "react-router-dom";

const cities = [
  ["Norfolk", "/locations/norfolk-va"],
  ["Virginia Beach", "/locations/virginia-beach-va"],
  ["Chesapeake", "/locations/chesapeake-va"],
  ["Portsmouth", "/locations/portsmouth-va"],
  ["Hampton", "/locations/hampton-va"],
  ["Newport News", "/locations/newport-news-va"],
  ["Suffolk", "/locations/suffolk-va"],
];

export default function CityLinks() {
  return (
    <div className="city-links">
      {cities.map(([city, path]) => (
        <Link key={path} to={path}>
          {city}
        </Link>
      ))}
    </div>
  );
}