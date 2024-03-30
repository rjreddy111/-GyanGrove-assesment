// Write your JS code here
import {FaLocationDot} from 'react-icons/fa6'

import './index.css'

const EachUpcomingData = props => {
  const {eachDataDetails} = props
  const {cityName, imgUrl, weather, distanceKm} = eachDataDetails
  const rounded = Math.floor(parseInt(distanceKm) / 100)
  console.log(rounded)

  return (
    <li className="listy-style">
      <img src={imgUrl} />
      <p>After note nearly</p>
      <div className="details-tag">
        <div className="location-city">
          <FaLocationDot />
          <p className="cityName">{cityName}</p>
        </div>
        <div className="snow-dist">
          <p>{weather} </p>
          <p>|</p>
          <p>{rounded}</p>
        </div>
      </div>
    </li>
  )
}

export default EachUpcomingData
