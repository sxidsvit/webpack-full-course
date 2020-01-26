import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo'
import '@styles/styles.css'
import '@styles/less.less'
import '@styles/scss.scss'
import '@/babel.js'

// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String: ', post.toString());
$('pre').addClass('code').html(post.toString())

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);
