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
  const triggerBottom = window.innerWidth > 480 ? window.innerHeight * 70 / 100 : window.innerHeight * 80 / 100

  console.log(triggerBottom)

  for (let node of nodes) {
    const elTop = node.getBoundingClientRect().top

    if (elTop < triggerBottom) {
      node.classList.add('show')
    } else {
      node.classList.remove('show')
    }
  }
}

window.onload = () => document.body.classList.add('load')
window.onscroll = () => checkNodes()
checkNodes()