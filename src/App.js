import React from 'react'

function log(target) {
  target.RUOK = true
}

@log
class App extends React.Component {
  state = {
    name: ''    
  }
  constructor() {
    super()
    this.change = this.change.bind(this)
  }
  change(event) {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input onInput={this.change}/>
        <div>{this.state.name}</div>
        <h2>22222111122222222222</h2>  
      </div>
    )
  }
}


export default App 