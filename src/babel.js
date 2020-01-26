async function start() {
  return await Promise.resolve('async was working')
}

start().then(console.log)