import * as $ from 'jquery'

function creatAnalitycs(): object {
  let counter = 0
  let destroyed: boolean = false

  const listener = (): number => counter++

  $(document).on('click', listener)

  return {
    destroy() {
      $(document).off('click', listener)
      destroyed = true
    },

    getClicks() {
      if (destroyed) {
        return `Analytics is destroyed.Total clicks ${counter}`
      }
      return counter
    }
  }
}

window['analytics'] = creatAnalitycs()