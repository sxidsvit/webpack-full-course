async function start() {
  return await Promise.resolve('async was working')
}

start().then(console.log)

const unsed = 42

class Utill {
  static id = Date.now()
}

console.log('Utill.id: ', Utill.id)
console.log('unsed: ', unsed);

import('lodash').then(_ => {
  console.log('lodash ', _.random(0, 42, true))
})