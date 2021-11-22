const nodes = []
const selectors = [
  '.price-container',
  '.services-container',
  '.service',
  '.contact-container'
]

for (let selector of selectors) {
  const nodeList = document.querySelectorAll(selector)
  nodeList.forEach(node => nodes.push(node))
}

const checkNodes = () => {
  /*
    Se a largura da tela foi maior que 480px, ele atribui 70% da altura da tela (de cima
    para baixo). Caso seja menor, ele atribui 80%.
  */
  const trigger = window.innerWidth > 480 ? window.innerHeight * 70 / 100 : window.innerHeight * 80 / 100

  for (let node of nodes) {
    const elTop = node.getBoundingClientRect().top

    if (elTop < trigger) {
      node.classList.add('show')
    } else {
      node.classList.remove('show')
    }
  }
}

window.onload = () => document.body.classList.add('load')
window.onscroll = () => checkNodes()
checkNodes()