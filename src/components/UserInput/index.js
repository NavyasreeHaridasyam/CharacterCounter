import './index.css'

const UserInput = props => {
  const {userDetails} = props
  const {userInput, lengthOfInput} = userDetails

  return (
    <li className="list-item">
      <p className="user-details">
        {userInput} : {lengthOfInput}
      </p>
    </li>
  )
}

export default UserInput
