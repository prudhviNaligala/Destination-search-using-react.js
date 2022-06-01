// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)

    const {destinationsList} = this.props

    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="home-container">
        <div className="destination-search">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="img"
            />
          </div>
          <ul className="destination-list">
            {searchResult.map(eachUser => (
              <DestinationItem list={eachUser} key={eachUser.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
