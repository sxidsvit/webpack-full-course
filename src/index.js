import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo'
import '@styles/styles.css'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String: ', post.toString());

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);
