import {Component} from 'react'
import {FaArrowRight} from 'react-icons/fa'

import EachRecomendedCard from '../EachRecomendedCard'
import EachUpcomingData from '../EachUpcomingData'
import './index.css'

class Home extends Component {
  state = {recomendedData: [], upComingData: []}

  componentDidMount = () => {
    this.recomendedData()
  }

  recomendedData = async () => {
    const url =
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({recomendedData: data.events})

    const url2 =
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming'
    const dataRecived = await fetch(url2)
    const data2 = await dataRecived.json()

    this.setState({upComingData: data2.events})
  }

  render() {
    const {recomendedData, upComingData} = this.state
    console.log(upComingData)

    return (
      <div className="container-top-nav">
        <div className="topContainer">
          <div>
            <h1>BookUsNow</h1>
            <p>Mumbai,India &gt;</p>
          </div>
          <div>
            <p>Search</p>
            <p>heart</p>
            <p>Profile</p>
          </div>
        </div>
        <ul className="unordered-navigation-list">
          <li className="list-items">Live Shows</li>
          <li className="list-items">Streams</li>
          <li className="list-items">Movies</li>
          <li className="list-items">Plays</li>
          <li className="list-items">Events</li>
          <li className="list-items">Sports</li>
          <li className="list-items">Activities</li>
        </ul>
        <div className="background-image">
          <h1 className="heading">
            Discover Exciting Events Happening Near You - Stay Tuned for
            Updates!
          </h1>
          <p className="decription">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum,ac{' '}
          </p>
          <div className="recomended-shows">
            <p>Recomended Shows --&gt;</p>
            <p>See all</p>
          </div>

          <ul className="recomemded-list-slide">
            {recomendedData.map(eachData => (
              <EachRecomendedCard eachDataDetails={eachData} />
            ))}
          </ul>
        </div>
        <div className="more-events-container">
          <div className="more-events-style">
            <p>Upcoming events</p>
            <FaArrowRight className="arrow" size={15} />
          </div>
          <p>See all</p>
        </div>
        <ul>
          {upComingData.map(eachData => (
            <EachUpcomingData eachDataDetails={eachData} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
