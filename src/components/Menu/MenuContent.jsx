import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { COUNTRY_DESCRIPTION } from "../../data.js";
import MenuButton from "./MenuButtons.jsx";
import Section from "../Section.jsx";
import MenuTabs from "./MenuTabs.jsx";
import "./MenuContent.css";

function CountryDetails({selectedCountry}){
  const countryData = useMemo(() => COUNTRY_DESCRIPTION[selectedCountry], [selectedCountry]);

  if(!countryData) return null;

  return(
    <div id="tab-content">
          <h3>{countryData.title}</h3>
          <p>{countryData.description}</p>
          <div id="tab-info">
            <div id="tab-images">
              <img
                src={countryData.image}
                alt={countryData.title}
              />
            </div>
            <div id="tab-flags">
              <img
                src={countryData.flag}
                alt={countryData.title}
              />
            </div>
            <div id="tab-country-info">
            <p>{countryData.capital}</p>
            <p>{countryData.currency}</p>
            <p>{countryData.officialLanguages}</p>
            </div>
          </div>
        </div>
  )
}
//missing in props validationeslintreact/prop-types
CountryDetails.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
};

export default function ExamplesContent() {
  const [selectedCountry, setSelectedCountry] = useState();

  function handleonSelectButton(selectedButton) {
    setSelectedCountry(selectedButton);
  }
  return (
    <Section id="countries" title="countries">
      {!selectedCountry && <p>More about the countries</p>}

      <MenuTabs
        WrapperElements="menu"
        buttons={
          <>
            <MenuButton
              isSelected={selectedCountry === "morocco"}
              onSelectButton={() => handleonSelectButton("morocco")}
            >
              Morocco
            </MenuButton>
            <MenuButton
              isSelected={selectedCountry === "montenegro"}
              onSelectButton={() => handleonSelectButton("montenegro")}
            >
              Montenegro
            </MenuButton>
            <MenuButton
              isSelected={selectedCountry === "albania"}
              onSelectButton={() => handleonSelectButton("albania")}
            >
              Albania
            </MenuButton>
            <MenuButton
              isSelected={selectedCountry === "slovenia"}
              onSelectButton={() => handleonSelectButton("slovenia")}
            >
              Slovenia
            </MenuButton>
          </>
        }
      />
      {selectedCountry && (<CountryDetails selectedCountry={selectedCountry}></CountryDetails>)}
    </Section>
  );
}
