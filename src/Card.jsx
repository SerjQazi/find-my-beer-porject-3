import { FaGlobeAmericas } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { GiModernCity, GiZipper } from 'react-icons/gi';
import { FiPhone } from 'react-icons/fi';
import { TiBeer } from 'react-icons/ti';
import { IoIosGlobe } from 'react-icons/io';
import { SiGooglemaps } from 'react-icons/si';
import { IoBeerOutline } from 'react-icons/io5';

//todo: the destructured info is passes into this component as props, this is returns the <div> and <li> needed to display the card.

//todo: check to see if API returns a property, if not... don't display the li

function Card({type, name, address, postal, phone, city, state,country, url, tabIndex}) {
  return (
    <div className="mainContainer">
      <div tabIndex={tabIndex + 1} className="cardContainer">
        <div className="frontOfCard">
          <IoBeerOutline className="beerBackground" />
          <h2>{name}</h2>

          <ul>
            {address && (
              <li className="address">
                <span className="icon">
                  <GrMapLocation />
                </span>
                <span tabIndex={tabIndex}>{address}</span>
              </li>
            )}

            {city && (
              <li>
                <span className="icon">
                  <GiModernCity />
                </span>
                <span tabIndex={tabIndex}>{city}</span>
              </li>
            )}

            {state && (
              <li>
                <span className="icon">
                  <SiGooglemaps />
                </span>
                <span tabIndex={tabIndex}>{state}</span>
              </li>
            )}

            {country && (
              <li>
                <span className="icon">
                  <FaGlobeAmericas />
                </span>
                <span tabIndex={tabIndex}>{country}</span>
              </li>
            )}
          </ul>
        </div>
        {/*end of frontOfCard */}

        <div className="backOfCard">
          <IoBeerOutline className="beerBackground" />
          <ul>
            {type && (
              <li>
                <span className="icon">
                  <TiBeer />
                </span>
                <span tabIndex={tabIndex + 1}>{type.toUpperCase()}</span>
              </li>
            )}

            {address && (
              <li>
                <span className="icon">
                  <GrMapLocation />
                </span>
                <span tabIndex={tabIndex + 1}>{address}</span>
              </li>
            )}

            {postal && (
              <li>
                <span className="icon">
                  <GiZipper />
                </span>
                <span tabIndex={tabIndex + 1}>{postal}</span>
              </li>
            )}

            {phone && (
              <li>
                <span className="icon">
                  <FiPhone />
                </span>
                <span tabIndex={tabIndex + 1}>{phone}</span>
              </li>
            )}

            {url && (
              <li>
                <span className="icon">
                  <IoIosGlobe />
                </span>
                <span className="url">
                  <a tabIndex={tabIndex + 1} href={url}>
                    Website
                  </a>
                </span>
              </li>
            )}
          </ul>
        </div>
        {/*end of backOfCard */}
      </div>
      {/*end of cardContainer*/}
    </div>
  );
}

export default Card;