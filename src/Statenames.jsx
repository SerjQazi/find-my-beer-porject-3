import React from "react";

function Statenames() {
  const stateNames = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Guam',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Palau',
	'Pennsylvania',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
];
return (
    stateNames.map ((names) => {
      return(
        console.log(names)
					<div className="selectContainer">
						<label htmlFor="selectState">CHOOSE YOUR STATE</label>
						<select onChange={props.onChange} defaultValue='' name="selectState" id="selectState">
							<option value="" disabled>PickOne</option>
							<option value={props.name}>New York</option>
							<option value="Alabama">Alabama</option>
						</select>
					</div>
					)
				})
			)
}

export default Statenames