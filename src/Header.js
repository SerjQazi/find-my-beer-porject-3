function Header() {
  return (
    <div className="headerContainer">
      <h1>Find My Beer</h1>
      <form action=" ">
        <div className="selectContainer">
          <label htmlFor="selectState">CHOOSE YOUR STATE</label>
          <select name="selectState" id="selectState">
            <option value="newYork">New York</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Header;
