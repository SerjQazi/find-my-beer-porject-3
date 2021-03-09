import Statenames from  './Statenames'
import { IoBeer } from 'react-icons/io5';

function Header(props) {
  //todo: 
  return (
    <div className="headerContainer">
      <h1>
        Find My Beer
        <IoBeer />
      </h1>
      <form action=" ">
        <div className="selectContainer">
          <label htmlFor="selectState"></label>
          <select
            onChange={props.onChange}
            defaultValue=""
            name="selectState"
            id="selectState"
          >
            <option value="" disabled>
              Choose State
            </option>
            <Statenames />
          </select>
        </div>
      </form>
    </div>
  );
}

export default Header;
