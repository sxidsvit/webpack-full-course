/* ---------- импорт пакетов ---------------------- */
import React from 'react'
import { render } from 'react-dom'
/* ---------- импорт библиотеки ------------------- */
import * as $ from 'jquery'
/* ---------- импорт класса ----------------------- */
import Post from '@models/Post'
/* ---------- импорт файлов ----------------------- */
import WebpackLogo from '@/assets/webpack-logo'
import '@styles/styles.css'
import '@styles/less.less'
import '@styles/scss.scss'
import '@/babel.js'
import json from './assets/json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);

/* ---------- инстанс клвсса Post ----------------- */

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String: ', post.toString());
$('pre').addClass('code').html(post.toString())

/* ----------- React ----------------------------- */

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
