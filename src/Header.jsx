import Statenames from  './Statenames'

function Header(props) {
  return (
    <div className="headerContainer">
      <h1>Find My Beer</h1>
      <form action=" ">
        <div className="selectContainer">
          <label htmlFor="selectState">CHOOSE YOUR STATE</label>
          <select onChange={props.onChange} defaultValue='' name="selectState" id="selectState">
            <option value="" disabled>Select a State</option>
            <Statenames />
          </select>
        </div>
      </form>
    </div>
  );
}

export default Header;
