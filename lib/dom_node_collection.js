class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html(string) {
    if (typeof string === "string") {
      this.HTMLElements.forEach( element => {
        element.innerHTML = string;
      });
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }

  val(string) {
    if (typeof string === "string") {
      this.HTMLElements.forEach( element => {
        element.value = string;
      });
    } else {
      return this.HTMLElements[0].value;
    }
  }

  empty() {
    this.html("");
  }

  append(arg) {
    if (typeof arg === "string"){
      this.HTMLElements.forEach( node =>{
        node.innerHTML += arg;
      });
    } else {
      this.HTMLElements.forEach( node =>{
        node.innerHTML += arg.outerHTML;
      });
    }
  }

  attr(name, value) {
    if (value) {
      this.HTMLElements.forEach( element => {
        element.setAttribute(name, value);
      });
    } else {
      return this.HTMLElements[0].getAttribute(name);
    }
  }

  addClass(name) {
    this.HTMLElements.forEach( element => {
      element.classList.add(name);
    });
  }

  removeClass(name) {
    this.HTMLElements.forEach( element => {
      element.classList.remove(name);
    });
  }

  children() {
    let childList = [];

    this.HTMLElements.forEach( element => {
      childList = childList.concat(  Array.from(element.children) );
    });

    return new DOMNodeCollection(childList);
  }

  parent() {
    let parentList = [];

    this.HTMLElements.forEach( element => {
      parentList = parentList.concat( element.parentElement );
    });

    return new DOMNodeCollection(parentList);
  }

  find(selector) {
    let findList = [];

    this.HTMLElements.forEach( element => {
      findList = findList.concat( element.querySelectorAll(selector));
    });
    return new DOMNodeCollection(findList);
  }

  remove() {
    this.HTMLElements.forEach( element => {
      element.parentElement.removeChild(element);
    });
  }

  on(type, callback){
    this.HTMLElements.forEach( element => {
      element.addEventListener(type, callback);
    });
  }

  off(type, callback){
    this.HTMLElements.forEach( element => {
      element.removeEventListener(type, callback);
    });
  }

  extend(...args) {
    return Object.assign(...args);
  }

  ajax(optionsHash) {
    const xhr = new XMLHttpRequest();

    const defaults = {
      type: 'GET',
      url: "",
      success: () => {},
      error: () => {},
      data: {},
    };

    const mergedArgs = this.extend(defaults, optionsHash);

    debugger

    xhr.open(mergedArgs.type, mergedArgs.url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        mergedArgs.success(xhr.response);
      } else {
        mergedArgs.error(xhr.response);
      }
    };

    xhr.send(mergedArgs.data);
  }
}

module.exports = DOMNodeCollection;
