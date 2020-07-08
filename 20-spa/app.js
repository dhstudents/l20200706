import { home, products, about , contactus } from './routes.js'

window.onload = init

const routes = {
    home,
    products,
    about,
    contactus
}

function init() {
    document.querySelector('nav > ul').addEventListener('click', selectRoute)
}

function selectRoute(event) {
    event.preventDefault();
    if (event.target.nodeName !== "A") {
        return
    }
    const outlet = document.querySelector('.link-outlet')
    routes[event.target.textContent.toLowerCase()](outlet)
}