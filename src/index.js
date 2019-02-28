
import React from 'react'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'

import App from './App.js'
import './index.css'
setConfig({
  ignoreSFC: true,
  pureRender: true,
})

render(<App/>, document.getElementById('root'))


if (module.hot) {
  module.hot.accept()
}