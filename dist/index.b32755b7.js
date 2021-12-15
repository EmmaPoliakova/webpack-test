// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lYgGN":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "7102765fb32755b7";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"a7DGi":[function(require,module,exports) {
var smartcontroller = require('smartcontroller');
var pc = new smartcontroller.JoystickSmartController();

},{"smartcontroller":"jlwKG"}],"jlwKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//list of exported modules
parcelHelpers.export(exports, "SmartController", ()=>_smartController.SmartController
);
parcelHelpers.export(exports, "JoystickSmartController", ()=>_joystickSmartController.JoystickSmartController
);
parcelHelpers.export(exports, "TouchPadSmartController", ()=>_touchPadSmartController.TouchPadSmartController
);
parcelHelpers.export(exports, "NesSmartController", ()=>_nesSmartController.NesSmartController
);
parcelHelpers.export(exports, "SmartPhoneController", ()=>_smartPhoneController.SmartPhoneController
);
var _smartController = require("./SmartController");
var _joystickSmartController = require("./JoystickSmartController");
var _touchPadSmartController = require("./TouchPadSmartController");
var _nesSmartController = require("./NesSmartController");
var _smartPhoneController = require("./SmartPhoneController");

},{"./SmartController":"gUNMt","./JoystickSmartController":"6JQmN","./TouchPadSmartController":"98Src","./NesSmartController":"5H1nM","./SmartPhoneController":"pAoDv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gUNMt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SmartController", ()=>SmartController
);
var _peerjs = require("peerjs");
var _peerjsDefault = parcelHelpers.interopDefault(_peerjs);
var _eventemitter2 = require("eventemitter2");
var _eventemitter2Default = parcelHelpers.interopDefault(_eventemitter2);
var _easyqrcodejs = require("easyqrcodejs");
var _easyqrcodejsDefault = parcelHelpers.interopDefault(_easyqrcodejs);
class SmartController extends _eventemitter2Default.default {
    constructor(peerid){
        super();
        this.peerConnection = new _peerjsDefault.default(peerid);
        self = this;
        this.remotePeers = []; //list of connections
        this.peerConnection.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            self.emit('open', "ready");
        });
        this.peerConnection.on("connection", this.peerOnConnection); //opens the data connection between 2 peers once a connection is established
    }
    peerOnConnection = (conn)=>{
        this.remotePeers[conn.peer] = conn; //add to current connected peers 
        self.emit('connection', conn); // fire an event on new connection
        conn.on("data", function(data) {
            if (data.type == "user") {
                var message = {
                    'id': conn.peer,
                    'data': data
                } //send connection id + data received from phone/remote peer
                ;
                self.emit('data', message);
            } else if (data.type == "setup") console.log(data.data);
        });
        conn.on('close', function() {
            self.emit('close', conn.peer);
            delete self.remotePeers[conn.peer];
        });
    };
    //create a QRcode from given url and display on screen on given canvas element (change to store the QRcode object and let the user display it whenever required)
    createQrCode = (url, elementID, width = 256, height = 256, playerID = null)=>{
        self.peerConnection.on("open", function(id) {
            var full_url = url + "?id=" + self.peerConnection.id + "&playerid=" + playerID;
            console.log(full_url);
            var options = {
                text: full_url,
                width: width,
                height: height
            };
            new _easyqrcodejsDefault.default(document.getElementById(elementID), options);
        });
    };
    //send message to a peer with given ID
    sendData = (peerID, data)=>{
        self.remotePeers[peerID].send(data);
    };
}

},{"peerjs":"k12Bh","eventemitter2":"xgNgW","easyqrcodejs":"gxdUS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k12Bh":[function(require,module,exports) {
parcelRequire = (function(e1, r1, t1, n1) {
    var i1, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && undefined;
    function f(t, n) {
        if (!r1[t]) {
            if (!e1[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
            }
            p.resolve = function(r) {
                return e1[t][1][r] || r;
            }, p.cache = {
            };
            var l = r1[t] = new f.Module(t);
            e1[t][0].call(l.exports, p, l, l.exports, this);
        }
        function p(e) {
            return f(p.resolve(e));
        }
        return r1[t].exports;
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {
        };
    }, f.modules = e1, f.cache = r1, f.parent = o, f.register = function(r2, t) {
        e1[r2] = [
            function(e, r) {
                r.exports = t;
            },
            {
            }
        ];
    };
    for(var c1 = 0; c1 < t1.length; c1++)try {
        f(t1[c1]);
    } catch (e) {
        i1 || (i1 = e);
    }
    if (t1.length) {
        var l1 = f(t1[t1.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l1 : "function" == typeof define && define.amd ? define(function() {
            return l1;
        }) : n1 && (this[n1] = l1);
    }
    if (parcelRequire = f, i1) throw i1;
    return f;
})({
    "EgBh": [
        function(require, module, exports) {
            var e2 = {
            };
            e2.useBlobBuilder = (function() {
                try {
                    return new Blob([]), !1;
                } catch (e) {
                    return !0;
                }
            })(), e2.useArrayBufferView = !e2.useBlobBuilder && (function() {
                try {
                    return 0 === new Blob([
                        new Uint8Array([])
                    ]).size;
                } catch (e) {
                    return !0;
                }
            })(), module.exports.binaryFeatures = e2;
            var r3 = module.exports.BlobBuilder;
            function t2() {
                this._pieces = [], this._parts = [];
            }
            "undefined" != typeof window && (r3 = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder), t2.prototype.append = function(e) {
                "number" == typeof e ? this._pieces.push(e) : (this.flush(), this._parts.push(e));
            }, t2.prototype.flush = function() {
                if (this._pieces.length > 0) {
                    var r = new Uint8Array(this._pieces);
                    e2.useArrayBufferView || (r = r.buffer), this._parts.push(r), this._pieces = [];
                }
            }, t2.prototype.getBuffer = function() {
                if (this.flush(), e2.useBlobBuilder) {
                    for(var t = new r3, i = 0, u = this._parts.length; i < u; i++)t.append(this._parts[i]);
                    return t.getBlob();
                }
                return new Blob(this._parts);
            }, module.exports.BufferBuilder = t2;
        },
        {
        }
    ],
    "kdPp": [
        function(require, module, exports) {
            var t3 = require("./bufferbuilder").BufferBuilder, e3 = require("./bufferbuilder").binaryFeatures, i2 = {
                unpack: function(t) {
                    return new r4(t).unpack();
                },
                pack: function(t) {
                    var e = new n2;
                    return e.pack(t), e.getBuffer();
                }
            };
            function r4(t) {
                this.index = 0, this.dataBuffer = t, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
            }
            function n2() {
                this.bufferBuilder = new t3;
            }
            function u1(t) {
                var e = t.charCodeAt(0);
                return e <= 2047 ? "00" : e <= 65535 ? "000" : e <= 2097151 ? "0000" : e <= 67108863 ? "00000" : "000000";
            }
            function a1(t) {
                return t.length > 600 ? new Blob([
                    t
                ]).size : t.replace(/[^\u0000-\u007F]/g, u1).length;
            }
            module.exports = i2, r4.prototype.unpack = function() {
                var t, e = this.unpack_uint8();
                if (e < 128) return e;
                if ((224 ^ e) < 32) return (224 ^ e) - 32;
                if ((t = 160 ^ e) <= 15) return this.unpack_raw(t);
                if ((t = 176 ^ e) <= 15) return this.unpack_string(t);
                if ((t = 144 ^ e) <= 15) return this.unpack_array(t);
                if ((t = 128 ^ e) <= 15) return this.unpack_map(t);
                switch(e){
                    case 192:
                        return null;
                    case 193:
                        return;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 202:
                        return this.unpack_float();
                    case 203:
                        return this.unpack_double();
                    case 204:
                        return this.unpack_uint8();
                    case 205:
                        return this.unpack_uint16();
                    case 206:
                        return this.unpack_uint32();
                    case 207:
                        return this.unpack_uint64();
                    case 208:
                        return this.unpack_int8();
                    case 209:
                        return this.unpack_int16();
                    case 210:
                        return this.unpack_int32();
                    case 211:
                        return this.unpack_int64();
                    case 212:
                    case 213:
                    case 214:
                    case 215:
                        return;
                    case 216:
                        return t = this.unpack_uint16(), this.unpack_string(t);
                    case 217:
                        return t = this.unpack_uint32(), this.unpack_string(t);
                    case 218:
                        return t = this.unpack_uint16(), this.unpack_raw(t);
                    case 219:
                        return t = this.unpack_uint32(), this.unpack_raw(t);
                    case 220:
                        return t = this.unpack_uint16(), this.unpack_array(t);
                    case 221:
                        return t = this.unpack_uint32(), this.unpack_array(t);
                    case 222:
                        return t = this.unpack_uint16(), this.unpack_map(t);
                    case 223:
                        return t = this.unpack_uint32(), this.unpack_map(t);
                }
            }, r4.prototype.unpack_uint8 = function() {
                var t = 255 & this.dataView[this.index];
                return this.index++, t;
            }, r4.prototype.unpack_uint16 = function() {
                var t = this.read(2), e = 256 * (255 & t[0]) + (255 & t[1]);
                return this.index += 2, e;
            }, r4.prototype.unpack_uint32 = function() {
                var t = this.read(4), e = 256 * (256 * (256 * t[0] + t[1]) + t[2]) + t[3];
                return this.index += 4, e;
            }, r4.prototype.unpack_uint64 = function() {
                var t = this.read(8), e = 256 * (256 * (256 * (256 * (256 * (256 * (256 * t[0] + t[1]) + t[2]) + t[3]) + t[4]) + t[5]) + t[6]) + t[7];
                return this.index += 8, e;
            }, r4.prototype.unpack_int8 = function() {
                var t = this.unpack_uint8();
                return t < 128 ? t : t - 256;
            }, r4.prototype.unpack_int16 = function() {
                var t = this.unpack_uint16();
                return t < 32768 ? t : t - 65536;
            }, r4.prototype.unpack_int32 = function() {
                var t = this.unpack_uint32();
                return t < Math.pow(2, 31) ? t : t - Math.pow(2, 32);
            }, r4.prototype.unpack_int64 = function() {
                var t = this.unpack_uint64();
                return t < Math.pow(2, 63) ? t : t - Math.pow(2, 64);
            }, r4.prototype.unpack_raw = function(t) {
                if (this.length < this.index + t) throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + t + " " + this.length);
                var e = this.dataBuffer.slice(this.index, this.index + t);
                return this.index += t, e;
            }, r4.prototype.unpack_string = function(t) {
                for(var e, i, r = this.read(t), n = 0, u = ""; n < t;)(e = r[n]) < 128 ? (u += String.fromCharCode(e), n++) : (192 ^ e) < 32 ? (i = (192 ^ e) << 6 | 63 & r[n + 1], u += String.fromCharCode(i), n += 2) : (i = (15 & e) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2], u += String.fromCharCode(i), n += 3);
                return this.index += t, u;
            }, r4.prototype.unpack_array = function(t) {
                for(var e = new Array(t), i = 0; i < t; i++)e[i] = this.unpack();
                return e;
            }, r4.prototype.unpack_map = function(t) {
                for(var e = {
                }, i = 0; i < t; i++){
                    var r = this.unpack(), n = this.unpack();
                    e[r] = n;
                }
                return e;
            }, r4.prototype.unpack_float = function() {
                var t = this.unpack_uint32(), e = (t >> 23 & 255) - 127;
                return (0 === t >> 31 ? 1 : -1) * (8388607 & t | 8388608) * Math.pow(2, e - 23);
            }, r4.prototype.unpack_double = function() {
                var t = this.unpack_uint32(), e = this.unpack_uint32(), i = (t >> 20 & 2047) - 1023;
                return (0 === t >> 31 ? 1 : -1) * ((1048575 & t | 1048576) * Math.pow(2, i - 20) + e * Math.pow(2, i - 52));
            }, r4.prototype.read = function(t) {
                var e = this.index;
                if (e + t <= this.length) return this.dataView.subarray(e, e + t);
                throw new Error("BinaryPackFailure: read index out of range");
            }, n2.prototype.getBuffer = function() {
                return this.bufferBuilder.getBuffer();
            }, n2.prototype.pack = function(t) {
                var i = typeof t;
                if ("string" === i) this.pack_string(t);
                else if ("number" === i) Math.floor(t) === t ? this.pack_integer(t) : this.pack_double(t);
                else if ("boolean" === i) !0 === t ? this.bufferBuilder.append(195) : !1 === t && this.bufferBuilder.append(194);
                else if ("undefined" === i) this.bufferBuilder.append(192);
                else {
                    if ("object" !== i) throw new Error('Type "' + i + '" not yet supported');
                    if (null === t) this.bufferBuilder.append(192);
                    else {
                        var r = t.constructor;
                        if (r == Array) this.pack_array(t);
                        else if (r == Blob || r == File || t instanceof Blob || t instanceof File) this.pack_bin(t);
                        else if (r == ArrayBuffer) e3.useArrayBufferView ? this.pack_bin(new Uint8Array(t)) : this.pack_bin(t);
                        else if ("BYTES_PER_ELEMENT" in t) e3.useArrayBufferView ? this.pack_bin(new Uint8Array(t.buffer)) : this.pack_bin(t.buffer);
                        else if (r == Object || r.toString().startsWith("class")) this.pack_object(t);
                        else if (r == Date) this.pack_string(t.toString());
                        else {
                            if ("function" != typeof t.toBinaryPack) throw new Error('Type "' + r.toString() + '" not yet supported');
                            this.bufferBuilder.append(t.toBinaryPack());
                        }
                    }
                }
                this.bufferBuilder.flush();
            }, n2.prototype.pack_bin = function(t) {
                var e = t.length || t.byteLength || t.size;
                if (e <= 15) this.pack_uint8(160 + e);
                else if (e <= 65535) this.bufferBuilder.append(218), this.pack_uint16(e);
                else {
                    if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(219), this.pack_uint32(e);
                }
                this.bufferBuilder.append(t);
            }, n2.prototype.pack_string = function(t) {
                var e = a1(t);
                if (e <= 15) this.pack_uint8(176 + e);
                else if (e <= 65535) this.bufferBuilder.append(216), this.pack_uint16(e);
                else {
                    if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(217), this.pack_uint32(e);
                }
                this.bufferBuilder.append(t);
            }, n2.prototype.pack_array = function(t) {
                var e = t.length;
                if (e <= 15) this.pack_uint8(144 + e);
                else if (e <= 65535) this.bufferBuilder.append(220), this.pack_uint16(e);
                else {
                    if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(221), this.pack_uint32(e);
                }
                for(var i = 0; i < e; i++)this.pack(t[i]);
            }, n2.prototype.pack_integer = function(t) {
                if (t >= -32 && t <= 127) this.bufferBuilder.append(255 & t);
                else if (t >= 0 && t <= 255) this.bufferBuilder.append(204), this.pack_uint8(t);
                else if (t >= -128 && t <= 127) this.bufferBuilder.append(208), this.pack_int8(t);
                else if (t >= 0 && t <= 65535) this.bufferBuilder.append(205), this.pack_uint16(t);
                else if (t >= -32768 && t <= 32767) this.bufferBuilder.append(209), this.pack_int16(t);
                else if (t >= 0 && t <= 4294967295) this.bufferBuilder.append(206), this.pack_uint32(t);
                else if (t >= -2147483648 && t <= 2147483647) this.bufferBuilder.append(210), this.pack_int32(t);
                else if (t >= -9223372036854776000 && t <= 9223372036854776000) this.bufferBuilder.append(211), this.pack_int64(t);
                else {
                    if (!(t >= 0 && t <= 18446744073709552000)) throw new Error("Invalid integer");
                    this.bufferBuilder.append(207), this.pack_uint64(t);
                }
            }, n2.prototype.pack_double = function(t) {
                var e = 0;
                t < 0 && (e = 1, t = -t);
                var i = Math.floor(Math.log(t) / Math.LN2), r = t / Math.pow(2, i) - 1, n = Math.floor(r * Math.pow(2, 52)), u = Math.pow(2, 32), a = e << 31 | i + 1023 << 20 | n / u & 1048575, p = n % u;
                this.bufferBuilder.append(203), this.pack_int32(a), this.pack_int32(p);
            }, n2.prototype.pack_object = function(t) {
                var e = Object.keys(t).length;
                if (e <= 15) this.pack_uint8(128 + e);
                else if (e <= 65535) this.bufferBuilder.append(222), this.pack_uint16(e);
                else {
                    if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(223), this.pack_uint32(e);
                }
                for(var i in t)t.hasOwnProperty(i) && (this.pack(i), this.pack(t[i]));
            }, n2.prototype.pack_uint8 = function(t) {
                this.bufferBuilder.append(t);
            }, n2.prototype.pack_uint16 = function(t) {
                this.bufferBuilder.append(t >> 8), this.bufferBuilder.append(255 & t);
            }, n2.prototype.pack_uint32 = function(t) {
                var e = 4294967295 & t;
                this.bufferBuilder.append((4278190080 & e) >>> 24), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e);
            }, n2.prototype.pack_uint64 = function(t) {
                var e = t / Math.pow(2, 32), i = t % Math.pow(2, 32);
                this.bufferBuilder.append((4278190080 & e) >>> 24), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e), this.bufferBuilder.append((4278190080 & i) >>> 24), this.bufferBuilder.append((16711680 & i) >>> 16), this.bufferBuilder.append((65280 & i) >>> 8), this.bufferBuilder.append(255 & i);
            }, n2.prototype.pack_int8 = function(t) {
                this.bufferBuilder.append(255 & t);
            }, n2.prototype.pack_int16 = function(t) {
                this.bufferBuilder.append((65280 & t) >> 8), this.bufferBuilder.append(255 & t);
            }, n2.prototype.pack_int32 = function(t) {
                this.bufferBuilder.append(t >>> 24 & 255), this.bufferBuilder.append((16711680 & t) >>> 16), this.bufferBuilder.append((65280 & t) >>> 8), this.bufferBuilder.append(255 & t);
            }, n2.prototype.pack_int64 = function(t) {
                var e = Math.floor(t / Math.pow(2, 32)), i = t % Math.pow(2, 32);
                this.bufferBuilder.append((4278190080 & e) >>> 24), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e), this.bufferBuilder.append((4278190080 & i) >>> 24), this.bufferBuilder.append((16711680 & i) >>> 16), this.bufferBuilder.append((65280 & i) >>> 8), this.bufferBuilder.append(255 & i);
            };
        },
        {
            "./bufferbuilder": "EgBh"
        }
    ],
    "iSxC": [
        function(require, module, exports) {
            "use strict";
            function e4(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function t4(e5) {
                return (t4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e5);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.extractVersion = o1, exports.wrapPeerConnectionEvent = i3, exports.disableLog = s1, exports.disableWarnings = a, exports.log = p, exports.deprecated = u, exports.detectBrowser = c, exports.compactObject = f, exports.walkStats = l, exports.filterStats = v;
            var n3 = !0, r5 = !0;
            function o1(e, t, n) {
                var r = e.match(t);
                return r && r.length >= n && parseInt(r[n], 10);
            }
            function i3(e6, t5, n4) {
                if (e6.RTCPeerConnection) {
                    var r6 = e6.RTCPeerConnection.prototype, o = r6.addEventListener;
                    r6.addEventListener = function(e7, r) {
                        if (e7 !== t5) return o.apply(this, arguments);
                        var i = function(e) {
                            var t = n4(e);
                            t && (r.handleEvent ? r.handleEvent(t) : r(t));
                        };
                        return this._eventMap = this._eventMap || {
                        }, this._eventMap[t5] || (this._eventMap[t5] = new Map), this._eventMap[t5].set(r, i), o.apply(this, [
                            e7,
                            i
                        ]);
                    };
                    var i4 = r6.removeEventListener;
                    r6.removeEventListener = function(e, n) {
                        if (e !== t5 || !this._eventMap || !this._eventMap[t5]) return i4.apply(this, arguments);
                        if (!this._eventMap[t5].has(n)) return i4.apply(this, arguments);
                        var r = this._eventMap[t5].get(n);
                        return this._eventMap[t5].delete(n), 0 === this._eventMap[t5].size && delete this._eventMap[t5], 0 === Object.keys(this._eventMap).length && delete this._eventMap, i4.apply(this, [
                            e,
                            r
                        ]);
                    }, Object.defineProperty(r6, "on" + t5, {
                        get: function() {
                            return this["_on" + t5];
                        },
                        set: function(e) {
                            this["_on" + t5] && (this.removeEventListener(t5, this["_on" + t5]), delete this["_on" + t5]), e && this.addEventListener(t5, this["_on" + t5] = e);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            }
            function s1(e) {
                return "boolean" != typeof e ? new Error("Argument type: " + t4(e) + ". Please use a boolean.") : (n3 = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled");
            }
            function a(e) {
                return "boolean" != typeof e ? new Error("Argument type: " + t4(e) + ". Please use a boolean.") : (r5 = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
            }
            function p() {
                if ("object" === ("undefined" == typeof window ? "undefined" : t4(window))) {
                    if (n3) return;
                    "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
                }
            }
            function u(e, t) {
                r5 && console.warn(e + " is deprecated, please use " + t + " instead.");
            }
            function c(e) {
                var t = {
                    browser: null,
                    version: null
                };
                if (void 0 === e || !e.navigator) return t.browser = "Not a browser.", t;
                var { navigator: n  } = e;
                if (n.mozGetUserMedia) t.browser = "firefox", t.version = o1(n.userAgent, /Firefox\/(\d+)\./, 1);
                else if (n.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) t.browser = "chrome", t.version = o1(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                else if (n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = o1(n.userAgent, /Edge\/(\d+).(\d+)$/, 2);
                else {
                    if (!e.RTCPeerConnection || !n.userAgent.match(/AppleWebKit\/(\d+)\./)) return t.browser = "Not a supported browser.", t;
                    t.browser = "safari", t.version = o1(n.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
                }
                return t;
            }
            function d(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            }
            function f(t) {
                return d(t) ? Object.keys(t).reduce(function(n, r) {
                    var o = d(t[r]), i = o ? f(t[r]) : t[r], s = o && !Object.keys(i).length;
                    return void 0 === i || s ? n : Object.assign(n, e4({
                    }, r, i));
                }, {
                }) : t;
            }
            function l(e, t6, n) {
                t6 && !n.has(t6.id) && (n.set(t6.id, t6), Object.keys(t6).forEach(function(r) {
                    r.endsWith("Id") ? l(e, e.get(t6[r]), n) : r.endsWith("Ids") && t6[r].forEach(function(t) {
                        l(e, e.get(t), n);
                    });
                }));
            }
            function v(e8, t7, n5) {
                var r = n5 ? "outbound-rtp" : "inbound-rtp", o = new Map;
                if (null === t7) return o;
                var i = [];
                return e8.forEach(function(e) {
                    "track" === e.type && e.trackIdentifier === t7.id && i.push(e);
                }), i.forEach(function(t) {
                    e8.forEach(function(n) {
                        n.type === r && n.trackId === t.id && l(e8, n, o);
                    });
                }), o;
            }
        },
        {
        }
    ],
    "s6SN": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetUserMedia = i5;
            var e9 = t8(require("../utils.js"));
            function r7() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return r7 = function() {
                    return e;
                }, e;
            }
            function t8(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = r7();
                if (t && t.has(e)) return t.get(e);
                var o = {
                }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(o, i, a) : o[i] = e[i];
                }
                return o.default = e, t && t.set(e, o), o;
            }
            function o2(e10) {
                return (o2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e10);
            }
            var n6 = e9.log;
            function i5(e11, r8) {
                var t9 = e11 && e11.navigator;
                if (t9.mediaDevices) {
                    var i = function(e12) {
                        if ("object" !== o2(e12) || e12.mandatory || e12.optional) return e12;
                        var r9 = {
                        };
                        return Object.keys(e12).forEach(function(t) {
                            if ("require" !== t && "advanced" !== t && "mediaSource" !== t) {
                                var n = "object" === o2(e12[t]) ? e12[t] : {
                                    ideal: e12[t]
                                };
                                void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                                var i = function(e, r) {
                                    return e ? e + r.charAt(0).toUpperCase() + r.slice(1) : "deviceId" === r ? "sourceId" : r;
                                };
                                if (void 0 !== n.ideal) {
                                    r9.optional = r9.optional || [];
                                    var a = {
                                    };
                                    "number" == typeof n.ideal ? (a[i("min", t)] = n.ideal, r9.optional.push(a), (a = {
                                    })[i("max", t)] = n.ideal, r9.optional.push(a)) : (a[i("", t)] = n.ideal, r9.optional.push(a));
                                }
                                void 0 !== n.exact && "number" != typeof n.exact ? (r9.mandatory = r9.mandatory || {
                                }, r9.mandatory[i("", t)] = n.exact) : [
                                    "min",
                                    "max"
                                ].forEach(function(e) {
                                    void 0 !== n[e] && (r9.mandatory = r9.mandatory || {
                                    }, r9.mandatory[i(e, t)] = n[e]);
                                });
                            }
                        }), e12.advanced && (r9.optional = (r9.optional || []).concat(e12.advanced)), r9;
                    }, a2 = function(e13, a) {
                        if (r8.version >= 61) return a(e13);
                        if ((e13 = JSON.parse(JSON.stringify(e13))) && "object" === o2(e13.audio)) {
                            var c = function(e, r, t) {
                                r in e && !(t in e) && (e[t] = e[r], delete e[r]);
                            };
                            c((e13 = JSON.parse(JSON.stringify(e13))).audio, "autoGainControl", "googAutoGainControl"), c(e13.audio, "noiseSuppression", "googNoiseSuppression"), e13.audio = i(e13.audio);
                        }
                        if (e13 && "object" === o2(e13.video)) {
                            var d = e13.video.facingMode;
                            d = d && ("object" === o2(d) ? d : {
                                ideal: d
                            });
                            var u, s = r8.version < 66;
                            if (d && ("user" === d.exact || "environment" === d.exact || "user" === d.ideal || "environment" === d.ideal) && (!t9.mediaDevices.getSupportedConstraints || !t9.mediaDevices.getSupportedConstraints().facingMode || s)) {
                                if (delete e13.video.facingMode, "environment" === d.exact || "environment" === d.ideal ? u = [
                                    "back",
                                    "rear"
                                ] : "user" !== d.exact && "user" !== d.ideal || (u = [
                                    "front"
                                ]), u) return t9.mediaDevices.enumerateDevices().then(function(r10) {
                                    var t = (r10 = r10.filter(function(e) {
                                        return "videoinput" === e.kind;
                                    })).find(function(e) {
                                        return u.some(function(r) {
                                            return e.label.toLowerCase().includes(r);
                                        });
                                    });
                                    return !t && r10.length && u.includes("back") && (t = r10[r10.length - 1]), t && (e13.video.deviceId = d.exact ? {
                                        exact: t.deviceId
                                    } : {
                                        ideal: t.deviceId
                                    }), e13.video = i(e13.video), n6("chrome: " + JSON.stringify(e13)), a(e13);
                                });
                            }
                            e13.video = i(e13.video);
                        }
                        return n6("chrome: " + JSON.stringify(e13)), a(e13);
                    }, c2 = function(e) {
                        return r8.version >= 64 ? e : {
                            name: ({
                                PermissionDeniedError: "NotAllowedError",
                                PermissionDismissedError: "NotAllowedError",
                                InvalidStateError: "NotAllowedError",
                                DevicesNotFoundError: "NotFoundError",
                                ConstraintNotSatisfiedError: "OverconstrainedError",
                                TrackStartError: "NotReadableError",
                                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                MediaDeviceKillSwitchOn: "NotAllowedError",
                                TabCaptureError: "AbortError",
                                ScreenCaptureError: "AbortError",
                                DeviceCaptureError: "AbortError"
                            })[e.name] || e.name,
                            message: e.message,
                            constraint: e.constraint || e.constraintName,
                            toString: function() {
                                return this.name + (this.message && ": ") + this.message;
                            }
                        };
                    };
                    if (t9.getUserMedia = (function(e14, r, o) {
                        a2(e14, function(e15) {
                            t9.webkitGetUserMedia(e15, r, function(e) {
                                o && o(c2(e));
                            });
                        });
                    }).bind(t9), t9.mediaDevices.getUserMedia) {
                        var d1 = t9.mediaDevices.getUserMedia.bind(t9.mediaDevices);
                        t9.mediaDevices.getUserMedia = function(e16) {
                            return a2(e16, function(e17) {
                                return d1(e17).then(function(r) {
                                    if (e17.audio && !r.getAudioTracks().length || e17.video && !r.getVideoTracks().length) throw r.getTracks().forEach(function(e) {
                                        e.stop();
                                    }), new DOMException("", "NotFoundError");
                                    return r;
                                }, function(e) {
                                    return Promise.reject(c2(e));
                                });
                            });
                        };
                    }
                }
            }
        },
        {
            "../utils.js": "iSxC"
        }
    ],
    "VHa8": [
        function(require, module, exports) {
            "use strict";
            function e18(e, i6) {
                e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof i6 ? e.navigator.mediaDevices.getDisplayMedia = function(a) {
                    return i6(a).then(function(i) {
                        var t = a.video && a.video.width, o = a.video && a.video.height, d = a.video && a.video.frameRate;
                        return a.video = {
                            mandatory: {
                                chromeMediaSource: "desktop",
                                chromeMediaSourceId: i,
                                maxFrameRate: d || 3
                            }
                        }, t && (a.video.mandatory.maxWidth = t), o && (a.video.mandatory.maxHeight = o), e.navigator.mediaDevices.getUserMedia(a);
                    });
                } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"));
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetDisplayMedia = e18;
        },
        {
        }
    ],
    "uI5X": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimMediaStream = a3, exports.shimOnTrack = c3, exports.shimGetSendersWithDtmf = p, exports.shimGetStats = d, exports.shimSenderReceiverGetStats = h, exports.shimAddTrackRemoveTrackWithNative = f, exports.shimAddTrackRemoveTrack = m, exports.shimPeerConnection = u, exports.fixNegotiationNeeded = l, Object.defineProperty(exports, "shimGetUserMedia", {
                enumerable: !0,
                get: function() {
                    return t10.shimGetUserMedia;
                }
            }), Object.defineProperty(exports, "shimGetDisplayMedia", {
                enumerable: !0,
                get: function() {
                    return r11.shimGetDisplayMedia;
                }
            });
            var e19 = i7(require("../utils.js")), t10 = require("./getusermedia"), r11 = require("./getdisplaymedia");
            function n7() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return n7 = function() {
                    return e;
                }, e;
            }
            function i7(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = n7();
                if (t && t.has(e)) return t.get(e);
                var r = {
                }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var o in e)if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o];
                }
                return r.default = e, t && t.set(e, r), r;
            }
            function o3(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e;
            }
            function s2(e20) {
                return (s2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e20);
            }
            function a3(e) {
                e.MediaStream = e.MediaStream || e.webkitMediaStream;
            }
            function c3(t) {
                if ("object" !== s2(t) || !t.RTCPeerConnection || "ontrack" in t.RTCPeerConnection.prototype) e19.wrapPeerConnectionEvent(t, "track", function(e) {
                    return e.transceiver || Object.defineProperty(e, "transceiver", {
                        value: {
                            receiver: e.receiver
                        }
                    }), e;
                });
                else {
                    Object.defineProperty(t.RTCPeerConnection.prototype, "ontrack", {
                        get: function() {
                            return this._ontrack;
                        },
                        set: function(e) {
                            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                    var r12 = t.RTCPeerConnection.prototype.setRemoteDescription;
                    t.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        var e21 = this;
                        return this._ontrackpoly || (this._ontrackpoly = function(r) {
                            r.stream.addEventListener("addtrack", function(n) {
                                var i;
                                i = t.RTCPeerConnection.prototype.getReceivers ? e21.getReceivers().find(function(e) {
                                    return e.track && e.track.id === n.track.id;
                                }) : {
                                    track: n.track
                                };
                                var o = new Event("track");
                                o.track = n.track, o.receiver = i, o.transceiver = {
                                    receiver: i
                                }, o.streams = [
                                    r.stream
                                ], e21.dispatchEvent(o);
                            }), r.stream.getTracks().forEach(function(n) {
                                var i;
                                i = t.RTCPeerConnection.prototype.getReceivers ? e21.getReceivers().find(function(e) {
                                    return e.track && e.track.id === n.id;
                                }) : {
                                    track: n
                                };
                                var o = new Event("track");
                                o.track = n, o.receiver = i, o.transceiver = {
                                    receiver: i
                                }, o.streams = [
                                    r.stream
                                ], e21.dispatchEvent(o);
                            });
                        }, this.addEventListener("addstream", this._ontrackpoly)), r12.apply(this, arguments);
                    };
                }
            }
            function p(e22) {
                if ("object" === s2(e22) && e22.RTCPeerConnection && !("getSenders" in e22.RTCPeerConnection.prototype) && "createDTMFSender" in e22.RTCPeerConnection.prototype) {
                    var t11 = function(e, t) {
                        return {
                            track: t,
                            get dtmf () {
                                return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf;
                            },
                            _pc: e
                        };
                    };
                    if (!e22.RTCPeerConnection.prototype.getSenders) {
                        e22.RTCPeerConnection.prototype.getSenders = function() {
                            return this._senders = this._senders || [], this._senders.slice();
                        };
                        var r = e22.RTCPeerConnection.prototype.addTrack;
                        e22.RTCPeerConnection.prototype.addTrack = function(e, n) {
                            var i = r.apply(this, arguments);
                            return i || (i = t11(this, e), this._senders.push(i)), i;
                        };
                        var n = e22.RTCPeerConnection.prototype.removeTrack;
                        e22.RTCPeerConnection.prototype.removeTrack = function(e) {
                            n.apply(this, arguments);
                            var t = this._senders.indexOf(e);
                            -1 !== t && this._senders.splice(t, 1);
                        };
                    }
                    var i8 = e22.RTCPeerConnection.prototype.addStream;
                    e22.RTCPeerConnection.prototype.addStream = function(e23) {
                        var r = this;
                        this._senders = this._senders || [], i8.apply(this, [
                            e23
                        ]), e23.getTracks().forEach(function(e) {
                            r._senders.push(t11(r, e));
                        });
                    };
                    var o = e22.RTCPeerConnection.prototype.removeStream;
                    e22.RTCPeerConnection.prototype.removeStream = function(e24) {
                        var t12 = this;
                        this._senders = this._senders || [], o.apply(this, [
                            e24
                        ]), e24.getTracks().forEach(function(e) {
                            var r = t12._senders.find(function(t) {
                                return t.track === e;
                            });
                            r && t12._senders.splice(t12._senders.indexOf(r), 1);
                        });
                    };
                } else if ("object" === s2(e22) && e22.RTCPeerConnection && "getSenders" in e22.RTCPeerConnection.prototype && "createDTMFSender" in e22.RTCPeerConnection.prototype && e22.RTCRtpSender && !("dtmf" in e22.RTCRtpSender.prototype)) {
                    var a = e22.RTCPeerConnection.prototype.getSenders;
                    e22.RTCPeerConnection.prototype.getSenders = function() {
                        var e = this, t13 = a.apply(this, []);
                        return t13.forEach(function(t) {
                            return t._pc = e;
                        }), t13;
                    }, Object.defineProperty(e22.RTCRtpSender.prototype, "dtmf", {
                        get: function() {
                            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                        }
                    });
                }
            }
            function d(e25) {
                if (e25.RTCPeerConnection) {
                    var t14 = e25.RTCPeerConnection.prototype.getStats;
                    e25.RTCPeerConnection.prototype.getStats = function() {
                        var e26 = this, [r13, n8, i] = arguments;
                        if (arguments.length > 0 && "function" == typeof r13) return t14.apply(this, arguments);
                        if (0 === t14.length && (0 === arguments.length || "function" != typeof r13)) return t14.apply(this, []);
                        var o = function(e27) {
                            var t15 = {
                            };
                            return e27.result().forEach(function(e) {
                                var r = {
                                    id: e.id,
                                    timestamp: e.timestamp,
                                    type: {
                                        localcandidate: "local-candidate",
                                        remotecandidate: "remote-candidate"
                                    }[e.type] || e.type
                                };
                                e.names().forEach(function(t) {
                                    r[t] = e.stat(t);
                                }), t15[r.id] = r;
                            }), t15;
                        }, s = function(e) {
                            return new Map(Object.keys(e).map(function(t) {
                                return [
                                    t,
                                    e[t]
                                ];
                            }));
                        };
                        if (arguments.length >= 2) return t14.apply(this, [
                            function(e) {
                                n8(s(o(e)));
                            },
                            r13
                        ]);
                        return new Promise(function(r, n) {
                            t14.apply(e26, [
                                function(e) {
                                    r(s(o(e)));
                                },
                                n
                            ]);
                        }).then(n8, i);
                    };
                }
            }
            function h(t16) {
                if ("object" === s2(t16) && t16.RTCPeerConnection && t16.RTCRtpSender && t16.RTCRtpReceiver) {
                    if (!("getStats" in t16.RTCRtpSender.prototype)) {
                        var r14 = t16.RTCPeerConnection.prototype.getSenders;
                        r14 && (t16.RTCPeerConnection.prototype.getSenders = function() {
                            var e = this, t17 = r14.apply(this, []);
                            return t17.forEach(function(t) {
                                return t._pc = e;
                            }), t17;
                        });
                        var n = t16.RTCPeerConnection.prototype.addTrack;
                        n && (t16.RTCPeerConnection.prototype.addTrack = function() {
                            var e = n.apply(this, arguments);
                            return e._pc = this, e;
                        }), t16.RTCRtpSender.prototype.getStats = function() {
                            var t = this;
                            return this._pc.getStats().then(function(r) {
                                return e19.filterStats(r, t.track, !0);
                            });
                        };
                    }
                    if (!("getStats" in t16.RTCRtpReceiver.prototype)) {
                        var i = t16.RTCPeerConnection.prototype.getReceivers;
                        i && (t16.RTCPeerConnection.prototype.getReceivers = function() {
                            var e = this, t18 = i.apply(this, []);
                            return t18.forEach(function(t) {
                                return t._pc = e;
                            }), t18;
                        }), e19.wrapPeerConnectionEvent(t16, "track", function(e) {
                            return e.receiver._pc = e.srcElement, e;
                        }), t16.RTCRtpReceiver.prototype.getStats = function() {
                            var t = this;
                            return this._pc.getStats().then(function(r) {
                                return e19.filterStats(r, t.track, !1);
                            });
                        };
                    }
                    if ("getStats" in t16.RTCRtpSender.prototype && "getStats" in t16.RTCRtpReceiver.prototype) {
                        var o = t16.RTCPeerConnection.prototype.getStats;
                        t16.RTCPeerConnection.prototype.getStats = function() {
                            if (arguments.length > 0 && arguments[0] instanceof t16.MediaStreamTrack) {
                                var e28, r, n, i = arguments[0];
                                return this.getSenders().forEach(function(t) {
                                    t.track === i && (e28 ? n = !0 : e28 = t);
                                }), this.getReceivers().forEach(function(e) {
                                    return e.track === i && (r ? n = !0 : r = e), e.track === i;
                                }), n || e28 && r ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : e28 ? e28.getStats() : r ? r.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
                            }
                            return o.apply(this, arguments);
                        };
                    }
                }
            }
            function f(e29) {
                e29.RTCPeerConnection.prototype.getLocalStreams = function() {
                    var e = this;
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, Object.keys(this._shimmedLocalStreams).map(function(t) {
                        return e._shimmedLocalStreams[t][0];
                    });
                };
                var t19 = e29.RTCPeerConnection.prototype.addTrack;
                e29.RTCPeerConnection.prototype.addTrack = function(e, r) {
                    if (!r) return t19.apply(this, arguments);
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    };
                    var n = t19.apply(this, arguments);
                    return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) && this._shimmedLocalStreams[r.id].push(n) : this._shimmedLocalStreams[r.id] = [
                        r,
                        n
                    ], n;
                };
                var r15 = e29.RTCPeerConnection.prototype.addStream;
                e29.RTCPeerConnection.prototype.addStream = function(e30) {
                    var t20 = this;
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, e30.getTracks().forEach(function(e) {
                        if (t20.getSenders().find(function(t) {
                            return t.track === e;
                        })) throw new DOMException("Track already exists.", "InvalidAccessError");
                    });
                    var n = this.getSenders();
                    r15.apply(this, arguments);
                    var i = this.getSenders().filter(function(e) {
                        return -1 === n.indexOf(e);
                    });
                    this._shimmedLocalStreams[e30.id] = [
                        e30
                    ].concat(i);
                };
                var n9 = e29.RTCPeerConnection.prototype.removeStream;
                e29.RTCPeerConnection.prototype.removeStream = function(e) {
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, delete this._shimmedLocalStreams[e.id], n9.apply(this, arguments);
                };
                var i9 = e29.RTCPeerConnection.prototype.removeTrack;
                e29.RTCPeerConnection.prototype.removeTrack = function(e) {
                    var t = this;
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, e && Object.keys(this._shimmedLocalStreams).forEach(function(r) {
                        var n = t._shimmedLocalStreams[r].indexOf(e);
                        -1 !== n && t._shimmedLocalStreams[r].splice(n, 1), 1 === t._shimmedLocalStreams[r].length && delete t._shimmedLocalStreams[r];
                    }), i9.apply(this, arguments);
                };
            }
            function m(e31, t21) {
                if (e31.RTCPeerConnection) {
                    if (e31.RTCPeerConnection.prototype.addTrack && t21.version >= 65) return f(e31);
                    var r16 = e31.RTCPeerConnection.prototype.getLocalStreams;
                    e31.RTCPeerConnection.prototype.getLocalStreams = function() {
                        var e = this, t = r16.apply(this);
                        return this._reverseStreams = this._reverseStreams || {
                        }, t.map(function(t) {
                            return e._reverseStreams[t.id];
                        });
                    };
                    var n10 = e31.RTCPeerConnection.prototype.addStream;
                    e31.RTCPeerConnection.prototype.addStream = function(t22) {
                        var r = this;
                        if (this._streams = this._streams || {
                        }, this._reverseStreams = this._reverseStreams || {
                        }, t22.getTracks().forEach(function(e) {
                            if (r.getSenders().find(function(t) {
                                return t.track === e;
                            })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        }), !this._reverseStreams[t22.id]) {
                            var i = new e31.MediaStream(t22.getTracks());
                            this._streams[t22.id] = i, this._reverseStreams[i.id] = t22, t22 = i;
                        }
                        n10.apply(this, [
                            t22
                        ]);
                    };
                    var i10 = e31.RTCPeerConnection.prototype.removeStream;
                    e31.RTCPeerConnection.prototype.removeStream = function(e) {
                        this._streams = this._streams || {
                        }, this._reverseStreams = this._reverseStreams || {
                        }, i10.apply(this, [
                            this._streams[e.id] || e
                        ]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id];
                    }, e31.RTCPeerConnection.prototype.addTrack = function(t, r) {
                        var n = this;
                        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                        var i = [].slice.call(arguments, 1);
                        if (1 !== i.length || !i[0].getTracks().find(function(e) {
                            return e === t;
                        })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                        if (this.getSenders().find(function(e) {
                            return e.track === t;
                        })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        this._streams = this._streams || {
                        }, this._reverseStreams = this._reverseStreams || {
                        };
                        var o = this._streams[r.id];
                        if (o) o.addTrack(t), Promise.resolve().then(function() {
                            n.dispatchEvent(new Event("negotiationneeded"));
                        });
                        else {
                            var s = new e31.MediaStream([
                                t
                            ]);
                            this._streams[r.id] = s, this._reverseStreams[s.id] = r, this.addStream(s);
                        }
                        return this.getSenders().find(function(e) {
                            return e.track === t;
                        });
                    }, [
                        "createOffer",
                        "createAnswer"
                    ].forEach(function(t23) {
                        var r17 = e31.RTCPeerConnection.prototype[t23], n11 = o3({
                        }, t23, function() {
                            var e32 = this, t24 = arguments;
                            return arguments.length && "function" == typeof arguments[0] ? r17.apply(this, [
                                function(r) {
                                    var n = c(e32, r);
                                    t24[0].apply(null, [
                                        n
                                    ]);
                                },
                                function(e) {
                                    t24[1] && t24[1].apply(null, e);
                                },
                                arguments[2]
                            ]) : r17.apply(this, arguments).then(function(t) {
                                return c(e32, t);
                            });
                        });
                        e31.RTCPeerConnection.prototype[t23] = n11[t23];
                    });
                    var s3 = e31.RTCPeerConnection.prototype.setLocalDescription;
                    e31.RTCPeerConnection.prototype.setLocalDescription = function() {
                        var e, t, r;
                        return arguments.length && arguments[0].type ? (arguments[0] = (e = this, t = arguments[0], r = t.sdp, Object.keys(e._reverseStreams || []).forEach(function(t) {
                            var n = e._reverseStreams[t], i = e._streams[n.id];
                            r = r.replace(new RegExp(n.id, "g"), i.id);
                        }), new RTCSessionDescription({
                            type: t.type,
                            sdp: r
                        })), s3.apply(this, arguments)) : s3.apply(this, arguments);
                    };
                    var a = Object.getOwnPropertyDescriptor(e31.RTCPeerConnection.prototype, "localDescription");
                    Object.defineProperty(e31.RTCPeerConnection.prototype, "localDescription", {
                        get: function() {
                            var e = a.get.apply(this);
                            return "" === e.type ? e : c(this, e);
                        }
                    }), e31.RTCPeerConnection.prototype.removeTrack = function(e) {
                        var t25, r = this;
                        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                        if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                        if (!(e._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                        this._streams = this._streams || {
                        }, Object.keys(this._streams).forEach(function(n) {
                            r._streams[n].getTracks().find(function(t) {
                                return e.track === t;
                            }) && (t25 = r._streams[n]);
                        }), t25 && (1 === t25.getTracks().length ? this.removeStream(this._reverseStreams[t25.id]) : t25.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")));
                    };
                }
                function c(e, t) {
                    var r = t.sdp;
                    return Object.keys(e._reverseStreams || []).forEach(function(t) {
                        var n = e._reverseStreams[t], i = e._streams[n.id];
                        r = r.replace(new RegExp(i.id, "g"), n.id);
                    }), new RTCSessionDescription({
                        type: t.type,
                        sdp: r
                    });
                }
            }
            function u(e, t26) {
                !e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection && t26.version < 53 && [
                    "setLocalDescription",
                    "setRemoteDescription",
                    "addIceCandidate"
                ].forEach(function(t) {
                    var r = e.RTCPeerConnection.prototype[t], n = o3({
                    }, t, function() {
                        return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments);
                    });
                    e.RTCPeerConnection.prototype[t] = n[t];
                });
            }
            function l(t27, r) {
                e19.wrapPeerConnectionEvent(t27, "negotiationneeded", function(e) {
                    var t = e.target;
                    if (!(r.version < 72 || t.getConfiguration && "plan-b" === t.getConfiguration().sdpSemantics) || "stable" === t.signalingState) return e;
                });
            }
        },
        {
            "../utils.js": "iSxC",
            "./getusermedia": "s6SN",
            "./getdisplaymedia": "VHa8"
        }
    ],
    "NZ1C": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.filterIceServers = n12;
            var r18 = t28(require("../utils"));
            function e33() {
                if ("function" != typeof WeakMap) return null;
                var r = new WeakMap;
                return e33 = function() {
                    return r;
                }, r;
            }
            function t28(r) {
                if (r && r.__esModule) return r;
                if (null === r || "object" != typeof r && "function" != typeof r) return {
                    default: r
                };
                var t = e33();
                if (t && t.has(r)) return t.get(r);
                var n = {
                }, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in r)if (Object.prototype.hasOwnProperty.call(r, i)) {
                    var f = u ? Object.getOwnPropertyDescriptor(r, i) : null;
                    f && (f.get || f.set) ? Object.defineProperty(n, i, f) : n[i] = r[i];
                }
                return n.default = r, t && t.set(r, n), n;
            }
            function n12(e34, t29) {
                var n = !1;
                return (e34 = JSON.parse(JSON.stringify(e34))).filter(function(e35) {
                    if (e35 && (e35.urls || e35.url)) {
                        var t = e35.urls || e35.url;
                        e35.url && !e35.urls && r18.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                        var u = "string" == typeof t;
                        return u && (t = [
                            t
                        ]), t = t.filter(function(r) {
                            if (0 === r.indexOf("stun:")) return !1;
                            var e = r.startsWith("turn") && !r.startsWith("turn:[") && r.includes("transport=udp");
                            return e && !n ? (n = !0, !0) : e && !n;
                        }), delete e35.url, e35.urls = u ? t[0] : t, !!t.length;
                    }
                });
            }
        },
        {
            "../utils": "iSxC"
        }
    ],
    "YHvh": [
        function(require, module, exports) {
            "use strict";
            var r19 = {
                generateIdentifier: function() {
                    return Math.random().toString(36).substr(2, 10);
                }
            };
            r19.localCName = r19.generateIdentifier(), r19.splitLines = function(r20) {
                return r20.trim().split("\n").map(function(r) {
                    return r.trim();
                });
            }, r19.splitSections = function(r21) {
                return r21.split("\nm=").map(function(r, e) {
                    return (e > 0 ? "m=" + r : r).trim() + "\r\n";
                });
            }, r19.getDescription = function(e) {
                var t = r19.splitSections(e);
                return t && t[0];
            }, r19.getMediaSections = function(e) {
                var t = r19.splitSections(e);
                return t.shift(), t;
            }, r19.matchPrefix = function(e, t) {
                return r19.splitLines(e).filter(function(r) {
                    return 0 === r.indexOf(t);
                });
            }, r19.parseCandidate = function(r) {
                for(var e, t = {
                    foundation: (e = 0 === r.indexOf("a=candidate:") ? r.substring(12).split(" ") : r.substring(10).split(" "))[0],
                    component: parseInt(e[1], 10),
                    protocol: e[2].toLowerCase(),
                    priority: parseInt(e[3], 10),
                    ip: e[4],
                    address: e[4],
                    port: parseInt(e[5], 10),
                    type: e[7]
                }, a = 8; a < e.length; a += 2)switch(e[a]){
                    case "raddr":
                        t.relatedAddress = e[a + 1];
                        break;
                    case "rport":
                        t.relatedPort = parseInt(e[a + 1], 10);
                        break;
                    case "tcptype":
                        t.tcpType = e[a + 1];
                        break;
                    case "ufrag":
                        t.ufrag = e[a + 1], t.usernameFragment = e[a + 1];
                        break;
                    default:
                        t[e[a]] = e[a + 1];
                }
                return t;
            }, r19.writeCandidate = function(r) {
                var e = [];
                e.push(r.foundation), e.push(r.component), e.push(r.protocol.toUpperCase()), e.push(r.priority), e.push(r.address || r.ip), e.push(r.port);
                var t = r.type;
                return e.push("typ"), e.push(t), "host" !== t && r.relatedAddress && r.relatedPort && (e.push("raddr"), e.push(r.relatedAddress), e.push("rport"), e.push(r.relatedPort)), r.tcpType && "tcp" === r.protocol.toLowerCase() && (e.push("tcptype"), e.push(r.tcpType)), (r.usernameFragment || r.ufrag) && (e.push("ufrag"), e.push(r.usernameFragment || r.ufrag)), "candidate:" + e.join(" ");
            }, r19.parseIceOptions = function(r) {
                return r.substr(14).split(" ");
            }, r19.parseRtpMap = function(r) {
                var e = r.substr(9).split(" "), t = {
                    payloadType: parseInt(e.shift(), 10)
                };
                return e = e[0].split("/"), t.name = e[0], t.clockRate = parseInt(e[1], 10), t.channels = 3 === e.length ? parseInt(e[2], 10) : 1, t.numChannels = t.channels, t;
            }, r19.writeRtpMap = function(r) {
                var e = r.payloadType;
                void 0 !== r.preferredPayloadType && (e = r.preferredPayloadType);
                var t = r.channels || r.numChannels || 1;
                return "a=rtpmap:" + e + " " + r.name + "/" + r.clockRate + (1 !== t ? "/" + t : "") + "\r\n";
            }, r19.parseExtmap = function(r) {
                var e = r.substr(9).split(" ");
                return {
                    id: parseInt(e[0], 10),
                    direction: e[0].indexOf("/") > 0 ? e[0].split("/")[1] : "sendrecv",
                    uri: e[1]
                };
            }, r19.writeExtmap = function(r) {
                return "a=extmap:" + (r.id || r.preferredId) + (r.direction && "sendrecv" !== r.direction ? "/" + r.direction : "") + " " + r.uri + "\r\n";
            }, r19.parseFmtp = function(r) {
                for(var e, t = {
                }, a = r.substr(r.indexOf(" ") + 1).split(";"), n = 0; n < a.length; n++)t[(e = a[n].trim().split("="))[0].trim()] = e[1];
                return t;
            }, r19.writeFmtp = function(r) {
                var e36 = "", t = r.payloadType;
                if (void 0 !== r.preferredPayloadType && (t = r.preferredPayloadType), r.parameters && Object.keys(r.parameters).length) {
                    var a = [];
                    Object.keys(r.parameters).forEach(function(e) {
                        r.parameters[e] ? a.push(e + "=" + r.parameters[e]) : a.push(e);
                    }), e36 += "a=fmtp:" + t + " " + a.join(";") + "\r\n";
                }
                return e36;
            }, r19.parseRtcpFb = function(r) {
                var e = r.substr(r.indexOf(" ") + 1).split(" ");
                return {
                    type: e.shift(),
                    parameter: e.join(" ")
                };
            }, r19.writeRtcpFb = function(r22) {
                var e = "", t = r22.payloadType;
                return void 0 !== r22.preferredPayloadType && (t = r22.preferredPayloadType), r22.rtcpFeedback && r22.rtcpFeedback.length && r22.rtcpFeedback.forEach(function(r) {
                    e += "a=rtcp-fb:" + t + " " + r.type + (r.parameter && r.parameter.length ? " " + r.parameter : "") + "\r\n";
                }), e;
            }, r19.parseSsrcMedia = function(r) {
                var e = r.indexOf(" "), t = {
                    ssrc: parseInt(r.substr(7, e - 7), 10)
                }, a = r.indexOf(":", e);
                return a > -1 ? (t.attribute = r.substr(e + 1, a - e - 1), t.value = r.substr(a + 1)) : t.attribute = r.substr(e + 1), t;
            }, r19.parseSsrcGroup = function(r23) {
                var e = r23.substr(13).split(" ");
                return {
                    semantics: e.shift(),
                    ssrcs: e.map(function(r) {
                        return parseInt(r, 10);
                    })
                };
            }, r19.getMid = function(e) {
                var t = r19.matchPrefix(e, "a=mid:")[0];
                if (t) return t.substr(6);
            }, r19.parseFingerprint = function(r) {
                var e = r.substr(14).split(" ");
                return {
                    algorithm: e[0].toLowerCase(),
                    value: e[1]
                };
            }, r19.getDtlsParameters = function(e, t) {
                return {
                    role: "auto",
                    fingerprints: r19.matchPrefix(e + t, "a=fingerprint:").map(r19.parseFingerprint)
                };
            }, r19.writeDtlsParameters = function(r24, e) {
                var t = "a=setup:" + e + "\r\n";
                return r24.fingerprints.forEach(function(r) {
                    t += "a=fingerprint:" + r.algorithm + " " + r.value + "\r\n";
                }), t;
            }, r19.parseCryptoLine = function(r) {
                var e = r.substr(9).split(" ");
                return {
                    tag: parseInt(e[0], 10),
                    cryptoSuite: e[1],
                    keyParams: e[2],
                    sessionParams: e.slice(3)
                };
            }, r19.writeCryptoLine = function(e) {
                return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == typeof e.keyParams ? r19.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n";
            }, r19.parseCryptoKeyParams = function(r) {
                if (0 !== r.indexOf("inline:")) return null;
                var e = r.substr(7).split("|");
                return {
                    keyMethod: "inline",
                    keySalt: e[0],
                    lifeTime: e[1],
                    mkiValue: e[2] ? e[2].split(":")[0] : void 0,
                    mkiLength: e[2] ? e[2].split(":")[1] : void 0
                };
            }, r19.writeCryptoKeyParams = function(r) {
                return r.keyMethod + ":" + r.keySalt + (r.lifeTime ? "|" + r.lifeTime : "") + (r.mkiValue && r.mkiLength ? "|" + r.mkiValue + ":" + r.mkiLength : "");
            }, r19.getCryptoParameters = function(e, t) {
                return r19.matchPrefix(e + t, "a=crypto:").map(r19.parseCryptoLine);
            }, r19.getIceParameters = function(e, t) {
                var a = r19.matchPrefix(e + t, "a=ice-ufrag:")[0], n = r19.matchPrefix(e + t, "a=ice-pwd:")[0];
                return a && n ? {
                    usernameFragment: a.substr(12),
                    password: n.substr(10)
                } : null;
            }, r19.writeIceParameters = function(r) {
                return "a=ice-ufrag:" + r.usernameFragment + "\r\na=ice-pwd:" + r.password + "\r\n";
            }, r19.parseRtpParameters = function(e37) {
                for(var t = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                }, a = r19.splitLines(e37)[0].split(" "), n = 3; n < a.length; n++){
                    var s = a[n], i = r19.matchPrefix(e37, "a=rtpmap:" + s + " ")[0];
                    if (i) {
                        var p = r19.parseRtpMap(i), c = r19.matchPrefix(e37, "a=fmtp:" + s + " ");
                        switch(p.parameters = c.length ? r19.parseFmtp(c[0]) : {
                        }, p.rtcpFeedback = r19.matchPrefix(e37, "a=rtcp-fb:" + s + " ").map(r19.parseRtcpFb), t.codecs.push(p), p.name.toUpperCase()){
                            case "RED":
                            case "ULPFEC":
                                t.fecMechanisms.push(p.name.toUpperCase());
                        }
                    }
                }
                return r19.matchPrefix(e37, "a=extmap:").forEach(function(e) {
                    t.headerExtensions.push(r19.parseExtmap(e));
                }), t;
            }, r19.writeRtpDescription = function(e38, t) {
                var a = "";
                a += "m=" + e38 + " ", a += t.codecs.length > 0 ? "9" : "0", a += " UDP/TLS/RTP/SAVPF ", a += t.codecs.map(function(r) {
                    return void 0 !== r.preferredPayloadType ? r.preferredPayloadType : r.payloadType;
                }).join(" ") + "\r\n", a += "c=IN IP4 0.0.0.0\r\n", a += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
                    a += r19.writeRtpMap(e), a += r19.writeFmtp(e), a += r19.writeRtcpFb(e);
                });
                var n = 0;
                return t.codecs.forEach(function(r) {
                    r.maxptime > n && (n = r.maxptime);
                }), n > 0 && (a += "a=maxptime:" + n + "\r\n"), a += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach(function(e) {
                    a += r19.writeExtmap(e);
                }), a;
            }, r19.parseRtpEncodingParameters = function(e39) {
                var t, a = [], n = r19.parseRtpParameters(e39), s = -1 !== n.fecMechanisms.indexOf("RED"), i = -1 !== n.fecMechanisms.indexOf("ULPFEC"), p = r19.matchPrefix(e39, "a=ssrc:").map(function(e) {
                    return r19.parseSsrcMedia(e);
                }).filter(function(r) {
                    return "cname" === r.attribute;
                }), c = p.length > 0 && p[0].ssrc, o = r19.matchPrefix(e39, "a=ssrc-group:FID").map(function(r25) {
                    return r25.substr(17).split(" ").map(function(r) {
                        return parseInt(r, 10);
                    });
                });
                o.length > 0 && o[0].length > 1 && o[0][0] === c && (t = o[0][1]), n.codecs.forEach(function(r) {
                    if ("RTX" === r.name.toUpperCase() && r.parameters.apt) {
                        var e = {
                            ssrc: c,
                            codecPayloadType: parseInt(r.parameters.apt, 10)
                        };
                        c && t && (e.rtx = {
                            ssrc: t
                        }), a.push(e), s && ((e = JSON.parse(JSON.stringify(e))).fec = {
                            ssrc: c,
                            mechanism: i ? "red+ulpfec" : "red"
                        }, a.push(e));
                    }
                }), 0 === a.length && c && a.push({
                    ssrc: c
                });
                var u = r19.matchPrefix(e39, "b=");
                return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 1000 * parseInt(u[0].substr(5), 10) * 0.95 - 16000 : void 0, a.forEach(function(r) {
                    r.maxBitrate = u;
                })), a;
            }, r19.parseRtcpParameters = function(e40) {
                var t = {
                }, a = r19.matchPrefix(e40, "a=ssrc:").map(function(e) {
                    return r19.parseSsrcMedia(e);
                }).filter(function(r) {
                    return "cname" === r.attribute;
                })[0];
                a && (t.cname = a.value, t.ssrc = a.ssrc);
                var n = r19.matchPrefix(e40, "a=rtcp-rsize");
                t.reducedSize = n.length > 0, t.compound = 0 === n.length;
                var s = r19.matchPrefix(e40, "a=rtcp-mux");
                return t.mux = s.length > 0, t;
            }, r19.parseMsid = function(e41) {
                var t, a = r19.matchPrefix(e41, "a=msid:");
                if (1 === a.length) return {
                    stream: (t = a[0].substr(7).split(" "))[0],
                    track: t[1]
                };
                var n = r19.matchPrefix(e41, "a=ssrc:").map(function(e) {
                    return r19.parseSsrcMedia(e);
                }).filter(function(r) {
                    return "msid" === r.attribute;
                });
                return n.length > 0 ? {
                    stream: (t = n[0].value.split(" "))[0],
                    track: t[1]
                } : void 0;
            }, r19.parseSctpDescription = function(e) {
                var t, a = r19.parseMLine(e), n = r19.matchPrefix(e, "a=max-message-size:");
                n.length > 0 && (t = parseInt(n[0].substr(19), 10)), isNaN(t) && (t = 65536);
                var s = r19.matchPrefix(e, "a=sctp-port:");
                if (s.length > 0) return {
                    port: parseInt(s[0].substr(12), 10),
                    protocol: a.fmt,
                    maxMessageSize: t
                };
                if (r19.matchPrefix(e, "a=sctpmap:").length > 0) {
                    var i = r19.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
                    return {
                        port: parseInt(i[0], 10),
                        protocol: i[1],
                        maxMessageSize: t
                    };
                }
            }, r19.writeSctpDescription = function(r, e) {
                var t = [];
                return t = "DTLS/SCTP" !== r.protocol ? [
                    "m=" + r.kind + " 9 " + r.protocol + " " + e.protocol + "\r\n",
                    "c=IN IP4 0.0.0.0\r\n",
                    "a=sctp-port:" + e.port + "\r\n"
                ] : [
                    "m=" + r.kind + " 9 " + r.protocol + " " + e.port + "\r\n",
                    "c=IN IP4 0.0.0.0\r\n",
                    "a=sctpmap:" + e.port + " " + e.protocol + " 65535\r\n"
                ], void 0 !== e.maxMessageSize && t.push("a=max-message-size:" + e.maxMessageSize + "\r\n"), t.join("");
            }, r19.generateSessionId = function() {
                return Math.random().toString().substr(2, 21);
            }, r19.writeSessionBoilerplate = function(e, t, a) {
                var n = void 0 !== t ? t : 2;
                return "v=0\r\no=" + (a || "thisisadapterortc") + " " + (e || r19.generateSessionId()) + " " + n + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
            }, r19.writeMediaSection = function(e, t, a, n) {
                var s = r19.writeRtpDescription(e.kind, t);
                if (s += r19.writeIceParameters(e.iceGatherer.getLocalParameters()), s += r19.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === a ? "actpass" : "active"), s += "a=mid:" + e.mid + "\r\n", e.direction ? s += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? s += "a=sendrecv\r\n" : e.rtpSender ? s += "a=sendonly\r\n" : e.rtpReceiver ? s += "a=recvonly\r\n" : s += "a=inactive\r\n", e.rtpSender) {
                    var i = "msid:" + n.id + " " + e.rtpSender.track.id + "\r\n";
                    s += "a=" + i, s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + i, e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + i, s += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
                }
                return s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r19.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r19.localCName + "\r\n"), s;
            }, r19.getDirection = function(e, t) {
                for(var a = r19.splitLines(e), n = 0; n < a.length; n++)switch(a[n]){
                    case "a=sendrecv":
                    case "a=sendonly":
                    case "a=recvonly":
                    case "a=inactive":
                        return a[n].substr(2);
                }
                return t ? r19.getDirection(t) : "sendrecv";
            }, r19.getKind = function(e) {
                return r19.splitLines(e)[0].split(" ")[0].substr(2);
            }, r19.isRejected = function(r) {
                return "0" === r.split(" ", 2)[1];
            }, r19.parseMLine = function(e) {
                var t = r19.splitLines(e)[0].substr(2).split(" ");
                return {
                    kind: t[0],
                    port: parseInt(t[1], 10),
                    protocol: t[2],
                    fmt: t.slice(3).join(" ")
                };
            }, r19.parseOLine = function(e) {
                var t = r19.matchPrefix(e, "o=")[0].substr(2).split(" ");
                return {
                    username: t[0],
                    sessionId: t[1],
                    sessionVersion: parseInt(t[2], 10),
                    netType: t[3],
                    addressType: t[4],
                    address: t[5]
                };
            }, r19.isValidSDP = function(e) {
                if ("string" != typeof e || 0 === e.length) return !1;
                for(var t = r19.splitLines(e), a = 0; a < t.length; a++)if (t[a].length < 2 || "=" !== t[a].charAt(1)) return !1;
                return !0;
            }, "object" == typeof module && (module.exports = r19);
        },
        {
        }
    ],
    "NJ2u": [
        function(require, module, exports) {
            "use strict";
            var e42 = require("sdp");
            function t30(e) {
                return ({
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate"
                })[e.type] || e.type;
            }
            function r26(t, r, n, a, i) {
                var s = e42.writeRtpDescription(t.kind, r);
                if (s += e42.writeIceParameters(t.iceGatherer.getLocalParameters()), s += e42.writeDtlsParameters(t.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : i || "active"), s += "a=mid:" + t.mid + "\r\n", t.rtpSender && t.rtpReceiver ? s += "a=sendrecv\r\n" : t.rtpSender ? s += "a=sendonly\r\n" : t.rtpReceiver ? s += "a=recvonly\r\n" : s += "a=inactive\r\n", t.rtpSender) {
                    var o = t.rtpSender._initialTrackId || t.rtpSender.track.id;
                    t.rtpSender._initialTrackId = o;
                    var c = "msid:" + (a ? a.id : "-") + " " + o + "\r\n";
                    s += "a=" + c, s += "a=ssrc:" + t.sendEncodingParameters[0].ssrc + " " + c, t.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + t.sendEncodingParameters[0].rtx.ssrc + " " + c, s += "a=ssrc-group:FID " + t.sendEncodingParameters[0].ssrc + " " + t.sendEncodingParameters[0].rtx.ssrc + "\r\n");
                }
                return s += "a=ssrc:" + t.sendEncodingParameters[0].ssrc + " cname:" + e42.localCName + "\r\n", t.rtpSender && t.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + t.sendEncodingParameters[0].rtx.ssrc + " cname:" + e42.localCName + "\r\n"), s;
            }
            function n13(e43, t) {
                var r = !1;
                return (e43 = JSON.parse(JSON.stringify(e43))).filter(function(e44) {
                    if (e44 && (e44.urls || e44.url)) {
                        var n = e44.urls || e44.url;
                        e44.url && !e44.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                        var a = "string" == typeof n;
                        return a && (n = [
                            n
                        ]), n = n.filter(function(e) {
                            return 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !r ? (r = !0, !0) : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp");
                        }), delete e44.url, e44.urls = a ? n[0] : n, !!n.length;
                    }
                });
            }
            function a4(e45, t31) {
                var r27 = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: []
                }, n14 = function(e, t) {
                    e = parseInt(e, 10);
                    for(var r = 0; r < t.length; r++)if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r];
                }, a5 = function(e, t, r, a) {
                    var i = n14(e.parameters.apt, r), s = n14(t.parameters.apt, a);
                    return i && s && i.name.toLowerCase() === s.name.toLowerCase();
                };
                return e45.codecs.forEach(function(n) {
                    for(var i = 0; i < t31.codecs.length; i++){
                        var s = t31.codecs[i];
                        if (n.name.toLowerCase() === s.name.toLowerCase() && n.clockRate === s.clockRate) {
                            if ("rtx" === n.name.toLowerCase() && n.parameters && s.parameters.apt && !a5(n, s, e45.codecs, t31.codecs)) continue;
                            (s = JSON.parse(JSON.stringify(s))).numChannels = Math.min(n.numChannels, s.numChannels), r27.codecs.push(s), s.rtcpFeedback = s.rtcpFeedback.filter(function(e) {
                                for(var t = 0; t < n.rtcpFeedback.length; t++)if (n.rtcpFeedback[t].type === e.type && n.rtcpFeedback[t].parameter === e.parameter) return !0;
                                return !1;
                            });
                            break;
                        }
                    }
                }), e45.headerExtensions.forEach(function(e) {
                    for(var n = 0; n < t31.headerExtensions.length; n++){
                        var a = t31.headerExtensions[n];
                        if (e.uri === a.uri) {
                            r27.headerExtensions.push(a);
                            break;
                        }
                    }
                }), r27;
            }
            function i11(e, t, r) {
                return -1 !== ({
                    offer: {
                        setLocalDescription: [
                            "stable",
                            "have-local-offer"
                        ],
                        setRemoteDescription: [
                            "stable",
                            "have-remote-offer"
                        ]
                    },
                    answer: {
                        setLocalDescription: [
                            "have-remote-offer",
                            "have-local-pranswer"
                        ],
                        setRemoteDescription: [
                            "have-local-offer",
                            "have-remote-pranswer"
                        ]
                    }
                })[t][e].indexOf(r);
            }
            function s4(e46, t) {
                var r = e46.getRemoteCandidates().find(function(e) {
                    return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type;
                });
                return r || e46.addRemoteCandidate(t), !r;
            }
            function o4(e, t) {
                var r = new Error(t);
                return r.name = e, r.code = ({
                    NotSupportedError: 9,
                    InvalidStateError: 11,
                    InvalidAccessError: 15,
                    TypeError: void 0,
                    OperationError: void 0
                })[e], r;
            }
            module.exports = function(c4, d2) {
                function p1(e, t) {
                    t.addTrack(e), t.dispatchEvent(new c4.MediaStreamTrackEvent("addtrack", {
                        track: e
                    }));
                }
                function l2(e, t, r, n) {
                    var a = new Event("track");
                    a.track = t, a.receiver = r, a.transceiver = {
                        receiver: r
                    }, a.streams = n, c4.setTimeout(function() {
                        e._dispatchEvent("track", a);
                    });
                }
                var f1 = function(t) {
                    var r = this, a = document.createDocumentFragment();
                    if ([
                        "addEventListener",
                        "removeEventListener",
                        "dispatchEvent"
                    ].forEach(function(e) {
                        r[e] = a[e].bind(a);
                    }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", t = JSON.parse(JSON.stringify(t || {
                    })), this.usingBundle = "max-bundle" === t.bundlePolicy, "negotiate" === t.rtcpMuxPolicy) throw o4("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                    switch(t.rtcpMuxPolicy || (t.rtcpMuxPolicy = "require"), t.iceTransportPolicy){
                        case "all":
                        case "relay":
                            break;
                        default:
                            t.iceTransportPolicy = "all";
                    }
                    switch(t.bundlePolicy){
                        case "balanced":
                        case "max-compat":
                        case "max-bundle":
                            break;
                        default:
                            t.bundlePolicy = "balanced";
                    }
                    if (t.iceServers = n13(t.iceServers || [], d2), this._iceGatherers = [], t.iceCandidatePoolSize) for(var i = t.iceCandidatePoolSize; i > 0; i--)this._iceGatherers.push(new c4.RTCIceGatherer({
                        iceServers: t.iceServers,
                        gatherPolicy: t.iceTransportPolicy
                    }));
                    else t.iceCandidatePoolSize = 0;
                    this._config = t, this.transceivers = [], this._sdpSessionId = e42.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
                };
                Object.defineProperty(f1.prototype, "localDescription", {
                    configurable: !0,
                    get: function() {
                        return this._localDescription;
                    }
                }), Object.defineProperty(f1.prototype, "remoteDescription", {
                    configurable: !0,
                    get: function() {
                        return this._remoteDescription;
                    }
                }), f1.prototype.onicecandidate = null, f1.prototype.onaddstream = null, f1.prototype.ontrack = null, f1.prototype.onremovestream = null, f1.prototype.onsignalingstatechange = null, f1.prototype.oniceconnectionstatechange = null, f1.prototype.onconnectionstatechange = null, f1.prototype.onicegatheringstatechange = null, f1.prototype.onnegotiationneeded = null, f1.prototype.ondatachannel = null, f1.prototype._dispatchEvent = function(e, t) {
                    this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t));
                }, f1.prototype._emitGatheringStateChange = function() {
                    var e = new Event("icegatheringstatechange");
                    this._dispatchEvent("icegatheringstatechange", e);
                }, f1.prototype.getConfiguration = function() {
                    return this._config;
                }, f1.prototype.getLocalStreams = function() {
                    return this.localStreams;
                }, f1.prototype.getRemoteStreams = function() {
                    return this.remoteStreams;
                }, f1.prototype._createTransceiver = function(e, t) {
                    var r = this.transceivers.length > 0, n = {
                        track: null,
                        iceGatherer: null,
                        iceTransport: null,
                        dtlsTransport: null,
                        localCapabilities: null,
                        remoteCapabilities: null,
                        rtpSender: null,
                        rtpReceiver: null,
                        kind: e,
                        mid: null,
                        sendEncodingParameters: null,
                        recvEncodingParameters: null,
                        stream: null,
                        associatedRemoteMediaStreams: [],
                        wantReceive: !0
                    };
                    if (this.usingBundle && r) n.iceTransport = this.transceivers[0].iceTransport, n.dtlsTransport = this.transceivers[0].dtlsTransport;
                    else {
                        var a = this._createIceAndDtlsTransports();
                        n.iceTransport = a.iceTransport, n.dtlsTransport = a.dtlsTransport;
                    }
                    return t || this.transceivers.push(n), n;
                }, f1.prototype.addTrack = function(e, t32) {
                    if (this._isClosed) throw o4("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                    var r;
                    if (this.transceivers.find(function(t) {
                        return t.track === e;
                    })) throw o4("InvalidAccessError", "Track already exists.");
                    for(var n = 0; n < this.transceivers.length; n++)this.transceivers[n].track || this.transceivers[n].kind !== e.kind || (r = this.transceivers[n]);
                    return r || (r = this._createTransceiver(e.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(t32) && this.localStreams.push(t32), r.track = e, r.stream = t32, r.rtpSender = new c4.RTCRtpSender(e, r.dtlsTransport), r.rtpSender;
                }, f1.prototype.addStream = function(e47) {
                    var t = this;
                    if (d2 >= 15025) e47.getTracks().forEach(function(r) {
                        t.addTrack(r, e47);
                    });
                    else {
                        var r28 = e47.clone();
                        e47.getTracks().forEach(function(e48, t) {
                            var n = r28.getTracks()[t];
                            e48.addEventListener("enabled", function(e) {
                                n.enabled = e.enabled;
                            });
                        }), r28.getTracks().forEach(function(e) {
                            t.addTrack(e, r28);
                        });
                    }
                }, f1.prototype.removeTrack = function(e49) {
                    if (this._isClosed) throw o4("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                    if (!(e49 instanceof c4.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                    var t33 = this.transceivers.find(function(t) {
                        return t.rtpSender === e49;
                    });
                    if (!t33) throw o4("InvalidAccessError", "Sender was not created by this connection.");
                    var r = t33.stream;
                    t33.rtpSender.stop(), t33.rtpSender = null, t33.track = null, t33.stream = null, -1 === this.transceivers.map(function(e) {
                        return e.stream;
                    }).indexOf(r) && this.localStreams.indexOf(r) > -1 && this.localStreams.splice(this.localStreams.indexOf(r), 1), this._maybeFireNegotiationNeeded();
                }, f1.prototype.removeStream = function(e50) {
                    var t34 = this;
                    e50.getTracks().forEach(function(e) {
                        var r = t34.getSenders().find(function(t) {
                            return t.track === e;
                        });
                        r && t34.removeTrack(r);
                    });
                }, f1.prototype.getSenders = function() {
                    return this.transceivers.filter(function(e) {
                        return !!e.rtpSender;
                    }).map(function(e) {
                        return e.rtpSender;
                    });
                }, f1.prototype.getReceivers = function() {
                    return this.transceivers.filter(function(e) {
                        return !!e.rtpReceiver;
                    }).map(function(e) {
                        return e.rtpReceiver;
                    });
                }, f1.prototype._createIceGatherer = function(e, t35) {
                    var r = this;
                    if (t35 && e > 0) return this.transceivers[0].iceGatherer;
                    if (this._iceGatherers.length) return this._iceGatherers.shift();
                    var n = new c4.RTCIceGatherer({
                        iceServers: this._config.iceServers,
                        gatherPolicy: this._config.iceTransportPolicy
                    });
                    return Object.defineProperty(n, "state", {
                        value: "new",
                        writable: !0
                    }), this.transceivers[e].bufferedCandidateEvents = [], this.transceivers[e].bufferCandidates = function(t) {
                        var a = !t.candidate || 0 === Object.keys(t.candidate).length;
                        n.state = a ? "completed" : "gathering", null !== r.transceivers[e].bufferedCandidateEvents && r.transceivers[e].bufferedCandidateEvents.push(t);
                    }, n.addEventListener("localcandidate", this.transceivers[e].bufferCandidates), n;
                }, f1.prototype._gather = function(t, r) {
                    var n = this, a = this.transceivers[r].iceGatherer;
                    if (!a.onlocalcandidate) {
                        var i12 = this.transceivers[r].bufferedCandidateEvents;
                        this.transceivers[r].bufferedCandidateEvents = null, a.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates), a.onlocalcandidate = function(i) {
                            if (!(n.usingBundle && r > 0)) {
                                var s = new Event("icecandidate");
                                s.candidate = {
                                    sdpMid: t,
                                    sdpMLineIndex: r
                                };
                                var o = i.candidate, c = !o || 0 === Object.keys(o).length;
                                if (c) "new" !== a.state && "gathering" !== a.state || (a.state = "completed");
                                else {
                                    "new" === a.state && (a.state = "gathering"), o.component = 1, o.ufrag = a.getLocalParameters().usernameFragment;
                                    var d = e42.writeCandidate(o);
                                    s.candidate = Object.assign(s.candidate, e42.parseCandidate(d)), s.candidate.candidate = d, s.candidate.toJSON = function() {
                                        return {
                                            candidate: s.candidate.candidate,
                                            sdpMid: s.candidate.sdpMid,
                                            sdpMLineIndex: s.candidate.sdpMLineIndex,
                                            usernameFragment: s.candidate.usernameFragment
                                        };
                                    };
                                }
                                var p = e42.getMediaSections(n._localDescription.sdp);
                                p[s.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + s.candidate.candidate + "\r\n", n._localDescription.sdp = e42.getDescription(n._localDescription.sdp) + p.join("");
                                var l = n.transceivers.every(function(e) {
                                    return e.iceGatherer && "completed" === e.iceGatherer.state;
                                });
                                "gathering" !== n.iceGatheringState && (n.iceGatheringState = "gathering", n._emitGatheringStateChange()), c || n._dispatchEvent("icecandidate", s), l && (n._dispatchEvent("icecandidate", new Event("icecandidate")), n.iceGatheringState = "complete", n._emitGatheringStateChange());
                            }
                        }, c4.setTimeout(function() {
                            i12.forEach(function(e) {
                                a.onlocalcandidate(e);
                            });
                        }, 0);
                    }
                }, f1.prototype._createIceAndDtlsTransports = function() {
                    var e = this, t = new c4.RTCIceTransport(null);
                    t.onicestatechange = function() {
                        e._updateIceConnectionState(), e._updateConnectionState();
                    };
                    var r = new c4.RTCDtlsTransport(t);
                    return r.ondtlsstatechange = function() {
                        e._updateConnectionState();
                    }, r.onerror = function() {
                        Object.defineProperty(r, "state", {
                            value: "failed",
                            writable: !0
                        }), e._updateConnectionState();
                    }, {
                        iceTransport: t,
                        dtlsTransport: r
                    };
                }, f1.prototype._disposeIceAndDtlsTransports = function(e) {
                    var t = this.transceivers[e].iceGatherer;
                    t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                    var r = this.transceivers[e].iceTransport;
                    r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
                    var n = this.transceivers[e].dtlsTransport;
                    n && (delete n.ondtlsstatechange, delete n.onerror, delete this.transceivers[e].dtlsTransport);
                }, f1.prototype._transceive = function(t, r, n) {
                    var i = a4(t.localCapabilities, t.remoteCapabilities);
                    r && t.rtpSender && (i.encodings = t.sendEncodingParameters, i.rtcp = {
                        cname: e42.localCName,
                        compound: t.rtcpParameters.compound
                    }, t.recvEncodingParameters.length && (i.rtcp.ssrc = t.recvEncodingParameters[0].ssrc), t.rtpSender.send(i)), n && t.rtpReceiver && i.codecs.length > 0 && ("video" === t.kind && t.recvEncodingParameters && d2 < 15019 && t.recvEncodingParameters.forEach(function(e) {
                        delete e.rtx;
                    }), t.recvEncodingParameters.length ? i.encodings = t.recvEncodingParameters : i.encodings = [
                        {
                        }
                    ], i.rtcp = {
                        compound: t.rtcpParameters.compound
                    }, t.rtcpParameters.cname && (i.rtcp.cname = t.rtcpParameters.cname), t.sendEncodingParameters.length && (i.rtcp.ssrc = t.sendEncodingParameters[0].ssrc), t.rtpReceiver.receive(i));
                }, f1.prototype.setLocalDescription = function(t36) {
                    var r29, n15, s = this;
                    if (-1 === [
                        "offer",
                        "answer"
                    ].indexOf(t36.type)) return Promise.reject(o4("TypeError", 'Unsupported type "' + t36.type + '"'));
                    if (!i11("setLocalDescription", t36.type, s.signalingState) || s._isClosed) return Promise.reject(o4("InvalidStateError", "Can not set local " + t36.type + " in state " + s.signalingState));
                    if ("offer" === t36.type) r29 = e42.splitSections(t36.sdp), n15 = r29.shift(), r29.forEach(function(t, r) {
                        var n = e42.parseRtpParameters(t);
                        s.transceivers[r].localCapabilities = n;
                    }), s.transceivers.forEach(function(e, t) {
                        s._gather(e.mid, t);
                    });
                    else if ("answer" === t36.type) {
                        r29 = e42.splitSections(s._remoteDescription.sdp), n15 = r29.shift();
                        var c = e42.matchPrefix(n15, "a=ice-lite").length > 0;
                        r29.forEach(function(t, r) {
                            var i = s.transceivers[r], o = i.iceGatherer, d = i.iceTransport, p = i.dtlsTransport, l = i.localCapabilities, f = i.remoteCapabilities;
                            if (!(e42.isRejected(t) && 0 === e42.matchPrefix(t, "a=bundle-only").length) && !i.rejected) {
                                var u = e42.getIceParameters(t, n15), v = e42.getDtlsParameters(t, n15);
                                c && (v.role = "server"), s.usingBundle && 0 !== r || (s._gather(i.mid, r), "new" === d.state && d.start(o, u, c ? "controlling" : "controlled"), "new" === p.state && p.start(v));
                                var h = a4(l, f);
                                s._transceive(i, h.codecs.length > 0, !1);
                            }
                        });
                    }
                    return s._localDescription = {
                        type: t36.type,
                        sdp: t36.sdp
                    }, "offer" === t36.type ? s._updateSignalingState("have-local-offer") : s._updateSignalingState("stable"), Promise.resolve();
                }, f1.prototype.setRemoteDescription = function(t37) {
                    var r30 = this;
                    if (-1 === [
                        "offer",
                        "answer"
                    ].indexOf(t37.type)) return Promise.reject(o4("TypeError", 'Unsupported type "' + t37.type + '"'));
                    if (!i11("setRemoteDescription", t37.type, r30.signalingState) || r30._isClosed) return Promise.reject(o4("InvalidStateError", "Can not set remote " + t37.type + " in state " + r30.signalingState));
                    var n16 = {
                    };
                    r30.remoteStreams.forEach(function(e) {
                        n16[e.id] = e;
                    });
                    var f = [], u3 = e42.splitSections(t37.sdp), v = u3.shift(), h = e42.matchPrefix(v, "a=ice-lite").length > 0, m = e42.matchPrefix(v, "a=group:BUNDLE ").length > 0;
                    r30.usingBundle = m;
                    var g1 = e42.matchPrefix(v, "a=ice-options:")[0];
                    return r30.canTrickleIceCandidates = !!g1 && g1.substr(14).split(" ").indexOf("trickle") >= 0, u3.forEach(function(i, o) {
                        var l = e42.splitLines(i), u = e42.getKind(i), g = e42.isRejected(i) && 0 === e42.matchPrefix(i, "a=bundle-only").length, y = l[0].substr(2).split(" ")[2], S = e42.getDirection(i, v), T = e42.parseMsid(i), E = e42.getMid(i) || e42.generateIdentifier();
                        if (g || "application" === u && ("DTLS/SCTP" === y || "UDP/DTLS/SCTP" === y)) r30.transceivers[o] = {
                            mid: E,
                            kind: u,
                            protocol: y,
                            rejected: !0
                        };
                        else {
                            var C, P, w, R, _, k, b, x, D;
                            !g && r30.transceivers[o] && r30.transceivers[o].rejected && (r30.transceivers[o] = r30._createTransceiver(u, !0));
                            var I, L, M = e42.parseRtpParameters(i);
                            g || (I = e42.getIceParameters(i, v), (L = e42.getDtlsParameters(i, v)).role = "client"), b = e42.parseRtpEncodingParameters(i);
                            var O = e42.parseRtcpParameters(i), G = e42.matchPrefix(i, "a=end-of-candidates", v).length > 0, j = e42.matchPrefix(i, "a=candidate:").map(function(t) {
                                return e42.parseCandidate(t);
                            }).filter(function(e) {
                                return 1 === e.component;
                            });
                            if (("offer" === t37.type || "answer" === t37.type) && !g && m && o > 0 && r30.transceivers[o] && (r30._disposeIceAndDtlsTransports(o), r30.transceivers[o].iceGatherer = r30.transceivers[0].iceGatherer, r30.transceivers[o].iceTransport = r30.transceivers[0].iceTransport, r30.transceivers[o].dtlsTransport = r30.transceivers[0].dtlsTransport, r30.transceivers[o].rtpSender && r30.transceivers[o].rtpSender.setTransport(r30.transceivers[0].dtlsTransport), r30.transceivers[o].rtpReceiver && r30.transceivers[o].rtpReceiver.setTransport(r30.transceivers[0].dtlsTransport)), "offer" !== t37.type || g) {
                                if ("answer" === t37.type && !g) P = (C = r30.transceivers[o]).iceGatherer, w = C.iceTransport, R = C.dtlsTransport, _ = C.rtpReceiver, k = C.sendEncodingParameters, x = C.localCapabilities, r30.transceivers[o].recvEncodingParameters = b, r30.transceivers[o].remoteCapabilities = M, r30.transceivers[o].rtcpParameters = O, j.length && "new" === w.state && (!h && !G || m && 0 !== o ? j.forEach(function(e) {
                                    s4(C.iceTransport, e);
                                }) : w.setRemoteCandidates(j)), m && 0 !== o || ("new" === w.state && w.start(P, I, "controlling"), "new" === R.state && R.start(L)), !a4(C.localCapabilities, C.remoteCapabilities).codecs.filter(function(e) {
                                    return "rtx" === e.name.toLowerCase();
                                }).length && C.sendEncodingParameters[0].rtx && delete C.sendEncodingParameters[0].rtx, r30._transceive(C, "sendrecv" === S || "recvonly" === S, "sendrecv" === S || "sendonly" === S), !_ || "sendrecv" !== S && "sendonly" !== S ? delete C.rtpReceiver : (D = _.track, T ? (n16[T.stream] || (n16[T.stream] = new c4.MediaStream), p1(D, n16[T.stream]), f.push([
                                    D,
                                    _,
                                    n16[T.stream]
                                ])) : (n16.default || (n16.default = new c4.MediaStream), p1(D, n16.default), f.push([
                                    D,
                                    _,
                                    n16.default
                                ])));
                            } else {
                                (C = r30.transceivers[o] || r30._createTransceiver(u)).mid = E, C.iceGatherer || (C.iceGatherer = r30._createIceGatherer(o, m)), j.length && "new" === C.iceTransport.state && (!G || m && 0 !== o ? j.forEach(function(e) {
                                    s4(C.iceTransport, e);
                                }) : C.iceTransport.setRemoteCandidates(j)), x = c4.RTCRtpReceiver.getCapabilities(u), d2 < 15019 && (x.codecs = x.codecs.filter(function(e) {
                                    return "rtx" !== e.name;
                                })), k = C.sendEncodingParameters || [
                                    {
                                        ssrc: 1001 * (2 * o + 2)
                                    }
                                ];
                                var N, A = !1;
                                if ("sendrecv" === S || "sendonly" === S) {
                                    if (A = !C.rtpReceiver, _ = C.rtpReceiver || new c4.RTCRtpReceiver(C.dtlsTransport, u), A) D = _.track, T && "-" === T.stream || (T ? (n16[T.stream] || (n16[T.stream] = new c4.MediaStream, Object.defineProperty(n16[T.stream], "id", {
                                        get: function() {
                                            return T.stream;
                                        }
                                    })), Object.defineProperty(D, "id", {
                                        get: function() {
                                            return T.track;
                                        }
                                    }), N = n16[T.stream]) : (n16.default || (n16.default = new c4.MediaStream), N = n16.default)), N && (p1(D, N), C.associatedRemoteMediaStreams.push(N)), f.push([
                                        D,
                                        _,
                                        N
                                    ]);
                                } else C.rtpReceiver && C.rtpReceiver.track && (C.associatedRemoteMediaStreams.forEach(function(e51) {
                                    var t, r, n = e51.getTracks().find(function(e) {
                                        return e.id === C.rtpReceiver.track.id;
                                    });
                                    n && (t = n, (r = e51).removeTrack(t), r.dispatchEvent(new c4.MediaStreamTrackEvent("removetrack", {
                                        track: t
                                    })));
                                }), C.associatedRemoteMediaStreams = []);
                                C.localCapabilities = x, C.remoteCapabilities = M, C.rtpReceiver = _, C.rtcpParameters = O, C.sendEncodingParameters = k, C.recvEncodingParameters = b, r30._transceive(r30.transceivers[o], !1, A);
                            }
                        }
                    }), void 0 === r30._dtlsRole && (r30._dtlsRole = "offer" === t37.type ? "active" : "passive"), r30._remoteDescription = {
                        type: t37.type,
                        sdp: t37.sdp
                    }, "offer" === t37.type ? r30._updateSignalingState("have-remote-offer") : r30._updateSignalingState("stable"), Object.keys(n16).forEach(function(e52) {
                        var t = n16[e52];
                        if (t.getTracks().length) {
                            if (-1 === r30.remoteStreams.indexOf(t)) {
                                r30.remoteStreams.push(t);
                                var a = new Event("addstream");
                                a.stream = t, c4.setTimeout(function() {
                                    r30._dispatchEvent("addstream", a);
                                });
                            }
                            f.forEach(function(e) {
                                var n = e[0], a = e[1];
                                t.id === e[2].id && l2(r30, n, a, [
                                    t
                                ]);
                            });
                        }
                    }), f.forEach(function(e) {
                        e[2] || l2(r30, e[0], e[1], []);
                    }), c4.setTimeout(function() {
                        r30 && r30.transceivers && r30.transceivers.forEach(function(e) {
                            e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({
                            }));
                        });
                    }, 4000), Promise.resolve();
                }, f1.prototype.close = function() {
                    this.transceivers.forEach(function(e) {
                        e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop();
                    }), this._isClosed = !0, this._updateSignalingState("closed");
                }, f1.prototype._updateSignalingState = function(e) {
                    this.signalingState = e;
                    var t = new Event("signalingstatechange");
                    this._dispatchEvent("signalingstatechange", t);
                }, f1.prototype._maybeFireNegotiationNeeded = function() {
                    var e = this;
                    "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, c4.setTimeout(function() {
                        if (e.needNegotiation) {
                            e.needNegotiation = !1;
                            var t = new Event("negotiationneeded");
                            e._dispatchEvent("negotiationneeded", t);
                        }
                    }, 0));
                }, f1.prototype._updateIceConnectionState = function() {
                    var e53, t = {
                        new: 0,
                        closed: 0,
                        checking: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    if (this.transceivers.forEach(function(e) {
                        e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
                    }), e53 = "new", t.failed > 0 ? e53 = "failed" : t.checking > 0 ? e53 = "checking" : t.disconnected > 0 ? e53 = "disconnected" : t.new > 0 ? e53 = "new" : t.connected > 0 ? e53 = "connected" : t.completed > 0 && (e53 = "completed"), e53 !== this.iceConnectionState) {
                        this.iceConnectionState = e53;
                        var r = new Event("iceconnectionstatechange");
                        this._dispatchEvent("iceconnectionstatechange", r);
                    }
                }, f1.prototype._updateConnectionState = function() {
                    var e54, t = {
                        new: 0,
                        closed: 0,
                        connecting: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    if (this.transceivers.forEach(function(e) {
                        e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
                    }), t.connected += t.completed, e54 = "new", t.failed > 0 ? e54 = "failed" : t.connecting > 0 ? e54 = "connecting" : t.disconnected > 0 ? e54 = "disconnected" : t.new > 0 ? e54 = "new" : t.connected > 0 && (e54 = "connected"), e54 !== this.connectionState) {
                        this.connectionState = e54;
                        var r = new Event("connectionstatechange");
                        this._dispatchEvent("connectionstatechange", r);
                    }
                }, f1.prototype.createOffer = function() {
                    var t38 = this;
                    if (t38._isClosed) return Promise.reject(o4("InvalidStateError", "Can not call createOffer after close"));
                    var n17 = t38.transceivers.filter(function(e) {
                        return "audio" === e.kind;
                    }).length, a6 = t38.transceivers.filter(function(e) {
                        return "video" === e.kind;
                    }).length, i13 = arguments[0];
                    if (i13) {
                        if (i13.mandatory || i13.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                        void 0 !== i13.offerToReceiveAudio && (n17 = !0 === i13.offerToReceiveAudio ? 1 : !1 === i13.offerToReceiveAudio ? 0 : i13.offerToReceiveAudio), void 0 !== i13.offerToReceiveVideo && (a6 = !0 === i13.offerToReceiveVideo ? 1 : !1 === i13.offerToReceiveVideo ? 0 : i13.offerToReceiveVideo);
                    }
                    for(t38.transceivers.forEach(function(e) {
                        "audio" === e.kind ? --n17 < 0 && (e.wantReceive = !1) : "video" === e.kind && --a6 < 0 && (e.wantReceive = !1);
                    }); n17 > 0 || a6 > 0;)n17 > 0 && (t38._createTransceiver("audio"), n17--), a6 > 0 && (t38._createTransceiver("video"), a6--);
                    var s5 = e42.writeSessionBoilerplate(t38._sdpSessionId, t38._sdpSessionVersion++);
                    t38.transceivers.forEach(function(r, n) {
                        var a = r.track, i = r.kind, s = r.mid || e42.generateIdentifier();
                        r.mid = s, r.iceGatherer || (r.iceGatherer = t38._createIceGatherer(n, t38.usingBundle));
                        var o = c4.RTCRtpSender.getCapabilities(i);
                        d2 < 15019 && (o.codecs = o.codecs.filter(function(e) {
                            return "rtx" !== e.name;
                        })), o.codecs.forEach(function(e) {
                            "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), r.remoteCapabilities && r.remoteCapabilities.codecs && r.remoteCapabilities.codecs.forEach(function(t) {
                                e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType);
                            });
                        }), o.headerExtensions.forEach(function(e) {
                            (r.remoteCapabilities && r.remoteCapabilities.headerExtensions || []).forEach(function(t) {
                                e.uri === t.uri && (e.id = t.id);
                            });
                        });
                        var p = r.sendEncodingParameters || [
                            {
                                ssrc: 1001 * (2 * n + 1)
                            }
                        ];
                        a && d2 >= 15019 && "video" === i && !p[0].rtx && (p[0].rtx = {
                            ssrc: p[0].ssrc + 1
                        }), r.wantReceive && (r.rtpReceiver = new c4.RTCRtpReceiver(r.dtlsTransport, i)), r.localCapabilities = o, r.sendEncodingParameters = p;
                    }), "max-compat" !== t38._config.bundlePolicy && (s5 += "a=group:BUNDLE " + t38.transceivers.map(function(e) {
                        return e.mid;
                    }).join(" ") + "\r\n"), s5 += "a=ice-options:trickle\r\n", t38.transceivers.forEach(function(n, a) {
                        s5 += r26(n, n.localCapabilities, "offer", n.stream, t38._dtlsRole), s5 += "a=rtcp-rsize\r\n", !n.iceGatherer || "new" === t38.iceGatheringState || 0 !== a && t38.usingBundle || (n.iceGatherer.getLocalCandidates().forEach(function(t) {
                            t.component = 1, s5 += "a=" + e42.writeCandidate(t) + "\r\n";
                        }), "completed" === n.iceGatherer.state && (s5 += "a=end-of-candidates\r\n"));
                    });
                    var p2 = new c4.RTCSessionDescription({
                        type: "offer",
                        sdp: s5
                    });
                    return Promise.resolve(p2);
                }, f1.prototype.createAnswer = function() {
                    var t = this;
                    if (t._isClosed) return Promise.reject(o4("InvalidStateError", "Can not call createAnswer after close"));
                    if ("have-remote-offer" !== t.signalingState && "have-local-pranswer" !== t.signalingState) return Promise.reject(o4("InvalidStateError", "Can not call createAnswer in signalingState " + t.signalingState));
                    var n = e42.writeSessionBoilerplate(t._sdpSessionId, t._sdpSessionVersion++);
                    t.usingBundle && (n += "a=group:BUNDLE " + t.transceivers.map(function(e) {
                        return e.mid;
                    }).join(" ") + "\r\n"), n += "a=ice-options:trickle\r\n";
                    var i = e42.getMediaSections(t._remoteDescription.sdp).length;
                    t.transceivers.forEach(function(e55, s) {
                        if (!(s + 1 > i)) {
                            if (e55.rejected) return "application" === e55.kind ? "DTLS/SCTP" === e55.protocol ? n += "m=application 0 DTLS/SCTP 5000\r\n" : n += "m=application 0 " + e55.protocol + " webrtc-datachannel\r\n" : "audio" === e55.kind ? n += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e55.kind && (n += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (n += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e55.mid + "\r\n");
                            var o;
                            if (e55.stream) "audio" === e55.kind ? o = e55.stream.getAudioTracks()[0] : "video" === e55.kind && (o = e55.stream.getVideoTracks()[0]), o && d2 >= 15019 && "video" === e55.kind && !e55.sendEncodingParameters[0].rtx && (e55.sendEncodingParameters[0].rtx = {
                                ssrc: e55.sendEncodingParameters[0].ssrc + 1
                            });
                            var c = a4(e55.localCapabilities, e55.remoteCapabilities);
                            !c.codecs.filter(function(e) {
                                return "rtx" === e.name.toLowerCase();
                            }).length && e55.sendEncodingParameters[0].rtx && delete e55.sendEncodingParameters[0].rtx, n += r26(e55, c, "answer", e55.stream, t._dtlsRole), e55.rtcpParameters && e55.rtcpParameters.reducedSize && (n += "a=rtcp-rsize\r\n");
                        }
                    });
                    var s6 = new c4.RTCSessionDescription({
                        type: "answer",
                        sdp: n
                    });
                    return Promise.resolve(s6);
                }, f1.prototype.addIceCandidate = function(t) {
                    var r, n = this;
                    return t && void 0 === t.sdpMLineIndex && !t.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function(a, i) {
                        if (!n._remoteDescription) return i(o4("InvalidStateError", "Can not add ICE candidate without a remote description"));
                        if (t && "" !== t.candidate) {
                            var c = t.sdpMLineIndex;
                            if (t.sdpMid) {
                                for(var d = 0; d < n.transceivers.length; d++)if (n.transceivers[d].mid === t.sdpMid) {
                                    c = d;
                                    break;
                                }
                            }
                            var p = n.transceivers[c];
                            if (!p) return i(o4("OperationError", "Can not add ICE candidate"));
                            if (p.rejected) return a();
                            var l = Object.keys(t.candidate).length > 0 ? e42.parseCandidate(t.candidate) : {
                            };
                            if ("tcp" === l.protocol && (0 === l.port || 9 === l.port)) return a();
                            if (l.component && 1 !== l.component) return a();
                            if ((0 === c || c > 0 && p.iceTransport !== n.transceivers[0].iceTransport) && !s4(p.iceTransport, l)) return i(o4("OperationError", "Can not add ICE candidate"));
                            var f = t.candidate.trim();
                            0 === f.indexOf("a=") && (f = f.substr(2)), (r = e42.getMediaSections(n._remoteDescription.sdp))[c] += "a=" + (l.type ? f : "end-of-candidates") + "\r\n", n._remoteDescription.sdp = e42.getDescription(n._remoteDescription.sdp) + r.join("");
                        } else for(var u = 0; u < n.transceivers.length && (n.transceivers[u].rejected || (n.transceivers[u].iceTransport.addRemoteCandidate({
                        }), (r = e42.getMediaSections(n._remoteDescription.sdp))[u] += "a=end-of-candidates\r\n", n._remoteDescription.sdp = e42.getDescription(n._remoteDescription.sdp) + r.join(""), !n.usingBundle)); u++);
                        a();
                    });
                }, f1.prototype.getStats = function(e56) {
                    if (e56 && e56 instanceof c4.MediaStreamTrack) {
                        var t = null;
                        if (this.transceivers.forEach(function(r) {
                            r.rtpSender && r.rtpSender.track === e56 ? t = r.rtpSender : r.rtpReceiver && r.rtpReceiver.track === e56 && (t = r.rtpReceiver);
                        }), !t) throw o4("InvalidAccessError", "Invalid selector.");
                        return t.getStats();
                    }
                    var r31 = [];
                    return this.transceivers.forEach(function(e) {
                        [
                            "rtpSender",
                            "rtpReceiver",
                            "iceGatherer",
                            "iceTransport",
                            "dtlsTransport"
                        ].forEach(function(t) {
                            e[t] && r31.push(e[t].getStats());
                        });
                    }), Promise.all(r31).then(function(e57) {
                        var t = new Map;
                        return e57.forEach(function(e58) {
                            e58.forEach(function(e) {
                                t.set(e.id, e);
                            });
                        }), t;
                    });
                };
                [
                    "RTCRtpSender",
                    "RTCRtpReceiver",
                    "RTCIceGatherer",
                    "RTCIceTransport",
                    "RTCDtlsTransport"
                ].forEach(function(e59) {
                    var r32 = c4[e59];
                    if (r32 && r32.prototype && r32.prototype.getStats) {
                        var n18 = r32.prototype.getStats;
                        r32.prototype.getStats = function() {
                            return n18.apply(this).then(function(e) {
                                var r = new Map;
                                return Object.keys(e).forEach(function(n) {
                                    e[n].type = t30(e[n]), r.set(n, e[n]);
                                }), r;
                            });
                        };
                    }
                });
                var u2 = [
                    "createOffer",
                    "createAnswer"
                ];
                return u2.forEach(function(e60) {
                    var t39 = f1.prototype[e60];
                    f1.prototype[e60] = function() {
                        var e = arguments;
                        return "function" == typeof e[0] || "function" == typeof e[1] ? t39.apply(this, [
                            arguments[2]
                        ]).then(function(t) {
                            "function" == typeof e[0] && e[0].apply(null, [
                                t
                            ]);
                        }, function(t) {
                            "function" == typeof e[1] && e[1].apply(null, [
                                t
                            ]);
                        }) : t39.apply(this, arguments);
                    };
                }), (u2 = [
                    "setLocalDescription",
                    "setRemoteDescription",
                    "addIceCandidate"
                ]).forEach(function(e61) {
                    var t40 = f1.prototype[e61];
                    f1.prototype[e61] = function() {
                        var e = arguments;
                        return "function" == typeof e[1] || "function" == typeof e[2] ? t40.apply(this, arguments).then(function() {
                            "function" == typeof e[1] && e[1].apply(null);
                        }, function(t) {
                            "function" == typeof e[2] && e[2].apply(null, [
                                t
                            ]);
                        }) : t40.apply(this, arguments);
                    };
                }), [
                    "getStats"
                ].forEach(function(e62) {
                    var t = f1.prototype[e62];
                    f1.prototype[e62] = function() {
                        var e = arguments;
                        return "function" == typeof e[1] ? t.apply(this, arguments).then(function() {
                            "function" == typeof e[1] && e[1].apply(null);
                        }) : t.apply(this, arguments);
                    };
                }), f1;
            };
        },
        {
            "sdp": "YHvh"
        }
    ],
    "YdKx": [
        function(require, module, exports) {
            "use strict";
            function e63(e64) {
                var r = e64 && e64.navigator, t = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                r.mediaDevices.getUserMedia = function(e65) {
                    return t(e65).catch(function(e66) {
                        return Promise.reject(function(e) {
                            return {
                                name: ({
                                    PermissionDeniedError: "NotAllowedError"
                                })[e.name] || e.name,
                                message: e.message,
                                constraint: e.constraint,
                                toString: function() {
                                    return this.name;
                                }
                            };
                        }(e66));
                    });
                };
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetUserMedia = e63;
        },
        {
        }
    ],
    "P3bV": [
        function(require, module, exports) {
            "use strict";
            function e67(e) {
                "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)));
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetDisplayMedia = e67;
        },
        {
        }
    ],
    "XRic": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimPeerConnection = p, exports.shimReplaceTrack = a, Object.defineProperty(exports, "shimGetUserMedia", {
                enumerable: !0,
                get: function() {
                    return n19.shimGetUserMedia;
                }
            }), Object.defineProperty(exports, "shimGetDisplayMedia", {
                enumerable: !0,
                get: function() {
                    return i14.shimGetDisplayMedia;
                }
            });
            var e68 = s(require("../utils")), t41 = require("./filtericeservers"), r33 = o5(require("rtcpeerconnection-shim")), n19 = require("./getusermedia"), i14 = require("./getdisplaymedia");
            function o5(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c5() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c5 = function() {
                    return e;
                }, e;
            }
            function s(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c5();
                if (t && t.has(e)) return t.get(e);
                var r = {
                }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = e[i];
                }
                return r.default = e, t && t.set(e, r), r;
            }
            function p(n, i) {
                if (n.RTCIceGatherer && (n.RTCIceCandidate || (n.RTCIceCandidate = function(e) {
                    return e;
                }), n.RTCSessionDescription || (n.RTCSessionDescription = function(e) {
                    return e;
                }), i.version < 15025)) {
                    var o = Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype, "enabled");
                    Object.defineProperty(n.MediaStreamTrack.prototype, "enabled", {
                        set: function(e) {
                            o.set.call(this, e);
                            var t = new Event("enabled");
                            t.enabled = e, this.dispatchEvent(t);
                        }
                    });
                }
                !n.RTCRtpSender || "dtmf" in n.RTCRtpSender.prototype || Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", {
                    get: function() {
                        return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new n.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf;
                    }
                }), n.RTCDtmfSender && !n.RTCDTMFSender && (n.RTCDTMFSender = n.RTCDtmfSender);
                var c = (0, r33.default)(n, i.version);
                n.RTCPeerConnection = function(r) {
                    return r && r.iceServers && (r.iceServers = (0, t41.filterIceServers)(r.iceServers, i.version), e68.log("ICE servers after filtering:", r.iceServers)), new c(r);
                }, n.RTCPeerConnection.prototype = c.prototype;
            }
            function a(e) {
                !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
            }
        },
        {
            "../utils": "iSxC",
            "./filtericeservers": "NZ1C",
            "rtcpeerconnection-shim": "NJ2u",
            "./getusermedia": "YdKx",
            "./getdisplaymedia": "P3bV"
        }
    ],
    "GzSv": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetUserMedia = n20;
            var e69 = o6(require("../utils"));
            function t42() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return t42 = function() {
                    return e;
                }, e;
            }
            function o6(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var o = t42();
                if (o && o.has(e)) return o.get(e);
                var r = {
                }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
                }
                return r.default = e, o && o.set(e, r), r;
            }
            function r34(e70) {
                return (r34 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e70);
            }
            function n20(t43, o7) {
                var n = t43 && t43.navigator, i = t43 && t43.MediaStreamTrack;
                if (n.getUserMedia = function(t, o, r) {
                    e69.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(t).then(o, r);
                }, !(o7.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
                    var a = function(e, t, o) {
                        t in e && !(o in e) && (e[o] = e[t], delete e[t]);
                    }, s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                    if (n.mediaDevices.getUserMedia = function(e) {
                        return "object" === r34(e) && "object" === r34(e.audio) && (e = JSON.parse(JSON.stringify(e)), a(e.audio, "autoGainControl", "mozAutoGainControl"), a(e.audio, "noiseSuppression", "mozNoiseSuppression")), s(e);
                    }, i && i.prototype.getSettings) {
                        var p = i.prototype.getSettings;
                        i.prototype.getSettings = function() {
                            var e = p.apply(this, arguments);
                            return a(e, "mozAutoGainControl", "autoGainControl"), a(e, "mozNoiseSuppression", "noiseSuppression"), e;
                        };
                    }
                    if (i && i.prototype.applyConstraints) {
                        var u = i.prototype.applyConstraints;
                        i.prototype.applyConstraints = function(e) {
                            return "audio" === this.kind && "object" === r34(e) && (e = JSON.parse(JSON.stringify(e)), a(e, "autoGainControl", "mozAutoGainControl"), a(e, "noiseSuppression", "mozNoiseSuppression")), u.apply(this, [
                                e
                            ]);
                        };
                    }
                }
            }
        },
        {
            "../utils": "iSxC"
        }
    ],
    "UuGU": [
        function(require, module, exports) {
            "use strict";
            function e71(e, i) {
                e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(a) {
                    if (!a || !a.video) {
                        var t = new DOMException("getDisplayMedia without video constraints is undefined");
                        return t.name = "NotFoundError", t.code = 8, Promise.reject(t);
                    }
                    return !0 === a.video ? a.video = {
                        mediaSource: i
                    } : a.video.mediaSource = i, e.navigator.mediaDevices.getUserMedia(a);
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetDisplayMedia = e71;
        },
        {
        }
    ],
    "Fzdr": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimOnTrack = s, exports.shimPeerConnection = c, exports.shimSenderGetStats = p, exports.shimReceiverGetStats = u, exports.shimRemoveStream = f, exports.shimRTCDataChannel = d, exports.shimAddTransceiver = C, exports.shimGetParameters = y, exports.shimCreateOffer = l, exports.shimCreateAnswer = m, Object.defineProperty(exports, "shimGetUserMedia", {
                enumerable: !0,
                get: function() {
                    return t44.shimGetUserMedia;
                }
            }), Object.defineProperty(exports, "shimGetDisplayMedia", {
                enumerable: !0,
                get: function() {
                    return n21.shimGetDisplayMedia;
                }
            });
            var e72 = o8(require("../utils")), t44 = require("./getusermedia"), n21 = require("./getdisplaymedia");
            function r35() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return r35 = function() {
                    return e;
                }, e;
            }
            function o8(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = r35();
                if (t && t.has(e)) return t.get(e);
                var n = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
                }
                return n.default = e, t && t.set(e, n), n;
            }
            function i15(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function a7(e73) {
                return (a7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e73);
            }
            function s(e) {
                "object" === a7(e) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                    get: function() {
                        return {
                            receiver: this.receiver
                        };
                    }
                });
            }
            function c(e74, t45) {
                if ("object" === a7(e74) && (e74.RTCPeerConnection || e74.mozRTCPeerConnection)) {
                    !e74.RTCPeerConnection && e74.mozRTCPeerConnection && (e74.RTCPeerConnection = e74.mozRTCPeerConnection), t45.version < 53 && [
                        "setLocalDescription",
                        "setRemoteDescription",
                        "addIceCandidate"
                    ].forEach(function(t) {
                        var n = e74.RTCPeerConnection.prototype[t], r = i15({
                        }, t, function() {
                            return arguments[0] = new ("addIceCandidate" === t ? e74.RTCIceCandidate : e74.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
                        });
                        e74.RTCPeerConnection.prototype[t] = r[t];
                    });
                    var n22 = {
                        inboundrtp: "inbound-rtp",
                        outboundrtp: "outbound-rtp",
                        candidatepair: "candidate-pair",
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    }, r36 = e74.RTCPeerConnection.prototype.getStats;
                    e74.RTCPeerConnection.prototype.getStats = function() {
                        var [e75, o, i] = arguments;
                        return r36.apply(this, [
                            e75 || null
                        ]).then(function(e76) {
                            if (t45.version < 53 && !o) try {
                                e76.forEach(function(e) {
                                    e.type = n22[e.type] || e.type;
                                });
                            } catch (r37) {
                                if ("TypeError" !== r37.name) throw r37;
                                e76.forEach(function(t, r) {
                                    e76.set(r, Object.assign({
                                    }, t, {
                                        type: n22[t.type] || t.type
                                    }));
                                });
                            }
                            return e76;
                        }).then(o, i);
                    };
                }
            }
            function p(e77) {
                if ("object" === a7(e77) && e77.RTCPeerConnection && e77.RTCRtpSender && !(e77.RTCRtpSender && "getStats" in e77.RTCRtpSender.prototype)) {
                    var t46 = e77.RTCPeerConnection.prototype.getSenders;
                    t46 && (e77.RTCPeerConnection.prototype.getSenders = function() {
                        var e = this, n = t46.apply(this, []);
                        return n.forEach(function(t) {
                            return t._pc = e;
                        }), n;
                    });
                    var n23 = e77.RTCPeerConnection.prototype.addTrack;
                    n23 && (e77.RTCPeerConnection.prototype.addTrack = function() {
                        var e = n23.apply(this, arguments);
                        return e._pc = this, e;
                    }), e77.RTCRtpSender.prototype.getStats = function() {
                        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map);
                    };
                }
            }
            function u(t47) {
                if ("object" === a7(t47) && t47.RTCPeerConnection && t47.RTCRtpSender && !(t47.RTCRtpSender && "getStats" in t47.RTCRtpReceiver.prototype)) {
                    var n = t47.RTCPeerConnection.prototype.getReceivers;
                    n && (t47.RTCPeerConnection.prototype.getReceivers = function() {
                        var e = this, t48 = n.apply(this, []);
                        return t48.forEach(function(t) {
                            return t._pc = e;
                        }), t48;
                    }), e72.wrapPeerConnectionEvent(t47, "track", function(e) {
                        return e.receiver._pc = e.srcElement, e;
                    }), t47.RTCRtpReceiver.prototype.getStats = function() {
                        return this._pc.getStats(this.track);
                    };
                }
            }
            function f(t49) {
                !t49.RTCPeerConnection || "removeStream" in t49.RTCPeerConnection.prototype || (t49.RTCPeerConnection.prototype.removeStream = function(t) {
                    var n = this;
                    e72.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function(e) {
                        e.track && t.getTracks().includes(e.track) && n.removeTrack(e);
                    });
                });
            }
            function d(e) {
                e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
            }
            function C(e78) {
                if ("object" === a7(e78) && e78.RTCPeerConnection) {
                    var t = e78.RTCPeerConnection.prototype.addTransceiver;
                    t && (e78.RTCPeerConnection.prototype.addTransceiver = function() {
                        this.setParametersPromises = [];
                        var e79 = arguments[1], n = e79 && "sendEncodings" in e79;
                        n && e79.sendEncodings.forEach(function(e) {
                            if ("rid" in e) {
                                if (!/^[a-z0-9]{0,16}$/i.test(e.rid)) throw new TypeError("Invalid RID value provided.");
                            }
                            if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                            if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
                        });
                        var r = t.apply(this, arguments);
                        if (n) {
                            var { sender: o  } = r, i = o.getParameters();
                            "encodings" in i && (1 !== i.encodings.length || 0 !== Object.keys(i.encodings[0]).length) || (i.encodings = e79.sendEncodings, o.sendEncodings = e79.sendEncodings, this.setParametersPromises.push(o.setParameters(i).then(function() {
                                delete o.sendEncodings;
                            }).catch(function() {
                                delete o.sendEncodings;
                            })));
                        }
                        return r;
                    });
                }
            }
            function y(e80) {
                if ("object" === a7(e80) && e80.RTCRtpSender) {
                    var t = e80.RTCRtpSender.prototype.getParameters;
                    t && (e80.RTCRtpSender.prototype.getParameters = function() {
                        var e = t.apply(this, arguments);
                        return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [
                            {
                            }
                        ])), e;
                    });
                }
            }
            function l(e81) {
                if ("object" === a7(e81) && e81.RTCPeerConnection) {
                    var t = e81.RTCPeerConnection.prototype.createOffer;
                    e81.RTCPeerConnection.prototype.createOffer = function() {
                        var e = arguments, n = this;
                        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                            return t.apply(n, e);
                        }).finally(function() {
                            n.setParametersPromises = [];
                        }) : t.apply(this, arguments);
                    };
                }
            }
            function m(e82) {
                if ("object" === a7(e82) && e82.RTCPeerConnection) {
                    var t = e82.RTCPeerConnection.prototype.createAnswer;
                    e82.RTCPeerConnection.prototype.createAnswer = function() {
                        var e = arguments, n = this;
                        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                            return t.apply(n, e);
                        }).finally(function() {
                            n.setParametersPromises = [];
                        }) : t.apply(this, arguments);
                    };
                }
            }
        },
        {
            "../utils": "iSxC",
            "./getusermedia": "GzSv",
            "./getdisplaymedia": "UuGU"
        }
    ],
    "t1lL": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimLocalStreamsAPI = n24, exports.shimRemoteStreamsAPI = i16, exports.shimCallbacksAPI = a8, exports.shimGetUserMedia = c6, exports.shimConstraints = s7, exports.shimRTCIceServerUrls = d, exports.shimTrackEventTransceiver = f, exports.shimCreateOfferLegacy = p, exports.shimAudioContext = u;
            var e83 = r38(require("../utils"));
            function t50() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return t50 = function() {
                    return e;
                }, e;
            }
            function r38(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = t50();
                if (r && r.has(e)) return r.get(e);
                var o = {
                }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(o, i, a) : o[i] = e[i];
                }
                return o.default = e, r && r.set(e, o), o;
            }
            function o9(e84) {
                return (o9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e84);
            }
            function n24(e85) {
                if ("object" === o9(e85) && e85.RTCPeerConnection) {
                    if ("getLocalStreams" in e85.RTCPeerConnection.prototype || (e85.RTCPeerConnection.prototype.getLocalStreams = function() {
                        return this._localStreams || (this._localStreams = []), this._localStreams;
                    }), !("addStream" in e85.RTCPeerConnection.prototype)) {
                        var t = e85.RTCPeerConnection.prototype.addTrack;
                        e85.RTCPeerConnection.prototype.addStream = function(e) {
                            var r = this;
                            this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach(function(o) {
                                return t.call(r, o, e);
                            }), e.getVideoTracks().forEach(function(o) {
                                return t.call(r, o, e);
                            });
                        }, e85.RTCPeerConnection.prototype.addTrack = function(e86) {
                            for(var r = this, o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)n[i - 1] = arguments[i];
                            return n && n.forEach(function(e) {
                                r._localStreams ? r._localStreams.includes(e) || r._localStreams.push(e) : r._localStreams = [
                                    e
                                ];
                            }), t.apply(this, arguments);
                        };
                    }
                    "removeStream" in e85.RTCPeerConnection.prototype || (e85.RTCPeerConnection.prototype.removeStream = function(e87) {
                        var t = this;
                        this._localStreams || (this._localStreams = []);
                        var r = this._localStreams.indexOf(e87);
                        if (-1 !== r) {
                            this._localStreams.splice(r, 1);
                            var o = e87.getTracks();
                            this.getSenders().forEach(function(e) {
                                o.includes(e.track) && t.removeTrack(e);
                            });
                        }
                    });
                }
            }
            function i16(e88) {
                if ("object" === o9(e88) && e88.RTCPeerConnection && ("getRemoteStreams" in e88.RTCPeerConnection.prototype || (e88.RTCPeerConnection.prototype.getRemoteStreams = function() {
                    return this._remoteStreams ? this._remoteStreams : [];
                }), !("onaddstream" in e88.RTCPeerConnection.prototype))) {
                    Object.defineProperty(e88.RTCPeerConnection.prototype, "onaddstream", {
                        get: function() {
                            return this._onaddstream;
                        },
                        set: function(e89) {
                            var t = this;
                            this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e89), this.addEventListener("track", this._onaddstreampoly = function(e90) {
                                e90.streams.forEach(function(e) {
                                    if (t._remoteStreams || (t._remoteStreams = []), !t._remoteStreams.includes(e)) {
                                        t._remoteStreams.push(e);
                                        var r = new Event("addstream");
                                        r.stream = e, t.dispatchEvent(r);
                                    }
                                });
                            });
                        }
                    });
                    var t51 = e88.RTCPeerConnection.prototype.setRemoteDescription;
                    e88.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        var e = this;
                        return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t52) {
                            t52.streams.forEach(function(t) {
                                if (e._remoteStreams || (e._remoteStreams = []), !(e._remoteStreams.indexOf(t) >= 0)) {
                                    e._remoteStreams.push(t);
                                    var r = new Event("addstream");
                                    r.stream = t, e.dispatchEvent(r);
                                }
                            });
                        }), t51.apply(e, arguments);
                    };
                }
            }
            function a8(e91) {
                if ("object" === o9(e91) && e91.RTCPeerConnection) {
                    var t53 = e91.RTCPeerConnection.prototype, r39 = t53.createOffer, n25 = t53.createAnswer, i = t53.setLocalDescription, a = t53.setRemoteDescription, c = t53.addIceCandidate;
                    t53.createOffer = function(e, t) {
                        var o = arguments.length >= 2 ? arguments[2] : arguments[0], n = r39.apply(this, [
                            o
                        ]);
                        return t ? (n.then(e, t), Promise.resolve()) : n;
                    }, t53.createAnswer = function(e, t) {
                        var r = arguments.length >= 2 ? arguments[2] : arguments[0], o = n25.apply(this, [
                            r
                        ]);
                        return t ? (o.then(e, t), Promise.resolve()) : o;
                    };
                    var s = function(e, t, r) {
                        var o = i.apply(this, [
                            e
                        ]);
                        return r ? (o.then(t, r), Promise.resolve()) : o;
                    };
                    t53.setLocalDescription = s, s = function(e, t, r) {
                        var o = a.apply(this, [
                            e
                        ]);
                        return r ? (o.then(t, r), Promise.resolve()) : o;
                    }, t53.setRemoteDescription = s, s = function(e, t, r) {
                        var o = c.apply(this, [
                            e
                        ]);
                        return r ? (o.then(t, r), Promise.resolve()) : o;
                    }, t53.addIceCandidate = s;
                }
            }
            function c6(e92) {
                var t = e92 && e92.navigator;
                if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                    var r = t.mediaDevices, o = r.getUserMedia.bind(r);
                    t.mediaDevices.getUserMedia = function(e) {
                        return o(s7(e));
                    };
                }
                !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = (function(e, r, o) {
                    t.mediaDevices.getUserMedia(e).then(r, o);
                }).bind(t));
            }
            function s7(t) {
                return t && void 0 !== t.video ? Object.assign({
                }, t, {
                    video: e83.compactObject(t.video)
                }) : t;
            }
            function d(t54) {
                if (t54.RTCPeerConnection) {
                    var r = t54.RTCPeerConnection;
                    t54.RTCPeerConnection = function(t, o) {
                        if (t && t.iceServers) {
                            for(var n = [], i = 0; i < t.iceServers.length; i++){
                                var a = t.iceServers[i];
                                !a.hasOwnProperty("urls") && a.hasOwnProperty("url") ? (e83.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (a = JSON.parse(JSON.stringify(a))).urls = a.url, delete a.url, n.push(a)) : n.push(t.iceServers[i]);
                            }
                            t.iceServers = n;
                        }
                        return new r(t, o);
                    }, t54.RTCPeerConnection.prototype = r.prototype, "generateCertificate" in r && Object.defineProperty(t54.RTCPeerConnection, "generateCertificate", {
                        get: function() {
                            return r.generateCertificate;
                        }
                    });
                }
            }
            function f(e) {
                "object" === o9(e) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                    get: function() {
                        return {
                            receiver: this.receiver
                        };
                    }
                });
            }
            function p(e93) {
                var t = e93.RTCPeerConnection.prototype.createOffer;
                e93.RTCPeerConnection.prototype.createOffer = function(e94) {
                    if (e94) {
                        void 0 !== e94.offerToReceiveAudio && (e94.offerToReceiveAudio = !!e94.offerToReceiveAudio);
                        var r = this.getTransceivers().find(function(e) {
                            return "audio" === e.receiver.track.kind;
                        });
                        !1 === e94.offerToReceiveAudio && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e94.offerToReceiveAudio || r || this.addTransceiver("audio"), void 0 !== e94.offerToReceiveVideo && (e94.offerToReceiveVideo = !!e94.offerToReceiveVideo);
                        var o = this.getTransceivers().find(function(e) {
                            return "video" === e.receiver.track.kind;
                        });
                        !1 === e94.offerToReceiveVideo && o ? "sendrecv" === o.direction ? o.setDirection ? o.setDirection("sendonly") : o.direction = "sendonly" : "recvonly" === o.direction && (o.setDirection ? o.setDirection("inactive") : o.direction = "inactive") : !0 !== e94.offerToReceiveVideo || o || this.addTransceiver("video");
                    }
                    return t.apply(this, arguments);
                };
            }
            function u(e) {
                "object" !== o9(e) || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
            }
        },
        {
            "../utils": "iSxC"
        }
    ],
    "GOQK": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimRTCIceCandidate = a9, exports.shimMaxMessageSize = c7, exports.shimSendThrowTypeError = s8, exports.shimConnectionState = p3, exports.removeExtmapAllowMixed = d3, exports.shimAddIceCandidateNullOrEmpty = u;
            var e95 = r40(require("sdp")), t55 = o10(require("./utils"));
            function n26() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return n26 = function() {
                    return e;
                }, e;
            }
            function o10(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = n26();
                if (t && t.has(e)) return t.get(e);
                var o = {
                }, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(o, i, a) : o[i] = e[i];
                }
                return o.default = e, t && t.set(e, o), o;
            }
            function r40(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i17(e96) {
                return (i17 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e96);
            }
            function a9(n27) {
                if (n27.RTCIceCandidate && !(n27.RTCIceCandidate && "foundation" in n27.RTCIceCandidate.prototype)) {
                    var o = n27.RTCIceCandidate;
                    n27.RTCIceCandidate = function(t) {
                        if ("object" === i17(t) && t.candidate && 0 === t.candidate.indexOf("a=") && ((t = JSON.parse(JSON.stringify(t))).candidate = t.candidate.substr(2)), t.candidate && t.candidate.length) {
                            var n = new o(t), r = e95.default.parseCandidate(t.candidate), a = Object.assign(n, r);
                            return a.toJSON = function() {
                                return {
                                    candidate: a.candidate,
                                    sdpMid: a.sdpMid,
                                    sdpMLineIndex: a.sdpMLineIndex,
                                    usernameFragment: a.usernameFragment
                                };
                            }, a;
                        }
                        return new o(t);
                    }, n27.RTCIceCandidate.prototype = o.prototype, t55.wrapPeerConnectionEvent(n27, "icecandidate", function(e) {
                        return e.candidate && Object.defineProperty(e, "candidate", {
                            value: new n27.RTCIceCandidate(e.candidate),
                            writable: "false"
                        }), e;
                    });
                }
            }
            function c7(t56, n28) {
                if (t56.RTCPeerConnection) {
                    "sctp" in t56.RTCPeerConnection.prototype || Object.defineProperty(t56.RTCPeerConnection.prototype, "sctp", {
                        get: function() {
                            return void 0 === this._sctp ? null : this._sctp;
                        }
                    });
                    var o11 = t56.RTCPeerConnection.prototype.setRemoteDescription;
                    t56.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        if (this._sctp = null, "chrome" === n28.browser && n28.version >= 76) {
                            var { sdpSemantics: t  } = this.getConfiguration();
                            "plan-b" === t && Object.defineProperty(this, "sctp", {
                                get: function() {
                                    return void 0 === this._sctp ? null : this._sctp;
                                },
                                enumerable: !0,
                                configurable: !0
                            });
                        }
                        if ((function(t57) {
                            if (!t57 || !t57.sdp) return !1;
                            var n29 = e95.default.splitSections(t57.sdp);
                            return n29.shift(), n29.some(function(t) {
                                var n = e95.default.parseMLine(t);
                                return n && "application" === n.kind && -1 !== n.protocol.indexOf("SCTP");
                            });
                        })(arguments[0])) {
                            var r41, i18 = function(e) {
                                var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                if (null === t || t.length < 2) return -1;
                                var n = parseInt(t[1], 10);
                                return n != n ? -1 : n;
                            }(arguments[0]), a = (p = i18, d = 65536, "firefox" === n28.browser && (d = n28.version < 57 ? -1 === p ? 16384 : 2147483637 : n28.version < 60 ? 57 === n28.version ? 65535 : 65536 : 2147483637), d), c = function(t, o) {
                                var r = 65536;
                                "firefox" === n28.browser && 57 === n28.version && (r = 65535);
                                var i = e95.default.matchPrefix(t.sdp, "a=max-message-size:");
                                return i.length > 0 ? r = parseInt(i[0].substr(19), 10) : "firefox" === n28.browser && -1 !== o && (r = 2147483637), r;
                            }(arguments[0], i18);
                            r41 = 0 === a && 0 === c ? Number.POSITIVE_INFINITY : 0 === a || 0 === c ? Math.max(a, c) : Math.min(a, c);
                            var s = {
                            };
                            Object.defineProperty(s, "maxMessageSize", {
                                get: function() {
                                    return r41;
                                }
                            }), this._sctp = s;
                        }
                        var p, d;
                        return o11.apply(this, arguments);
                    };
                }
            }
            function s8(e97) {
                if (e97.RTCPeerConnection && "createDataChannel" in e97.RTCPeerConnection.prototype) {
                    var n = e97.RTCPeerConnection.prototype.createDataChannel;
                    e97.RTCPeerConnection.prototype.createDataChannel = function() {
                        var e = n.apply(this, arguments);
                        return o12(e, this), e;
                    }, t55.wrapPeerConnectionEvent(e97, "datachannel", function(e) {
                        return o12(e.channel, e.target), e;
                    });
                }
                function o12(e, t) {
                    var n = e.send;
                    e.send = function() {
                        var o = arguments[0], r = o.length || o.size || o.byteLength;
                        if ("open" === e.readyState && t.sctp && r > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                        return n.apply(e, arguments);
                    };
                }
            }
            function p3(e98) {
                if (e98.RTCPeerConnection && !("connectionState" in e98.RTCPeerConnection.prototype)) {
                    var t58 = e98.RTCPeerConnection.prototype;
                    Object.defineProperty(t58, "connectionState", {
                        get: function() {
                            return ({
                                completed: "connected",
                                checking: "connecting"
                            })[this.iceConnectionState] || this.iceConnectionState;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t58, "onconnectionstatechange", {
                        get: function() {
                            return this._onconnectionstatechange || null;
                        },
                        set: function(e) {
                            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e);
                        },
                        enumerable: !0,
                        configurable: !0
                    }), [
                        "setLocalDescription",
                        "setRemoteDescription"
                    ].forEach(function(e99) {
                        var n30 = t58[e99];
                        t58[e99] = function() {
                            return this._connectionstatechangepoly || (this._connectionstatechangepoly = function(e) {
                                var t = e.target;
                                if (t._lastConnectionState !== t.connectionState) {
                                    t._lastConnectionState = t.connectionState;
                                    var n = new Event("connectionstatechange", e);
                                    t.dispatchEvent(n);
                                }
                                return e;
                            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n30.apply(this, arguments);
                        };
                    });
                }
            }
            function d3(e100, t59) {
                if (e100.RTCPeerConnection && !("chrome" === t59.browser && t59.version >= 71 || "safari" === t59.browser && t59.version >= 605)) {
                    var n = e100.RTCPeerConnection.prototype.setRemoteDescription;
                    e100.RTCPeerConnection.prototype.setRemoteDescription = function(t) {
                        if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
                            var o = t.sdp.split("\n").filter(function(e) {
                                return "a=extmap-allow-mixed" !== e.trim();
                            }).join("\n");
                            e100.RTCSessionDescription && t instanceof e100.RTCSessionDescription ? arguments[0] = new e100.RTCSessionDescription({
                                type: t.type,
                                sdp: o
                            }) : t.sdp = o;
                        }
                        return n.apply(this, arguments);
                    };
                }
            }
            function u(e, t) {
                if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
                    var n = e.RTCPeerConnection.prototype.addIceCandidate;
                    n && 0 !== n.length && (e.RTCPeerConnection.prototype.addIceCandidate = function() {
                        return arguments[0] ? ("chrome" === t.browser && t.version < 78 || "firefox" === t.browser && t.version < 68 || "safari" === t.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                    });
                }
            }
        },
        {
            "sdp": "YHvh",
            "./utils": "iSxC"
        }
    ],
    "KtlG": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.adapterFactory = o13;
            var e101 = m1(require("./utils")), i19 = m1(require("./chrome/chrome_shim")), r42 = m1(require("./edge/edge_shim")), s9 = m1(require("./firefox/firefox_shim")), t60 = m1(require("./safari/safari_shim")), a10 = m1(require("./common_shim"));
            function n31() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return n31 = function() {
                    return e;
                }, e;
            }
            function m1(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var i = n31();
                if (i && i.has(e)) return i.get(e);
                var r = {
                }, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var t in e)if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var a = s ? Object.getOwnPropertyDescriptor(e, t) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, t, a) : r[t] = e[t];
                }
                return r.default = e, i && i.set(e, r), r;
            }
            function o13() {
                var { window: n  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                }, m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    shimChrome: !0,
                    shimFirefox: !0,
                    shimEdge: !0,
                    shimSafari: !0
                }, o = e101.log, h = e101.detectBrowser(n), d = {
                    browserDetails: h,
                    commonShim: a10,
                    extractVersion: e101.extractVersion,
                    disableLog: e101.disableLog,
                    disableWarnings: e101.disableWarnings
                };
                switch(h.browser){
                    case "chrome":
                        if (!i19 || !i19.shimPeerConnection || !m.shimChrome) return o("Chrome shim is not included in this adapter release."), d;
                        if (null === h.version) return o("Chrome shim can not determine version, not shimming."), d;
                        o("adapter.js shimming chrome."), d.browserShim = i19, a10.shimAddIceCandidateNullOrEmpty(n, h), i19.shimGetUserMedia(n, h), i19.shimMediaStream(n, h), i19.shimPeerConnection(n, h), i19.shimOnTrack(n, h), i19.shimAddTrackRemoveTrack(n, h), i19.shimGetSendersWithDtmf(n, h), i19.shimGetStats(n, h), i19.shimSenderReceiverGetStats(n, h), i19.fixNegotiationNeeded(n, h), a10.shimRTCIceCandidate(n, h), a10.shimConnectionState(n, h), a10.shimMaxMessageSize(n, h), a10.shimSendThrowTypeError(n, h), a10.removeExtmapAllowMixed(n, h);
                        break;
                    case "firefox":
                        if (!s9 || !s9.shimPeerConnection || !m.shimFirefox) return o("Firefox shim is not included in this adapter release."), d;
                        o("adapter.js shimming firefox."), d.browserShim = s9, a10.shimAddIceCandidateNullOrEmpty(n, h), s9.shimGetUserMedia(n, h), s9.shimPeerConnection(n, h), s9.shimOnTrack(n, h), s9.shimRemoveStream(n, h), s9.shimSenderGetStats(n, h), s9.shimReceiverGetStats(n, h), s9.shimRTCDataChannel(n, h), s9.shimAddTransceiver(n, h), s9.shimGetParameters(n, h), s9.shimCreateOffer(n, h), s9.shimCreateAnswer(n, h), a10.shimRTCIceCandidate(n, h), a10.shimConnectionState(n, h), a10.shimMaxMessageSize(n, h), a10.shimSendThrowTypeError(n, h);
                        break;
                    case "edge":
                        if (!r42 || !r42.shimPeerConnection || !m.shimEdge) return o("MS edge shim is not included in this adapter release."), d;
                        o("adapter.js shimming edge."), d.browserShim = r42, r42.shimGetUserMedia(n, h), r42.shimGetDisplayMedia(n, h), r42.shimPeerConnection(n, h), r42.shimReplaceTrack(n, h), a10.shimMaxMessageSize(n, h), a10.shimSendThrowTypeError(n, h);
                        break;
                    case "safari":
                        if (!t60 || !m.shimSafari) return o("Safari shim is not included in this adapter release."), d;
                        o("adapter.js shimming safari."), d.browserShim = t60, a10.shimAddIceCandidateNullOrEmpty(n, h), t60.shimRTCIceServerUrls(n, h), t60.shimCreateOfferLegacy(n, h), t60.shimCallbacksAPI(n, h), t60.shimLocalStreamsAPI(n, h), t60.shimRemoteStreamsAPI(n, h), t60.shimTrackEventTransceiver(n, h), t60.shimGetUserMedia(n, h), t60.shimAudioContext(n, h), a10.shimRTCIceCandidate(n, h), a10.shimMaxMessageSize(n, h), a10.shimSendThrowTypeError(n, h), a10.removeExtmapAllowMixed(n, h);
                        break;
                    default:
                        o("Unsupported browser!");
                }
                return d;
            }
        },
        {
            "./utils": "iSxC",
            "./chrome/chrome_shim": "uI5X",
            "./edge/edge_shim": "XRic",
            "./firefox/firefox_shim": "Fzdr",
            "./safari/safari_shim": "t1lL",
            "./common_shim": "GOQK"
        }
    ],
    "tI1X": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.default = void 0;
            var e = require("./adapter_factory.js"), t = (0, e.adapterFactory)({
                window: "undefined" == typeof window ? void 0 : window
            }), d = t;
            exports.default = d;
        },
        {
            "./adapter_factory.js": "KtlG"
        }
    ],
    "sXtV": [
        function(require, module, exports) {
            "use strict";
            var e102 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.webRTCAdapter = void 0;
            var t = e102(require("webrtc-adapter"));
            exports.webRTCAdapter = t.default;
        },
        {
            "webrtc-adapter": "tI1X"
        }
    ],
    "I31f": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Supports = void 0;
            var r43 = require("./adapter");
            exports.Supports = new (function() {
                function e103() {
                    this.isIOS = [
                        "iPad",
                        "iPhone",
                        "iPod"
                    ].includes(navigator.platform), this.supportedBrowsers = [
                        "firefox",
                        "chrome",
                        "safari"
                    ], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
                }
                return e103.prototype.isWebRTCSupported = function() {
                    return "undefined" != typeof RTCPeerConnection;
                }, e103.prototype.isBrowserSupported = function() {
                    var r = this.getBrowser(), e = this.getVersion();
                    return !!this.supportedBrowsers.includes(r) && ("chrome" === r ? e >= this.minChromeVersion : "firefox" === r ? e >= this.minFirefoxVersion : "safari" === r && !this.isIOS && e >= this.minSafariVersion);
                }, e103.prototype.getBrowser = function() {
                    return r43.webRTCAdapter.browserDetails.browser;
                }, e103.prototype.getVersion = function() {
                    return r43.webRTCAdapter.browserDetails.version || 0;
                }, e103.prototype.isUnifiedPlanSupported = function() {
                    var e, i = this.getBrowser(), t = r43.webRTCAdapter.browserDetails.version || 0;
                    if ("chrome" === i && t < 72) return !1;
                    if ("firefox" === i && t >= 59) return !0;
                    if (!(window.RTCRtpTransceiver && "currentDirection" in RTCRtpTransceiver.prototype)) return !1;
                    var o = !1;
                    try {
                        (e = new RTCPeerConnection).addTransceiver("audio"), o = !0;
                    } catch (s) {
                    } finally{
                        e && e.close();
                    }
                    return o;
                }, e103.prototype.toString = function() {
                    return "Supports: \n    browser:" + this.getBrowser() + " \n    version:" + this.getVersion() + " \n    isIOS:" + this.isIOS + " \n    isWebRTCSupported:" + this.isWebRTCSupported() + " \n    isBrowserSupported:" + this.isBrowserSupported() + " \n    isUnifiedPlanSupported:" + this.isUnifiedPlanSupported();
                }, e103;
            }());
        },
        {
            "./adapter": "sXtV"
        }
    ],
    "BHXf": [
        function(require, module, exports) {
            "use strict";
            var e104 = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                void 0 === o && (o = r), Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, o) {
                void 0 === o && (o = r), e[o] = t[r];
            }), t61 = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            }), r44 = this && this.__importStar || function(r) {
                if (r && r.__esModule) return r;
                var o = {
                };
                if (null != r) for(var n in r)"default" !== n && Object.prototype.hasOwnProperty.call(r, n) && e104(o, r, n);
                return t61(o, r), o;
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.util = void 0;
            var o14 = r44(require("peerjs-js-binarypack")), n32 = require("./supports"), i20 = {
                iceServers: [
                    {
                        urls: "stun:stun.l.google.com:19302"
                    },
                    {
                        urls: "turn:0.peerjs.com:3478",
                        username: "peerjs",
                        credential: "peerjsp"
                    }
                ],
                sdpSemantics: "unified-plan"
            };
            exports.util = new (function() {
                function e105() {
                    this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = {
                        Chrome: 1,
                        chrome: 1
                    }, this.chunkedMTU = 16300, this.defaultConfig = i20, this.browser = n32.Supports.getBrowser(), this.browserVersion = n32.Supports.getVersion(), this.supports = (function() {
                        var e, t = {
                            browser: n32.Supports.isBrowserSupported(),
                            webRTC: n32.Supports.isWebRTCSupported(),
                            audioVideo: !1,
                            data: !1,
                            binaryBlob: !1,
                            reliable: !1
                        };
                        if (!t.webRTC) return t;
                        try {
                            e = new RTCPeerConnection(i20), t.audioVideo = !0;
                            var r = void 0;
                            try {
                                r = e.createDataChannel("_PEERJSTEST", {
                                    ordered: !0
                                }), t.data = !0, t.reliable = !!r.ordered;
                                try {
                                    r.binaryType = "blob", t.binaryBlob = !n32.Supports.isIOS;
                                } catch (o) {
                                }
                            } catch (o) {
                            } finally{
                                r && r.close();
                            }
                        } catch (o) {
                        } finally{
                            e && e.close();
                        }
                        return t;
                    })(), this.pack = o14.pack, this.unpack = o14.unpack, this._dataCount = 1;
                }
                return e105.prototype.noop = function() {
                }, e105.prototype.validateId = function(e) {
                    return !e || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e);
                }, e105.prototype.chunk = function(e) {
                    for(var t = [], r = e.size, o = Math.ceil(r / exports.util.chunkedMTU), n = 0, i = 0; i < r;){
                        var a = Math.min(r, i + exports.util.chunkedMTU), u = e.slice(i, a), s = {
                            __peerData: this._dataCount,
                            n: n,
                            data: u,
                            total: o
                        };
                        t.push(s), i = a, n++;
                    }
                    return this._dataCount++, t;
                }, e105.prototype.blobToArrayBuffer = function(e106, t) {
                    var r = new FileReader;
                    return r.onload = function(e) {
                        e.target && t(e.target.result);
                    }, r.readAsArrayBuffer(e106), r;
                }, e105.prototype.binaryStringToArrayBuffer = function(e) {
                    for(var t = new Uint8Array(e.length), r = 0; r < e.length; r++)t[r] = 255 & e.charCodeAt(r);
                    return t.buffer;
                }, e105.prototype.randomToken = function() {
                    return Math.random().toString(36).substr(2);
                }, e105.prototype.isSecure = function() {
                    return "https:" === location.protocol;
                }, e105;
            }());
        },
        {
            "peerjs-js-binarypack": "kdPp",
            "./supports": "I31f"
        }
    ],
    "JJlS": [
        function(require, module, exports) {
            "use strict";
            var e107 = Object.prototype.hasOwnProperty, t62 = "~";
            function n33() {
            }
            function r45(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1;
            }
            function o15(e, n, o, s, i) {
                if ("function" != typeof o) throw new TypeError("The listener must be a function");
                var c = new r45(o, s || e, i), f = t62 ? t62 + n : n;
                return e._events[f] ? e._events[f].fn ? e._events[f] = [
                    e._events[f],
                    c
                ] : e._events[f].push(c) : (e._events[f] = c, e._eventsCount++), e;
            }
            function s10(e, t) {
                0 == --e._eventsCount ? e._events = new n33 : delete e._events[t];
            }
            function i21() {
                this._events = new n33, this._eventsCount = 0;
            }
            Object.create && (n33.prototype = Object.create(null), (new n33).__proto__ || (t62 = !1)), i21.prototype.eventNames = function() {
                var n, r, o = [];
                if (0 === this._eventsCount) return o;
                for(r in n = this._events)e107.call(n, r) && o.push(t62 ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(n)) : o;
            }, i21.prototype.listeners = function(e) {
                var n = t62 ? t62 + e : e, r = this._events[n];
                if (!r) return [];
                if (r.fn) return [
                    r.fn
                ];
                for(var o = 0, s = r.length, i = new Array(s); o < s; o++)i[o] = r[o].fn;
                return i;
            }, i21.prototype.listenerCount = function(e) {
                var n = t62 ? t62 + e : e, r = this._events[n];
                return r ? r.fn ? 1 : r.length : 0;
            }, i21.prototype.emit = function(e, n, r, o, s, i) {
                var c = t62 ? t62 + e : e;
                if (!this._events[c]) return !1;
                var f, u, a = this._events[c], l = arguments.length;
                if (a.fn) {
                    switch(a.once && this.removeListener(e, a.fn, void 0, !0), l){
                        case 1:
                            return a.fn.call(a.context), !0;
                        case 2:
                            return a.fn.call(a.context, n), !0;
                        case 3:
                            return a.fn.call(a.context, n, r), !0;
                        case 4:
                            return a.fn.call(a.context, n, r, o), !0;
                        case 5:
                            return a.fn.call(a.context, n, r, o, s), !0;
                        case 6:
                            return a.fn.call(a.context, n, r, o, s, i), !0;
                    }
                    for(u = 1, f = new Array(l - 1); u < l; u++)f[u - 1] = arguments[u];
                    a.fn.apply(a.context, f);
                } else {
                    var v, h = a.length;
                    for(u = 0; u < h; u++)switch(a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l){
                        case 1:
                            a[u].fn.call(a[u].context);
                            break;
                        case 2:
                            a[u].fn.call(a[u].context, n);
                            break;
                        case 3:
                            a[u].fn.call(a[u].context, n, r);
                            break;
                        case 4:
                            a[u].fn.call(a[u].context, n, r, o);
                            break;
                        default:
                            if (!f) for(v = 1, f = new Array(l - 1); v < l; v++)f[v - 1] = arguments[v];
                            a[u].fn.apply(a[u].context, f);
                    }
                }
                return !0;
            }, i21.prototype.on = function(e, t, n) {
                return o15(this, e, t, n, !1);
            }, i21.prototype.once = function(e, t, n) {
                return o15(this, e, t, n, !0);
            }, i21.prototype.removeListener = function(e, n, r, o) {
                var i = t62 ? t62 + e : e;
                if (!this._events[i]) return this;
                if (!n) return s10(this, i), this;
                var c = this._events[i];
                if (c.fn) c.fn !== n || o && !c.once || r && c.context !== r || s10(this, i);
                else {
                    for(var f = 0, u = [], a = c.length; f < a; f++)(c[f].fn !== n || o && !c[f].once || r && c[f].context !== r) && u.push(c[f]);
                    u.length ? this._events[i] = 1 === u.length ? u[0] : u : s10(this, i);
                }
                return this;
            }, i21.prototype.removeAllListeners = function(e) {
                var r;
                return e ? (r = t62 ? t62 + e : e, this._events[r] && s10(this, r)) : (this._events = new n33, this._eventsCount = 0), this;
            }, i21.prototype.off = i21.prototype.removeListener, i21.prototype.addListener = i21.prototype.on, i21.prefixed = t62, i21.EventEmitter = i21, "undefined" != typeof module && (module.exports = i21);
        },
        {
        }
    ],
    "WOs9": [
        function(require, module, exports) {
            "use strict";
            var r46 = this && this.__read || function(r, e) {
                var o = "function" == typeof Symbol && r[Symbol.iterator];
                if (!o) return r;
                var t, n, l = o.call(r), i = [];
                try {
                    for(; (void 0 === e || e-- > 0) && !(t = l.next()).done;)i.push(t.value);
                } catch (s) {
                    n = {
                        error: s
                    };
                } finally{
                    try {
                        t && !t.done && (o = l.return) && o.call(l);
                    } finally{
                        if (n) throw n.error;
                    }
                }
                return i;
            }, e108 = this && this.__spreadArray || function(r, e) {
                for(var o = 0, t = e.length, n = r.length; o < t; o++, n++)r[n] = e[o];
                return r;
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.LogLevel = void 0;
            var o16, t63 = "PeerJS: ";
            !function(r) {
                r[r.Disabled = 0] = "Disabled", r[r.Errors = 1] = "Errors", r[r.Warnings = 2] = "Warnings", r[r.All = 3] = "All";
            }(o16 = exports.LogLevel || (exports.LogLevel = {
            }));
            var n34 = function() {
                function n35() {
                    this._logLevel = o16.Disabled;
                }
                return Object.defineProperty(n35.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel;
                    },
                    set: function(r) {
                        this._logLevel = r;
                    },
                    enumerable: !1,
                    configurable: !0
                }), n35.prototype.log = function() {
                    for(var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n];
                    this._logLevel >= o16.All && this._print.apply(this, e108([
                        o16.All
                    ], r46(t)));
                }, n35.prototype.warn = function() {
                    for(var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n];
                    this._logLevel >= o16.Warnings && this._print.apply(this, e108([
                        o16.Warnings
                    ], r46(t)));
                }, n35.prototype.error = function() {
                    for(var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n];
                    this._logLevel >= o16.Errors && this._print.apply(this, e108([
                        o16.Errors
                    ], r46(t)));
                }, n35.prototype.setLogFunction = function(r) {
                    this._print = r;
                }, n35.prototype._print = function(n) {
                    for(var l = [], i = 1; i < arguments.length; i++)l[i - 1] = arguments[i];
                    var s = e108([
                        t63
                    ], r46(l));
                    for(var a in s)s[a] instanceof Error && (s[a] = "(" + s[a].name + ") " + s[a].message);
                    n >= o16.All ? console.log.apply(console, e108([], r46(s))) : n >= o16.Warnings ? console.warn.apply(console, e108([
                        "WARNING"
                    ], r46(s))) : n >= o16.Errors && console.error.apply(console, e108([
                        "ERROR"
                    ], r46(s)));
                }, n35;
            }();
            exports.default = new n34;
        },
        {
        }
    ],
    "ZRYf": [
        function(require, module, exports) {
            "use strict";
            var e109, r, o, n, t, a, i;
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ServerMessageType = exports.SocketEventType = exports.SerializationType = exports.PeerErrorType = exports.PeerEventType = exports.ConnectionType = exports.ConnectionEventType = void 0, (function(e) {
                e.Open = "open", e.Stream = "stream", e.Data = "data", e.Close = "close", e.Error = "error", e.IceStateChanged = "iceStateChanged";
            })(e109 = exports.ConnectionEventType || (exports.ConnectionEventType = {
            })), (function(e) {
                e.Data = "data", e.Media = "media";
            })(r = exports.ConnectionType || (exports.ConnectionType = {
            })), (function(e) {
                e.Open = "open", e.Close = "close", e.Connection = "connection", e.Call = "call", e.Disconnected = "disconnected", e.Error = "error";
            })(o = exports.PeerEventType || (exports.PeerEventType = {
            })), (function(e) {
                e.BrowserIncompatible = "browser-incompatible", e.Disconnected = "disconnected", e.InvalidID = "invalid-id", e.InvalidKey = "invalid-key", e.Network = "network", e.PeerUnavailable = "peer-unavailable", e.SslUnavailable = "ssl-unavailable", e.ServerError = "server-error", e.SocketError = "socket-error", e.SocketClosed = "socket-closed", e.UnavailableID = "unavailable-id", e.WebRTC = "webrtc";
            })(n = exports.PeerErrorType || (exports.PeerErrorType = {
            })), (function(e) {
                e.Binary = "binary", e.BinaryUTF8 = "binary-utf8", e.JSON = "json";
            })(t = exports.SerializationType || (exports.SerializationType = {
            })), (function(e) {
                e.Message = "message", e.Disconnected = "disconnected", e.Error = "error", e.Close = "close";
            })(a = exports.SocketEventType || (exports.SocketEventType = {
            })), (function(e) {
                e.Heartbeat = "HEARTBEAT", e.Candidate = "CANDIDATE", e.Offer = "OFFER", e.Answer = "ANSWER", e.Open = "OPEN", e.Error = "ERROR", e.IdTaken = "ID-TAKEN", e.InvalidKey = "INVALID-KEY", e.Leave = "LEAVE", e.Expire = "EXPIRE";
            })(i = exports.ServerMessageType || (exports.ServerMessageType = {
            }));
        },
        {
        }
    ],
    "wJlv": [
        function(require, module, exports) {
            "use strict";
            var e110 = this && this.__extends || function() {
                var e111 = function(t65, n37) {
                    return (e111 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    })(t65, n37);
                };
                return function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                    function o() {
                        this.constructor = t;
                    }
                    e111(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o);
                };
            }(), t64 = this && this.__read || function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var o, s, r = n.call(e), i = [];
                try {
                    for(; (void 0 === t || t-- > 0) && !(o = r.next()).done;)i.push(o.value);
                } catch (c) {
                    s = {
                        error: c
                    };
                } finally{
                    try {
                        o && !o.done && (n = r.return) && n.call(r);
                    } finally{
                        if (s) throw s.error;
                    }
                }
                return i;
            }, n36 = this && this.__spreadArray || function(e, t) {
                for(var n = 0, o = t.length, s = e.length; n < o; n++, s++)e[s] = t[n];
                return e;
            }, o17 = this && this.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && o >= e.length && (e = void 0), {
                            value: e && e[o++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, s11 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Socket = void 0;
            var r47 = require("eventemitter3"), i22 = s11(require("./logger")), c8 = require("./enums"), a11 = function(s12) {
                function r48(e, t, n, o, r, i) {
                    void 0 === i && (i = 5000);
                    var c = s12.call(this) || this;
                    c.pingInterval = i, c._disconnected = !0, c._messagesQueue = [];
                    var a = e ? "wss://" : "ws://";
                    return c._baseUrl = a + t + ":" + n + o + "peerjs?key=" + r, c;
                }
                return e110(r48, s12), r48.prototype.start = function(e112, t66) {
                    var n = this;
                    this._id = e112;
                    var o = this._baseUrl + "&id=" + e112 + "&token=" + t66;
                    !this._socket && this._disconnected && (this._socket = new WebSocket(o), this._disconnected = !1, this._socket.onmessage = function(e) {
                        var t;
                        try {
                            t = JSON.parse(e.data), i22.default.log("Server message received:", t);
                        } catch (o) {
                            return void i22.default.log("Invalid server message", e.data);
                        }
                        n.emit(c8.SocketEventType.Message, t);
                    }, this._socket.onclose = function(e) {
                        n._disconnected || (i22.default.log("Socket closed.", e), n._cleanup(), n._disconnected = !0, n.emit(c8.SocketEventType.Disconnected));
                    }, this._socket.onopen = function() {
                        n._disconnected || (n._sendQueuedMessages(), i22.default.log("Socket open"), n._scheduleHeartbeat());
                    });
                }, r48.prototype._scheduleHeartbeat = function() {
                    var e = this;
                    this._wsPingTimer = setTimeout(function() {
                        e._sendHeartbeat();
                    }, this.pingInterval);
                }, r48.prototype._sendHeartbeat = function() {
                    if (this._wsOpen()) {
                        var e = JSON.stringify({
                            type: c8.ServerMessageType.Heartbeat
                        });
                        this._socket.send(e), this._scheduleHeartbeat();
                    } else i22.default.log("Cannot send heartbeat, because socket closed");
                }, r48.prototype._wsOpen = function() {
                    return !!this._socket && 1 === this._socket.readyState;
                }, r48.prototype._sendQueuedMessages = function() {
                    var e, s, r = n36([], t64(this._messagesQueue));
                    this._messagesQueue = [];
                    try {
                        for(var i = o17(r), c = i.next(); !c.done; c = i.next()){
                            var a = c.value;
                            this.send(a);
                        }
                    } catch (u) {
                        e = {
                            error: u
                        };
                    } finally{
                        try {
                            c && !c.done && (s = i.return) && s.call(i);
                        } finally{
                            if (e) throw e.error;
                        }
                    }
                }, r48.prototype.send = function(e) {
                    if (!this._disconnected) {
                        if (this._id) {
                            if (e.type) {
                                if (this._wsOpen()) {
                                    var t = JSON.stringify(e);
                                    this._socket.send(t);
                                }
                            } else this.emit(c8.SocketEventType.Error, "Invalid message");
                        } else this._messagesQueue.push(e);
                    }
                }, r48.prototype.close = function() {
                    this._disconnected || (this._cleanup(), this._disconnected = !0);
                }, r48.prototype._cleanup = function() {
                    this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
                }, r48;
            }(r47.EventEmitter);
            exports.Socket = a11;
        },
        {
            "eventemitter3": "JJlS",
            "./logger": "WOs9",
            "./enums": "ZRYf"
        }
    ],
    "HCdX": [
        function(require, module, exports) {
            "use strict";
            var e113 = this && this.__assign || function() {
                return (e113 = Object.assign || function(e) {
                    for(var n, t = 1, o = arguments.length; t < o; t++)for(var i in n = arguments[t])Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    return e;
                }).apply(this, arguments);
            }, n38 = this && this.__awaiter || function(e114, n39, t, o) {
                return new (t || (t = Promise))(function(i, r) {
                    function c(e) {
                        try {
                            s(o.next(e));
                        } catch (n) {
                            r(n);
                        }
                    }
                    function a(e) {
                        try {
                            s(o.throw(e));
                        } catch (n) {
                            r(n);
                        }
                    }
                    function s(e115) {
                        var n;
                        e115.done ? i(e115.value) : (n = e115.value, n instanceof t ? n : new t(function(e) {
                            e(n);
                        })).then(c, a);
                    }
                    s((o = o.apply(e114, n39 || [])).next());
                });
            }, t67 = this && this.__generator || function(e, n) {
                var t, o, i, r50, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                function a13(r51) {
                    return function(a14) {
                        return (function(r) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for(; c;)try {
                                if (t = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                switch(o = 0, i && (r = [
                                    2 & r[0],
                                    i.value
                                ]), r[0]){
                                    case 0:
                                    case 1:
                                        i = r;
                                        break;
                                    case 4:
                                        return c.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        c.label++, o = r[1], r = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        r = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                            c = 0;
                                            continue;
                                        }
                                        if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                            c.label = r[1];
                                            break;
                                        }
                                        if (6 === r[0] && c.label < i[1]) {
                                            c.label = i[1], i = r;
                                            break;
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2], c.ops.push(r);
                                            break;
                                        }
                                        i[2] && c.ops.pop(), c.trys.pop();
                                        continue;
                                }
                                r = n.call(e, c);
                            } catch (a) {
                                r = [
                                    6,
                                    a
                                ], o = 0;
                            } finally{
                                t = i = 0;
                            }
                            if (5 & r[0]) throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            };
                        })([
                            r51,
                            a14
                        ]);
                    };
                }
                return r50 = {
                    next: a13(0),
                    throw: a13(1),
                    return: a13(2)
                }, "function" == typeof Symbol && (r50[Symbol.iterator] = function() {
                    return this;
                }), r50;
            }, o18 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Negotiator = void 0;
            var i23 = require("./util"), r49 = o18(require("./logger")), c9 = require("./enums"), a12 = function() {
                function o19(e) {
                    this.connection = e;
                }
                return o19.prototype.startConnection = function(e) {
                    var n = this._startPeerConnection();
                    if (this.connection.peerConnection = n, this.connection.type === c9.ConnectionType.Media && e._stream && this._addTracksToConnection(e._stream, n), e.originator) {
                        if (this.connection.type === c9.ConnectionType.Data) {
                            var t = this.connection, o = {
                                ordered: !!e.reliable
                            }, i = n.createDataChannel(t.label, o);
                            t.initialize(i);
                        }
                        this._makeOffer();
                    } else this.handleSDP("OFFER", e.sdp);
                }, o19.prototype._startPeerConnection = function() {
                    r49.default.log("Creating RTCPeerConnection.");
                    var e = new RTCPeerConnection(this.connection.provider.options.config);
                    return this._setupListeners(e), e;
                }, o19.prototype._setupListeners = function(e116) {
                    var n40 = this, t = this.connection.peer, o = this.connection.connectionId, a15 = this.connection.type, s = this.connection.provider;
                    r49.default.log("Listening for ICE candidates."), e116.onicecandidate = function(e) {
                        e.candidate && e.candidate.candidate && (r49.default.log("Received ICE candidates for " + t + ":", e.candidate), s.socket.send({
                            type: c9.ServerMessageType.Candidate,
                            payload: {
                                candidate: e.candidate,
                                type: a15,
                                connectionId: o
                            },
                            dst: t
                        }));
                    }, e116.oniceconnectionstatechange = function() {
                        switch(e116.iceConnectionState){
                            case "failed":
                                r49.default.log("iceConnectionState is failed, closing connections to " + t), n40.connection.emit(c9.ConnectionEventType.Error, new Error("Negotiation of connection to " + t + " failed.")), n40.connection.close();
                                break;
                            case "closed":
                                r49.default.log("iceConnectionState is closed, closing connections to " + t), n40.connection.emit(c9.ConnectionEventType.Error, new Error("Connection to " + t + " closed.")), n40.connection.close();
                                break;
                            case "disconnected":
                                r49.default.log("iceConnectionState changed to disconnected on the connection with " + t);
                                break;
                            case "completed":
                                e116.onicecandidate = i23.util.noop;
                        }
                        n40.connection.emit(c9.ConnectionEventType.IceStateChanged, e116.iceConnectionState);
                    }, r49.default.log("Listening for data channel"), e116.ondatachannel = function(e) {
                        r49.default.log("Received data channel");
                        var n = e.channel;
                        s.getConnection(t, o).initialize(n);
                    }, r49.default.log("Listening for remote stream"), e116.ontrack = function(e) {
                        r49.default.log("Received remote stream");
                        var i = e.streams[0], a = s.getConnection(t, o);
                        if (a.type === c9.ConnectionType.Media) {
                            var d = a;
                            n40._addStreamToMediaConnection(i, d);
                        }
                    };
                }, o19.prototype.cleanup = function() {
                    r49.default.log("Cleaning up PeerConnection to " + this.connection.peer);
                    var e = this.connection.peerConnection;
                    if (e) {
                        this.connection.peerConnection = null, e.onicecandidate = e.oniceconnectionstatechange = e.ondatachannel = e.ontrack = function() {
                        };
                        var n = "closed" !== e.signalingState, t = !1;
                        if (this.connection.type === c9.ConnectionType.Data) {
                            var o = this.connection.dataChannel;
                            o && (t = !!o.readyState && "closed" !== o.readyState);
                        }
                        (n || t) && e.close();
                    }
                }, o19.prototype._makeOffer = function() {
                    return n38(this, void 0, Promise, function() {
                        var n, o, a, s, d, l, u;
                        return t67(this, function(t) {
                            switch(t.label){
                                case 0:
                                    n = this.connection.peerConnection, o = this.connection.provider, t.label = 1;
                                case 1:
                                    return t.trys.push([
                                        1,
                                        7,
                                        ,
                                        8
                                    ]), [
                                        4,
                                        n.createOffer(this.connection.options.constraints)
                                    ];
                                case 2:
                                    a = t.sent(), r49.default.log("Created offer."), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (a.sdp = this.connection.options.sdpTransform(a.sdp) || a.sdp), t.label = 3;
                                case 3:
                                    return t.trys.push([
                                        3,
                                        5,
                                        ,
                                        6
                                    ]), [
                                        4,
                                        n.setLocalDescription(a)
                                    ];
                                case 4:
                                    return t.sent(), r49.default.log("Set localDescription:", a, "for:" + this.connection.peer), s = {
                                        sdp: a,
                                        type: this.connection.type,
                                        connectionId: this.connection.connectionId,
                                        metadata: this.connection.metadata,
                                        browser: i23.util.browser
                                    }, this.connection.type === c9.ConnectionType.Data && (d = this.connection, s = e113(e113({
                                    }, s), {
                                        label: d.label,
                                        reliable: d.reliable,
                                        serialization: d.serialization
                                    })), o.socket.send({
                                        type: c9.ServerMessageType.Offer,
                                        payload: s,
                                        dst: this.connection.peer
                                    }), [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" != (l = t.sent()) && (o.emitError(c9.PeerErrorType.WebRTC, l), r49.default.log("Failed to setLocalDescription, ", l)), [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    return u = t.sent(), o.emitError(c9.PeerErrorType.WebRTC, u), r49.default.log("Failed to createOffer, ", u), [
                                        3,
                                        8
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o19.prototype._makeAnswer = function() {
                    return n38(this, void 0, Promise, function() {
                        var e, n, o, a, s;
                        return t67(this, function(t) {
                            switch(t.label){
                                case 0:
                                    e = this.connection.peerConnection, n = this.connection.provider, t.label = 1;
                                case 1:
                                    return t.trys.push([
                                        1,
                                        7,
                                        ,
                                        8
                                    ]), [
                                        4,
                                        e.createAnswer()
                                    ];
                                case 2:
                                    o = t.sent(), r49.default.log("Created answer."), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (o.sdp = this.connection.options.sdpTransform(o.sdp) || o.sdp), t.label = 3;
                                case 3:
                                    return t.trys.push([
                                        3,
                                        5,
                                        ,
                                        6
                                    ]), [
                                        4,
                                        e.setLocalDescription(o)
                                    ];
                                case 4:
                                    return t.sent(), r49.default.log("Set localDescription:", o, "for:" + this.connection.peer), n.socket.send({
                                        type: c9.ServerMessageType.Answer,
                                        payload: {
                                            sdp: o,
                                            type: this.connection.type,
                                            connectionId: this.connection.connectionId,
                                            browser: i23.util.browser
                                        },
                                        dst: this.connection.peer
                                    }), [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return a = t.sent(), n.emitError(c9.PeerErrorType.WebRTC, a), r49.default.log("Failed to setLocalDescription, ", a), [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    return s = t.sent(), n.emitError(c9.PeerErrorType.WebRTC, s), r49.default.log("Failed to create answer, ", s), [
                                        3,
                                        8
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o19.prototype.handleSDP = function(e, o) {
                    return n38(this, void 0, Promise, function() {
                        var n, i, a, s;
                        return t67(this, function(t) {
                            switch(t.label){
                                case 0:
                                    o = new RTCSessionDescription(o), n = this.connection.peerConnection, i = this.connection.provider, r49.default.log("Setting remote description", o), a = this, t.label = 1;
                                case 1:
                                    return t.trys.push([
                                        1,
                                        5,
                                        ,
                                        6
                                    ]), [
                                        4,
                                        n.setRemoteDescription(o)
                                    ];
                                case 2:
                                    return t.sent(), r49.default.log("Set remoteDescription:" + e + " for:" + this.connection.peer), "OFFER" !== e ? [
                                        3,
                                        4
                                    ] : [
                                        4,
                                        a._makeAnswer()
                                    ];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return s = t.sent(), i.emitError(c9.PeerErrorType.WebRTC, s), r49.default.log("Failed to setRemoteDescription, ", s), [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o19.prototype.handleCandidate = function(e) {
                    return n38(this, void 0, Promise, function() {
                        var n, o, i, a, s, d;
                        return t67(this, function(t) {
                            switch(t.label){
                                case 0:
                                    r49.default.log("handleCandidate:", e), n = e.candidate, o = e.sdpMLineIndex, i = e.sdpMid, a = this.connection.peerConnection, s = this.connection.provider, t.label = 1;
                                case 1:
                                    return t.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        a.addIceCandidate(new RTCIceCandidate({
                                            sdpMid: i,
                                            sdpMLineIndex: o,
                                            candidate: n
                                        }))
                                    ];
                                case 2:
                                    return t.sent(), r49.default.log("Added ICE candidate for:" + this.connection.peer), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return d = t.sent(), s.emitError(c9.PeerErrorType.WebRTC, d), r49.default.log("Failed to handleCandidate, ", d), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o19.prototype._addTracksToConnection = function(e, n) {
                    if (r49.default.log("add tracks from stream " + e.id + " to peer connection"), !n.addTrack) return r49.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
                    e.getTracks().forEach(function(t) {
                        n.addTrack(t, e);
                    });
                }, o19.prototype._addStreamToMediaConnection = function(e, n) {
                    r49.default.log("add stream " + e.id + " to media connection " + n.connectionId), n.addStream(e);
                }, o19;
            }();
            exports.Negotiator = a12;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9",
            "./enums": "ZRYf"
        }
    ],
    "tQFK": [
        function(require, module, exports) {
            "use strict";
            var t68 = this && this.__extends || function() {
                var t69 = function(e118, n42) {
                    return (t69 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    })(e118, n42);
                };
                return function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                    function o() {
                        this.constructor = e;
                    }
                    t69(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o);
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.BaseConnection = void 0;
            var e117 = require("eventemitter3"), n41 = function(e) {
                function n43(t, n, o) {
                    var r = e.call(this) || this;
                    return r.peer = t, r.provider = n, r.options = o, r._open = !1, r.metadata = o.metadata, r;
                }
                return t68(n43, e), Object.defineProperty(n43.prototype, "open", {
                    get: function() {
                        return this._open;
                    },
                    enumerable: !1,
                    configurable: !0
                }), n43;
            }(e117.EventEmitter);
            exports.BaseConnection = n41;
        },
        {
            "eventemitter3": "JJlS"
        }
    ],
    "dbHP": [
        function(require, module, exports) {
            "use strict";
            var e119 = this && this.__extends || function() {
                var e120 = function(t71, o21) {
                    return (e120 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var o in t)Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    })(t71, o21);
                };
                return function(t, o) {
                    if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                    function r() {
                        this.constructor = t;
                    }
                    e120(t, o), t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r);
                };
            }(), t70 = this && this.__assign || function() {
                return (t70 = Object.assign || function(e) {
                    for(var t, o = 1, r = arguments.length; o < r; o++)for(var n in t = arguments[o])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e;
                }).apply(this, arguments);
            }, o20 = this && this.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], r = 0;
                if (o) return o.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, r52 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.MediaConnection = void 0;
            var n44 = require("./util"), i24 = r52(require("./logger")), a16 = require("./negotiator"), s13 = require("./enums"), l3 = require("./baseconnection"), c10 = function(r53) {
                function l4(e, t, o) {
                    var i = r53.call(this, e, t, o) || this;
                    return i._localStream = i.options._stream, i.connectionId = i.options.connectionId || l4.ID_PREFIX + n44.util.randomToken(), i._negotiator = new a16.Negotiator(i), i._localStream && i._negotiator.startConnection({
                        _stream: i._localStream,
                        originator: !0
                    }), i;
                }
                return e119(l4, r53), Object.defineProperty(l4.prototype, "type", {
                    get: function() {
                        return s13.ConnectionType.Media;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(l4.prototype, "localStream", {
                    get: function() {
                        return this._localStream;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(l4.prototype, "remoteStream", {
                    get: function() {
                        return this._remoteStream;
                    },
                    enumerable: !1,
                    configurable: !0
                }), l4.prototype.addStream = function(e) {
                    i24.default.log("Receiving stream", e), this._remoteStream = e, r53.prototype.emit.call(this, s13.ConnectionEventType.Stream, e);
                }, l4.prototype.handleMessage = function(e) {
                    var t = e.type, o = e.payload;
                    switch(e.type){
                        case s13.ServerMessageType.Answer:
                            this._negotiator.handleSDP(t, o.sdp), this._open = !0;
                            break;
                        case s13.ServerMessageType.Candidate:
                            this._negotiator.handleCandidate(o.candidate);
                            break;
                        default:
                            i24.default.warn("Unrecognized message type:" + t + " from peer:" + this.peer);
                    }
                }, l4.prototype.answer = function(e, r) {
                    var n, a;
                    if (void 0 === r && (r = {
                    }), this._localStream) i24.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
                    else {
                        this._localStream = e, r && r.sdpTransform && (this.options.sdpTransform = r.sdpTransform), this._negotiator.startConnection(t70(t70({
                        }, this.options._payload), {
                            _stream: e
                        }));
                        var s = this.provider._getMessages(this.connectionId);
                        try {
                            for(var l = o20(s), c = l.next(); !c.done; c = l.next()){
                                var p = c.value;
                                this.handleMessage(p);
                            }
                        } catch (u) {
                            n = {
                                error: u
                            };
                        } finally{
                            try {
                                c && !c.done && (a = l.return) && a.call(l);
                            } finally{
                                if (n) throw n.error;
                            }
                        }
                        this._open = !0;
                    }
                }, l4.prototype.close = function() {
                    this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = !1, r53.prototype.emit.call(this, s13.ConnectionEventType.Close));
                }, l4.ID_PREFIX = "mc_", l4;
            }(l3.BaseConnection);
            exports.MediaConnection = c10;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9",
            "./negotiator": "HCdX",
            "./enums": "ZRYf",
            "./baseconnection": "tQFK"
        }
    ],
    "GGp6": [
        function(require, module, exports) {
            "use strict";
            var e121 = this && this.__extends || function() {
                var e122 = function(t73, r55) {
                    return (e122 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    })(t73, r55);
                };
                return function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    function o() {
                        this.constructor = t;
                    }
                    e122(t, r), t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, new o);
                };
            }(), t72 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.EncodingQueue = void 0;
            var r54 = require("eventemitter3"), o22 = t72(require("./logger")), n = function(t74) {
                function r() {
                    var e = t74.call(this) || this;
                    return e.fileReader = new FileReader, e._queue = [], e._processing = !1, e.fileReader.onload = function(t) {
                        e._processing = !1, t.target && e.emit("done", t.target.result), e.doNextTask();
                    }, e.fileReader.onerror = function(t) {
                        o22.default.error("EncodingQueue error:", t), e._processing = !1, e.destroy(), e.emit("error", t);
                    }, e;
                }
                return e121(r, t74), Object.defineProperty(r.prototype, "queue", {
                    get: function() {
                        return this._queue;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(r.prototype, "size", {
                    get: function() {
                        return this.queue.length;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(r.prototype, "processing", {
                    get: function() {
                        return this._processing;
                    },
                    enumerable: !1,
                    configurable: !0
                }), r.prototype.enque = function(e) {
                    this.queue.push(e), this.processing || this.doNextTask();
                }, r.prototype.destroy = function() {
                    this.fileReader.abort(), this._queue = [];
                }, r.prototype.doNextTask = function() {
                    0 !== this.size && (this.processing || (this._processing = !0, this.fileReader.readAsArrayBuffer(this.queue.shift())));
                }, r;
            }(r54.EventEmitter);
            exports.EncodingQueue = n;
        },
        {
            "eventemitter3": "JJlS",
            "./logger": "WOs9"
        }
    ],
    "GBTQ": [
        function(require, module, exports) {
            "use strict";
            var e123 = this && this.__extends || function() {
                var e124 = function(t76, n46) {
                    return (e124 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    })(t76, n46);
                };
                return function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                    function i() {
                        this.constructor = t;
                    }
                    e124(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i);
                };
            }(), t75 = this && this.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, n45 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DataConnection = void 0;
            var i25 = require("./util"), o23 = n45(require("./logger")), r56 = require("./negotiator"), a17 = require("./enums"), s14 = require("./baseconnection"), u4 = require("./encodingQueue"), l5 = function(n47) {
                function s15(e125, t, l) {
                    var f = n47.call(this, e125, t, l) || this;
                    return f.stringify = JSON.stringify, f.parse = JSON.parse, f._buffer = [], f._bufferSize = 0, f._buffering = !1, f._chunkedData = {
                    }, f._encodingQueue = new u4.EncodingQueue, f.connectionId = f.options.connectionId || s15.ID_PREFIX + i25.util.randomToken(), f.label = f.options.label || f.connectionId, f.serialization = f.options.serialization || a17.SerializationType.Binary, f.reliable = !!f.options.reliable, f._encodingQueue.on("done", function(e) {
                        f._bufferedSend(e);
                    }), f._encodingQueue.on("error", function() {
                        o23.default.error("DC#" + f.connectionId + ": Error occured in encoding from blob to arraybuffer, close DC"), f.close();
                    }), f._negotiator = new r56.Negotiator(f), f._negotiator.startConnection(f.options._payload || {
                        originator: !0
                    }), f;
                }
                return e123(s15, n47), Object.defineProperty(s15.prototype, "type", {
                    get: function() {
                        return a17.ConnectionType.Data;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(s15.prototype, "dataChannel", {
                    get: function() {
                        return this._dc;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(s15.prototype, "bufferSize", {
                    get: function() {
                        return this._bufferSize;
                    },
                    enumerable: !1,
                    configurable: !0
                }), s15.prototype.initialize = function(e) {
                    this._dc = e, this._configureDataChannel();
                }, s15.prototype._configureDataChannel = function() {
                    var e = this;
                    i25.util.supports.binaryBlob && !i25.util.supports.reliable || (this.dataChannel.binaryType = "arraybuffer"), this.dataChannel.onopen = function() {
                        o23.default.log("DC#" + e.connectionId + " dc connection success"), e._open = !0, e.emit(a17.ConnectionEventType.Open);
                    }, this.dataChannel.onmessage = function(t) {
                        o23.default.log("DC#" + e.connectionId + " dc onmessage:", t.data), e._handleDataMessage(t);
                    }, this.dataChannel.onclose = function() {
                        o23.default.log("DC#" + e.connectionId + " dc closed for:", e.peer), e.close();
                    };
                }, s15.prototype._handleDataMessage = function(e126) {
                    var t = this, o = e126.data, r = o.constructor, s = o;
                    if (this.serialization === a17.SerializationType.Binary || this.serialization === a17.SerializationType.BinaryUTF8) {
                        if (r === Blob) return void i25.util.blobToArrayBuffer(o, function(e) {
                            var n = i25.util.unpack(e);
                            t.emit(a17.ConnectionEventType.Data, n);
                        });
                        if (r === ArrayBuffer) s = i25.util.unpack(o);
                        else if (r === String) {
                            var u = i25.util.binaryStringToArrayBuffer(o);
                            s = i25.util.unpack(u);
                        }
                    } else this.serialization === a17.SerializationType.JSON && (s = this.parse(o));
                    s.__peerData ? this._handleChunk(s) : n47.prototype.emit.call(this, a17.ConnectionEventType.Data, s);
                }, s15.prototype._handleChunk = function(e) {
                    var t = e.__peerData, n = this._chunkedData[t] || {
                        data: [],
                        count: 0,
                        total: e.total
                    };
                    if (n.data[e.n] = e.data, n.count++, this._chunkedData[t] = n, n.total === n.count) {
                        delete this._chunkedData[t];
                        var i = new Blob(n.data);
                        this._handleDataMessage({
                            data: i
                        });
                    }
                }, s15.prototype.close = function() {
                    this._buffer = [], this._bufferSize = 0, this._chunkedData = {
                    }, this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this._dc = null), this._encodingQueue && (this._encodingQueue.destroy(), this._encodingQueue.removeAllListeners(), this._encodingQueue = null), this.open && (this._open = !1, n47.prototype.emit.call(this, a17.ConnectionEventType.Close));
                }, s15.prototype.send = function(e, t) {
                    if (this.open) {
                        if (this.serialization === a17.SerializationType.JSON) this._bufferedSend(this.stringify(e));
                        else if (this.serialization === a17.SerializationType.Binary || this.serialization === a17.SerializationType.BinaryUTF8) {
                            var o = i25.util.pack(e);
                            if (!t && o.size > i25.util.chunkedMTU) return void this._sendChunks(o);
                            i25.util.supports.binaryBlob ? this._bufferedSend(o) : this._encodingQueue.enque(o);
                        } else this._bufferedSend(e);
                    } else n47.prototype.emit.call(this, a17.ConnectionEventType.Error, new Error("Connection is not open. You should listen for the `open` event before sending messages."));
                }, s15.prototype._bufferedSend = function(e) {
                    !this._buffering && this._trySend(e) || (this._buffer.push(e), this._bufferSize = this._buffer.length);
                }, s15.prototype._trySend = function(e) {
                    var t = this;
                    if (!this.open) return !1;
                    if (this.dataChannel.bufferedAmount > s15.MAX_BUFFERED_AMOUNT) return this._buffering = !0, setTimeout(function() {
                        t._buffering = !1, t._tryBuffer();
                    }, 50), !1;
                    try {
                        this.dataChannel.send(e);
                    } catch (n) {
                        return o23.default.error("DC#:" + this.connectionId + " Error when sending:", n), this._buffering = !0, this.close(), !1;
                    }
                    return !0;
                }, s15.prototype._tryBuffer = function() {
                    if (this.open && 0 !== this._buffer.length) {
                        var e = this._buffer[0];
                        this._trySend(e) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
                    }
                }, s15.prototype._sendChunks = function(e) {
                    var n, r, a = i25.util.chunk(e);
                    o23.default.log("DC#" + this.connectionId + " Try to send " + a.length + " chunks...");
                    try {
                        for(var s = t75(a), u = s.next(); !u.done; u = s.next()){
                            var l = u.value;
                            this.send(l, !0);
                        }
                    } catch (f) {
                        n = {
                            error: f
                        };
                    } finally{
                        try {
                            u && !u.done && (r = s.return) && r.call(s);
                        } finally{
                            if (n) throw n.error;
                        }
                    }
                }, s15.prototype.handleMessage = function(e) {
                    var t = e.payload;
                    switch(e.type){
                        case a17.ServerMessageType.Answer:
                            this._negotiator.handleSDP(e.type, t.sdp);
                            break;
                        case a17.ServerMessageType.Candidate:
                            this._negotiator.handleCandidate(t.candidate);
                            break;
                        default:
                            o23.default.warn("Unrecognized message type:", e.type, "from peer:", this.peer);
                    }
                }, s15.ID_PREFIX = "dc_", s15.MAX_BUFFERED_AMOUNT = 8388608, s15;
            }(s14.BaseConnection);
            exports.DataConnection = l5;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9",
            "./negotiator": "HCdX",
            "./enums": "ZRYf",
            "./baseconnection": "tQFK",
            "./encodingQueue": "GGp6"
        }
    ],
    "in7L": [
        function(require, module, exports) {
            "use strict";
            var t77 = this && this.__awaiter || function(t78, e128, r, o) {
                return new (r || (r = Promise))(function(n, s) {
                    function i(t) {
                        try {
                            a(o.next(t));
                        } catch (e) {
                            s(e);
                        }
                    }
                    function u(t) {
                        try {
                            a(o.throw(t));
                        } catch (e) {
                            s(e);
                        }
                    }
                    function a(t79) {
                        var e;
                        t79.done ? n(t79.value) : (e = t79.value, e instanceof r ? e : new r(function(t) {
                            t(e);
                        })).then(i, u);
                    }
                    a((o = o.apply(t78, e128 || [])).next());
                });
            }, e127 = this && this.__generator || function(t, e) {
                var r, o, n, s17, i = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1];
                    },
                    trys: [],
                    ops: []
                };
                function u5(s18) {
                    return function(u6) {
                        return (function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for(; i;)try {
                                if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                                switch(o = 0, n && (s = [
                                    2 & s[0],
                                    n.value
                                ]), s[0]){
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, o = s[1], s = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        s = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            i = 0;
                                            continue;
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            i.label = s[1];
                                            break;
                                        }
                                        if (6 === s[0] && i.label < n[1]) {
                                            i.label = n[1], n = s;
                                            break;
                                        }
                                        if (n && i.label < n[2]) {
                                            i.label = n[2], i.ops.push(s);
                                            break;
                                        }
                                        n[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                }
                                s = e.call(t, i);
                            } catch (u) {
                                s = [
                                    6,
                                    u
                                ], o = 0;
                            } finally{
                                r = n = 0;
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            };
                        })([
                            s18,
                            u6
                        ]);
                    };
                }
                return s17 = {
                    next: u5(0),
                    throw: u5(1),
                    return: u5(2)
                }, "function" == typeof Symbol && (s17[Symbol.iterator] = function() {
                    return this;
                }), s17;
            }, r57 = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.API = void 0;
            var o24 = require("./util"), n48 = r57(require("./logger")), s16 = function() {
                function r58(t) {
                    this._options = t;
                }
                return r58.prototype._buildUrl = function(t) {
                    var e = (this._options.secure ? "https://" : "http://") + this._options.host + ":" + this._options.port + this._options.path + this._options.key + "/" + t;
                    return e += "?ts=" + (new Date).getTime() + Math.random();
                }, r58.prototype.retrieveId = function() {
                    return t77(this, void 0, Promise, function() {
                        var t, r, s, i;
                        return e127(this, function(e) {
                            switch(e.label){
                                case 0:
                                    t = this._buildUrl("id"), e.label = 1;
                                case 1:
                                    return e.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        fetch(t)
                                    ];
                                case 2:
                                    if (200 !== (r = e.sent()).status) throw new Error("Error. Status:" + r.status);
                                    return [
                                        2,
                                        r.text()
                                    ];
                                case 3:
                                    throw s = e.sent(), n48.default.error("Error retrieving ID", s), i = "", "/" === this._options.path && this._options.host !== o24.util.CLOUD_HOST && (i = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + i);
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, r58.prototype.listAllPeers = function() {
                    return t77(this, void 0, Promise, function() {
                        var t, r, s, i;
                        return e127(this, function(e) {
                            switch(e.label){
                                case 0:
                                    t = this._buildUrl("peers"), e.label = 1;
                                case 1:
                                    return e.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        fetch(t)
                                    ];
                                case 2:
                                    if (200 !== (r = e.sent()).status) {
                                        if (401 === r.status) throw s = "", s = this._options.host === o24.util.CLOUD_HOST ? "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + s);
                                        throw new Error("Error. Status:" + r.status);
                                    }
                                    return [
                                        2,
                                        r.json()
                                    ];
                                case 3:
                                    throw i = e.sent(), n48.default.error("Error retrieving list peers", i), new Error("Could not get list peers from the server." + i);
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, r58;
            }();
            exports.API = s16;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9"
        }
    ],
    "Hxpd": [
        function(require, module, exports) {
            "use strict";
            var e129 = this && this.__extends || function() {
                var e130 = function(t81, n50) {
                    return (e130 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    })(t81, n50);
                };
                return function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                    function r() {
                        this.constructor = t;
                    }
                    e130(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
                };
            }(), t80 = this && this.__assign || function() {
                return (t80 = Object.assign || function(e) {
                    for(var t, n = 1, r = arguments.length; n < r; n++)for(var o in t = arguments[n])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
            }, n49 = this && this.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, r59 = this && this.__read || function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e), s = [];
                try {
                    for(; (void 0 === t || t-- > 0) && !(r = i.next()).done;)s.push(r.value);
                } catch (a) {
                    o = {
                        error: a
                    };
                } finally{
                    try {
                        r && !r.done && (n = i.return) && n.call(i);
                    } finally{
                        if (o) throw o.error;
                    }
                }
                return s;
            }, o25 = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Peer = void 0;
            var i26 = require("eventemitter3"), s19 = require("./util"), a18 = o25(require("./logger")), c11 = require("./socket"), l6 = require("./mediaconnection"), u7 = require("./dataconnection"), d = require("./enums"), p4 = require("./api"), h1 = function() {
                return function() {
                };
            }(), f2 = function(o26) {
                function i27(e131, n) {
                    var r, c = o26.call(this) || this;
                    return c._id = null, c._lastServerId = null, c._destroyed = !1, c._disconnected = !1, c._open = !1, c._connections = new Map, c._lostMessages = new Map, e131 && e131.constructor == Object ? n = e131 : e131 && (r = e131.toString()), n = t80({
                        debug: 0,
                        host: s19.util.CLOUD_HOST,
                        port: s19.util.CLOUD_PORT,
                        path: "/",
                        key: i27.DEFAULT_KEY,
                        token: s19.util.randomToken(),
                        config: s19.util.defaultConfig
                    }, n), c._options = n, "/" === c._options.host && (c._options.host = window.location.hostname), c._options.path && ("/" !== c._options.path[0] && (c._options.path = "/" + c._options.path), "/" !== c._options.path[c._options.path.length - 1] && (c._options.path += "/")), void 0 === c._options.secure && c._options.host !== s19.util.CLOUD_HOST ? c._options.secure = s19.util.isSecure() : c._options.host == s19.util.CLOUD_HOST && (c._options.secure = !0), c._options.logFunction && a18.default.setLogFunction(c._options.logFunction), a18.default.logLevel = c._options.debug || 0, c._api = new p4.API(n), c._socket = c._createServerConnection(), s19.util.supports.audioVideo || s19.util.supports.data ? r && !s19.util.validateId(r) ? (c._delayedAbort(d.PeerErrorType.InvalidID, 'ID "' + r + '" is invalid'), c) : (r ? c._initialize(r) : c._api.retrieveId().then(function(e) {
                        return c._initialize(e);
                    }).catch(function(e) {
                        return c._abort(d.PeerErrorType.ServerError, e);
                    }), c) : (c._delayedAbort(d.PeerErrorType.BrowserIncompatible, "The current browser does not support WebRTC"), c);
                }
                return e129(i27, o26), Object.defineProperty(i27.prototype, "id", {
                    get: function() {
                        return this._id;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i27.prototype, "options", {
                    get: function() {
                        return this._options;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i27.prototype, "open", {
                    get: function() {
                        return this._open;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i27.prototype, "socket", {
                    get: function() {
                        return this._socket;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i27.prototype, "connections", {
                    get: function() {
                        var e, t, o = Object.create(null);
                        try {
                            for(var i = n49(this._connections), s = i.next(); !s.done; s = i.next()){
                                var a = r59(s.value, 2), c = a[0], l = a[1];
                                o[c] = l;
                            }
                        } catch (u) {
                            e = {
                                error: u
                            };
                        } finally{
                            try {
                                s && !s.done && (t = i.return) && t.call(i);
                            } finally{
                                if (e) throw e.error;
                            }
                        }
                        return o;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i27.prototype, "destroyed", {
                    get: function() {
                        return this._destroyed;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i27.prototype, "disconnected", {
                    get: function() {
                        return this._disconnected;
                    },
                    enumerable: !1,
                    configurable: !0
                }), i27.prototype._createServerConnection = function() {
                    var e = this, t82 = new c11.Socket(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
                    return t82.on(d.SocketEventType.Message, function(t) {
                        e._handleMessage(t);
                    }), t82.on(d.SocketEventType.Error, function(t) {
                        e._abort(d.PeerErrorType.SocketError, t);
                    }), t82.on(d.SocketEventType.Disconnected, function() {
                        e.disconnected || (e.emitError(d.PeerErrorType.Network, "Lost connection to server."), e.disconnect());
                    }), t82.on(d.SocketEventType.Close, function() {
                        e.disconnected || e._abort(d.PeerErrorType.SocketClosed, "Underlying socket is already closed.");
                    }), t82;
                }, i27.prototype._initialize = function(e) {
                    this._id = e, this.socket.start(e, this._options.token);
                }, i27.prototype._handleMessage = function(e) {
                    var t, r, o = e.type, i = e.payload, s = e.src;
                    switch(o){
                        case d.ServerMessageType.Open:
                            this._lastServerId = this.id, this._open = !0, this.emit(d.PeerEventType.Open, this.id);
                            break;
                        case d.ServerMessageType.Error:
                            this._abort(d.PeerErrorType.ServerError, i.msg);
                            break;
                        case d.ServerMessageType.IdTaken:
                            this._abort(d.PeerErrorType.UnavailableID, 'ID "' + this.id + '" is taken');
                            break;
                        case d.ServerMessageType.InvalidKey:
                            this._abort(d.PeerErrorType.InvalidKey, 'API KEY "' + this._options.key + '" is invalid');
                            break;
                        case d.ServerMessageType.Leave:
                            a18.default.log("Received leave message from " + s), this._cleanupPeer(s), this._connections.delete(s);
                            break;
                        case d.ServerMessageType.Expire:
                            this.emitError(d.PeerErrorType.PeerUnavailable, "Could not connect to peer " + s);
                            break;
                        case d.ServerMessageType.Offer:
                            var c = i.connectionId;
                            if ((_ = this.getConnection(s, c)) && (_.close(), a18.default.warn("Offer received for existing Connection ID:" + c)), i.type === d.ConnectionType.Media) _ = new l6.MediaConnection(s, this, {
                                connectionId: c,
                                _payload: i,
                                metadata: i.metadata
                            }), this._addConnection(s, _), this.emit(d.PeerEventType.Call, _);
                            else {
                                if (i.type !== d.ConnectionType.Data) return void a18.default.warn("Received malformed connection type:" + i.type);
                                _ = new u7.DataConnection(s, this, {
                                    connectionId: c,
                                    _payload: i,
                                    metadata: i.metadata,
                                    label: i.label,
                                    serialization: i.serialization,
                                    reliable: i.reliable
                                }), this._addConnection(s, _), this.emit(d.PeerEventType.Connection, _);
                            }
                            var p = this._getMessages(c);
                            try {
                                for(var h = n49(p), f = h.next(); !f.done; f = h.next()){
                                    var y = f.value;
                                    _.handleMessage(y);
                                }
                            } catch (v) {
                                t = {
                                    error: v
                                };
                            } finally{
                                try {
                                    f && !f.done && (r = h.return) && r.call(h);
                                } finally{
                                    if (t) throw t.error;
                                }
                            }
                            break;
                        default:
                            if (!i) return void a18.default.warn("You received a malformed message from " + s + " of type " + o);
                            var _;
                            c = i.connectionId;
                            (_ = this.getConnection(s, c)) && _.peerConnection ? _.handleMessage(e) : c ? this._storeMessage(c, e) : a18.default.warn("You received an unrecognized message:", e);
                    }
                }, i27.prototype._storeMessage = function(e, t) {
                    this._lostMessages.has(e) || this._lostMessages.set(e, []), this._lostMessages.get(e).push(t);
                }, i27.prototype._getMessages = function(e) {
                    var t = this._lostMessages.get(e);
                    return t ? (this._lostMessages.delete(e), t) : [];
                }, i27.prototype.connect = function(e, t) {
                    if (void 0 === t && (t = {
                    }), this.disconnected) return a18.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), void this.emitError(d.PeerErrorType.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
                    var n = new u7.DataConnection(e, this, t);
                    return this._addConnection(e, n), n;
                }, i27.prototype.call = function(e, t, n) {
                    if (void 0 === n && (n = {
                    }), this.disconnected) return a18.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), void this.emitError(d.PeerErrorType.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
                    if (t) {
                        n._stream = t;
                        var r = new l6.MediaConnection(e, this, n);
                        return this._addConnection(e, r), r;
                    }
                    a18.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
                }, i27.prototype._addConnection = function(e, t) {
                    a18.default.log("add connection " + t.type + ":" + t.connectionId + " to peerId:" + e), this._connections.has(e) || this._connections.set(e, []), this._connections.get(e).push(t);
                }, i27.prototype._removeConnection = function(e) {
                    var t = this._connections.get(e.peer);
                    if (t) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1);
                    }
                    this._lostMessages.delete(e.connectionId);
                }, i27.prototype.getConnection = function(e, t) {
                    var r, o, i = this._connections.get(e);
                    if (!i) return null;
                    try {
                        for(var s = n49(i), a = s.next(); !a.done; a = s.next()){
                            var c = a.value;
                            if (c.connectionId === t) return c;
                        }
                    } catch (l) {
                        r = {
                            error: l
                        };
                    } finally{
                        try {
                            a && !a.done && (o = s.return) && o.call(s);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                    return null;
                }, i27.prototype._delayedAbort = function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        n._abort(e, t);
                    }, 0);
                }, i27.prototype._abort = function(e, t) {
                    a18.default.error("Aborting!"), this.emitError(e, t), this._lastServerId ? this.disconnect() : this.destroy();
                }, i27.prototype.emitError = function(e, t) {
                    var n;
                    a18.default.error("Error:", t), (n = "string" == typeof t ? new Error(t) : t).type = e, this.emit(d.PeerEventType.Error, n);
                }, i27.prototype.destroy = function() {
                    this.destroyed || (a18.default.log("Destroy peer with ID:" + this.id), this.disconnect(), this._cleanup(), this._destroyed = !0, this.emit(d.PeerEventType.Close));
                }, i27.prototype._cleanup = function() {
                    var e, t;
                    try {
                        for(var r = n49(this._connections.keys()), o = r.next(); !o.done; o = r.next()){
                            var i = o.value;
                            this._cleanupPeer(i), this._connections.delete(i);
                        }
                    } catch (s) {
                        e = {
                            error: s
                        };
                    } finally{
                        try {
                            o && !o.done && (t = r.return) && t.call(r);
                        } finally{
                            if (e) throw e.error;
                        }
                    }
                    this.socket.removeAllListeners();
                }, i27.prototype._cleanupPeer = function(e) {
                    var t, r, o = this._connections.get(e);
                    if (o) try {
                        for(var i = n49(o), s = i.next(); !s.done; s = i.next())s.value.close();
                    } catch (a) {
                        t = {
                            error: a
                        };
                    } finally{
                        try {
                            s && !s.done && (r = i.return) && r.call(i);
                        } finally{
                            if (t) throw t.error;
                        }
                    }
                }, i27.prototype.disconnect = function() {
                    if (!this.disconnected) {
                        var e = this.id;
                        a18.default.log("Disconnect peer with ID:" + e), this._disconnected = !0, this._open = !1, this.socket.close(), this._lastServerId = e, this._id = null, this.emit(d.PeerEventType.Disconnected, e);
                    }
                }, i27.prototype.reconnect = function() {
                    if (this.disconnected && !this.destroyed) a18.default.log("Attempting reconnection to server with ID " + this._lastServerId), this._disconnected = !1, this._initialize(this._lastServerId);
                    else {
                        if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
                        if (this.disconnected || this.open) throw new Error("Peer " + this.id + " cannot reconnect because it is not disconnected from the server!");
                        a18.default.error("In a hurry? We're still trying to make the initial connection!");
                    }
                }, i27.prototype.listAllPeers = function(e132) {
                    var t83 = this;
                    void 0 === e132 && (e132 = function(e) {
                    }), this._api.listAllPeers().then(function(t) {
                        return e132(t);
                    }).catch(function(e) {
                        return t83._abort(d.PeerErrorType.ServerError, e);
                    });
                }, i27.DEFAULT_KEY = "peerjs", i27;
            }(i26.EventEmitter);
            exports.Peer = f2;
        },
        {
            "eventemitter3": "JJlS",
            "./util": "BHXf",
            "./logger": "WOs9",
            "./socket": "wJlv",
            "./mediaconnection": "dbHP",
            "./dataconnection": "GBTQ",
            "./enums": "ZRYf",
            "./api": "in7L"
        }
    ],
    "iTK6": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.peerjs = void 0;
            var e = require("./util"), r = require("./peer");
            exports.peerjs = {
                Peer: r.Peer,
                util: e.util
            }, exports.default = r.Peer, window.peerjs = exports.peerjs, window.Peer = r.Peer;
        },
        {
            "./util": "BHXf",
            "./peer": "Hxpd"
        }
    ]
}, {
}, [
    "iTK6"
], null) //# sourceMappingURL=/peerjs.min.js.map
;

},{}],"xgNgW":[function(require,module,exports) {
var process = require("process");
!function(undefined) {
    var hasOwnProperty = Object.hasOwnProperty;
    var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var defaultMaxListeners = 10;
    var nextTickSupported = typeof process == 'object' && typeof process.nextTick == 'function';
    var symbolsSupported = typeof Symbol === 'function';
    var reflectSupported = typeof Reflect === 'object';
    var setImmediateSupported = typeof setImmediate === 'function';
    var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
    var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === 'function' ? Reflect.ownKeys : function(obj) {
        var arr = Object.getOwnPropertyNames(obj);
        arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
        return arr;
    } : Object.keys;
    function init() {
        this._events = {
        };
        if (this._conf) configure.call(this, this._conf);
    }
    function configure(conf) {
        if (conf) {
            this._conf = conf;
            conf.delimiter && (this.delimiter = conf.delimiter);
            if (conf.maxListeners !== undefined) this._maxListeners = conf.maxListeners;
            conf.wildcard && (this.wildcard = conf.wildcard);
            conf.newListener && (this._newListener = conf.newListener);
            conf.removeListener && (this._removeListener = conf.removeListener);
            conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
            conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
            if (this.wildcard) this.listenerTree = {
            };
        }
    }
    function logPossibleMemoryLeak(count, eventName) {
        var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.';
        if (this.verboseMemoryLeak) errorMsg += ' Event name: ' + eventName + '.';
        if (typeof process !== 'undefined' && process.emitWarning) {
            var e = new Error(errorMsg);
            e.name = 'MaxListenersExceededWarning';
            e.emitter = this;
            e.count = count;
            process.emitWarning(e);
        } else {
            console.error(errorMsg);
            if (console.trace) console.trace();
        }
    }
    var toArray = function(a, b, c) {
        var n = arguments.length;
        switch(n){
            case 0:
                return [];
            case 1:
                return [
                    a
                ];
            case 2:
                return [
                    a,
                    b
                ];
            case 3:
                return [
                    a,
                    b,
                    c
                ];
            default:
                var arr = new Array(n);
                while(n--)arr[n] = arguments[n];
                return arr;
        }
    };
    function toObject(keys, values) {
        var obj = {
        };
        var key;
        var len = keys.length;
        var valuesCount = values ? value.length : 0;
        for(var i = 0; i < len; i++){
            key = keys[i];
            obj[key] = i < valuesCount ? values[i] : undefined;
        }
        return obj;
    }
    function TargetObserver(emitter, target, options) {
        this._emitter = emitter;
        this._target = target;
        this._listeners = {
        };
        this._listenersCount = 0;
        var on, off;
        if (options.on || options.off) {
            on = options.on;
            off = options.off;
        }
        if (target.addEventListener) {
            on = target.addEventListener;
            off = target.removeEventListener;
        } else if (target.addListener) {
            on = target.addListener;
            off = target.removeListener;
        } else if (target.on) {
            on = target.on;
            off = target.off;
        }
        if (!on && !off) throw Error('target does not implement any known event API');
        if (typeof on !== 'function') throw TypeError('on method must be a function');
        if (typeof off !== 'function') throw TypeError('off method must be a function');
        this._on = on;
        this._off = off;
        var _observers = emitter._observers;
        if (_observers) _observers.push(this);
        else emitter._observers = [
            this
        ];
    }
    Object.assign(TargetObserver.prototype, {
        subscribe: function(event, localEvent, reducer) {
            var observer = this;
            var target = this._target;
            var emitter = this._emitter;
            var listeners = this._listeners;
            var handler = function() {
                var args = toArray.apply(null, arguments);
                var eventObj = {
                    data: args,
                    name: localEvent,
                    original: event
                };
                if (reducer) {
                    var result = reducer.call(target, eventObj);
                    if (result !== false) emitter.emit.apply(emitter, [
                        eventObj.name
                    ].concat(args));
                    return;
                }
                emitter.emit.apply(emitter, [
                    localEvent
                ].concat(args));
            };
            if (listeners[event]) throw Error('Event \'' + event + '\' is already listening');
            this._listenersCount++;
            if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
                this._onNewListener = function(_event) {
                    if (_event === localEvent && listeners[event] === null) {
                        listeners[event] = handler;
                        observer._on.call(target, event, handler);
                    }
                };
                emitter.on('newListener', this._onNewListener);
                this._onRemoveListener = function(_event) {
                    if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                        listeners[event] = null;
                        observer._off.call(target, event, handler);
                    }
                };
                listeners[event] = null;
                emitter.on('removeListener', this._onRemoveListener);
            } else {
                listeners[event] = handler;
                observer._on.call(target, event, handler);
            }
        },
        unsubscribe: function(event) {
            var observer = this;
            var listeners = this._listeners;
            var emitter = this._emitter;
            var handler;
            var events;
            var off = this._off;
            var target = this._target;
            var i;
            if (event && typeof event !== 'string') throw TypeError('event must be a string');
            function clearRefs() {
                if (observer._onNewListener) {
                    emitter.off('newListener', observer._onNewListener);
                    emitter.off('removeListener', observer._onRemoveListener);
                    observer._onNewListener = null;
                    observer._onRemoveListener = null;
                }
                var index = findTargetIndex.call(emitter, observer);
                emitter._observers.splice(index, 1);
            }
            if (event) {
                handler = listeners[event];
                if (!handler) return;
                off.call(target, event, handler);
                delete listeners[event];
                if (!--this._listenersCount) clearRefs();
            } else {
                events = ownKeys(listeners);
                i = events.length;
                while(i-- > 0){
                    event = events[i];
                    off.call(target, event, listeners[event]);
                }
                this._listeners = {
                };
                this._listenersCount = 0;
                clearRefs();
            }
        }
    });
    function resolveOptions(options, schema, reducers, allowUnknown) {
        var computedOptions = Object.assign({
        }, schema);
        if (!options) return computedOptions;
        if (typeof options !== 'object') throw TypeError('options must be an object');
        var keys = Object.keys(options);
        var length = keys.length;
        var option, value;
        var reducer;
        function reject(reason) {
            throw Error('Invalid "' + option + '" option value' + (reason ? '. Reason: ' + reason : ''));
        }
        for(var i = 0; i < length; i++){
            option = keys[i];
            if (!allowUnknown && !hasOwnProperty.call(schema, option)) throw Error('Unknown "' + option + '" option');
            value = options[option];
            if (value !== undefined) {
                reducer = reducers[option];
                computedOptions[option] = reducer ? reducer(value, reject) : value;
            }
        }
        return computedOptions;
    }
    function constructorReducer(value, reject) {
        if (typeof value !== 'function' || !value.hasOwnProperty('prototype')) reject('value must be a constructor');
        return value;
    }
    function makeTypeReducer(types) {
        var message = 'value must be type of ' + types.join('|');
        var len = types.length;
        var firstType = types[0];
        var secondType = types[1];
        if (len === 1) return function(v, reject) {
            if (typeof v === firstType) return v;
            reject(message);
        };
        if (len === 2) return function(v, reject) {
            var kind = typeof v;
            if (kind === firstType || kind === secondType) return v;
            reject(message);
        };
        return function(v, reject) {
            var kind = typeof v;
            var i = len;
            while(i-- > 0){
                if (kind === types[i]) return v;
            }
            reject(message);
        };
    }
    var functionReducer = makeTypeReducer([
        'function'
    ]);
    var objectFunctionReducer = makeTypeReducer([
        'object',
        'function'
    ]);
    function makeCancelablePromise(Promise, executor, options) {
        var isCancelable;
        var callbacks;
        var timer = 0;
        var subscriptionClosed;
        var promise = new Promise(function(resolve, reject1, onCancel) {
            options = resolveOptions(options, {
                timeout: 0,
                overload: false
            }, {
                timeout: function(value, reject) {
                    value *= 1;
                    if (typeof value !== 'number' || value < 0 || !Number.isFinite(value)) reject('timeout must be a positive number');
                    return value;
                }
            });
            isCancelable = !options.overload && typeof Promise.prototype.cancel === 'function' && typeof onCancel === 'function';
            function cleanup() {
                if (callbacks) callbacks = null;
                if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                }
            }
            var _resolve = function(value) {
                cleanup();
                resolve(value);
            };
            var _reject = function(err) {
                cleanup();
                reject1(err);
            };
            if (isCancelable) executor(_resolve, _reject, onCancel);
            else {
                callbacks = [
                    function(reason) {
                        _reject(reason || Error('canceled'));
                    }
                ];
                executor(_resolve, _reject, function(cb) {
                    if (subscriptionClosed) throw Error('Unable to subscribe on cancel event asynchronously');
                    if (typeof cb !== 'function') throw TypeError('onCancel callback must be a function');
                    callbacks.push(cb);
                });
                subscriptionClosed = true;
            }
            if (options.timeout > 0) timer = setTimeout(function() {
                var reason = Error('timeout');
                reason.code = 'ETIMEDOUT';
                timer = 0;
                promise.cancel(reason);
                reject1(reason);
            }, options.timeout);
        });
        if (!isCancelable) promise.cancel = function(reason) {
            if (!callbacks) return;
            var length = callbacks.length;
            for(var i = 1; i < length; i++)callbacks[i](reason);
            // internal callback to reject the promise
            callbacks[0](reason);
            callbacks = null;
        };
        return promise;
    }
    function findTargetIndex(observer) {
        var observers = this._observers;
        if (!observers) return -1;
        var len = observers.length;
        for(var i = 0; i < len; i++){
            if (observers[i]._target === observer) return i;
        }
        return -1;
    }
    // Attention, function return type now is array, always !
    // It has zero elements if no any matches found and one or more
    // elements (leafs) if there are matches
    //
    function searchListenerTree(handlers, type, tree, i, typeLength) {
        if (!tree) return null;
        if (i === 0) {
            var kind = typeof type;
            if (kind === 'string') {
                var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
                if ((n = type.indexOf(delimiter)) !== -1) {
                    ns = new Array(5);
                    do {
                        ns[l++] = type.slice(j, n);
                        j = n + dl;
                    }while ((n = type.indexOf(delimiter, j)) !== -1)
                    ns[l++] = type.slice(j);
                    type = ns;
                    typeLength = l;
                } else {
                    type = [
                        type
                    ];
                    typeLength = 1;
                }
            } else if (kind === 'object') typeLength = type.length;
            else {
                type = [
                    type
                ];
                typeLength = 1;
            }
        }
        var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
        if (i === typeLength) //
        // If at the end of the event(s) list and the tree has listeners
        // invoke those listeners.
        //
        {
            if (tree._listeners) {
                if (typeof tree._listeners === 'function') {
                    handlers && handlers.push(tree._listeners);
                    listeners = [
                        tree
                    ];
                } else {
                    handlers && handlers.push.apply(handlers, tree._listeners);
                    listeners = [
                        tree
                    ];
                }
            }
        } else {
            if (currentType === '*') {
                //
                // If the event emitted is '*' at this part
                // or there is a concrete match at this patch
                //
                branches = ownKeys(tree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== '_listeners') {
                        _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                        if (_listeners) {
                            if (listeners) listeners.push.apply(listeners, _listeners);
                            else listeners = _listeners;
                        }
                    }
                }
                return listeners;
            } else if (currentType === '**') {
                endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === '*';
                if (endReached && tree._listeners) // The next element has a _listeners, add it to the handlers.
                listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
                branches = ownKeys(tree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== '_listeners') {
                        if (branch === '*' || branch === '**') {
                            if (tree[branch]._listeners && !endReached) {
                                _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                                if (_listeners) {
                                    if (listeners) listeners.push.apply(listeners, _listeners);
                                    else listeners = _listeners;
                                }
                            }
                            _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                        } else if (branch === nextType) _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                        else // No match on this one, shift into the tree but not in the type array.
                        _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                        if (_listeners) {
                            if (listeners) listeners.push.apply(listeners, _listeners);
                            else listeners = _listeners;
                        }
                    }
                }
                return listeners;
            } else if (tree[currentType]) listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
        }
        xTree = tree['*'];
        if (xTree) //
        // If the listener tree will allow any match for this part,
        // then recursively explore all branches of the tree
        //
        searchListenerTree(handlers, type, xTree, i + 1, typeLength);
        xxTree = tree['**'];
        if (xxTree) {
            if (i < typeLength) {
                if (xxTree._listeners) // If we have a listener on a '**', it will catch all, so add its handler.
                searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
                // Build arrays of matching next branches and others.
                branches = ownKeys(xxTree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== '_listeners') {
                        if (branch === nextType) // We know the next element will match, so jump twice.
                        searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                        else if (branch === currentType) // Current node matches, move into the tree.
                        searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                        else {
                            isolatedBranch = {
                            };
                            isolatedBranch[branch] = xxTree[branch];
                            searchListenerTree(handlers, type, {
                                '**': isolatedBranch
                            }, i + 1, typeLength);
                        }
                    }
                }
            } else if (xxTree._listeners) // We have reached the end and still on a '**'
            searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
            else if (xxTree['*'] && xxTree['*']._listeners) searchListenerTree(handlers, type, xxTree['*'], typeLength, typeLength);
        }
        return listeners;
    }
    function growListenerTree(type, listener, prepend) {
        var len = 0, j = 0, i, delimiter = this.delimiter, dl = delimiter.length, ns;
        if (typeof type === 'string') {
            if ((i = type.indexOf(delimiter)) !== -1) {
                ns = new Array(5);
                do {
                    ns[len++] = type.slice(j, i);
                    j = i + dl;
                }while ((i = type.indexOf(delimiter, j)) !== -1)
                ns[len++] = type.slice(j);
            } else {
                ns = [
                    type
                ];
                len = 1;
            }
        } else {
            ns = type;
            len = type.length;
        }
        //
        // Looks for two consecutive '**', if so, don't add the event at all.
        //
        if (len > 1) for(i = 0; i + 1 < len; i++){
            if (ns[i] === '**' && ns[i + 1] === '**') return;
        }
        var tree = this.listenerTree, name;
        for(i = 0; i < len; i++){
            name = ns[i];
            tree = tree[name] || (tree[name] = {
            });
            if (i === len - 1) {
                if (!tree._listeners) tree._listeners = listener;
                else {
                    if (typeof tree._listeners === 'function') tree._listeners = [
                        tree._listeners
                    ];
                    if (prepend) tree._listeners.unshift(listener);
                    else tree._listeners.push(listener);
                    if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
                        tree._listeners.warned = true;
                        logPossibleMemoryLeak.call(this, tree._listeners.length, name);
                    }
                }
                return true;
            }
        }
        return true;
    }
    function collectTreeEvents(tree, events, root, asArray) {
        var branches = ownKeys(tree);
        var i = branches.length;
        var branch, branchName, path;
        var hasListeners = tree['_listeners'];
        var isArrayPath;
        while(i-- > 0){
            branchName = branches[i];
            branch = tree[branchName];
            if (branchName === '_listeners') path = root;
            else path = root ? root.concat(branchName) : [
                branchName
            ];
            isArrayPath = asArray || typeof branchName === 'symbol';
            hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
            if (typeof branch === 'object') collectTreeEvents.call(this, branch, events, path, isArrayPath);
        }
        return events;
    }
    function recursivelyGarbageCollect(root) {
        var keys = ownKeys(root);
        var i = keys.length;
        var obj, key, flag;
        while(i-- > 0){
            key = keys[i];
            obj = root[key];
            if (obj) {
                flag = true;
                if (key !== '_listeners' && !recursivelyGarbageCollect(obj)) delete root[key];
            }
        }
        return flag;
    }
    function Listener(emitter, event, listener) {
        this.emitter = emitter;
        this.event = event;
        this.listener = listener;
    }
    Listener.prototype.off = function() {
        this.emitter.off(this.event, this.listener);
        return this;
    };
    function setupListener(event1, listener, options) {
        if (options === true) promisify = true;
        else if (options === false) async = true;
        else {
            if (!options || typeof options !== 'object') throw TypeError('options should be an object or true');
            var async = options.async;
            var promisify = options.promisify;
            var nextTick = options.nextTick;
            var objectify = options.objectify;
        }
        if (async || nextTick || promisify) {
            var _listener = listener;
            var _origin = listener._origin || listener;
            if (nextTick && !nextTickSupported) throw Error('process.nextTick is not supported');
            if (promisify === undefined) promisify = listener.constructor.name === 'AsyncFunction';
            listener = function() {
                var args = arguments;
                var context = this;
                var event = this.event;
                return promisify ? nextTick ? Promise.resolve() : new Promise(function(resolve) {
                    _setImmediate(resolve);
                }).then(function() {
                    context.event = event;
                    return _listener.apply(context, args);
                }) : (nextTick ? process.nextTick : _setImmediate)(function() {
                    context.event = event;
                    _listener.apply(context, args);
                });
            };
            listener._async = true;
            listener._origin = _origin;
        }
        return [
            listener,
            objectify ? new Listener(this, event1, listener) : this
        ];
    }
    function EventEmitter(conf) {
        this._events = {
        };
        this._newListener = false;
        this._removeListener = false;
        this.verboseMemoryLeak = false;
        configure.call(this, conf);
    }
    EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property
    EventEmitter.prototype.listenTo = function(target, events1, options) {
        if (typeof target !== 'object') throw TypeError('target musts be an object');
        var emitter = this;
        options = resolveOptions(options, {
            on: undefined,
            off: undefined,
            reducers: undefined
        }, {
            on: functionReducer,
            off: functionReducer,
            reducers: objectFunctionReducer
        });
        function listen(events) {
            if (typeof events !== 'object') throw TypeError('events must be an object');
            var reducers = options.reducers;
            var index = findTargetIndex.call(emitter, target);
            var observer;
            if (index === -1) observer = new TargetObserver(emitter, target, options);
            else observer = emitter._observers[index];
            var keys = ownKeys(events);
            var len = keys.length;
            var event;
            var isSingleReducer = typeof reducers === 'function';
            for(var i = 0; i < len; i++){
                event = keys[i];
                observer.subscribe(event, events[event] || event, isSingleReducer ? reducers : reducers && reducers[event]);
            }
        }
        isArray(events1) ? listen(toObject(events1)) : typeof events1 === 'string' ? listen(toObject(events1.split(/\s+/))) : listen(events1);
        return this;
    };
    EventEmitter.prototype.stopListeningTo = function(target, event) {
        var observers = this._observers;
        if (!observers) return false;
        var i = observers.length;
        var observer;
        var matched = false;
        if (target && typeof target !== 'object') throw TypeError('target should be an object');
        while(i-- > 0){
            observer = observers[i];
            if (!target || observer._target === target) {
                observer.unsubscribe(event);
                matched = true;
            }
        }
        return matched;
    };
    // By default EventEmitters will print a warning if more than
    // 10 listeners are added to it. This is a useful default which
    // helps finding memory leaks.
    //
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.delimiter = '.';
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (n !== undefined) {
            this._maxListeners = n;
            if (!this._conf) this._conf = {
            };
            this._conf.maxListeners = n;
        }
    };
    EventEmitter.prototype.getMaxListeners = function() {
        return this._maxListeners;
    };
    EventEmitter.prototype.event = '';
    EventEmitter.prototype.once = function(event, fn, options) {
        return this._once(event, fn, false, options);
    };
    EventEmitter.prototype.prependOnceListener = function(event, fn, options) {
        return this._once(event, fn, true, options);
    };
    EventEmitter.prototype._once = function(event, fn, prepend, options) {
        return this._many(event, 1, fn, prepend, options);
    };
    EventEmitter.prototype.many = function(event, ttl, fn, options) {
        return this._many(event, ttl, fn, false, options);
    };
    EventEmitter.prototype.prependMany = function(event, ttl, fn, options) {
        return this._many(event, ttl, fn, true, options);
    };
    EventEmitter.prototype._many = function(event, ttl, fn, prepend, options) {
        var self = this;
        if (typeof fn !== 'function') throw new Error('many only accepts instances of Function');
        function listener() {
            if (--ttl === 0) self.off(event, listener);
            return fn.apply(this, arguments);
        }
        listener._origin = fn;
        return this._on(event, listener, prepend, options);
    };
    EventEmitter.prototype.emit = function() {
        if (!this._events && !this._all) return false;
        this._events || init.call(this);
        var type = arguments[0], ns, wildcard = this.wildcard;
        var args, l, i, j, containsSymbol;
        if (type === 'newListener' && !this._newListener) {
            if (!this._events.newListener) return false;
        }
        if (wildcard) {
            ns = type;
            if (type !== 'newListener' && type !== 'removeListener') {
                if (typeof type === 'object') {
                    l = type.length;
                    if (symbolsSupported) {
                        for(i = 0; i < l; i++)if (typeof type[i] === 'symbol') {
                            containsSymbol = true;
                            break;
                        }
                    }
                    if (!containsSymbol) type = type.join(this.delimiter);
                }
            }
        }
        var al = arguments.length;
        var handler;
        if (this._all && this._all.length) {
            handler = this._all.slice();
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        handler[i].call(this, type);
                        break;
                    case 2:
                        handler[i].call(this, type, arguments[1]);
                        break;
                    case 3:
                        handler[i].call(this, type, arguments[1], arguments[2]);
                        break;
                    default:
                        handler[i].apply(this, arguments);
                }
            }
        }
        if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
        } else {
            handler = this._events[type];
            if (typeof handler === 'function') {
                this.event = type;
                switch(al){
                    case 1:
                        handler.call(this);
                        break;
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        args = new Array(al - 1);
                        for(j = 1; j < al; j++)args[j - 1] = arguments[j];
                        handler.apply(this, args);
                }
                return true;
            } else if (handler) // need to make copy of handlers because list can change in the middle
            // of emit call
            handler = handler.slice();
        }
        if (handler && handler.length) {
            if (al > 3) {
                args = new Array(al - 1);
                for(j = 1; j < al; j++)args[j - 1] = arguments[j];
            }
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        handler[i].call(this);
                        break;
                    case 2:
                        handler[i].call(this, arguments[1]);
                        break;
                    case 3:
                        handler[i].call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        handler[i].apply(this, args);
                }
            }
            return true;
        } else if (!this.ignoreErrors && !this._all && type === 'error') {
            if (arguments[1] instanceof Error) throw arguments[1]; // Unhandled 'error' event
            else throw new Error("Uncaught, unspecified 'error' event.");
        }
        return !!this._all;
    };
    EventEmitter.prototype.emitAsync = function() {
        if (!this._events && !this._all) return false;
        this._events || init.call(this);
        var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
        var args, l, i, j;
        if (type === 'newListener' && !this._newListener) {
            if (!this._events.newListener) return Promise.resolve([
                false
            ]);
        }
        if (wildcard) {
            ns = type;
            if (type !== 'newListener' && type !== 'removeListener') {
                if (typeof type === 'object') {
                    l = type.length;
                    if (symbolsSupported) {
                        for(i = 0; i < l; i++)if (typeof type[i] === 'symbol') {
                            containsSymbol = true;
                            break;
                        }
                    }
                    if (!containsSymbol) type = type.join(this.delimiter);
                }
            }
        }
        var promises = [];
        var al = arguments.length;
        var handler;
        if (this._all) for(i = 0, l = this._all.length; i < l; i++){
            this.event = type;
            switch(al){
                case 1:
                    promises.push(this._all[i].call(this, type));
                    break;
                case 2:
                    promises.push(this._all[i].call(this, type, arguments[1]));
                    break;
                case 3:
                    promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                    break;
                default:
                    promises.push(this._all[i].apply(this, arguments));
            }
        }
        if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        } else handler = this._events[type];
        if (typeof handler === 'function') {
            this.event = type;
            switch(al){
                case 1:
                    promises.push(handler.call(this));
                    break;
                case 2:
                    promises.push(handler.call(this, arguments[1]));
                    break;
                case 3:
                    promises.push(handler.call(this, arguments[1], arguments[2]));
                    break;
                default:
                    args = new Array(al - 1);
                    for(j = 1; j < al; j++)args[j - 1] = arguments[j];
                    promises.push(handler.apply(this, args));
            }
        } else if (handler && handler.length) {
            handler = handler.slice();
            if (al > 3) {
                args = new Array(al - 1);
                for(j = 1; j < al; j++)args[j - 1] = arguments[j];
            }
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        promises.push(handler[i].call(this));
                        break;
                    case 2:
                        promises.push(handler[i].call(this, arguments[1]));
                        break;
                    case 3:
                        promises.push(handler[i].call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        promises.push(handler[i].apply(this, args));
                }
            }
        } else if (!this.ignoreErrors && !this._all && type === 'error') {
            if (arguments[1] instanceof Error) return Promise.reject(arguments[1]); // Unhandled 'error' event
            else return Promise.reject("Uncaught, unspecified 'error' event.");
        }
        return Promise.all(promises);
    };
    EventEmitter.prototype.on = function(type, listener, options) {
        return this._on(type, listener, false, options);
    };
    EventEmitter.prototype.prependListener = function(type, listener, options) {
        return this._on(type, listener, true, options);
    };
    EventEmitter.prototype.onAny = function(fn) {
        return this._onAny(fn, false);
    };
    EventEmitter.prototype.prependAny = function(fn) {
        return this._onAny(fn, true);
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype._onAny = function(fn, prepend) {
        if (typeof fn !== 'function') throw new Error('onAny only accepts instances of Function');
        if (!this._all) this._all = [];
        // Add the function to the event listener collection.
        if (prepend) this._all.unshift(fn);
        else this._all.push(fn);
        return this;
    };
    EventEmitter.prototype._on = function(type, listener, prepend, options) {
        if (typeof type === 'function') {
            this._onAny(type, listener);
            return this;
        }
        if (typeof listener !== 'function') throw new Error('on only accepts instances of Function');
        this._events || init.call(this);
        var returnValue = this, temp;
        if (options !== undefined) {
            temp = setupListener.call(this, type, listener, options);
            listener = temp[0];
            returnValue = temp[1];
        }
        // To avoid recursion in the case that type == "newListeners"! Before
        // adding it to the listeners, first emit "newListeners".
        if (this._newListener) this.emit('newListener', type, listener);
        if (this.wildcard) {
            growListenerTree.call(this, type, listener, prepend);
            return returnValue;
        }
        if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
        else {
            if (typeof this._events[type] === 'function') // Change to array.
            this._events[type] = [
                this._events[type]
            ];
            // If we've already got an array, just add
            if (prepend) this._events[type].unshift(listener);
            else this._events[type].push(listener);
            // Check for listener leak
            if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
                this._events[type].warned = true;
                logPossibleMemoryLeak.call(this, this._events[type].length, type);
            }
        }
        return returnValue;
    };
    EventEmitter.prototype.off = function(type, listener) {
        if (typeof listener !== 'function') throw new Error('removeListener only takes instances of Function');
        var handlers, leafs = [];
        if (this.wildcard) {
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
            if (!leafs) return this;
        } else {
            // does not use listeners(), so no side effect of creating _events[type]
            if (!this._events[type]) return this;
            handlers = this._events[type];
            leafs.push({
                _listeners: handlers
            });
        }
        for(var iLeaf = 0; iLeaf < leafs.length; iLeaf++){
            var leaf = leafs[iLeaf];
            handlers = leaf._listeners;
            if (isArray(handlers)) {
                var position = -1;
                for(var i = 0, length = handlers.length; i < length; i++)if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                    position = i;
                    break;
                }
                if (position < 0) continue;
                if (this.wildcard) leaf._listeners.splice(position, 1);
                else this._events[type].splice(position, 1);
                if (handlers.length === 0) {
                    if (this.wildcard) delete leaf._listeners;
                    else delete this._events[type];
                }
                if (this._removeListener) this.emit("removeListener", type, listener);
                return this;
            } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
                if (this.wildcard) delete leaf._listeners;
                else delete this._events[type];
                if (this._removeListener) this.emit("removeListener", type, listener);
            }
        }
        this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        return this;
    };
    EventEmitter.prototype.offAny = function(fn) {
        var i = 0, l = 0, fns;
        if (fn && this._all && this._all.length > 0) {
            fns = this._all;
            for(i = 0, l = fns.length; i < l; i++)if (fn === fns[i]) {
                fns.splice(i, 1);
                if (this._removeListener) this.emit("removeListenerAny", fn);
                return this;
            }
        } else {
            fns = this._all;
            if (this._removeListener) for(i = 0, l = fns.length; i < l; i++)this.emit("removeListenerAny", fns[i]);
            this._all = [];
        }
        return this;
    };
    EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (type === undefined) {
            !this._events || init.call(this);
            return this;
        }
        if (this.wildcard) {
            var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
            if (!leafs) return this;
            for(i = 0; i < leafs.length; i++){
                leaf = leafs[i];
                leaf._listeners = null;
            }
            this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        } else if (this._events) this._events[type] = null;
        return this;
    };
    EventEmitter.prototype.listeners = function(type) {
        var _events = this._events;
        var keys, listeners, allListeners;
        var i;
        var listenerTree;
        if (type === undefined) {
            if (this.wildcard) throw Error('event name required for wildcard emitter');
            if (!_events) return [];
            keys = ownKeys(_events);
            i = keys.length;
            allListeners = [];
            while(i-- > 0){
                listeners = _events[keys[i]];
                if (typeof listeners === 'function') allListeners.push(listeners);
                else allListeners.push.apply(allListeners, listeners);
            }
            return allListeners;
        } else {
            if (this.wildcard) {
                listenerTree = this.listenerTree;
                if (!listenerTree) return [];
                var handlers = [];
                var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
                searchListenerTree.call(this, handlers, ns, listenerTree, 0);
                return handlers;
            }
            if (!_events) return [];
            listeners = _events[type];
            if (!listeners) return [];
            return typeof listeners === 'function' ? [
                listeners
            ] : listeners;
        }
    };
    EventEmitter.prototype.eventNames = function(nsAsArray) {
        var _events = this._events;
        return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
    };
    EventEmitter.prototype.listenerCount = function(type) {
        return this.listeners(type).length;
    };
    EventEmitter.prototype.hasListeners = function(type) {
        if (this.wildcard) {
            var handlers = [];
            var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
            return handlers.length > 0;
        }
        var _events = this._events;
        var _all = this._all;
        return !!(_all && _all.length || _events && (type === undefined ? ownKeys(_events).length : _events[type]));
    };
    EventEmitter.prototype.listenersAny = function() {
        if (this._all) return this._all;
        else return [];
    };
    EventEmitter.prototype.waitFor = function(event, options) {
        var self = this;
        var type = typeof options;
        if (type === 'number') options = {
            timeout: options
        };
        else if (type === 'function') options = {
            filter: options
        };
        options = resolveOptions(options, {
            timeout: 0,
            filter: undefined,
            handleError: false,
            Promise: Promise,
            overload: false
        }, {
            filter: functionReducer,
            Promise: constructorReducer
        });
        return makeCancelablePromise(options.Promise, function(resolve, reject, onCancel) {
            function listener() {
                var filter = options.filter;
                if (filter && !filter.apply(self, arguments)) return;
                self.off(event, listener);
                if (options.handleError) {
                    var err = arguments[0];
                    err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
                } else resolve(toArray.apply(null, arguments));
            }
            onCancel(function() {
                self.off(event, listener);
            });
            self._on(event, listener, false);
        }, {
            timeout: options.timeout,
            overload: options.overload
        });
    };
    function once(emitter, name, options) {
        options = resolveOptions(options, {
            Promise: Promise,
            timeout: 0,
            overload: false
        }, {
            Promise: constructorReducer
        });
        var _Promise = options.Promise;
        return makeCancelablePromise(_Promise, function(resolve, reject, onCancel) {
            var handler;
            if (typeof emitter.addEventListener === 'function') {
                handler = function() {
                    resolve(toArray.apply(null, arguments));
                };
                onCancel(function() {
                    emitter.removeEventListener(name, handler);
                });
                emitter.addEventListener(name, handler, {
                    once: true
                });
                return;
            }
            var eventListener = function() {
                errorListener && emitter.removeListener('error', errorListener);
                resolve(toArray.apply(null, arguments));
            };
            var errorListener;
            if (name !== 'error') {
                errorListener = function(err) {
                    emitter.removeListener(name, eventListener);
                    reject(err);
                };
                emitter.once('error', errorListener);
            }
            onCancel(function() {
                errorListener && emitter.removeListener('error', errorListener);
                emitter.removeListener(name, eventListener);
            });
            emitter.once(name, eventListener);
        }, {
            timeout: options.timeout,
            overload: options.overload
        });
    }
    var prototype = EventEmitter.prototype;
    Object.defineProperties(EventEmitter, {
        defaultMaxListeners: {
            get: function() {
                return prototype._maxListeners;
            },
            set: function(n) {
                if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) throw TypeError('n must be a non-negative number');
                prototype._maxListeners = n;
            },
            enumerable: true
        },
        once: {
            value: once,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperties(prototype, {
        _maxListeners: {
            value: defaultMaxListeners,
            writable: true,
            configurable: true
        },
        _observers: {
            value: null,
            writable: true,
            configurable: true
        }
    });
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define(function() {
        return EventEmitter;
    });
    else if (typeof exports === 'object') // CommonJS
    module.exports = EventEmitter;
    else {
        // global for any kind of environment.
        var _global = new Function('', 'return this')();
        _global.EventEmitter2 = EventEmitter;
    }
}();

},{"process":"lDnB8"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"gxdUS":[function(require,module,exports) {
var global = arguments[3];
/**
 * EasyQRCodeJS
 * 
 * Cross-browser QRCode generator for pure javascript. Support Canvas, SVG and Table drawing methods. Support Dot style, Logo, Background image, Colorful, Title etc. settings. Support Angular, Vue.js, React, Next.js, Svelte framework. Support binary(hex) data mode.(Running with DOM on client side)
 * 
 * Version 4.4.6
 * 
 * @author [ inthinkcolor@gmail.com ]
 * 
 * @see https://github.com/ushelp/EasyQRCodeJS 
 * @see http://www.easyproject.cn/easyqrcodejs/tryit.html
 * @see https://github.com/ushelp/EasyQRCodeJS-NodeJS
 * 
 * Copyright 2017 Ray, EasyProject
 * Released under the MIT license
 * 
 * [Support AMD, CMD, CommonJS/Node.js]
 * 
 */ !function() {
    function a1(a, b) {
        var c, d = Object.keys(b);
        for(c = 0; c < d.length; c++)a = a.replace(new RegExp("\\{" + d[c] + "\\}", "gi"), b[d[c]]);
        return a;
    }
    function b1(a) {
        var b, c, d;
        if (!a) throw new Error("cannot create a random attribute name for an undefined object");
        b = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", c = "";
        do for(c = "", d = 0; d < 12; d++)c += b[Math.floor(Math.random() * b.length)];
        while (a[c])
        return c;
    }
    function c1(a) {
        var b = {
            left: "start",
            right: "end",
            center: "middle",
            start: "start",
            end: "end"
        };
        return b[a] || b.start;
    }
    function d1(a) {
        var b = {
            alphabetic: "alphabetic",
            hanging: "hanging",
            top: "text-before-edge",
            bottom: "text-after-edge",
            middle: "central"
        };
        return b[a] || b.alphabetic;
    }
    var e1, f1, g1, h1, i1;
    i1 = (function(a, b) {
        var c, d, e, f = {
        };
        for(a = a.split(","), b = b || 10, c = 0; c < a.length; c += 2)d = "&" + a[c + 1] + ";", e = parseInt(a[c], b), f[d] = "&#" + e + ";";
        return f["\\xa0"] = "&#160;", f;
    })("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32), e1 = {
        strokeStyle: {
            svgAttr: "stroke",
            canvas: "#000000",
            svg: "none",
            apply: "stroke"
        },
        fillStyle: {
            svgAttr: "fill",
            canvas: "#000000",
            svg: null,
            apply: "fill"
        },
        lineCap: {
            svgAttr: "stroke-linecap",
            canvas: "butt",
            svg: "butt",
            apply: "stroke"
        },
        lineJoin: {
            svgAttr: "stroke-linejoin",
            canvas: "miter",
            svg: "miter",
            apply: "stroke"
        },
        miterLimit: {
            svgAttr: "stroke-miterlimit",
            canvas: 10,
            svg: 4,
            apply: "stroke"
        },
        lineWidth: {
            svgAttr: "stroke-width",
            canvas: 1,
            svg: 1,
            apply: "stroke"
        },
        globalAlpha: {
            svgAttr: "opacity",
            canvas: 1,
            svg: 1,
            apply: "fill stroke"
        },
        font: {
            canvas: "10px sans-serif"
        },
        shadowColor: {
            canvas: "#000000"
        },
        shadowOffsetX: {
            canvas: 0
        },
        shadowOffsetY: {
            canvas: 0
        },
        shadowBlur: {
            canvas: 0
        },
        textAlign: {
            canvas: "start"
        },
        textBaseline: {
            canvas: "alphabetic"
        },
        lineDash: {
            svgAttr: "stroke-dasharray",
            canvas: [],
            svg: null,
            apply: "stroke"
        }
    }, g1 = function(a, b) {
        this.__root = a, this.__ctx = b;
    }, g1.prototype.addColorStop = function(b, c) {
        var d, e, f = this.__ctx.__createElement("stop");
        f.setAttribute("offset", b), -1 !== c.indexOf("rgba") ? (d = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi, e = d.exec(c), f.setAttribute("stop-color", a1("rgb({r},{g},{b})", {
            r: e[1],
            g: e[2],
            b: e[3]
        })), f.setAttribute("stop-opacity", e[4])) : f.setAttribute("stop-color", c), this.__root.appendChild(f);
    }, h1 = function(a, b) {
        this.__root = a, this.__ctx = b;
    }, f1 = function(a) {
        var b, c = {
            width: 500,
            height: 500,
            enableMirroring: !1
        };
        if (arguments.length > 1 ? (b = c, b.width = arguments[0], b.height = arguments[1]) : b = a || c, !(this instanceof f1)) return new f1(b);
        this.width = b.width || c.width, this.height = b.height || c.height, this.enableMirroring = void 0 !== b.enableMirroring ? b.enableMirroring : c.enableMirroring, this.canvas = this, this.__document = b.document || document, b.ctx ? this.__ctx = b.ctx : (this.__canvas = this.__document.createElement("canvas"), this.__ctx = this.__canvas.getContext("2d")), this.__setDefaultStyles(), this.__stack = [
            this.__getStyleState()
        ], this.__groupStack = [], this.__root = this.__document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.__root.setAttribute("version", 1.1), this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), this.__root.setAttribute("width", this.width), this.__root.setAttribute("height", this.height), this.__ids = {
        }, this.__defs = this.__document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.__root.appendChild(this.__defs), this.__currentElement = this.__document.createElementNS("http://www.w3.org/2000/svg", "g"), this.__root.appendChild(this.__currentElement);
    }, f1.prototype.__createElement = function(a, b, c) {
        void 0 === b && (b = {
        });
        var d, e, f = this.__document.createElementNS("http://www.w3.org/2000/svg", a), g = Object.keys(b);
        for(c && (f.setAttribute("fill", "none"), f.setAttribute("stroke", "none")), d = 0; d < g.length; d++)e = g[d], f.setAttribute(e, b[e]);
        return f;
    }, f1.prototype.__setDefaultStyles = function() {
        var a, b, c = Object.keys(e1);
        for(a = 0; a < c.length; a++)b = c[a], this[b] = e1[b].canvas;
    }, f1.prototype.__applyStyleState = function(a) {
        var b, c, d = Object.keys(a);
        for(b = 0; b < d.length; b++)c = d[b], this[c] = a[c];
    }, f1.prototype.__getStyleState = function() {
        var a, b, c = {
        }, d = Object.keys(e1);
        for(a = 0; a < d.length; a++)b = d[a], c[b] = this[b];
        return c;
    }, f1.prototype.__applyStyleToCurrentElement = function(b) {
        var c = this.__currentElement, d = this.__currentElementsToStyle;
        d && (c.setAttribute(b, ""), c = d.element, d.children.forEach(function(a) {
            a.setAttribute(b, "");
        }));
        var f, i, j, k, l, m, n = Object.keys(e1);
        for(f = 0; f < n.length; f++)if (i = e1[n[f]], j = this[n[f]], i.apply) {
            if (j instanceof h1) {
                if (j.__ctx) for(; j.__ctx.__defs.childNodes.length;)k = j.__ctx.__defs.childNodes[0].getAttribute("id"), this.__ids[k] = k, this.__defs.appendChild(j.__ctx.__defs.childNodes[0]);
                c.setAttribute(i.apply, a1("url(#{id})", {
                    id: j.__root.getAttribute("id")
                }));
            } else if (j instanceof g1) c.setAttribute(i.apply, a1("url(#{id})", {
                id: j.__root.getAttribute("id")
            }));
            else if (-1 !== i.apply.indexOf(b) && i.svg !== j) {
                if ("stroke" !== i.svgAttr && "fill" !== i.svgAttr || -1 === j.indexOf("rgba")) {
                    var o = i.svgAttr;
                    if ("globalAlpha" === n[f] && (o = b + "-" + i.svgAttr, c.getAttribute(o))) continue;
                    c.setAttribute(o, j);
                } else {
                    l = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi, m = l.exec(j), c.setAttribute(i.svgAttr, a1("rgb({r},{g},{b})", {
                        r: m[1],
                        g: m[2],
                        b: m[3]
                    }));
                    var p = m[4], q = this.globalAlpha;
                    null != q && (p *= q), c.setAttribute(i.svgAttr + "-opacity", p);
                }
            }
        }
    }, f1.prototype.__closestGroupOrSvg = function(a) {
        return a = a || this.__currentElement, "g" === a.nodeName || "svg" === a.nodeName ? a : this.__closestGroupOrSvg(a.parentNode);
    }, f1.prototype.getSerializedSvg = function(a) {
        var b, c, d, e, f, g, h = (new XMLSerializer).serializeToString(this.__root);
        if (g = /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi, g.test(h) && (h = h.replace('xmlns="http://www.w3.org/2000/svg', 'xmlns:xlink="http://www.w3.org/1999/xlink')), a) for(b = Object.keys(i1), c = 0; c < b.length; c++)d = b[c], e = i1[d], f = new RegExp(d, "gi"), f.test(h) && (h = h.replace(f, e));
        return h;
    }, f1.prototype.getSvg = function() {
        return this.__root;
    }, f1.prototype.save = function() {
        var a = this.__createElement("g"), b = this.__closestGroupOrSvg();
        this.__groupStack.push(b), b.appendChild(a), this.__currentElement = a, this.__stack.push(this.__getStyleState());
    }, f1.prototype.restore = function() {
        this.__currentElement = this.__groupStack.pop(), this.__currentElementsToStyle = null, this.__currentElement || (this.__currentElement = this.__root.childNodes[1]);
        var a = this.__stack.pop();
        this.__applyStyleState(a);
    }, f1.prototype.__addTransform = function(a) {
        var b = this.__closestGroupOrSvg();
        if (b.childNodes.length > 0) {
            "path" === this.__currentElement.nodeName && (this.__currentElementsToStyle || (this.__currentElementsToStyle = {
                element: b,
                children: []
            }), this.__currentElementsToStyle.children.push(this.__currentElement), this.__applyCurrentDefaultPath());
            var c = this.__createElement("g");
            b.appendChild(c), this.__currentElement = c;
        }
        var d = this.__currentElement.getAttribute("transform");
        d ? d += " " : d = "", d += a, this.__currentElement.setAttribute("transform", d);
    }, f1.prototype.scale = function(b, c) {
        void 0 === c && (c = b), this.__addTransform(a1("scale({x},{y})", {
            x: b,
            y: c
        }));
    }, f1.prototype.rotate = function(b) {
        var c = 180 * b / Math.PI;
        this.__addTransform(a1("rotate({angle},{cx},{cy})", {
            angle: c,
            cx: 0,
            cy: 0
        }));
    }, f1.prototype.translate = function(b, c) {
        this.__addTransform(a1("translate({x},{y})", {
            x: b,
            y: c
        }));
    }, f1.prototype.transform = function(b, c, d, e, f, g) {
        this.__addTransform(a1("matrix({a},{b},{c},{d},{e},{f})", {
            a: b,
            b: c,
            c: d,
            d: e,
            e: f,
            f: g
        }));
    }, f1.prototype.beginPath = function() {
        var a, b;
        this.__currentDefaultPath = "", this.__currentPosition = {
        }, a = this.__createElement("path", {
        }, !0), b = this.__closestGroupOrSvg(), b.appendChild(a), this.__currentElement = a;
    }, f1.prototype.__applyCurrentDefaultPath = function() {
        var a = this.__currentElement;
        "path" === a.nodeName ? a.setAttribute("d", this.__currentDefaultPath) : console.error("Attempted to apply path command to node", a.nodeName);
    }, f1.prototype.__addPathCommand = function(a) {
        this.__currentDefaultPath += " ", this.__currentDefaultPath += a;
    }, f1.prototype.moveTo = function(b, c) {
        "path" !== this.__currentElement.nodeName && this.beginPath(), this.__currentPosition = {
            x: b,
            y: c
        }, this.__addPathCommand(a1("M {x} {y}", {
            x: b,
            y: c
        }));
    }, f1.prototype.closePath = function() {
        this.__currentDefaultPath && this.__addPathCommand("Z");
    }, f1.prototype.lineTo = function(b, c) {
        this.__currentPosition = {
            x: b,
            y: c
        }, this.__currentDefaultPath.indexOf("M") > -1 ? this.__addPathCommand(a1("L {x} {y}", {
            x: b,
            y: c
        })) : this.__addPathCommand(a1("M {x} {y}", {
            x: b,
            y: c
        }));
    }, f1.prototype.bezierCurveTo = function(b, c, d, e, f, g) {
        this.__currentPosition = {
            x: f,
            y: g
        }, this.__addPathCommand(a1("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
            cp1x: b,
            cp1y: c,
            cp2x: d,
            cp2y: e,
            x: f,
            y: g
        }));
    }, f1.prototype.quadraticCurveTo = function(b, c, d, e) {
        this.__currentPosition = {
            x: d,
            y: e
        }, this.__addPathCommand(a1("Q {cpx} {cpy} {x} {y}", {
            cpx: b,
            cpy: c,
            x: d,
            y: e
        }));
    };
    var j1 = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        return [
            a[0] / b,
            a[1] / b
        ];
    };
    f1.prototype.arcTo = function(a2, b2, c, d, e) {
        var f = this.__currentPosition && this.__currentPosition.x, g = this.__currentPosition && this.__currentPosition.y;
        if (void 0 !== f && void 0 !== g) {
            if (e < 0) throw new Error("IndexSizeError: The radius provided (" + e + ") is negative.");
            if (f === a2 && g === b2 || a2 === c && b2 === d || 0 === e) return void this.lineTo(a2, b2);
            var h = j1([
                f - a2,
                g - b2
            ]), i = j1([
                c - a2,
                d - b2
            ]);
            if (h[0] * i[1] == h[1] * i[0]) return void this.lineTo(a2, b2);
            var k = h[0] * i[0] + h[1] * i[1], l = Math.acos(Math.abs(k)), m = j1([
                h[0] + i[0],
                h[1] + i[1]
            ]), n = e / Math.sin(l / 2), o = a2 + n * m[0], p = b2 + n * m[1], q = [
                -h[1],
                h[0]
            ], r = [
                i[1],
                -i[0]
            ], s = function(a) {
                var b = a[0];
                return a[1] >= 0 ? Math.acos(b) : -Math.acos(b);
            }, t = s(q), u = s(r);
            this.lineTo(o + q[0] * e, p + q[1] * e), this.arc(o, p, e, t, u);
        }
    }, f1.prototype.stroke = function() {
        "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "fill stroke markers"), this.__applyCurrentDefaultPath(), this.__applyStyleToCurrentElement("stroke");
    }, f1.prototype.fill = function() {
        "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "stroke fill markers"), this.__applyCurrentDefaultPath(), this.__applyStyleToCurrentElement("fill");
    }, f1.prototype.rect = function(a, b, c, d) {
        "path" !== this.__currentElement.nodeName && this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.lineTo(a, b), this.closePath();
    }, f1.prototype.fillRect = function(a, b, c, d) {
        var e, f;
        e = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: d,
            "shape-rendering": "crispEdges"
        }, !0), f = this.__closestGroupOrSvg(), f.appendChild(e), this.__currentElement = e, this.__applyStyleToCurrentElement("fill");
    }, f1.prototype.strokeRect = function(a, b, c, d) {
        var e, f;
        e = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: d
        }, !0), f = this.__closestGroupOrSvg(), f.appendChild(e), this.__currentElement = e, this.__applyStyleToCurrentElement("stroke");
    }, f1.prototype.__clearCanvas = function() {
        for(var a = this.__closestGroupOrSvg(), b = a.getAttribute("transform"), c = this.__root.childNodes[1], d = c.childNodes, e = d.length - 1; e >= 0; e--)d[e] && c.removeChild(d[e]);
        this.__currentElement = c, this.__groupStack = [], b && this.__addTransform(b);
    }, f1.prototype.clearRect = function(a, b, c, d) {
        if (0 === a && 0 === b && c === this.width && d === this.height) return void this.__clearCanvas();
        var e, f = this.__closestGroupOrSvg();
        e = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: d,
            fill: "#FFFFFF"
        }, !0), f.appendChild(e);
    }, f1.prototype.createLinearGradient = function(a, c, d, e) {
        var f = this.__createElement("linearGradient", {
            id: b1(this.__ids),
            x1: a + "px",
            x2: d + "px",
            y1: c + "px",
            y2: e + "px",
            gradientUnits: "userSpaceOnUse"
        }, !1);
        return this.__defs.appendChild(f), new g1(f, this);
    }, f1.prototype.createRadialGradient = function(a, c, d, e, f, h) {
        var i = this.__createElement("radialGradient", {
            id: b1(this.__ids),
            cx: e + "px",
            cy: f + "px",
            r: h + "px",
            fx: a + "px",
            fy: c + "px",
            gradientUnits: "userSpaceOnUse"
        }, !1);
        return this.__defs.appendChild(i), new g1(i, this);
    }, f1.prototype.__parseFont = function() {
        var a = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i, b = a.exec(this.font), c = {
            style: b[1] || "normal",
            size: b[4] || "10px",
            family: b[6] || "sans-serif",
            weight: b[3] || "normal",
            decoration: b[2] || "normal",
            href: null
        };
        return "underline" === this.__fontUnderline && (c.decoration = "underline"), this.__fontHref && (c.href = this.__fontHref), c;
    }, f1.prototype.__wrapTextLink = function(a, b) {
        if (a.href) {
            var c = this.__createElement("a");
            return c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.href), c.appendChild(b), c;
        }
        return b;
    }, f1.prototype.__applyText = function(a, b, e, f) {
        var g = this.__parseFont(), h = this.__closestGroupOrSvg(), i = this.__createElement("text", {
            "font-family": g.family,
            "font-size": g.size,
            "font-style": g.style,
            "font-weight": g.weight,
            "text-decoration": g.decoration,
            x: b,
            y: e,
            "text-anchor": c1(this.textAlign),
            "dominant-baseline": d1(this.textBaseline)
        }, !0);
        i.appendChild(this.__document.createTextNode(a)), this.__currentElement = i, this.__applyStyleToCurrentElement(f), h.appendChild(this.__wrapTextLink(g, i));
    }, f1.prototype.fillText = function(a, b, c) {
        this.__applyText(a, b, c, "fill");
    }, f1.prototype.strokeText = function(a, b, c) {
        this.__applyText(a, b, c, "stroke");
    }, f1.prototype.measureText = function(a) {
        return this.__ctx.font = this.font, this.__ctx.measureText(a);
    }, f1.prototype.arc = function(b, c, d, e, f, g) {
        if (e !== f) {
            e %= 2 * Math.PI, f %= 2 * Math.PI, e === f && (f = (f + 2 * Math.PI - 0.001 * (g ? -1 : 1)) % (2 * Math.PI));
            var h = b + d * Math.cos(f), i = c + d * Math.sin(f), j = b + d * Math.cos(e), k = c + d * Math.sin(e), l = g ? 0 : 1, m = 0, n = f - e;
            n < 0 && (n += 2 * Math.PI), m = g ? n > Math.PI ? 0 : 1 : n > Math.PI ? 1 : 0, this.lineTo(j, k), this.__addPathCommand(a1("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}", {
                rx: d,
                ry: d,
                xAxisRotation: 0,
                largeArcFlag: m,
                sweepFlag: l,
                endX: h,
                endY: i
            })), this.__currentPosition = {
                x: h,
                y: i
            };
        }
    }, f1.prototype.clip = function() {
        var c = this.__closestGroupOrSvg(), d = this.__createElement("clipPath"), e = b1(this.__ids), f = this.__createElement("g");
        this.__applyCurrentDefaultPath(), c.removeChild(this.__currentElement), d.setAttribute("id", e), d.appendChild(this.__currentElement), this.__defs.appendChild(d), c.setAttribute("clip-path", a1("url(#{id})", {
            id: e
        })), c.appendChild(f), this.__currentElement = f;
    }, f1.prototype.drawImage = function() {
        var a, b, c, d, e, g, h, i, j, k, l, m, n, o, p = Array.prototype.slice.call(arguments), q = p[0], r = 0, s = 0;
        if (3 === p.length) a = p[1], b = p[2], e = q.width, g = q.height, c = e, d = g;
        else if (5 === p.length) a = p[1], b = p[2], c = p[3], d = p[4], e = q.width, g = q.height;
        else {
            if (9 !== p.length) throw new Error("Invalid number of arguments passed to drawImage: " + arguments.length);
            r = p[1], s = p[2], e = p[3], g = p[4], a = p[5], b = p[6], c = p[7], d = p[8];
        }
        h = this.__closestGroupOrSvg(), this.__currentElement;
        var t = "translate(" + a + ", " + b + ")";
        if (q instanceof f1) {
            if (i = q.getSvg().cloneNode(!0), i.childNodes && i.childNodes.length > 1) {
                for(j = i.childNodes[0]; j.childNodes.length;)o = j.childNodes[0].getAttribute("id"), this.__ids[o] = o, this.__defs.appendChild(j.childNodes[0]);
                if (k = i.childNodes[1]) {
                    var u, v = k.getAttribute("transform");
                    u = v ? v + " " + t : t, k.setAttribute("transform", u), h.appendChild(k);
                }
            }
        } else "CANVAS" !== q.nodeName && "IMG" !== q.nodeName || (l = this.__createElement("image"), l.setAttribute("width", c), l.setAttribute("height", d), l.setAttribute("preserveAspectRatio", "none"), l.setAttribute("opacity", this.globalAlpha), (r || s || e !== q.width || g !== q.height) && (m = this.__document.createElement("canvas"), m.width = c, m.height = d, n = m.getContext("2d"), n.drawImage(q, r, s, e, g, 0, 0, c, d), q = m), l.setAttribute("transform", t), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === q.nodeName ? q.toDataURL() : q.originalSrc), h.appendChild(l));
    }, f1.prototype.createPattern = function(a, c) {
        var d, e = this.__document.createElementNS("http://www.w3.org/2000/svg", "pattern"), g = b1(this.__ids);
        return e.setAttribute("id", g), e.setAttribute("width", a.width), e.setAttribute("height", a.height), "CANVAS" === a.nodeName || "IMG" === a.nodeName ? (d = this.__document.createElementNS("http://www.w3.org/2000/svg", "image"), d.setAttribute("width", a.width), d.setAttribute("height", a.height), d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === a.nodeName ? a.toDataURL() : a.getAttribute("src")), e.appendChild(d), this.__defs.appendChild(e)) : a instanceof f1 && (e.appendChild(a.__root.childNodes[1]), this.__defs.appendChild(e)), new h1(e, this);
    }, f1.prototype.setLineDash = function(a) {
        a && a.length > 0 ? this.lineDash = a.join(",") : this.lineDash = null;
    }, f1.prototype.drawFocusRing = function() {
    }, f1.prototype.createImageData = function() {
    }, f1.prototype.getImageData = function() {
    }, f1.prototype.putImageData = function() {
    }, f1.prototype.globalCompositeOperation = function() {
    }, f1.prototype.setTransform = function() {
    }, "object" == typeof window && (window.C2S = f1), "object" == typeof module && "object" == typeof module.exports && (module.exports = f1);
}(), (function() {
    "use strict";
    function a3(a, b) {
        this.mode = q1.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
        for(var c = 0, d = this.data.length; c < d; c++){
            var e = [], f = this.data.charCodeAt(c);
            b ? e[0] = f : f > 65536 ? (e[0] = 240 | (1835008 & f) >>> 18, e[1] = 128 | (258048 & f) >>> 12, e[2] = 128 | (4032 & f) >>> 6, e[3] = 128 | 63 & f) : f > 2048 ? (e[0] = 224 | (61440 & f) >>> 12, e[1] = 128 | (4032 & f) >>> 6, e[2] = 128 | 63 & f) : f > 128 ? (e[0] = 192 | (1984 & f) >>> 6, e[1] = 128 | 63 & f) : e[0] = f, this.parsedData.push(e);
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
    }
    function b3(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
    }
    function c2(a, b) {
        if (a.length == i2) throw new Error(a.length + "/" + b);
        for(var c = 0; c < a.length && 0 == a[c];)c++;
        this.num = new Array(a.length - c + b);
        for(var d = 0; d < a.length - c; d++)this.num[d] = a[d + c];
    }
    function d2(a, b) {
        this.totalCount = a, this.dataCount = b;
    }
    function e2() {
        this.buffer = [], this.length = 0;
    }
    function f2() {
        var a = !1, b = navigator.userAgent;
        if (/android/i.test(b)) {
            a = !0;
            var c = b.toString().match(/android ([0-9]\.[0-9])/i);
            c && c[1] && (a = parseFloat(c[1]));
        }
        return a;
    }
    function g2(a, b) {
        for(var c = b.correctLevel, d = 1, e = h2(a), f = 0, g = w1.length; f < g; f++){
            var i = 0;
            switch(c){
                case r1.L:
                    i = w1[f][0];
                    break;
                case r1.M:
                    i = w1[f][1];
                    break;
                case r1.Q:
                    i = w1[f][2];
                    break;
                case r1.H:
                    i = w1[f][3];
            }
            if (e <= i) break;
            d++;
        }
        if (d > w1.length) throw new Error("Too long data. the CorrectLevel." + [
            "M",
            "L",
            "H",
            "Q"
        ][c] + " limit length is " + i);
        return 0 != b.version && (d <= b.version ? (d = b.version, b.runVersion = d) : (console.warn("QR Code version " + b.version + " too small, run version use " + d), b.runVersion = d)), d;
    }
    function h2(a) {
        var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return b.length + (b.length != a.length ? 3 : 0);
    }
    var i2, j2, k1 = "object" == typeof global && global && global.Object === Object && global, l1 = "object" == typeof self && self && self.Object === Object && self, m1 = k1 || l1 || Function("return this")(), n1 = "object" == typeof exports && exports && !exports.nodeType && exports, o1 = n1 && "object" == typeof module && module && !module.nodeType && module, p1 = m1.QRCode;
    a3.prototype = {
        getLength: function(a) {
            return this.parsedData.length;
        },
        write: function(a) {
            for(var b = 0, c = this.parsedData.length; b < c; b++)a.put(this.parsedData[b], 8);
        }
    }, b3.prototype = {
        addData: function(b, c) {
            var d = new a3(b, c);
            this.dataList.push(d), this.dataCache = null;
        },
        isDark: function(a, b) {
            if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b) throw new Error(a + "," + b);
            return this.modules[a][b][0];
        },
        getEye: function(a, b) {
            if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b) throw new Error(a + "," + b);
            var c = this.modules[a][b];
            if (c[1]) {
                var d = "P" + c[1] + "_" + c[2];
                return "A" == c[2] && (d = "A" + c[1]), {
                    isDark: c[0],
                    type: d
                };
            }
            return null;
        },
        getModuleCount: function() {
            return this.moduleCount;
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern());
        },
        makeImpl: function(a, c) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for(var d = 0; d < this.moduleCount; d++){
                this.modules[d] = new Array(this.moduleCount);
                for(var e = 0; e < this.moduleCount; e++)this.modules[d][e] = [];
            }
            this.setupPositionProbePattern(0, 0, "TL"), this.setupPositionProbePattern(this.moduleCount - 7, 0, "BL"), this.setupPositionProbePattern(0, this.moduleCount - 7, "TR"), this.setupPositionAdjustPattern("A"), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b3.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c);
        },
        setupPositionProbePattern: function(a, b, c) {
            for(var d = -1; d <= 7; d++)if (!(a + d <= -1 || this.moduleCount <= a + d)) for(var e = -1; e <= 7; e++)b + e <= -1 || this.moduleCount <= b + e || (0 <= d && d <= 6 && (0 == e || 6 == e) || 0 <= e && e <= 6 && (0 == d || 6 == d) || 2 <= d && d <= 4 && 2 <= e && e <= 4 ? (this.modules[a + d][b + e][0] = !0, this.modules[a + d][b + e][2] = c, this.modules[a + d][b + e][1] = -0 == d || -0 == e || 6 == d || 6 == e ? "O" : "I") : this.modules[a + d][b + e][0] = !1);
        },
        getBestMaskPattern: function() {
            for(var a = 0, b = 0, c = 0; c < 8; c++){
                this.makeImpl(!0, c);
                var d = t.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c);
            }
            return b;
        },
        createMovieClip: function(a, b, c) {
            var d = a.createEmptyMovieClip(b, c);
            this.make();
            for(var e = 0; e < this.modules.length; e++)for(var f = 1 * e, g = 0; g < this.modules[e].length; g++){
                var h = 1 * g, i = this.modules[e][g][0];
                i && (d.beginFill(0, 100), d.moveTo(h, f), d.lineTo(h + 1, f), d.lineTo(h + 1, f + 1), d.lineTo(h, f + 1), d.endFill());
            }
            return d;
        },
        setupTimingPattern: function() {
            for(var a = 8; a < this.moduleCount - 8; a++)null == this.modules[a][6][0] && (this.modules[a][6][0] = a % 2 == 0);
            for(var b = 8; b < this.moduleCount - 8; b++)null == this.modules[6][b][0] && (this.modules[6][b][0] = b % 2 == 0);
        },
        setupPositionAdjustPattern: function(a) {
            for(var b = t.getPatternPosition(this.typeNumber), c = 0; c < b.length; c++)for(var d = 0; d < b.length; d++){
                var e = b[c], f = b[d];
                if (null == this.modules[e][f][0]) for(var g = -2; g <= 2; g++)for(var h = -2; h <= 2; h++)-2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? (this.modules[e + g][f + h][0] = !0, this.modules[e + g][f + h][2] = a, this.modules[e + g][f + h][1] = -2 == g || -2 == h || 2 == g || 2 == h ? "O" : "I") : this.modules[e + g][f + h][0] = !1;
            }
        },
        setupTypeNumber: function(a) {
            for(var b = t.getBCHTypeNumber(this.typeNumber), c = 0; c < 18; c++){
                var d = !a && 1 == (b >> c & 1);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3][0] = d;
            }
            for(var c = 0; c < 18; c++){
                var d = !a && 1 == (b >> c & 1);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)][0] = d;
            }
        },
        setupTypeInfo: function(a, b) {
            for(var c = this.errorCorrectLevel << 3 | b, d = t.getBCHTypeInfo(c), e = 0; e < 15; e++){
                var f = !a && 1 == (d >> e & 1);
                e < 6 ? this.modules[e][8][0] = f : e < 8 ? this.modules[e + 1][8][0] = f : this.modules[this.moduleCount - 15 + e][8][0] = f;
            }
            for(var e = 0; e < 15; e++){
                var f = !a && 1 == (d >> e & 1);
                e < 8 ? this.modules[8][this.moduleCount - e - 1][0] = f : e < 9 ? this.modules[8][15 - e - 1 + 1][0] = f : this.modules[8][15 - e - 1][0] = f;
            }
            this.modules[this.moduleCount - 8][8][0] = !a;
        },
        mapData: function(a, b) {
            for(var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)for(6 == g && g--;;){
                for(var h = 0; h < 2; h++)if (null == this.modules[d][g - h][0]) {
                    var i = !1;
                    f < a.length && (i = 1 == (a[f] >>> e & 1));
                    var j = t.getMask(b, d, g - h);
                    j && (i = !i), this.modules[d][g - h][0] = i, e--, -1 == e && (f++, e = 7);
                }
                if ((d += c) < 0 || this.moduleCount <= d) {
                    d -= c, c = -c;
                    break;
                }
            }
        }
    }, b3.PAD0 = 236, b3.PAD1 = 17, b3.createData = function(a, c, f) {
        for(var g = d2.getRSBlocks(a, c), h = new e2, i = 0; i < f.length; i++){
            var j = f[i];
            h.put(j.mode, 4), h.put(j.getLength(), t.getLengthInBits(j.mode, a)), j.write(h);
        }
        for(var k = 0, i = 0; i < g.length; i++)k += g[i].dataCount;
        if (h.getLengthInBits() > 8 * k) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")");
        for(h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4); h.getLengthInBits() % 8 != 0;)h.putBit(!1);
        for(;;){
            if (h.getLengthInBits() >= 8 * k) break;
            if (h.put(b3.PAD0, 8), h.getLengthInBits() >= 8 * k) break;
            h.put(b3.PAD1, 8);
        }
        return b3.createBytes(h, g);
    }, b3.createBytes = function(a, b) {
        for(var d = 0, e = 0, f = 0, g = new Array(b.length), h = new Array(b.length), i = 0; i < b.length; i++){
            var j = b[i].dataCount, k = b[i].totalCount - j;
            e = Math.max(e, j), f = Math.max(f, k), g[i] = new Array(j);
            for(var l = 0; l < g[i].length; l++)g[i][l] = 255 & a.buffer[l + d];
            d += j;
            var m = t.getErrorCorrectPolynomial(k), n = new c2(g[i], m.getLength() - 1), o = n.mod(m);
            h[i] = new Array(m.getLength() - 1);
            for(var l = 0; l < h[i].length; l++){
                var p = l + o.getLength() - h[i].length;
                h[i][l] = p >= 0 ? o.get(p) : 0;
            }
        }
        for(var q = 0, l = 0; l < b.length; l++)q += b[l].totalCount;
        for(var r = new Array(q), s = 0, l = 0; l < e; l++)for(var i = 0; i < b.length; i++)l < g[i].length && (r[s++] = g[i][l]);
        for(var l = 0; l < f; l++)for(var i = 0; i < b.length; i++)l < h[i].length && (r[s++] = h[i][l]);
        return r;
    };
    for(var q1 = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, r1 = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, s1 = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, t = {
        PATTERN_POSITION_TABLE: [
            [],
            [
                6,
                18
            ],
            [
                6,
                22
            ],
            [
                6,
                26
            ],
            [
                6,
                30
            ],
            [
                6,
                34
            ],
            [
                6,
                22,
                38
            ],
            [
                6,
                24,
                42
            ],
            [
                6,
                26,
                46
            ],
            [
                6,
                28,
                50
            ],
            [
                6,
                30,
                54
            ],
            [
                6,
                32,
                58
            ],
            [
                6,
                34,
                62
            ],
            [
                6,
                26,
                46,
                66
            ],
            [
                6,
                26,
                48,
                70
            ],
            [
                6,
                26,
                50,
                74
            ],
            [
                6,
                30,
                54,
                78
            ],
            [
                6,
                30,
                56,
                82
            ],
            [
                6,
                30,
                58,
                86
            ],
            [
                6,
                34,
                62,
                90
            ],
            [
                6,
                28,
                50,
                72,
                94
            ],
            [
                6,
                26,
                50,
                74,
                98
            ],
            [
                6,
                30,
                54,
                78,
                102
            ],
            [
                6,
                28,
                54,
                80,
                106
            ],
            [
                6,
                32,
                58,
                84,
                110
            ],
            [
                6,
                30,
                58,
                86,
                114
            ],
            [
                6,
                34,
                62,
                90,
                118
            ],
            [
                6,
                26,
                50,
                74,
                98,
                122
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126
            ],
            [
                6,
                26,
                52,
                78,
                104,
                130
            ],
            [
                6,
                30,
                56,
                82,
                108,
                134
            ],
            [
                6,
                34,
                60,
                86,
                112,
                138
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142
            ],
            [
                6,
                34,
                62,
                90,
                118,
                146
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126,
                150
            ],
            [
                6,
                24,
                50,
                76,
                102,
                128,
                154
            ],
            [
                6,
                28,
                54,
                80,
                106,
                132,
                158
            ],
            [
                6,
                32,
                58,
                84,
                110,
                136,
                162
            ],
            [
                6,
                26,
                54,
                82,
                110,
                138,
                166
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142,
                170
            ]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(a) {
            for(var b = a << 10; t.getBCHDigit(b) - t.getBCHDigit(t.G15) >= 0;)b ^= t.G15 << t.getBCHDigit(b) - t.getBCHDigit(t.G15);
            return (a << 10 | b) ^ t.G15_MASK;
        },
        getBCHTypeNumber: function(a) {
            for(var b = a << 12; t.getBCHDigit(b) - t.getBCHDigit(t.G18) >= 0;)b ^= t.G18 << t.getBCHDigit(b) - t.getBCHDigit(t.G18);
            return a << 12 | b;
        },
        getBCHDigit: function(a) {
            for(var b = 0; 0 != a;)b++, a >>>= 1;
            return b;
        },
        getPatternPosition: function(a) {
            return t.PATTERN_POSITION_TABLE[a - 1];
        },
        getMask: function(a, b, c) {
            switch(a){
                case s1.PATTERN000:
                    return (b + c) % 2 == 0;
                case s1.PATTERN001:
                    return b % 2 == 0;
                case s1.PATTERN010:
                    return c % 3 == 0;
                case s1.PATTERN011:
                    return (b + c) % 3 == 0;
                case s1.PATTERN100:
                    return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
                case s1.PATTERN101:
                    return b * c % 2 + b * c % 3 == 0;
                case s1.PATTERN110:
                    return (b * c % 2 + b * c % 3) % 2 == 0;
                case s1.PATTERN111:
                    return (b * c % 3 + (b + c) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + a);
            }
        },
        getErrorCorrectPolynomial: function(a) {
            for(var b = new c2([
                1
            ], 0), d = 0; d < a; d++)b = b.multiply(new c2([
                1,
                u1.gexp(d)
            ], 0));
            return b;
        },
        getLengthInBits: function(a, b) {
            if (1 <= b && b < 10) switch(a){
                case q1.MODE_NUMBER:
                    return 10;
                case q1.MODE_ALPHA_NUM:
                    return 9;
                case q1.MODE_8BIT_BYTE:
                case q1.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + a);
            }
            else if (b < 27) switch(a){
                case q1.MODE_NUMBER:
                    return 12;
                case q1.MODE_ALPHA_NUM:
                    return 11;
                case q1.MODE_8BIT_BYTE:
                    return 16;
                case q1.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + a);
            }
            else {
                if (!(b < 41)) throw new Error("type:" + b);
                switch(a){
                    case q1.MODE_NUMBER:
                        return 14;
                    case q1.MODE_ALPHA_NUM:
                        return 13;
                    case q1.MODE_8BIT_BYTE:
                        return 16;
                    case q1.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + a);
                }
            }
        },
        getLostPoint: function(a) {
            for(var b = a.getModuleCount(), c = 0, d = 0; d < b; d++)for(var e = 0; e < b; e++){
                for(var f = 0, g = a.isDark(d, e), h = -1; h <= 1; h++)if (!(d + h < 0 || b <= d + h)) for(var i = -1; i <= 1; i++)e + i < 0 || b <= e + i || 0 == h && 0 == i || g == a.isDark(d + h, e + i) && f++;
                f > 5 && (c += 3 + f - 5);
            }
            for(var d = 0; d < b - 1; d++)for(var e = 0; e < b - 1; e++){
                var j = 0;
                a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, 0 != j && 4 != j || (c += 3);
            }
            for(var d = 0; d < b; d++)for(var e = 0; e < b - 6; e++)a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
            for(var e = 0; e < b; e++)for(var d = 0; d < b - 6; d++)a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
            for(var k = 0, e = 0; e < b; e++)for(var d = 0; d < b; d++)a.isDark(d, e) && k++;
            return c += Math.abs(100 * k / b / b - 50) / 5 * 10;
        }
    }, u1 = {
        glog: function(a) {
            if (a < 1) throw new Error("glog(" + a + ")");
            return u1.LOG_TABLE[a];
        },
        gexp: function(a) {
            for(; a < 0;)a += 255;
            for(; a >= 256;)a -= 255;
            return u1.EXP_TABLE[a];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, v1 = 0; v1 < 8; v1++)u1.EXP_TABLE[v1] = 1 << v1;
    for(var v1 = 8; v1 < 256; v1++)u1.EXP_TABLE[v1] = u1.EXP_TABLE[v1 - 4] ^ u1.EXP_TABLE[v1 - 5] ^ u1.EXP_TABLE[v1 - 6] ^ u1.EXP_TABLE[v1 - 8];
    for(var v1 = 0; v1 < 255; v1++)u1.LOG_TABLE[u1.EXP_TABLE[v1]] = v1;
    c2.prototype = {
        get: function(a) {
            return this.num[a];
        },
        getLength: function() {
            return this.num.length;
        },
        multiply: function(a) {
            for(var b = new Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)for(var e = 0; e < a.getLength(); e++)b[d + e] ^= u1.gexp(u1.glog(this.get(d)) + u1.glog(a.get(e)));
            return new c2(b, 0);
        },
        mod: function(a) {
            if (this.getLength() - a.getLength() < 0) return this;
            for(var b = u1.glog(this.get(0)) - u1.glog(a.get(0)), d = new Array(this.getLength()), e = 0; e < this.getLength(); e++)d[e] = this.get(e);
            for(var e = 0; e < a.getLength(); e++)d[e] ^= u1.gexp(u1.glog(a.get(e)) + b);
            return new c2(d, 0).mod(a);
        }
    }, d2.RS_BLOCK_TABLE = [
        [
            1,
            26,
            19
        ],
        [
            1,
            26,
            16
        ],
        [
            1,
            26,
            13
        ],
        [
            1,
            26,
            9
        ],
        [
            1,
            44,
            34
        ],
        [
            1,
            44,
            28
        ],
        [
            1,
            44,
            22
        ],
        [
            1,
            44,
            16
        ],
        [
            1,
            70,
            55
        ],
        [
            1,
            70,
            44
        ],
        [
            2,
            35,
            17
        ],
        [
            2,
            35,
            13
        ],
        [
            1,
            100,
            80
        ],
        [
            2,
            50,
            32
        ],
        [
            2,
            50,
            24
        ],
        [
            4,
            25,
            9
        ],
        [
            1,
            134,
            108
        ],
        [
            2,
            67,
            43
        ],
        [
            2,
            33,
            15,
            2,
            34,
            16
        ],
        [
            2,
            33,
            11,
            2,
            34,
            12
        ],
        [
            2,
            86,
            68
        ],
        [
            4,
            43,
            27
        ],
        [
            4,
            43,
            19
        ],
        [
            4,
            43,
            15
        ],
        [
            2,
            98,
            78
        ],
        [
            4,
            49,
            31
        ],
        [
            2,
            32,
            14,
            4,
            33,
            15
        ],
        [
            4,
            39,
            13,
            1,
            40,
            14
        ],
        [
            2,
            121,
            97
        ],
        [
            2,
            60,
            38,
            2,
            61,
            39
        ],
        [
            4,
            40,
            18,
            2,
            41,
            19
        ],
        [
            4,
            40,
            14,
            2,
            41,
            15
        ],
        [
            2,
            146,
            116
        ],
        [
            3,
            58,
            36,
            2,
            59,
            37
        ],
        [
            4,
            36,
            16,
            4,
            37,
            17
        ],
        [
            4,
            36,
            12,
            4,
            37,
            13
        ],
        [
            2,
            86,
            68,
            2,
            87,
            69
        ],
        [
            4,
            69,
            43,
            1,
            70,
            44
        ],
        [
            6,
            43,
            19,
            2,
            44,
            20
        ],
        [
            6,
            43,
            15,
            2,
            44,
            16
        ],
        [
            4,
            101,
            81
        ],
        [
            1,
            80,
            50,
            4,
            81,
            51
        ],
        [
            4,
            50,
            22,
            4,
            51,
            23
        ],
        [
            3,
            36,
            12,
            8,
            37,
            13
        ],
        [
            2,
            116,
            92,
            2,
            117,
            93
        ],
        [
            6,
            58,
            36,
            2,
            59,
            37
        ],
        [
            4,
            46,
            20,
            6,
            47,
            21
        ],
        [
            7,
            42,
            14,
            4,
            43,
            15
        ],
        [
            4,
            133,
            107
        ],
        [
            8,
            59,
            37,
            1,
            60,
            38
        ],
        [
            8,
            44,
            20,
            4,
            45,
            21
        ],
        [
            12,
            33,
            11,
            4,
            34,
            12
        ],
        [
            3,
            145,
            115,
            1,
            146,
            116
        ],
        [
            4,
            64,
            40,
            5,
            65,
            41
        ],
        [
            11,
            36,
            16,
            5,
            37,
            17
        ],
        [
            11,
            36,
            12,
            5,
            37,
            13
        ],
        [
            5,
            109,
            87,
            1,
            110,
            88
        ],
        [
            5,
            65,
            41,
            5,
            66,
            42
        ],
        [
            5,
            54,
            24,
            7,
            55,
            25
        ],
        [
            11,
            36,
            12,
            7,
            37,
            13
        ],
        [
            5,
            122,
            98,
            1,
            123,
            99
        ],
        [
            7,
            73,
            45,
            3,
            74,
            46
        ],
        [
            15,
            43,
            19,
            2,
            44,
            20
        ],
        [
            3,
            45,
            15,
            13,
            46,
            16
        ],
        [
            1,
            135,
            107,
            5,
            136,
            108
        ],
        [
            10,
            74,
            46,
            1,
            75,
            47
        ],
        [
            1,
            50,
            22,
            15,
            51,
            23
        ],
        [
            2,
            42,
            14,
            17,
            43,
            15
        ],
        [
            5,
            150,
            120,
            1,
            151,
            121
        ],
        [
            9,
            69,
            43,
            4,
            70,
            44
        ],
        [
            17,
            50,
            22,
            1,
            51,
            23
        ],
        [
            2,
            42,
            14,
            19,
            43,
            15
        ],
        [
            3,
            141,
            113,
            4,
            142,
            114
        ],
        [
            3,
            70,
            44,
            11,
            71,
            45
        ],
        [
            17,
            47,
            21,
            4,
            48,
            22
        ],
        [
            9,
            39,
            13,
            16,
            40,
            14
        ],
        [
            3,
            135,
            107,
            5,
            136,
            108
        ],
        [
            3,
            67,
            41,
            13,
            68,
            42
        ],
        [
            15,
            54,
            24,
            5,
            55,
            25
        ],
        [
            15,
            43,
            15,
            10,
            44,
            16
        ],
        [
            4,
            144,
            116,
            4,
            145,
            117
        ],
        [
            17,
            68,
            42
        ],
        [
            17,
            50,
            22,
            6,
            51,
            23
        ],
        [
            19,
            46,
            16,
            6,
            47,
            17
        ],
        [
            2,
            139,
            111,
            7,
            140,
            112
        ],
        [
            17,
            74,
            46
        ],
        [
            7,
            54,
            24,
            16,
            55,
            25
        ],
        [
            34,
            37,
            13
        ],
        [
            4,
            151,
            121,
            5,
            152,
            122
        ],
        [
            4,
            75,
            47,
            14,
            76,
            48
        ],
        [
            11,
            54,
            24,
            14,
            55,
            25
        ],
        [
            16,
            45,
            15,
            14,
            46,
            16
        ],
        [
            6,
            147,
            117,
            4,
            148,
            118
        ],
        [
            6,
            73,
            45,
            14,
            74,
            46
        ],
        [
            11,
            54,
            24,
            16,
            55,
            25
        ],
        [
            30,
            46,
            16,
            2,
            47,
            17
        ],
        [
            8,
            132,
            106,
            4,
            133,
            107
        ],
        [
            8,
            75,
            47,
            13,
            76,
            48
        ],
        [
            7,
            54,
            24,
            22,
            55,
            25
        ],
        [
            22,
            45,
            15,
            13,
            46,
            16
        ],
        [
            10,
            142,
            114,
            2,
            143,
            115
        ],
        [
            19,
            74,
            46,
            4,
            75,
            47
        ],
        [
            28,
            50,
            22,
            6,
            51,
            23
        ],
        [
            33,
            46,
            16,
            4,
            47,
            17
        ],
        [
            8,
            152,
            122,
            4,
            153,
            123
        ],
        [
            22,
            73,
            45,
            3,
            74,
            46
        ],
        [
            8,
            53,
            23,
            26,
            54,
            24
        ],
        [
            12,
            45,
            15,
            28,
            46,
            16
        ],
        [
            3,
            147,
            117,
            10,
            148,
            118
        ],
        [
            3,
            73,
            45,
            23,
            74,
            46
        ],
        [
            4,
            54,
            24,
            31,
            55,
            25
        ],
        [
            11,
            45,
            15,
            31,
            46,
            16
        ],
        [
            7,
            146,
            116,
            7,
            147,
            117
        ],
        [
            21,
            73,
            45,
            7,
            74,
            46
        ],
        [
            1,
            53,
            23,
            37,
            54,
            24
        ],
        [
            19,
            45,
            15,
            26,
            46,
            16
        ],
        [
            5,
            145,
            115,
            10,
            146,
            116
        ],
        [
            19,
            75,
            47,
            10,
            76,
            48
        ],
        [
            15,
            54,
            24,
            25,
            55,
            25
        ],
        [
            23,
            45,
            15,
            25,
            46,
            16
        ],
        [
            13,
            145,
            115,
            3,
            146,
            116
        ],
        [
            2,
            74,
            46,
            29,
            75,
            47
        ],
        [
            42,
            54,
            24,
            1,
            55,
            25
        ],
        [
            23,
            45,
            15,
            28,
            46,
            16
        ],
        [
            17,
            145,
            115
        ],
        [
            10,
            74,
            46,
            23,
            75,
            47
        ],
        [
            10,
            54,
            24,
            35,
            55,
            25
        ],
        [
            19,
            45,
            15,
            35,
            46,
            16
        ],
        [
            17,
            145,
            115,
            1,
            146,
            116
        ],
        [
            14,
            74,
            46,
            21,
            75,
            47
        ],
        [
            29,
            54,
            24,
            19,
            55,
            25
        ],
        [
            11,
            45,
            15,
            46,
            46,
            16
        ],
        [
            13,
            145,
            115,
            6,
            146,
            116
        ],
        [
            14,
            74,
            46,
            23,
            75,
            47
        ],
        [
            44,
            54,
            24,
            7,
            55,
            25
        ],
        [
            59,
            46,
            16,
            1,
            47,
            17
        ],
        [
            12,
            151,
            121,
            7,
            152,
            122
        ],
        [
            12,
            75,
            47,
            26,
            76,
            48
        ],
        [
            39,
            54,
            24,
            14,
            55,
            25
        ],
        [
            22,
            45,
            15,
            41,
            46,
            16
        ],
        [
            6,
            151,
            121,
            14,
            152,
            122
        ],
        [
            6,
            75,
            47,
            34,
            76,
            48
        ],
        [
            46,
            54,
            24,
            10,
            55,
            25
        ],
        [
            2,
            45,
            15,
            64,
            46,
            16
        ],
        [
            17,
            152,
            122,
            4,
            153,
            123
        ],
        [
            29,
            74,
            46,
            14,
            75,
            47
        ],
        [
            49,
            54,
            24,
            10,
            55,
            25
        ],
        [
            24,
            45,
            15,
            46,
            46,
            16
        ],
        [
            4,
            152,
            122,
            18,
            153,
            123
        ],
        [
            13,
            74,
            46,
            32,
            75,
            47
        ],
        [
            48,
            54,
            24,
            14,
            55,
            25
        ],
        [
            42,
            45,
            15,
            32,
            46,
            16
        ],
        [
            20,
            147,
            117,
            4,
            148,
            118
        ],
        [
            40,
            75,
            47,
            7,
            76,
            48
        ],
        [
            43,
            54,
            24,
            22,
            55,
            25
        ],
        [
            10,
            45,
            15,
            67,
            46,
            16
        ],
        [
            19,
            148,
            118,
            6,
            149,
            119
        ],
        [
            18,
            75,
            47,
            31,
            76,
            48
        ],
        [
            34,
            54,
            24,
            34,
            55,
            25
        ],
        [
            20,
            45,
            15,
            61,
            46,
            16
        ]
    ], d2.getRSBlocks = function(a, b) {
        var c = d2.getRsBlockTable(a, b);
        if (c == i2) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for(var e = c.length / 3, f = [], g = 0; g < e; g++)for(var h = c[3 * g + 0], j = c[3 * g + 1], k = c[3 * g + 2], l = 0; l < h; l++)f.push(new d2(j, k));
        return f;
    }, d2.getRsBlockTable = function(a, b) {
        switch(b){
            case r1.L:
                return d2.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case r1.M:
                return d2.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case r1.Q:
                return d2.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case r1.H:
                return d2.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return i2;
        }
    }, e2.prototype = {
        get: function(a) {
            var b = Math.floor(a / 8);
            return 1 == (this.buffer[b] >>> 7 - a % 8 & 1);
        },
        put: function(a, b) {
            for(var c = 0; c < b; c++)this.putBit(1 == (a >>> b - c - 1 & 1));
        },
        getLengthInBits: function() {
            return this.length;
        },
        putBit: function(a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++;
        }
    };
    var w1 = [
        [
            17,
            14,
            11,
            7
        ],
        [
            32,
            26,
            20,
            14
        ],
        [
            53,
            42,
            32,
            24
        ],
        [
            78,
            62,
            46,
            34
        ],
        [
            106,
            84,
            60,
            44
        ],
        [
            134,
            106,
            74,
            58
        ],
        [
            154,
            122,
            86,
            64
        ],
        [
            192,
            152,
            108,
            84
        ],
        [
            230,
            180,
            130,
            98
        ],
        [
            271,
            213,
            151,
            119
        ],
        [
            321,
            251,
            177,
            137
        ],
        [
            367,
            287,
            203,
            155
        ],
        [
            425,
            331,
            241,
            177
        ],
        [
            458,
            362,
            258,
            194
        ],
        [
            520,
            412,
            292,
            220
        ],
        [
            586,
            450,
            322,
            250
        ],
        [
            644,
            504,
            364,
            280
        ],
        [
            718,
            560,
            394,
            310
        ],
        [
            792,
            624,
            442,
            338
        ],
        [
            858,
            666,
            482,
            382
        ],
        [
            929,
            711,
            509,
            403
        ],
        [
            1003,
            779,
            565,
            439
        ],
        [
            1091,
            857,
            611,
            461
        ],
        [
            1171,
            911,
            661,
            511
        ],
        [
            1273,
            997,
            715,
            535
        ],
        [
            1367,
            1059,
            751,
            593
        ],
        [
            1465,
            1125,
            805,
            625
        ],
        [
            1528,
            1190,
            868,
            658
        ],
        [
            1628,
            1264,
            908,
            698
        ],
        [
            1732,
            1370,
            982,
            742
        ],
        [
            1840,
            1452,
            1030,
            790
        ],
        [
            1952,
            1538,
            1112,
            842
        ],
        [
            2068,
            1628,
            1168,
            898
        ],
        [
            2188,
            1722,
            1228,
            958
        ],
        [
            2303,
            1809,
            1283,
            983
        ],
        [
            2431,
            1911,
            1351,
            1051
        ],
        [
            2563,
            1989,
            1423,
            1093
        ],
        [
            2699,
            2099,
            1499,
            1139
        ],
        [
            2809,
            2213,
            1579,
            1219
        ],
        [
            2953,
            2331,
            1663,
            1273
        ]
    ], x1 = function() {
        return "undefined" != typeof CanvasRenderingContext2D;
    }() ? function() {
        function a4() {
            if ("svg" == this._htOption.drawer) {
                var a = this._oContext.getSerializedSvg(!0);
                this.dataURL = a, this._el.innerHTML = a;
            } else try {
                var b = this._elCanvas.toDataURL("image/png");
                this.dataURL = b;
            } catch (a) {
                console.error(a);
            }
            this._htOption.onRenderingEnd && (this.dataURL || console.error("Can not get base64 data, please check: 1. Published the page and image to the server 2. The image request support CORS 3. Configured `crossOrigin:'anonymous'` option"), this._htOption.onRenderingEnd(this._htOption, this.dataURL));
        }
        function b4(a, b) {
            var c = this;
            if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                var d = document.createElement("img"), e = function() {
                    c._bSupportDataURI = !1, c._fFail && c._fFail.call(c);
                }, f = function() {
                    c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c);
                };
                return d.onabort = e, d.onerror = e, d.onload = f, void (d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
            }
            !0 === c._bSupportDataURI && c._fSuccess ? c._fSuccess.call(c) : !1 === c._bSupportDataURI && c._fFail && c._fFail.call(c);
        }
        if (m1._android && m1._android <= 2.1) {
            var c3 = 1 / window.devicePixelRatio, d3 = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(a, b, e, f, g, h, i, j, k) {
                if ("nodeName" in a && /img/i.test(a.nodeName)) for(var l = arguments.length - 1; l >= 1; l--)arguments[l] = arguments[l] * c3;
                else void 0 === j && (arguments[1] *= c3, arguments[2] *= c3, arguments[3] *= c3, arguments[4] *= c3);
                d3.apply(this, arguments);
            };
        }
        var e3 = function(a, b) {
            this._bIsPainted = !1, this._android = f2(), this._el = a, this._htOption = b, "svg" == this._htOption.drawer ? (this._oContext = {
            }, this._elCanvas = {
            }) : (this._elCanvas = document.createElement("canvas"), this._el.appendChild(this._elCanvas), this._oContext = this._elCanvas.getContext("2d")), this._bSupportDataURI = null, this.dataURL = null;
        };
        return e3.prototype.draw = function(a5) {
            function b() {
                d.quietZone > 0 && d.quietZoneColor && (h.lineWidth = 0, h.fillStyle = d.quietZoneColor, h.fillRect(0, 0, i3._elCanvas.width, d.quietZone), h.fillRect(0, d.quietZone, d.quietZone, i3._elCanvas.height - 2 * d.quietZone), h.fillRect(i3._elCanvas.width - d.quietZone, d.quietZone, d.quietZone, i3._elCanvas.height - 2 * d.quietZone), h.fillRect(0, i3._elCanvas.height - d.quietZone, i3._elCanvas.width, d.quietZone));
            }
            function c4(a6) {
                function c5(a) {
                    var c = Math.round(d.width / 3.5), e = Math.round(d.height / 3.5);
                    c !== e && (c = e), d.logoMaxWidth ? c = Math.round(d.logoMaxWidth) : d.logoWidth && (c = Math.round(d.logoWidth)), d.logoMaxHeight ? e = Math.round(d.logoMaxHeight) : d.logoHeight && (e = Math.round(d.logoHeight));
                    var f, g;
                    void 0 === a.naturalWidth ? (f = a.width, g = a.height) : (f = a.naturalWidth, g = a.naturalHeight), (d.logoMaxWidth || d.logoMaxHeight) && (d.logoMaxWidth && f <= c && (c = f), d.logoMaxHeight && g <= e && (e = g), f <= c && g <= e && (c = f, e = g));
                    var i = (d.width + 2 * d.quietZone - c) / 2, j = (d.height + d.titleHeight + 2 * d.quietZone - e) / 2, k = Math.min(c / f, e / g), l = f * k, m = g * k;
                    (d.logoMaxWidth || d.logoMaxHeight) && (c = l, e = m, i = (d.width + 2 * d.quietZone - c) / 2, j = (d.height + d.titleHeight + 2 * d.quietZone - e) / 2), d.logoBackgroundTransparent || (h.fillStyle = d.logoBackgroundColor, h.fillRect(i, j, c, e)), h.drawImage(a, i + (c - l) / 2, j + (e - m) / 2, l, m), b(), s._bIsPainted = !0, s.makeImage();
                }
                d.onRenderingStart && d.onRenderingStart(d);
                for(var i4 = 0; i4 < e4; i4++)for(var j4 = 0; j4 < e4; j4++){
                    var k2 = j4 * f3 + d.quietZone, l2 = i4 * g3 + d.quietZone, m2 = a6.isDark(i4, j4), n = a6.getEye(i4, j4), o = d.dotScale;
                    h.lineWidth = 0;
                    var p, q;
                    n ? (p = d[n.type] || d[n.type.substring(0, 2)] || d.colorDark, q = d.colorLight) : d.backgroundImage ? (q = "rgba(0,0,0,0)", 6 == i4 ? d.autoColor ? (p = d.timing_H || d.timing || d.autoColorDark, q = d.timing_H || d.timing || d.autoColorLight) : p = d.timing_H || d.timing || d.colorDark : 6 == j4 ? d.autoColor ? (p = d.timing_V || d.timing || d.autoColorDark, q = d.timing_V || d.timing || d.autoColorLight) : p = d.timing_V || d.timing || d.colorDark : d.autoColor ? (p = d.autoColorDark, q = d.autoColorLight) : p = d.colorDark) : (p = 6 == i4 ? d.timing_H || d.timing || d.colorDark : 6 == j4 ? d.timing_V || d.timing || d.colorDark : d.colorDark, q = d.colorLight), h.strokeStyle = m2 ? p : q, h.fillStyle = m2 ? p : q, n ? (o = "AO" == n.type ? d.dotScaleAO : "AI" == n.type ? d.dotScaleAI : 1, d.backgroundImage && d.autoColor ? (p = ("AO" == n.type ? d.AI : d.AO) || d.autoColorDark, q = d.autoColorLight) : p = ("AO" == n.type ? d.AI : d.AO) || p, m2 = n.isDark, h.fillRect(k2 + f3 * (1 - o) / 2, d.titleHeight + l2 + g3 * (1 - o) / 2, f3 * o, g3 * o)) : 6 == i4 ? (o = d.dotScaleTiming_H, h.fillRect(k2 + f3 * (1 - o) / 2, d.titleHeight + l2 + g3 * (1 - o) / 2, f3 * o, g3 * o)) : 6 == j4 ? (o = d.dotScaleTiming_V, h.fillRect(k2 + f3 * (1 - o) / 2, d.titleHeight + l2 + g3 * (1 - o) / 2, f3 * o, g3 * o)) : (d.backgroundImage, h.fillRect(k2 + f3 * (1 - o) / 2, d.titleHeight + l2 + g3 * (1 - o) / 2, f3 * o, g3 * o)), 1 == d.dotScale || n || (h.strokeStyle = d.colorLight);
                }
                if (d.title && (h.fillStyle = d.titleBackgroundColor, h.fillRect(0, 0, this._elCanvas.width, d.titleHeight + d.quietZone), h.font = d.titleFont, h.fillStyle = d.titleColor, h.textAlign = "center", h.fillText(d.title, this._elCanvas.width / 2, +d.quietZone + d.titleTop)), d.subTitle && (h.font = d.subTitleFont, h.fillStyle = d.subTitleColor, h.fillText(d.subTitle, this._elCanvas.width / 2, +d.quietZone + d.subTitleTop)), d.logo) {
                    var r = new Image, s = this;
                    r.onload = function() {
                        c5(r);
                    }, r.onerror = function(a) {
                        console.error(a);
                    }, null != d.crossOrigin && (r.crossOrigin = d.crossOrigin), r.originalSrc = d.logo, r.src = d.logo;
                } else b(), this._bIsPainted = !0, this.makeImage();
            }
            var d = this._htOption;
            d.title || d.subTitle || (d.height -= d.titleHeight, d.titleHeight = 0);
            var e4 = a5.getModuleCount(), f3 = Math.round(d.width / e4), g3 = Math.round((d.height - d.titleHeight) / e4);
            f3 <= 1 && (f3 = 1), g3 <= 1 && (g3 = 1), d.width = f3 * e4, d.height = g3 * e4 + d.titleHeight, d.quietZone = Math.round(d.quietZone), this._elCanvas.width = d.width + 2 * d.quietZone, this._elCanvas.height = d.height + 2 * d.quietZone, "canvas" != this._htOption.drawer && (this._oContext = new C2S(this._elCanvas.width, this._elCanvas.height)), this.clear();
            var h = this._oContext;
            h.lineWidth = 0, h.fillStyle = d.colorLight, h.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height);
            var i3 = this;
            if (d.backgroundImage) {
                var j3 = new Image;
                j3.onload = function() {
                    h.globalAlpha = 1, h.globalAlpha = d.backgroundImageAlpha, h.drawImage(j3, 0, d.titleHeight, d.width + 2 * d.quietZone, d.height + 2 * d.quietZone - d.titleHeight), h.globalAlpha = 1, c4.call(i3, a5);
                }, null != d.crossOrigin && (j3.crossOrigin = d.crossOrigin), j3.originalSrc = d.backgroundImage, j3.src = d.backgroundImage;
            } else c4.call(i3, a5);
        }, e3.prototype.makeImage = function() {
            this._bIsPainted && b4.call(this, a4);
        }, e3.prototype.isPainted = function() {
            return this._bIsPainted;
        }, e3.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
        }, e3.prototype.remove = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, this._el.innerHTML = "";
        }, e3.prototype.round = function(a) {
            return a ? Math.floor(1000 * a) / 1000 : a;
        }, e3;
    }() : function() {
        var a7 = function(a, b) {
            this._el = a, this._htOption = b;
        };
        return a7.prototype.draw = function(a) {
            var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.round(b.width / d), f = Math.round((b.height - b.titleHeight) / d);
            e <= 1 && (e = 1), f <= 1 && (f = 1), this._htOption.width = e * d, this._htOption.height = f * d + b.titleHeight, this._htOption.quietZone = Math.round(this._htOption.quietZone);
            var g = [], h = "", i = Math.round(e * b.dotScale), j = Math.round(f * b.dotScale);
            i < 4 && (i = 4, j = 4);
            var k = b.colorDark, l = b.colorLight;
            if (b.backgroundImage) {
                b.autoColor ? (b.colorDark = "rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');", b.colorLight = "rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');") : b.colorLight = "rgba(0,0,0,0)";
                var m = '<div style="display:inline-block; z-index:-10;position:absolute;"><img src="' + b.backgroundImage + '" widht="' + (b.width + 2 * b.quietZone) + '" height="' + (b.height + 2 * b.quietZone) + '" style="opacity:' + b.backgroundImageAlpha + ";filter:alpha(opacity=" + 100 * b.backgroundImageAlpha + '); "/></div>';
                g.push(m);
            }
            if (b.quietZone && (h = "display:inline-block; width:" + (b.width + 2 * b.quietZone) + "px; height:" + (b.width + 2 * b.quietZone) + "px;background:" + b.quietZoneColor + "; text-align:center;"), g.push('<div style="font-size:0;' + h + '">'), g.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:' + b.quietZone + 'px;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'), g.push('<tr height="' + b.titleHeight + '" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="' + d + '">'), b.title) {
                var n = b.titleColor, o = b.titleFont;
                g.push('<div style="width:100%;margin-top:' + b.titleTop + "px;color:" + n + ";font:" + o + ";background:" + b.titleBackgroundColor + '">' + b.title + "</div>");
            }
            b.subTitle && g.push('<div style="width:100%;margin-top:' + (b.subTitleTop - b.titleTop) + "px;color:" + b.subTitleColor + "; font:" + b.subTitleFont + '">' + b.subTitle + "</div>"), g.push("</td></tr>");
            for(var p = 0; p < d; p++){
                g.push('<tr style="border:0; padding:0; margin:0;" height="7">');
                for(var q = 0; q < d; q++){
                    var r = a.isDark(p, q), s = a.getEye(p, q);
                    if (s) {
                        r = s.isDark;
                        var t = s.type, u = b[t] || b[t.substring(0, 2)] || k;
                        g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + 'px;"><span style="width:' + e + "px;height:" + f + "px;background-color:" + (r ? u : l) + ';display:inline-block"></span></td>');
                    } else {
                        var v = b.colorDark;
                        6 == p ? (v = b.timing_H || b.timing || k, g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (r ? v : l) + ';"></td>')) : 6 == q ? (v = b.timing_V || b.timing || k, g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (r ? v : l) + ';"></td>')) : g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + 'px;"><div style="display:inline-block;width:' + i + "px;height:" + j + "px;background-color:" + (r ? v : b.colorLight) + ';"></div></td>');
                    }
                }
                g.push("</tr>");
            }
            if (g.push("</table>"), g.push("</div>"), b.logo) {
                var w = new Image;
                null != b.crossOrigin && (w.crossOrigin = b.crossOrigin), w.src = b.logo;
                var x = b.width / 3.5, y = b.height / 3.5;
                x != y && (x = y), b.logoWidth && (x = b.logoWidth), b.logoHeight && (y = b.logoHeight);
                var z = "position:relative; z-index:1;display:table-cell;top:-" + ((b.height - b.titleHeight) / 2 + y / 2 + b.quietZone) + "px;text-align:center; width:" + x + "px; height:" + y + "px;line-height:" + x + "px; vertical-align: middle;";
                b.logoBackgroundTransparent || (z += "background:" + b.logoBackgroundColor), g.push('<div style="' + z + '"><img  src="' + b.logo + '"  style="max-width: ' + x + "px; max-height: " + y + 'px;" /> <div style=" display: none; width:1px;margin-left: -1px;"></div></div>');
            }
            b.onRenderingStart && b.onRenderingStart(b), c.innerHTML = g.join("");
            var A = c.childNodes[0], B = (b.width - A.offsetWidth) / 2, C = (b.height - A.offsetHeight) / 2;
            B > 0 && C > 0 && (A.style.margin = C + "px " + B + "px"), this._htOption.onRenderingEnd && this._htOption.onRenderingEnd(this._htOption, null);
        }, a7.prototype.clear = function() {
            this._el.innerHTML = "";
        }, a7;
    }();
    j2 = function(a, b) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: r1.H,
            dotScale: 1,
            dotScaleTiming: 1,
            dotScaleTiming_H: i2,
            dotScaleTiming_V: i2,
            dotScaleA: 1,
            dotScaleAO: i2,
            dotScaleAI: i2,
            quietZone: 0,
            quietZoneColor: "rgba(0,0,0,0)",
            title: "",
            titleFont: "normal normal bold 16px Arial",
            titleColor: "#000000",
            titleBackgroundColor: "#ffffff",
            titleHeight: 0,
            titleTop: 30,
            subTitle: "",
            subTitleFont: "normal normal normal 14px Arial",
            subTitleColor: "#4F4F4F",
            subTitleTop: 60,
            logo: i2,
            logoWidth: i2,
            logoHeight: i2,
            logoMaxWidth: i2,
            logoMaxHeight: i2,
            logoBackgroundColor: "#ffffff",
            logoBackgroundTransparent: !1,
            PO: i2,
            PI: i2,
            PO_TL: i2,
            PI_TL: i2,
            PO_TR: i2,
            PI_TR: i2,
            PO_BL: i2,
            PI_BL: i2,
            AO: i2,
            AI: i2,
            timing: i2,
            timing_H: i2,
            timing_V: i2,
            backgroundImage: i2,
            backgroundImageAlpha: 1,
            autoColor: !1,
            autoColorDark: "rgba(0, 0, 0, .6)",
            autoColorLight: "rgba(255, 255, 255, .7)",
            onRenderingStart: i2,
            onRenderingEnd: i2,
            version: 0,
            tooltip: !1,
            binary: !1,
            drawer: "canvas",
            crossOrigin: null
        }, "string" == typeof b && (b = {
            text: b
        }), b) for(var c in b)this._htOption[c] = b[c];
        (this._htOption.version < 0 || this._htOption.version > 40) && (console.warn("QR Code version '" + this._htOption.version + "' is invalidate, reset to 0"), this._htOption.version = 0), (this._htOption.dotScale < 0 || this._htOption.dotScale > 1) && (console.warn(this._htOption.dotScale + " , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScale = 1), (this._htOption.dotScaleTiming < 0 || this._htOption.dotScaleTiming > 1) && (console.warn(this._htOption.dotScaleTiming + " , is invalidate, dotScaleTiming must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming = 1), this._htOption.dotScaleTiming_H ? (this._htOption.dotScaleTiming_H < 0 || this._htOption.dotScaleTiming_H > 1) && (console.warn(this._htOption.dotScaleTiming_H + " , is invalidate, dotScaleTiming_H must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_H = 1) : this._htOption.dotScaleTiming_H = this._htOption.dotScaleTiming, this._htOption.dotScaleTiming_V ? (this._htOption.dotScaleTiming_V < 0 || this._htOption.dotScaleTiming_V > 1) && (console.warn(this._htOption.dotScaleTiming_V + " , is invalidate, dotScaleTiming_V must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_V = 1) : this._htOption.dotScaleTiming_V = this._htOption.dotScaleTiming, (this._htOption.dotScaleA < 0 || this._htOption.dotScaleA > 1) && (console.warn(this._htOption.dotScaleA + " , is invalidate, dotScaleA must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleA = 1), this._htOption.dotScaleAO ? (this._htOption.dotScaleAO < 0 || this._htOption.dotScaleAO > 1) && (console.warn(this._htOption.dotScaleAO + " , is invalidate, dotScaleAO must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAO = 1) : this._htOption.dotScaleAO = this._htOption.dotScaleA, this._htOption.dotScaleAI ? (this._htOption.dotScaleAI < 0 || this._htOption.dotScaleAI > 1) && (console.warn(this._htOption.dotScaleAI + " , is invalidate, dotScaleAI must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAI = 1) : this._htOption.dotScaleAI = this._htOption.dotScaleA, (this._htOption.backgroundImageAlpha < 0 || this._htOption.backgroundImageAlpha > 1) && (console.warn(this._htOption.backgroundImageAlpha + " , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "), this._htOption.backgroundImageAlpha = 1), this._htOption.height = this._htOption.height + this._htOption.titleHeight, "string" == typeof a && (a = document.getElementById(a)), (!this._htOption.drawer || "svg" != this._htOption.drawer && "canvas" != this._htOption.drawer) && (this._htOption.drawer = "canvas"), this._android = f2(), this._el = a, this._oQRCode = null;
        var d = {
        };
        for(var c in this._htOption)d[c] = this._htOption[c];
        this._oDrawing = new x1(this._el, d), this._htOption.text && this.makeCode(this._htOption.text);
    }, j2.prototype.makeCode = function(a) {
        this._oQRCode = new b3(g2(a, this._htOption), this._htOption.correctLevel), this._oQRCode.addData(a, this._htOption.binary), this._oQRCode.make(), this._htOption.tooltip && (this._el.title = a), this._oDrawing.draw(this._oQRCode);
    }, j2.prototype.makeImage = function() {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
    }, j2.prototype.clear = function() {
        this._oDrawing.remove();
    }, j2.prototype.resize = function(a, b) {
        this._oDrawing._htOption.width = a, this._oDrawing._htOption.height = b, this._oDrawing.draw(this._oQRCode);
    }, j2.prototype.noConflict = function() {
        return m1.QRCode === this && (m1.QRCode = p1), j2;
    }, j2.CorrectLevel = r1, "function" == typeof define && (define.amd || define.cmd) ? define([], function() {
        return j2;
    }) : o1 ? ((o1.exports = j2).QRCode = j2, n1.QRCode = j2) : m1.QRCode = j2;
}).call(this);

},{}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6JQmN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Joystick", ()=>Joystick
);
parcelHelpers.export(exports, "JoystickSmartController", ()=>JoystickSmartController
);
var _smartController = require("./SmartController");
class Joystick {
    constructor(connection){
        this.peer = connection; // the connection object from phone, this.peer.peer will give peer id
        this.isActive = false; // signals of joysticks is moving
        this.state = []; //all information sent from joystick [angle, direction, distance, position coordinates]
        this.lastPosition = {
            x: 0,
            y: 0
        } //last position on pc screen 
        ;
        this.processData(); //listen to new data incoming and store them 
    }
    processData = ()=>{
        var selfJ = this; //refers to the Joystick object -> temporary solution as using self = this in constructor was somehow overwriting self variable in SmartPeer class causing the dictionary and data emitting fail 
        this.peer.on("data", function(data) {
            if (data.type == "user") {
                var joystickData = data.data;
                if (joystickData.state == "start") selfJ.isActive = true;
                if (joystickData.state == "end") selfJ.isActive = false;
                selfJ.state = joystickData.joystick; //store the joystick object information sent by phone
                selfJ.lastPosition.x = Math.cos(selfJ.state.angle.degree * Math.PI / 180) * 10;
                selfJ.lastPosition.y = Math.sin(selfJ.state.angle.degree * Math.PI / 180) * 10;
            }
        });
    };
}
class JoystickSmartController extends _smartController.SmartController {
    constructor(peerid){
        super(peerid);
        self = this;
        this.joystickList = {
        }; //list of active players
        //listen for new connections
        this.peerConnection.on("connection", this.joystickOptions);
    }
    //when a new connection is detected create a new Joystick instance to store and process all the data
    joystickOptions = (conn)=>{
        self.joystickList[conn.peer] = new Joystick(conn);
    };
}

},{"./SmartController":"gUNMt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"98Src":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TouchPad", ()=>TouchPad
);
parcelHelpers.export(exports, "TouchPadSmartController", ()=>TouchPadSmartController
);
var _smartController = require("./SmartController");
class TouchPad {
    constructor(connection){
        this.peer = connection; // the connection object from phone, this.peer.peer will give peer id
        this.isActive = false; // signals if touch is detected on the screen 
        this.state = []; //coordinates for each finger, cant tell finger appart coordinates are recorded in order of tapping the screen
        this.finger_number = 0; //number of fingers touching the screen
        this.processData();
    }
    processData = ()=>{
        var selfT = this; //refers to the Touchpad object -> temporary solution as using self = this in constructor was somehow overwriting self variable in SmartPeer class causing the dictionary and data emitting fail 
        this.peer.on("data", function(data) {
            if (data.type == "user") {
                selfT.state = data.coordinates;
                selfT.finger_number = data.fingers;
                if (data.state == "start") selfT.isActive = true;
                if (data.state == "end") selfT.isActive = false;
            }
        });
    };
}
class TouchPadSmartController extends _smartController.SmartController {
    constructor(peerid){
        super(peerid);
        self = this;
        this.touchpadList = {
        }; //list of active players
        //listen for new connections
        this.peerConnection.on("connection", this.touchpadOptions);
    }
    //when a new connection is detected create a new TouchPad instance to store and process all the data
    touchpadOptions = (conn)=>{
        self.touchpadList[conn.peer] = new TouchPad(conn);
    };
}

},{"./SmartController":"gUNMt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5H1nM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NesController", ()=>NesController
);
parcelHelpers.export(exports, "NesSmartController", ()=>NesSmartController
);
var _smartController = require("./SmartController");
class NesController {
    constructor(connection){
        this.peer = connection; // the connection object from phone, this.peer.peer will give peer id
        this.isActive = false; // signals of joysticks is moving
        this.button = null; //all information sent from joystick [angle, direction, distance, position coordinates]
        this.processData(); //listen to new data incoming and store them 
    }
    processData = ()=>{
        var selfN = this; //refers to the Joystick object -> temporary solution as using self = this in constructor was somehow overwriting self variable in SmartPeer class causing the dictionary and data emitting fail 
        this.peer.on("data", function(data) {
            if (data.type == "user") {
                var controllerData = data.data;
                if (controllerData.state == "start") selfN.isActive = true;
                if (controllerData.state == "end") selfN.isActive = false;
                selfN.button = controllerData.button; //store the joystick object information sent by phone
            }
        });
    };
}
class NesSmartController extends _smartController.SmartController {
    constructor(peerid){
        super(peerid);
        self = this;
        this.controllerList = {
        }; //list of active players
        //listen for new connections
        this.peerConnection.on("connection", this.controllerOptions);
    }
    //when a new connection is detected create a new Joystick instance to store and process all the data
    controllerOptions = (conn)=>{
        self.controllerList[conn.peer] = new NesController(conn);
    };
}

},{"./SmartController":"gUNMt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"pAoDv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SmartPhoneController", ()=>SmartPhoneController
);
var _peerjs = require("peerjs");
var _peerjsDefault = parcelHelpers.interopDefault(_peerjs);
var _eventemitter2 = require("eventemitter2");
var _eventemitter2Default = parcelHelpers.interopDefault(_eventemitter2);
class SmartPhoneController extends _eventemitter2Default.default {
    constructor(peerid){
        super();
        this.peerConnection = new _peerjsDefault.default(peerid);
        self = this;
        this.lastPeerId = null;
        this.webid = null;
        this.playerid = null;
        this.connection = null;
        this.peerConnection.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            // Workaround for peer.reconnect deleting previous id
            if (self.peerConnection.id === null) {
                console.log('Received null id from peer open');
                self.peerConnection.id = self.lastPeerId;
            } else self.lastPeerId = self.peerConnection.id;
            self.getParameters(); //get webrid, player id, other parameters from url
            self.peerCreateConnection(); //connect to the webid
            self.emit('open', "ready");
        });
        self.peerConnection.on('connection', function(c) {
            // Disallow incoming connections
            c.on('open', function() {
                c.send("Sender does not accept incoming connections");
                setTimeout(function() {
                    c.close();
                }, 500);
            });
        });
        self.peerConnection.on('disconnected', function() {
            console.log('Connection lost. Please reconnect');
            // Workaround for peer.reconnect deleting previous id
            self.peerConnection.id = lastPeerId;
            self.peerConnection._lastServerId = lastPeerId;
            self.peerConnection.reconnect();
        });
        self.peerConnection.on('close', function() {
            self.conn = null;
            console.log('Connection destroyed');
        });
        self.peerConnection.on('error', function(err) {
            console.log(err);
            alert('' + err);
        });
    }
    getParameters = ()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        self.webid = urlParams.get('id');
        self.playerid = urlParams.get('playerid');
    };
    peerCreateConnection = ()=>{
        //close old connection
        if (self.connection) self.connection.close();
        // Create connection to destination peer specified in the input field
        self.connection = self.peerConnection.connect(self.webid, {
            reliable: true
        });
        self.connection.on('open', function() {
            console.log("Connected to: " + self.connection.peer);
            self.connection.send({
                type: "setup",
                data: {
                    playerid: self.playerid,
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight
                }
            });
        });
        // Handle incoming data (messages only since this is the signal sender)
        self.connection.on('data', function(data) {
            console.log(data);
        });
        self.connection.on('close', function() {
        });
    };
}

},{"peerjs":"k12Bh","eventemitter2":"xgNgW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["lYgGN","a7DGi"], "a7DGi", "parcelRequire9db0")

//# sourceMappingURL=index.b32755b7.js.map
