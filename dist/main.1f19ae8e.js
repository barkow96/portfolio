// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/PR_00_img.png":[function(require,module,exports) {
module.exports = "/PR_00_img.7626b766.png";
},{}],"img/PR_01_img.png":[function(require,module,exports) {
module.exports = "/PR_01_img.a5b45073.png";
},{}],"img/PR_02_img.png":[function(require,module,exports) {
module.exports = "/PR_02_img.e8fc00b6.png";
},{}],"img/PR_03_img.png":[function(require,module,exports) {
module.exports = "/PR_03_img.df298ac5.png";
},{}],"img/PR_00_vid.mp4":[function(require,module,exports) {
module.exports = "/PR_00_vid.3500f4fa.mp4";
},{}],"img/PR_01_vid.mp4":[function(require,module,exports) {
module.exports = "/PR_01_vid.0bcbb3a6.mp4";
},{}],"img/PR_02_vid.mp4":[function(require,module,exports) {
module.exports = "/PR_02_vid.fbbc17aa.mp4";
},{}],"img/PR_03_vid.mp4":[function(require,module,exports) {
module.exports = "/PR_03_vid.c86e04a9.mp4";
},{}],"projects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PR_00_img = _interopRequireDefault(require("./img/PR_00_img.png"));

var _PR_01_img = _interopRequireDefault(require("./img/PR_01_img.png"));

var _PR_02_img = _interopRequireDefault(require("./img/PR_02_img.png"));

var _PR_03_img = _interopRequireDefault(require("./img/PR_03_img.png"));

var _PR_00_vid = _interopRequireDefault(require("./img/PR_00_vid.mp4"));

var _PR_01_vid = _interopRequireDefault(require("./img/PR_01_vid.mp4"));

var _PR_02_vid = _interopRequireDefault(require("./img/PR_02_vid.mp4"));

var _PR_03_vid = _interopRequireDefault(require("./img/PR_03_vid.mp4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projects = [{
  name: "Chess Game",
  description: "My implementation of chess game using HTML, CSS and vanilla JS. Play the game of kings!",
  skills: ["HTML", "CSS", "JS"],
  image: _PR_00_img.default,
  video: _PR_00_vid.default,
  link: "https://barkow96.github.io/chess-game/"
}, {
  name: "Snake Game",
  description: "My implementation of snake game using HTML, CSS (Tailwind) and vanilla JS.",
  skills: ["HTML", "Tailwind CSS", "JS"],
  image: _PR_01_img.default,
  video: _PR_01_vid.default,
  link: "https://barkow96.github.io/snake-game/"
}, {
  name: "Slider App",
  description: "Photo gallery using React.js.",
  skills: ["HTML", "CSS", "React JS"],
  image: _PR_02_img.default,
  video: _PR_02_vid.default,
  link: "https://barkow96.github.io/slider-app/"
}, {
  name: "Sorting Algorithms",
  description: "Comparison of sorting algorithms: bubble sort, selection sort, quick sort.",
  skills: ["HTML", "CSS", "JS"],
  image: _PR_03_img.default,
  video: _PR_03_vid.default,
  link: "https://barkow96.github.io/algorithms-sorting/"
}];
var _default = projects;
exports.default = _default;
},{"./img/PR_00_img.png":"img/PR_00_img.png","./img/PR_01_img.png":"img/PR_01_img.png","./img/PR_02_img.png":"img/PR_02_img.png","./img/PR_03_img.png":"img/PR_03_img.png","./img/PR_00_vid.mp4":"img/PR_00_vid.mp4","./img/PR_01_vid.mp4":"img/PR_01_vid.mp4","./img/PR_02_vid.mp4":"img/PR_02_vid.mp4","./img/PR_03_vid.mp4":"img/PR_03_vid.mp4"}],"main.js":[function(require,module,exports) {
"use strict";

var _projects = _interopRequireDefault(require("./projects.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//GET ACCESS TO HTML ELEMENTS
var projectDivs = document.querySelectorAll(".project");
var projectVID = document.querySelector("#mainProjectVID");
var projectName = document.querySelector("#mainProjectName");
var projectDescription = document.querySelector("#mainProjectDescription");
var projectSkills = document.querySelector("#mainProjectSkills");
var projectLink = document.querySelector("#projectLink"); //CREATE DYNAMIC ELEMENTS

var VID = document.createElement("video");
var img0 = document.createElement("img");
var img1 = document.createElement("img");
var img2 = document.createElement("img");
var liElement = document.createElement("li"); //APPEND DYNAMIC ELEMENTS TO DOM ELEMENTS

projectVID.appendChild(VID);
projectDivs[0].appendChild(img0);
projectDivs[1].appendChild(img1);
projectDivs[2].appendChild(img2); //DEFINE VARIABLES AND CONSTANTS

var RENDER_TIME = 500;
var PROJECTS_NUMBER = _projects.default.length;
var mainProject = 1; //FIRST LOAD OF THE PAGE

window.onload = function () {
  projectLink.href = _projects.default[1].link;
  VID.src = _projects.default[1].video;
  VID.style.backgroundImage = "url(".concat(_projects.default[1].image, ")");
  VID.muted = true;
  VID.autoplay = true;
  VID.loop = true;
  projectName.innerHTML = _projects.default[mainProject].name;
  projectDescription.innerHTML = _projects.default[mainProject].description;

  _projects.default[1].skills.forEach(function (skill) {
    liElement = document.createElement("li");
    liElement.innerHTML = skill;
    projectSkills.appendChild(liElement);
  });

  img0.src = _projects.default[0].image;
  img1.src = _projects.default[1].image;
  img2.src = _projects.default[2].image;
}; //RENDER ANOTHER MAIN PROJECT AND SIDE PROJECTS


var renderProjects = function renderProjects() {
  projectVID.classList.add("minOpacity");
  projectVID.classList.remove("maxOpacity");
  setTimeout(function () {
    projectVID.classList.add("maxOpacity");
    projectVID.classList.remove("minOpacity");
    img1.src = _projects.default[mainProject].image;

    if (mainProject >= 1 && mainProject <= PROJECTS_NUMBER - 2) {
      img0.src = _projects.default[mainProject - 1].image;
      img2.src = _projects.default[mainProject + 1].image;
    } else if (mainProject == 0) {
      img0.src = _projects.default[PROJECTS_NUMBER - 1].image;
      img2.src = _projects.default[mainProject + 1].image;
    } else if (mainProject == PROJECTS_NUMBER - 1) {
      img0.src = _projects.default[mainProject - 1].image;
      img2.src = _projects.default[0].image;
    }

    projectLink.href = _projects.default[mainProject].link;
    VID.src = _projects.default[mainProject].video;
    VID.style.backgroundImage = "url(".concat(_projects.default[mainProject].image, ")");
    projectName.innerHTML = _projects.default[mainProject].name;
    projectDescription.innerHTML = _projects.default[mainProject].description;
    projectSkills.innerHTML = "";

    _projects.default[mainProject].skills.forEach(function (skill) {
      liElement = document.createElement("li");
      liElement.innerHTML = skill;
      projectSkills.appendChild(liElement);
    });
  }, RENDER_TIME);
}; //ADD EVENT LISTENERS


projectDivs.forEach(function (div) {
  div.addEventListener("click", function (event) {
    switch (event.composedPath()[1].id) {
      case "PR_left":
        if (mainProject >= 1) mainProject--;else mainProject = PROJECTS_NUMBER - 1;
        break;

      case "PR_middle":
        break;

      case "PR_right":
        if (mainProject <= PROJECTS_NUMBER - 2) mainProject++;else mainProject = 0;
        break;
    }

    ;
    renderProjects();
  });
});
},{"./projects.js":"projects.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55750" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map