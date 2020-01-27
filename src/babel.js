async function start() {
  return await Promise.resolve('async was working')
}

start().then(console.log)

class Utill {
  static id = Date.now()
}

console.log('Utill.id: ', Utill.id)