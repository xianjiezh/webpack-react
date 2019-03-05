import React from 'react'
import './index.css'
function log(target) {
  target.RUOK = true
}
class Index extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <h2>11111111111111</h2>
    )
  }
}

class Input extends React.Component {
  state = {
    name: 'my name'
  }
  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
  }
  change(event) {
    this.props.bindChange(event.target.value)
  }
  render() {
    return <input onInput={this.change}/>
  }
}

@log
class App extends React.Component {
  constructor() {
    super()
  }
  handleChange(value) {
    console.log(value)
  }
  render() {
    return (
      <div>
        <h2>vvvbbbsss</h2>  
        <Index/>
        <Input bindChange={this.handleChange}/>
      </div>
    )
  }
}


export default App 