/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);
	
	function core(arg) {
	  if (arg.constructor.name === 'String') {
	    const nodeList = document.querySelectorAll(arg);
	    return new DOMNodeCollection(Array.from(nodeList));
	  } else if (arg instanceof HTMLElement) {
	    return new DOMNodeCollection([arg]);
	  } else {
	    return new DOMNodeCollection([document]);
	  }
	}
	
	document.addEventListener("DOMContentLoaded", () => {
	  window.$au = core;
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	    this.HTMLElements.forEach( (element) => {
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
	
	  aujax(optionsHash) {
	    console.log("here");
	    const xhr = new XMLHttpRequest();
	    const defaults = {
	      type: 'GET',
	      url: "",
	      success: () => {},
	      error: () => {}
	    };
	
	    const mergedArgs = this.extend(defaults, optionsHash);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=auDOMatic.js.map