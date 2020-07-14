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
    loadScript('./components/products/product.component.js')
    loadStyle('./components/products/product.component.css')
    loadContent('./components/products/product.component.html',outlet)
}
function about(outlet) {
    // alert("ABOUT")
    loadScript('./components/about/about.component.js')
    loadStyle('./components/about/about.component.css')
    outlet.innerHTML = "<h1>ABOUT</h1>"
    loadContent('./components/about/about.component.html', outlet)
   
    // fetch('./components/about/about.component.html')
    //     .then(response => response.text())
    //     .then(content => outlet.innerHTML += content)

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
    const oldScript = document.querySelector('#dynamicScript')
    oldScript?.remove();
    const scriptTag = document.createElement('script');
    scriptTag.id = "dynamicScript"
    scriptTag.src = url;
    document.body.appendChild(scriptTag)   
    // document.body.insertAdjacentElement('beforeend',scriptTag)   
}

function loadStyle(url) {
    const oldScript = document.querySelector('#dynamicStylesheet')
    oldScript?.remove();
    let styleTag= document.createElement("link")
    styleTag.setAttribute("rel", "stylesheet")
    styleTag.setAttribute("id", "dynamicStylesheet")
    styleTag.setAttribute("type", "text/css")
    styleTag.setAttribute("href", url) 
    document.head.appendChild(styleTag)   
     
}



export { home, products, about }



// function loadjscssfile(filename, filetype){
//     if (filetype=="js"){ //if filename is a external JavaScript file
//      var fileref=document.createElement('script')
//      fileref.setAttribute("type","text/javascript")
//      fileref.setAttribute("src", filename)
//     }
//     else if (filetype=="css"){ //if filename is an external CSS file
//      var fileref=document.createElement("link")
//      fileref.setAttribute("rel", "stylesheet")
//      fileref.setAttribute("type", "text/css")
//      fileref.setAttribute("href", filename)
//     }
//     if (typeof fileref!="undefined")
//      document.getElementsByTagName("head")[0].appendChild(fileref)
//    }
