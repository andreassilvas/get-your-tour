
import { COUNTRY_CONTENT } from "../../data.js";
import PropTypes from 'prop-types';
import Section from "../Section";
import "./CountryContents.css";

function CountryContent({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default function CountryContents() {
  return (
    <Section id="country-content">
      <ul>
        {COUNTRY_CONTENT.map((countryItems) => (
          <CountryContent key={countryItems.title} {...countryItems} />
        ))}
      </ul>
    </Section>
  );
}

CountryContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
