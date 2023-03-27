// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {current: 0, borderbutton: false}

  onIncrement = () => {
    // const {current} = this.state
    this.setState(prevState => ({
      current: prevState.current + Math.floor(Math.random() * 100),
      borderbutton: true,
    }))
  }

  render() {
    const {current, borderbutton} = this.state
    console.log(borderbutton)
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">Count {current}</h1>
          {current % 2 === 0 ? (
            <p className="description">Count is Even</p>
          ) : (
            <p className="description">Count is Odd</p>
          )}

          <div>
            <button
              onClick={this.onIncrement}
              className={`button ${borderbutton ? 'dark' : null}`}
              type="button"
            >
              Increment
            </button>
          </div>
          <p className="note">*Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
