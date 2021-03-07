import { FaGlobeAmericas } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { GiModernCity, GiZipper } from 'react-icons/gi';
import { FiPhone } from 'react-icons/fi';
import { TiBeer } from 'react-icons/ti';
import { IoIosGlobe } from 'react-icons/io';
import { SiGooglemaps } from 'react-icons/si';


function Card({type, name, address, postal, phone, city, state,country, url}) {
  return (
    <div className="cardContainer">
      <h2>{name}</h2>
      <div className="frontOfCard">
        <ul>
          <li>
            <span className="icon">
              <GrMapLocation />
            </span>
            {address}
          </li>

          <li>
            <span className="icon">
              <GiModernCity />
            </span>
            {city}
          </li>

          <li>
            <span className="icon">
              <SiGooglemaps />
            </span>
            {state}
          </li>

          <li>
            <span className="icon">
              <FaGlobeAmericas />
            </span>
            {country}
          </li>
        </ul>
      </div>

      <div className="backOfCard">
        <ul>
          <li></li>
          <li>
            <span className="icon">
              <TiBeer />
            </span>{' '}
            {type.toUpperCase()}
          </li>

          <li>
            <span className="icon">
              <GrMapLocation />
            </span>
            {address}
          </li>

          <li>
            <span className="icon">
              <GiZipper />
            </span>
            {postal}
          </li>

          <li>
            <span className="icon">
              <FiPhone />
            </span>
            {phone}
          </li>

          <li className="url">
            <span className="icon">
              <IoIosGlobe />
            </span>
            <a href={url}>Website</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;