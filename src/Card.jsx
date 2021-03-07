function Card({type, name, address, postal, phone, city, state,country, url}) {
  return (
    <div className="cardContainer">
    <h2>{name}</h2>
      <div className="frontOfCard">
        <ul>
          <li>Address: {address}</li>
          <li>City: {city}</li>
          <li>State: {state}</li>
          <li>Country: {country}</li>
        </ul>
        </div>

      <div className="backOfCard">
        <ul>
          <li>Address: {address}</li>
          <li>Postal:{postal}</li>
          <li>Phone:{phone}</li>
          <li className="url">
            <a href={url}>Visit our website</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;