import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo'
import '@styles/styles.css'
import '@styles/less.less'
import '@styles/scss.scss'
import '@/babel.js'
import React from 'react'
import { render } from 'react-dom'

// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String: ', post.toString());
$('pre').addClass('code').html(post.toString())

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>This block has been stylized in LESS</h2>
    </div>
    <div className="box2">
      <h2>This block has been stylized in SASS</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);
