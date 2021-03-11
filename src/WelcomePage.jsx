import { IoBeerOutline } from 'react-icons/io5';

function WelcomePage () {
  return (
    <div className='welcomePage'>
      <p className='welcomeTxt'>T2Please select a State to see your list of Breweries</p>
      <div className='welcomeIcon'>
        <li className='iconOne'><IoBeerOutline /></li>
        <li className='iconTwo'><IoBeerOutline /></li>
        <li className='iconThree'><IoBeerOutline /></li>
      </div>

    </div>
  )
}

export default WelcomePage;