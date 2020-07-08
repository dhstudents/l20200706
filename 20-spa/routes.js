function home(outlet) {
  //  alert("HOME")
    outlet.innerHTML = "<h1>HOME</h1>"
    loadContent('./components/home/home.component.html',outlet)
    // fetch('./components/home/home.component.html')
    //     .then(response => response.text())
    //     .then(content => outlet.innerHTML += content)
}
function contactus(outlet) {
    outlet.innerHTML = "<h1>Contact US</h1>"
}

function products(outlet) {
    // alert("PROD")
    outlet.innerHTML = "<h1>PRODUCTS</h1>"
}
function about(outlet) {
    // alert("ABOUT")
    outlet.innerHTML = "<h1>ABOUT</h1>"
    loadContent('./components/about/about.component.html', outlet)
    loadScript('./components/about/about.component.js')
    // var scriptTag = document.createElement('script');
    // scriptTag.src = './components/about/about.component.js';

   // scriptTag.onload = implementationCode;
  //  scriptTag.onreadystatechange = implementationCode;
    // document.body.insertAdjacentElement('beforeend',scriptTag)   
}

function loadContent(url, outlet) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , url)
    xhr.onload = function() {
        outlet.innerHTML = xhr.responseText;
    }
    xhr.send()

}

function loadScript(url) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    document.body.insertAdjacentElement('beforeend',scriptTag)   
}

export { home , products , about  , contactus}