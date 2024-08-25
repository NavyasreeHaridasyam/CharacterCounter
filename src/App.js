import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from './components/UserInput'
import './App.css'

class App extends Component {
  state = {searchInput: '', result: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitInput = () => {
    const {searchInput} = this.state

    const userNewData = {
      id: v4(),
      userInput: searchInput,
      lengthOfInput: searchInput.length,
    }

    this.setState(prevState => ({
      result: [...prevState.result, userNewData],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, result} = this.state

    return (
      <div className="bg-container">
        <div className="result-container">
          <div className="heading-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {result.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          ) : (
            <ul>
              {result.map(eachItem => (
                <UserInput key={eachItem.id} userDetails={eachItem} />
              ))}
            </ul>
          )}
        </div>
        <div className="right-side-container">
          <h1 className="input-heading">Character Counter</h1>
          <form className="input-container">
            <input
              type="text"
              value={searchInput}
              className="input"
              onChange={this.onChangeInput}
              placeholder="Enter the characters here"
            />
            <button
              type="button"
              className="button"
              onClick={this.onSubmitInput}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
