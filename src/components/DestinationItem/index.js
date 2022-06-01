// Write your code here

import './index.css'

const DestinationItem = props => {
  const {list} = props
  const {name, imgUrl} = list
  return (
    <li className="image-container">
      <img className="images" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
