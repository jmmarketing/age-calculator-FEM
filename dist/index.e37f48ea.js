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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _dateFns = require("date-fns");
// const rawDate = new Date();
// const rawToday = {
//   year: rawDate.getFullYear(),
//   month: rawDate.getMonth() + 1,
//   day: rawDate.getDate(),
//   ms: Date.now(),
// };
// const birthday = {
//   year: null,
//   month: null,
//   day: null,
// };
// let realAge = {
//   years: null,
//   months: null,
//   days: null,
// };
// const daysOfMonth = new Map([
//   [1, 31],
//   [2, 29],
//   [3, 31],
//   [4, 30],
//   [5, 31],
//   [6, 30],
//   [7, 31],
//   [8, 31],
//   [9, 30],
//   [10, 31],
//   [11, 30],
//   [12, 31],
// ]);
// // END DATE MODEL
// function calculateAge() {
//   const userBirthday = `${birthday.year}-${birthday.month}-${birthday.day}`;
//   const today = `${rawToday.year}-${rawToday.month}-${rawToday.day}`;
//   // Using Date-FNS
//   const years = differenceInYears(today, userBirthday);
//   const months = differenceInMonths(today, userBirthday) % 12;
//   let lastMonthBirthday;
//   if (birthday.day > rawToday.day) {
//     console.log("This Fired");
//     lastMonthBirthday = `${rawToday.year}-${rawToday.month - 1}-${
//       birthday.day
//     }`;
//   } else {
//     lastMonthBirthday = `${rawToday.year}-${rawToday.month}-${birthday.day}`;
//   }
//   const days = differenceInDays(today, lastMonthBirthday);
//   console.log(today);
//   console.log(lastMonthBirthday);
//   console.log(days);
//   realAge = { years, months, days };
//   console.log(realAge);
// }
// function validateInputs() {
//   // First validation makes sure there is a number and not blank
//   ageInputs.forEach((input) => {
//     const val = Number.parseInt(+input.value);
//     console.log(val);
//     if (!Number.isInteger(val) || !input.value) {
//       input.classList.add("invalid");
//       input.nextElementSibling.textContent = "This field is required";
//       birthday[input.name] = null;
//     } else {
//       birthday[input.name] = val;
//       input.classList.remove("invalid");
//     }
//   });
//   if (Object.values(birthday).includes(null)) return;
//   // Second pass of validation is field specific, but some requires other field info (like days for days in month validation)
//   if (birthday.year > rawToday.year) {
//     yearInput.classList.add("invalid");
//     yearInput.nextElementSibling.textContent = "Must be in the past";
//     birthday.year = null;
//     return;
//   }
//   if (birthday.month < 1 || birthday.month > 12) {
//     monthInput.classList.add("invalid");
//     monthInput.nextElementSibling.textContent = "Must be a valid month";
//     birthday.month = null;
//     return;
//   }
//   if (birthday.day <= 0 || birthday.day > daysOfMonth.get(birthday.month)) {
//     ageInputs.forEach((input) => input.classList.add("invalid"));
//     dayInput.nextElementSibling.textContent = "Must be a valid date";
//     monthInput.nextElementSibling.textContent = "";
//     yearInput.nextElementSibling.textContent = "";
//     birthday.day = null;
//     return;
//   }
//   if (
//     !isBefore(
//       `${birthday.year}/${birthday.month}/${birthday.day}`,
//       `${rawToday.year}/${rawToday.month}/${rawToday.day}`
//     )
//   ) {
//     ageInputs.forEach((input) => input.classList.add("invalid"));
//     // return;
//   }
// }
const submitButton = document.querySelector(".calculator__divider--icon");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const ageInputs = document.querySelectorAll(".calculator__input");
const yearsResult = document.querySelector("#years-number");
const monthsResult = document.querySelector("#months-number");
const daysResult = document.querySelector("#days-number");
function displayAge() {
    clearInputs();
    yearsResult.textContent = realAge.years;
    monthsResult.textContent = realAge.months;
    daysResult.textContent = realAge.days;
}
function clearInputs() {
    ageInputs.forEach((input)=>input.value = "");
// document
//   .querySelectorAll(".error-message")
//   .forEach((input) => (input.style.display = "none"));
}
submitButton.addEventListener("click", function(e) {
    validateInputs();
    console.log(birthday);
    // Check State of Birthday
    if (Object.values(birthday).includes(null)) return;
    calculateAge();
    displayAge();
});

},{"core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","date-fns":"dU215"}],"49tUX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"fOGFr","292fa64716f5b39e":"l7FDS"}],"fOGFr":[function(require,module,exports) {
"use strict";
var $ = require("79389288a80b279c");
var globalThis = require("e4d64249a0133d14");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"dIGt4","e4d64249a0133d14":"9fY7y","84ba5ca62b8b14c9":"7jDg7"}],"dIGt4":[function(require,module,exports) {
"use strict";
var globalThis = require("23dea28abc8414d1");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis;
    else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis[TARGET] && globalThis[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"23dea28abc8414d1":"9fY7y","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","50460aa43dd4048a":"6XwEX","581238c99f8c2c30":"ggjnO","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"9fY7y":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","553ec943aa2a4554":"d7JlP","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","8ab18ff766aa2ab9":"5XWKd","3761c5d34b7aa48f":"gC2Q5","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"i16Dq"}],"i16Dq":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"7GlkT","df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"7GlkT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"i16Dq"}],"bdfmm":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"7GlkT"}],"fOR0B":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gM5ar"}],"gM5ar":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"a2mK1","b992ca9cdcf7937b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"d7JlP","46fb53dace408c8e":"Z0pBo","677bdc4d74d2f983":"4aV4F","80395bcde336a28b":"9Zfiw","49552a7324952190":"7MME2","aea01c71276624bf":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == "undefined" && documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{}],"4aV4F":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"6ZUSY","2af44fcbdbf14c83":"l3Kyn","76e903e830c40e7c":"3jtKQ","7e2fe930b3598e22":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
"use strict";
var globalThis = require("e057fc33d60763c1");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"e057fc33d60763c1":"9fY7y","f1d62079325906cb":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"da4a972af0214ea0":"8KyTD"}],"8KyTD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("53b951dfb9de4d22");
var fails = require("b37df495bcdc1d99");
var globalThis = require("e5929e9affd2affc");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"53b951dfb9de4d22":"8UQPO","b37df495bcdc1d99":"hL6D2","e5929e9affd2affc":"9fY7y"}],"8UQPO":[function(require,module,exports) {
"use strict";
var globalThis = require("d049c1c2aa0eee5b");
var userAgent = require("4eb5796bbafe334d");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"d049c1c2aa0eee5b":"9fY7y","4eb5796bbafe334d":"lApyY"}],"lApyY":[function(require,module,exports) {
"use strict";
var globalThis = require("888bcb4c75dc4ad");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : "";

},{"888bcb4c75dc4ad":"9fY7y"}],"9Zfiw":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"gOMir","492a86e2970f6a26":"gM5ar"}],"gOMir":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"l3Kyn","fce2a7573db493fa":"4O7d7"}],"4O7d7":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"d7JlP","c96b3a89fec6248a":"l3Kyn","551615fda0214f1b":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
"use strict";
var globalThis = require("ad5ef4474219c101");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"ad5ef4474219c101":"9fY7y","6a2cda01df6b4c79":"i1mHK","dccc28ffa5beeb54":"gC2Q5","48d6af1225853d44":"a3SEE","9f762329148684":"8KyTD","1ce268781e409df2":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
"use strict";
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"l4ncH"}],"l4ncH":[function(require,module,exports) {
"use strict";
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("bc8329e77dc2c1cc");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.38.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"7b43004672b1879f":"5ZsyC","bc8329e77dc2c1cc":"9fY7y","dfb72a1d809f7b02":"ggjnO"}],"5ZsyC":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"ggjnO":[function(require,module,exports) {
"use strict";
var globalThis = require("2d1c29655635b9ea");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};

},{"2d1c29655635b9ea":"9fY7y"}],"gC2Q5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"7GlkT","ab17c4f45fcf0841":"5cb35"}],"5cb35":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"fOR0B"}],"a3SEE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"7GlkT"}],"qS9uN":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
"use strict";
var globalThis = require("845bcece0e6d354");
var isObject = require("824df78b2e007250");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"845bcece0e6d354":"9fY7y","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","b6ad7537efb06f4b":"ka1Un","16365a73399e7fe7":"4isCr","fab1d366c47796d9":"5XWKd"}],"ka1Un":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"92ZIi","249a5b857c2dfccd":"hL6D2"}],"4isCr":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"l3Kyn","9ebb3e3004fccc0a":"iJR4w","f10cc812a3094053":"cTB4k","d354802d852d9c2b":"ggjnO"}],"cTB4k":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"7GlkT","13360f2842eba261":"hL6D2","103e488c0928755a":"l3Kyn","cbf9b0e0779cc368":"gC2Q5","3f2eb7efeae2f72b":"92ZIi","548b10f284264c72":"l6Kgd","358f00f3103bd55b":"9jh7O","9b2ce14119fd2412":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"92ZIi","4eabfd8f83afc9d5":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"7GlkT","40ed9a4f6ae66648":"l3Kyn","485d48d6f4c6739e":"l4ncH"}],"7AMlF":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var globalThis = require("28c3574d0c39fe7e");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"2PZTl","28c3574d0c39fe7e":"9fY7y","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","6dea7358344877bb":"gC2Q5","3e035a1241da2f0":"l4ncH","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"2PZTl":[function(require,module,exports) {
"use strict";
var globalThis = require("8b1a8c1dbfd18eb5");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"8b1a8c1dbfd18eb5":"9fY7y","aa77fff8d5ef0565":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"661m4":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"gC2Q5","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","2b8e77cbdbe3db7a":"7GlkT","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"fjY04":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"7GlkT","3183fe0b0bf6f6ac":"gC2Q5","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","212b13aecfa48226":"5yh27","e5a8b3e1da4c5637":"lY4mS"}],"5yh27":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"kLXGe"}],"kLXGe":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"7O8gb"}],"7O8gb":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"fU04N"}],"fU04N":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2","8b1ecdaf59f07210":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
"use strict";
var globalThis = require("629a4d99f4fe5b2e");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("8a8e342aaad83bb");
var IS_NODE = require("6eef8b4e43dd6731");
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    globalThis.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"629a4d99f4fe5b2e":"9fY7y","e574be68c288c7c8":"148ka","df212787338802d3":"7vpmS","afdf018c2d01bbc6":"l3Kyn","35a3e849940fd612":"gC2Q5","b8bf5434d2248ca7":"hL6D2","731f9370cc21fc3b":"2pze4","ec358060964e4bde":"RsFXo","907adb6d219da7a3":"4bOHl","f398561ebd49a798":"b9O3D","8a8e342aaad83bb":"cGUFx","6eef8b4e43dd6731":"35LXH"}],"148ka":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"i16Dq"}],"7vpmS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"5Hioa","547ee4f9dab0cc76":"gOMir","5acd31cba656d393":"i16Dq"}],"5Hioa":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"bdfmm","9daa4dbbca634c9e":"7GlkT"}],"2pze4":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"7GlkT"}],"b9O3D":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"cGUFx":[function(require,module,exports) {
"use strict";
var userAgent = require("88313d0d5d3e28c");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"88313d0d5d3e28c":"lApyY"}],"35LXH":[function(require,module,exports) {
"use strict";
var ENVIRONMENT = require("5fac34e3c4c0e043");
module.exports = ENVIRONMENT === "NODE";

},{"5fac34e3c4c0e043":"888a9"}],"888a9":[function(require,module,exports) {
"use strict";
/* global Bun, Deno -- detection */ var globalThis = require("7dc361f46ecde901");
var userAgent = require("9f6e24ecbba66a9e");
var classof = require("a008a59fdc341842");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis.Deno && typeof Deno.version == "object") return "DENO";
    if (classof(globalThis.process) === "process") return "NODE";
    if (globalThis.window && globalThis.document) return "BROWSER";
    return "REST";
}();

},{"7dc361f46ecde901":"9fY7y","9f6e24ecbba66a9e":"lApyY","a008a59fdc341842":"bdfmm"}],"l7FDS":[function(require,module,exports) {
"use strict";
var $ = require("33581c362196ed1f");
var globalThis = require("503bb555249cad41");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"dIGt4","503bb555249cad41":"9fY7y","4219ce460223bd08":"7jDg7","738dc378e6a94c64":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var globalThis = require("aa6765693e58a0fe");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENVIRONMENT = require("864edee099e8affb");
var USER_AGENT = require("3a3a5a2cfab86f21");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === "BUN" && function() {
    var version = globalThis.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"aa6765693e58a0fe":"9fY7y","a68ecfcbf29c46f6":"148ka","7087588d33667af2":"l3Kyn","864edee099e8affb":"888a9","3a3a5a2cfab86f21":"lApyY","cff2c830bdea4f24":"RsFXo","58a74f00cee1ac64":"b9O3D"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"dU215":[function(require,module,exports) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
parcelHelpers.exportAll(_addJs, exports);
var _addBusinessDaysJs = require("./addBusinessDays.js");
parcelHelpers.exportAll(_addBusinessDaysJs, exports);
var _addDaysJs = require("./addDays.js");
parcelHelpers.exportAll(_addDaysJs, exports);
var _addHoursJs = require("./addHours.js");
parcelHelpers.exportAll(_addHoursJs, exports);
var _addISOWeekYearsJs = require("./addISOWeekYears.js");
parcelHelpers.exportAll(_addISOWeekYearsJs, exports);
var _addMillisecondsJs = require("./addMilliseconds.js");
parcelHelpers.exportAll(_addMillisecondsJs, exports);
var _addMinutesJs = require("./addMinutes.js");
parcelHelpers.exportAll(_addMinutesJs, exports);
var _addMonthsJs = require("./addMonths.js");
parcelHelpers.exportAll(_addMonthsJs, exports);
var _addQuartersJs = require("./addQuarters.js");
parcelHelpers.exportAll(_addQuartersJs, exports);
var _addSecondsJs = require("./addSeconds.js");
parcelHelpers.exportAll(_addSecondsJs, exports);
var _addWeeksJs = require("./addWeeks.js");
parcelHelpers.exportAll(_addWeeksJs, exports);
var _addYearsJs = require("./addYears.js");
parcelHelpers.exportAll(_addYearsJs, exports);
var _areIntervalsOverlappingJs = require("./areIntervalsOverlapping.js");
parcelHelpers.exportAll(_areIntervalsOverlappingJs, exports);
var _clampJs = require("./clamp.js");
parcelHelpers.exportAll(_clampJs, exports);
var _closestIndexToJs = require("./closestIndexTo.js");
parcelHelpers.exportAll(_closestIndexToJs, exports);
var _closestToJs = require("./closestTo.js");
parcelHelpers.exportAll(_closestToJs, exports);
var _compareAscJs = require("./compareAsc.js");
parcelHelpers.exportAll(_compareAscJs, exports);
var _compareDescJs = require("./compareDesc.js");
parcelHelpers.exportAll(_compareDescJs, exports);
var _constructFromJs = require("./constructFrom.js");
parcelHelpers.exportAll(_constructFromJs, exports);
var _constructNowJs = require("./constructNow.js");
parcelHelpers.exportAll(_constructNowJs, exports);
var _daysToWeeksJs = require("./daysToWeeks.js");
parcelHelpers.exportAll(_daysToWeeksJs, exports);
var _differenceInBusinessDaysJs = require("./differenceInBusinessDays.js");
parcelHelpers.exportAll(_differenceInBusinessDaysJs, exports);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
parcelHelpers.exportAll(_differenceInCalendarDaysJs, exports);
var _differenceInCalendarISOWeekYearsJs = require("./differenceInCalendarISOWeekYears.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeekYearsJs, exports);
var _differenceInCalendarISOWeeksJs = require("./differenceInCalendarISOWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeeksJs, exports);
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
parcelHelpers.exportAll(_differenceInCalendarMonthsJs, exports);
var _differenceInCalendarQuartersJs = require("./differenceInCalendarQuarters.js");
parcelHelpers.exportAll(_differenceInCalendarQuartersJs, exports);
var _differenceInCalendarWeeksJs = require("./differenceInCalendarWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarWeeksJs, exports);
var _differenceInCalendarYearsJs = require("./differenceInCalendarYears.js");
parcelHelpers.exportAll(_differenceInCalendarYearsJs, exports);
var _differenceInDaysJs = require("./differenceInDays.js");
parcelHelpers.exportAll(_differenceInDaysJs, exports);
var _differenceInHoursJs = require("./differenceInHours.js");
parcelHelpers.exportAll(_differenceInHoursJs, exports);
var _differenceInISOWeekYearsJs = require("./differenceInISOWeekYears.js");
parcelHelpers.exportAll(_differenceInISOWeekYearsJs, exports);
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
parcelHelpers.exportAll(_differenceInMillisecondsJs, exports);
var _differenceInMinutesJs = require("./differenceInMinutes.js");
parcelHelpers.exportAll(_differenceInMinutesJs, exports);
var _differenceInMonthsJs = require("./differenceInMonths.js");
parcelHelpers.exportAll(_differenceInMonthsJs, exports);
var _differenceInQuartersJs = require("./differenceInQuarters.js");
parcelHelpers.exportAll(_differenceInQuartersJs, exports);
var _differenceInSecondsJs = require("./differenceInSeconds.js");
parcelHelpers.exportAll(_differenceInSecondsJs, exports);
var _differenceInWeeksJs = require("./differenceInWeeks.js");
parcelHelpers.exportAll(_differenceInWeeksJs, exports);
var _differenceInYearsJs = require("./differenceInYears.js");
parcelHelpers.exportAll(_differenceInYearsJs, exports);
var _eachDayOfIntervalJs = require("./eachDayOfInterval.js");
parcelHelpers.exportAll(_eachDayOfIntervalJs, exports);
var _eachHourOfIntervalJs = require("./eachHourOfInterval.js");
parcelHelpers.exportAll(_eachHourOfIntervalJs, exports);
var _eachMinuteOfIntervalJs = require("./eachMinuteOfInterval.js");
parcelHelpers.exportAll(_eachMinuteOfIntervalJs, exports);
var _eachMonthOfIntervalJs = require("./eachMonthOfInterval.js");
parcelHelpers.exportAll(_eachMonthOfIntervalJs, exports);
var _eachQuarterOfIntervalJs = require("./eachQuarterOfInterval.js");
parcelHelpers.exportAll(_eachQuarterOfIntervalJs, exports);
var _eachWeekOfIntervalJs = require("./eachWeekOfInterval.js");
parcelHelpers.exportAll(_eachWeekOfIntervalJs, exports);
var _eachWeekendOfIntervalJs = require("./eachWeekendOfInterval.js");
parcelHelpers.exportAll(_eachWeekendOfIntervalJs, exports);
var _eachWeekendOfMonthJs = require("./eachWeekendOfMonth.js");
parcelHelpers.exportAll(_eachWeekendOfMonthJs, exports);
var _eachWeekendOfYearJs = require("./eachWeekendOfYear.js");
parcelHelpers.exportAll(_eachWeekendOfYearJs, exports);
var _eachYearOfIntervalJs = require("./eachYearOfInterval.js");
parcelHelpers.exportAll(_eachYearOfIntervalJs, exports);
var _endOfDayJs = require("./endOfDay.js");
parcelHelpers.exportAll(_endOfDayJs, exports);
var _endOfDecadeJs = require("./endOfDecade.js");
parcelHelpers.exportAll(_endOfDecadeJs, exports);
var _endOfHourJs = require("./endOfHour.js");
parcelHelpers.exportAll(_endOfHourJs, exports);
var _endOfISOWeekJs = require("./endOfISOWeek.js");
parcelHelpers.exportAll(_endOfISOWeekJs, exports);
var _endOfISOWeekYearJs = require("./endOfISOWeekYear.js");
parcelHelpers.exportAll(_endOfISOWeekYearJs, exports);
var _endOfMinuteJs = require("./endOfMinute.js");
parcelHelpers.exportAll(_endOfMinuteJs, exports);
var _endOfMonthJs = require("./endOfMonth.js");
parcelHelpers.exportAll(_endOfMonthJs, exports);
var _endOfQuarterJs = require("./endOfQuarter.js");
parcelHelpers.exportAll(_endOfQuarterJs, exports);
var _endOfSecondJs = require("./endOfSecond.js");
parcelHelpers.exportAll(_endOfSecondJs, exports);
var _endOfTodayJs = require("./endOfToday.js");
parcelHelpers.exportAll(_endOfTodayJs, exports);
var _endOfTomorrowJs = require("./endOfTomorrow.js");
parcelHelpers.exportAll(_endOfTomorrowJs, exports);
var _endOfWeekJs = require("./endOfWeek.js");
parcelHelpers.exportAll(_endOfWeekJs, exports);
var _endOfYearJs = require("./endOfYear.js");
parcelHelpers.exportAll(_endOfYearJs, exports);
var _endOfYesterdayJs = require("./endOfYesterday.js");
parcelHelpers.exportAll(_endOfYesterdayJs, exports);
var _formatJs = require("./format.js");
parcelHelpers.exportAll(_formatJs, exports);
var _formatDistanceJs = require("./formatDistance.js");
parcelHelpers.exportAll(_formatDistanceJs, exports);
var _formatDistanceStrictJs = require("./formatDistanceStrict.js");
parcelHelpers.exportAll(_formatDistanceStrictJs, exports);
var _formatDistanceToNowJs = require("./formatDistanceToNow.js");
parcelHelpers.exportAll(_formatDistanceToNowJs, exports);
var _formatDistanceToNowStrictJs = require("./formatDistanceToNowStrict.js");
parcelHelpers.exportAll(_formatDistanceToNowStrictJs, exports);
var _formatDurationJs = require("./formatDuration.js");
parcelHelpers.exportAll(_formatDurationJs, exports);
var _formatISOJs = require("./formatISO.js");
parcelHelpers.exportAll(_formatISOJs, exports);
var _formatISO9075Js = require("./formatISO9075.js");
parcelHelpers.exportAll(_formatISO9075Js, exports);
var _formatISODurationJs = require("./formatISODuration.js");
parcelHelpers.exportAll(_formatISODurationJs, exports);
var _formatRFC3339Js = require("./formatRFC3339.js");
parcelHelpers.exportAll(_formatRFC3339Js, exports);
var _formatRFC7231Js = require("./formatRFC7231.js");
parcelHelpers.exportAll(_formatRFC7231Js, exports);
var _formatRelativeJs = require("./formatRelative.js");
parcelHelpers.exportAll(_formatRelativeJs, exports);
var _fromUnixTimeJs = require("./fromUnixTime.js");
parcelHelpers.exportAll(_fromUnixTimeJs, exports);
var _getDateJs = require("./getDate.js");
parcelHelpers.exportAll(_getDateJs, exports);
var _getDayJs = require("./getDay.js");
parcelHelpers.exportAll(_getDayJs, exports);
var _getDayOfYearJs = require("./getDayOfYear.js");
parcelHelpers.exportAll(_getDayOfYearJs, exports);
var _getDaysInMonthJs = require("./getDaysInMonth.js");
parcelHelpers.exportAll(_getDaysInMonthJs, exports);
var _getDaysInYearJs = require("./getDaysInYear.js");
parcelHelpers.exportAll(_getDaysInYearJs, exports);
var _getDecadeJs = require("./getDecade.js");
parcelHelpers.exportAll(_getDecadeJs, exports);
var _getDefaultOptionsJs = require("./getDefaultOptions.js");
parcelHelpers.exportAll(_getDefaultOptionsJs, exports);
var _getHoursJs = require("./getHours.js");
parcelHelpers.exportAll(_getHoursJs, exports);
var _getISODayJs = require("./getISODay.js");
parcelHelpers.exportAll(_getISODayJs, exports);
var _getISOWeekJs = require("./getISOWeek.js");
parcelHelpers.exportAll(_getISOWeekJs, exports);
var _getISOWeekYearJs = require("./getISOWeekYear.js");
parcelHelpers.exportAll(_getISOWeekYearJs, exports);
var _getISOWeeksInYearJs = require("./getISOWeeksInYear.js");
parcelHelpers.exportAll(_getISOWeeksInYearJs, exports);
var _getMillisecondsJs = require("./getMilliseconds.js");
parcelHelpers.exportAll(_getMillisecondsJs, exports);
var _getMinutesJs = require("./getMinutes.js");
parcelHelpers.exportAll(_getMinutesJs, exports);
var _getMonthJs = require("./getMonth.js");
parcelHelpers.exportAll(_getMonthJs, exports);
var _getOverlappingDaysInIntervalsJs = require("./getOverlappingDaysInIntervals.js");
parcelHelpers.exportAll(_getOverlappingDaysInIntervalsJs, exports);
var _getQuarterJs = require("./getQuarter.js");
parcelHelpers.exportAll(_getQuarterJs, exports);
var _getSecondsJs = require("./getSeconds.js");
parcelHelpers.exportAll(_getSecondsJs, exports);
var _getTimeJs = require("./getTime.js");
parcelHelpers.exportAll(_getTimeJs, exports);
var _getUnixTimeJs = require("./getUnixTime.js");
parcelHelpers.exportAll(_getUnixTimeJs, exports);
var _getWeekJs = require("./getWeek.js");
parcelHelpers.exportAll(_getWeekJs, exports);
var _getWeekOfMonthJs = require("./getWeekOfMonth.js");
parcelHelpers.exportAll(_getWeekOfMonthJs, exports);
var _getWeekYearJs = require("./getWeekYear.js");
parcelHelpers.exportAll(_getWeekYearJs, exports);
var _getWeeksInMonthJs = require("./getWeeksInMonth.js");
parcelHelpers.exportAll(_getWeeksInMonthJs, exports);
var _getYearJs = require("./getYear.js");
parcelHelpers.exportAll(_getYearJs, exports);
var _hoursToMillisecondsJs = require("./hoursToMilliseconds.js");
parcelHelpers.exportAll(_hoursToMillisecondsJs, exports);
var _hoursToMinutesJs = require("./hoursToMinutes.js");
parcelHelpers.exportAll(_hoursToMinutesJs, exports);
var _hoursToSecondsJs = require("./hoursToSeconds.js");
parcelHelpers.exportAll(_hoursToSecondsJs, exports);
var _intervalJs = require("./interval.js");
parcelHelpers.exportAll(_intervalJs, exports);
var _intervalToDurationJs = require("./intervalToDuration.js");
parcelHelpers.exportAll(_intervalToDurationJs, exports);
var _intlFormatJs = require("./intlFormat.js");
parcelHelpers.exportAll(_intlFormatJs, exports);
var _intlFormatDistanceJs = require("./intlFormatDistance.js");
parcelHelpers.exportAll(_intlFormatDistanceJs, exports);
var _isAfterJs = require("./isAfter.js");
parcelHelpers.exportAll(_isAfterJs, exports);
var _isBeforeJs = require("./isBefore.js");
parcelHelpers.exportAll(_isBeforeJs, exports);
var _isDateJs = require("./isDate.js");
parcelHelpers.exportAll(_isDateJs, exports);
var _isEqualJs = require("./isEqual.js");
parcelHelpers.exportAll(_isEqualJs, exports);
var _isExistsJs = require("./isExists.js");
parcelHelpers.exportAll(_isExistsJs, exports);
var _isFirstDayOfMonthJs = require("./isFirstDayOfMonth.js");
parcelHelpers.exportAll(_isFirstDayOfMonthJs, exports);
var _isFridayJs = require("./isFriday.js");
parcelHelpers.exportAll(_isFridayJs, exports);
var _isFutureJs = require("./isFuture.js");
parcelHelpers.exportAll(_isFutureJs, exports);
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
parcelHelpers.exportAll(_isLastDayOfMonthJs, exports);
var _isLeapYearJs = require("./isLeapYear.js");
parcelHelpers.exportAll(_isLeapYearJs, exports);
var _isMatchJs = require("./isMatch.js");
parcelHelpers.exportAll(_isMatchJs, exports);
var _isMondayJs = require("./isMonday.js");
parcelHelpers.exportAll(_isMondayJs, exports);
var _isPastJs = require("./isPast.js");
parcelHelpers.exportAll(_isPastJs, exports);
var _isSameDayJs = require("./isSameDay.js");
parcelHelpers.exportAll(_isSameDayJs, exports);
var _isSameHourJs = require("./isSameHour.js");
parcelHelpers.exportAll(_isSameHourJs, exports);
var _isSameISOWeekJs = require("./isSameISOWeek.js");
parcelHelpers.exportAll(_isSameISOWeekJs, exports);
var _isSameISOWeekYearJs = require("./isSameISOWeekYear.js");
parcelHelpers.exportAll(_isSameISOWeekYearJs, exports);
var _isSameMinuteJs = require("./isSameMinute.js");
parcelHelpers.exportAll(_isSameMinuteJs, exports);
var _isSameMonthJs = require("./isSameMonth.js");
parcelHelpers.exportAll(_isSameMonthJs, exports);
var _isSameQuarterJs = require("./isSameQuarter.js");
parcelHelpers.exportAll(_isSameQuarterJs, exports);
var _isSameSecondJs = require("./isSameSecond.js");
parcelHelpers.exportAll(_isSameSecondJs, exports);
var _isSameWeekJs = require("./isSameWeek.js");
parcelHelpers.exportAll(_isSameWeekJs, exports);
var _isSameYearJs = require("./isSameYear.js");
parcelHelpers.exportAll(_isSameYearJs, exports);
var _isSaturdayJs = require("./isSaturday.js");
parcelHelpers.exportAll(_isSaturdayJs, exports);
var _isSundayJs = require("./isSunday.js");
parcelHelpers.exportAll(_isSundayJs, exports);
var _isThisHourJs = require("./isThisHour.js");
parcelHelpers.exportAll(_isThisHourJs, exports);
var _isThisISOWeekJs = require("./isThisISOWeek.js");
parcelHelpers.exportAll(_isThisISOWeekJs, exports);
var _isThisMinuteJs = require("./isThisMinute.js");
parcelHelpers.exportAll(_isThisMinuteJs, exports);
var _isThisMonthJs = require("./isThisMonth.js");
parcelHelpers.exportAll(_isThisMonthJs, exports);
var _isThisQuarterJs = require("./isThisQuarter.js");
parcelHelpers.exportAll(_isThisQuarterJs, exports);
var _isThisSecondJs = require("./isThisSecond.js");
parcelHelpers.exportAll(_isThisSecondJs, exports);
var _isThisWeekJs = require("./isThisWeek.js");
parcelHelpers.exportAll(_isThisWeekJs, exports);
var _isThisYearJs = require("./isThisYear.js");
parcelHelpers.exportAll(_isThisYearJs, exports);
var _isThursdayJs = require("./isThursday.js");
parcelHelpers.exportAll(_isThursdayJs, exports);
var _isTodayJs = require("./isToday.js");
parcelHelpers.exportAll(_isTodayJs, exports);
var _isTomorrowJs = require("./isTomorrow.js");
parcelHelpers.exportAll(_isTomorrowJs, exports);
var _isTuesdayJs = require("./isTuesday.js");
parcelHelpers.exportAll(_isTuesdayJs, exports);
var _isValidJs = require("./isValid.js");
parcelHelpers.exportAll(_isValidJs, exports);
var _isWednesdayJs = require("./isWednesday.js");
parcelHelpers.exportAll(_isWednesdayJs, exports);
var _isWeekendJs = require("./isWeekend.js");
parcelHelpers.exportAll(_isWeekendJs, exports);
var _isWithinIntervalJs = require("./isWithinInterval.js");
parcelHelpers.exportAll(_isWithinIntervalJs, exports);
var _isYesterdayJs = require("./isYesterday.js");
parcelHelpers.exportAll(_isYesterdayJs, exports);
var _lastDayOfDecadeJs = require("./lastDayOfDecade.js");
parcelHelpers.exportAll(_lastDayOfDecadeJs, exports);
var _lastDayOfISOWeekJs = require("./lastDayOfISOWeek.js");
parcelHelpers.exportAll(_lastDayOfISOWeekJs, exports);
var _lastDayOfISOWeekYearJs = require("./lastDayOfISOWeekYear.js");
parcelHelpers.exportAll(_lastDayOfISOWeekYearJs, exports);
var _lastDayOfMonthJs = require("./lastDayOfMonth.js");
parcelHelpers.exportAll(_lastDayOfMonthJs, exports);
var _lastDayOfQuarterJs = require("./lastDayOfQuarter.js");
parcelHelpers.exportAll(_lastDayOfQuarterJs, exports);
var _lastDayOfWeekJs = require("./lastDayOfWeek.js");
parcelHelpers.exportAll(_lastDayOfWeekJs, exports);
var _lastDayOfYearJs = require("./lastDayOfYear.js");
parcelHelpers.exportAll(_lastDayOfYearJs, exports);
var _lightFormatJs = require("./lightFormat.js");
parcelHelpers.exportAll(_lightFormatJs, exports);
var _maxJs = require("./max.js");
parcelHelpers.exportAll(_maxJs, exports);
var _millisecondsJs = require("./milliseconds.js");
parcelHelpers.exportAll(_millisecondsJs, exports);
var _millisecondsToHoursJs = require("./millisecondsToHours.js");
parcelHelpers.exportAll(_millisecondsToHoursJs, exports);
var _millisecondsToMinutesJs = require("./millisecondsToMinutes.js");
parcelHelpers.exportAll(_millisecondsToMinutesJs, exports);
var _millisecondsToSecondsJs = require("./millisecondsToSeconds.js");
parcelHelpers.exportAll(_millisecondsToSecondsJs, exports);
var _minJs = require("./min.js");
parcelHelpers.exportAll(_minJs, exports);
var _minutesToHoursJs = require("./minutesToHours.js");
parcelHelpers.exportAll(_minutesToHoursJs, exports);
var _minutesToMillisecondsJs = require("./minutesToMilliseconds.js");
parcelHelpers.exportAll(_minutesToMillisecondsJs, exports);
var _minutesToSecondsJs = require("./minutesToSeconds.js");
parcelHelpers.exportAll(_minutesToSecondsJs, exports);
var _monthsToQuartersJs = require("./monthsToQuarters.js");
parcelHelpers.exportAll(_monthsToQuartersJs, exports);
var _monthsToYearsJs = require("./monthsToYears.js");
parcelHelpers.exportAll(_monthsToYearsJs, exports);
var _nextDayJs = require("./nextDay.js");
parcelHelpers.exportAll(_nextDayJs, exports);
var _nextFridayJs = require("./nextFriday.js");
parcelHelpers.exportAll(_nextFridayJs, exports);
var _nextMondayJs = require("./nextMonday.js");
parcelHelpers.exportAll(_nextMondayJs, exports);
var _nextSaturdayJs = require("./nextSaturday.js");
parcelHelpers.exportAll(_nextSaturdayJs, exports);
var _nextSundayJs = require("./nextSunday.js");
parcelHelpers.exportAll(_nextSundayJs, exports);
var _nextThursdayJs = require("./nextThursday.js");
parcelHelpers.exportAll(_nextThursdayJs, exports);
var _nextTuesdayJs = require("./nextTuesday.js");
parcelHelpers.exportAll(_nextTuesdayJs, exports);
var _nextWednesdayJs = require("./nextWednesday.js");
parcelHelpers.exportAll(_nextWednesdayJs, exports);
var _parseJs = require("./parse.js");
parcelHelpers.exportAll(_parseJs, exports);
var _parseISOJs = require("./parseISO.js");
parcelHelpers.exportAll(_parseISOJs, exports);
var _parseJSONJs = require("./parseJSON.js");
parcelHelpers.exportAll(_parseJSONJs, exports);
var _previousDayJs = require("./previousDay.js");
parcelHelpers.exportAll(_previousDayJs, exports);
var _previousFridayJs = require("./previousFriday.js");
parcelHelpers.exportAll(_previousFridayJs, exports);
var _previousMondayJs = require("./previousMonday.js");
parcelHelpers.exportAll(_previousMondayJs, exports);
var _previousSaturdayJs = require("./previousSaturday.js");
parcelHelpers.exportAll(_previousSaturdayJs, exports);
var _previousSundayJs = require("./previousSunday.js");
parcelHelpers.exportAll(_previousSundayJs, exports);
var _previousThursdayJs = require("./previousThursday.js");
parcelHelpers.exportAll(_previousThursdayJs, exports);
var _previousTuesdayJs = require("./previousTuesday.js");
parcelHelpers.exportAll(_previousTuesdayJs, exports);
var _previousWednesdayJs = require("./previousWednesday.js");
parcelHelpers.exportAll(_previousWednesdayJs, exports);
var _quartersToMonthsJs = require("./quartersToMonths.js");
parcelHelpers.exportAll(_quartersToMonthsJs, exports);
var _quartersToYearsJs = require("./quartersToYears.js");
parcelHelpers.exportAll(_quartersToYearsJs, exports);
var _roundToNearestHoursJs = require("./roundToNearestHours.js");
parcelHelpers.exportAll(_roundToNearestHoursJs, exports);
var _roundToNearestMinutesJs = require("./roundToNearestMinutes.js");
parcelHelpers.exportAll(_roundToNearestMinutesJs, exports);
var _secondsToHoursJs = require("./secondsToHours.js");
parcelHelpers.exportAll(_secondsToHoursJs, exports);
var _secondsToMillisecondsJs = require("./secondsToMilliseconds.js");
parcelHelpers.exportAll(_secondsToMillisecondsJs, exports);
var _secondsToMinutesJs = require("./secondsToMinutes.js");
parcelHelpers.exportAll(_secondsToMinutesJs, exports);
var _setJs = require("./set.js");
parcelHelpers.exportAll(_setJs, exports);
var _setDateJs = require("./setDate.js");
parcelHelpers.exportAll(_setDateJs, exports);
var _setDayJs = require("./setDay.js");
parcelHelpers.exportAll(_setDayJs, exports);
var _setDayOfYearJs = require("./setDayOfYear.js");
parcelHelpers.exportAll(_setDayOfYearJs, exports);
var _setDefaultOptionsJs = require("./setDefaultOptions.js");
parcelHelpers.exportAll(_setDefaultOptionsJs, exports);
var _setHoursJs = require("./setHours.js");
parcelHelpers.exportAll(_setHoursJs, exports);
var _setISODayJs = require("./setISODay.js");
parcelHelpers.exportAll(_setISODayJs, exports);
var _setISOWeekJs = require("./setISOWeek.js");
parcelHelpers.exportAll(_setISOWeekJs, exports);
var _setISOWeekYearJs = require("./setISOWeekYear.js");
parcelHelpers.exportAll(_setISOWeekYearJs, exports);
var _setMillisecondsJs = require("./setMilliseconds.js");
parcelHelpers.exportAll(_setMillisecondsJs, exports);
var _setMinutesJs = require("./setMinutes.js");
parcelHelpers.exportAll(_setMinutesJs, exports);
var _setMonthJs = require("./setMonth.js");
parcelHelpers.exportAll(_setMonthJs, exports);
var _setQuarterJs = require("./setQuarter.js");
parcelHelpers.exportAll(_setQuarterJs, exports);
var _setSecondsJs = require("./setSeconds.js");
parcelHelpers.exportAll(_setSecondsJs, exports);
var _setWeekJs = require("./setWeek.js");
parcelHelpers.exportAll(_setWeekJs, exports);
var _setWeekYearJs = require("./setWeekYear.js");
parcelHelpers.exportAll(_setWeekYearJs, exports);
var _setYearJs = require("./setYear.js");
parcelHelpers.exportAll(_setYearJs, exports);
var _startOfDayJs = require("./startOfDay.js");
parcelHelpers.exportAll(_startOfDayJs, exports);
var _startOfDecadeJs = require("./startOfDecade.js");
parcelHelpers.exportAll(_startOfDecadeJs, exports);
var _startOfHourJs = require("./startOfHour.js");
parcelHelpers.exportAll(_startOfHourJs, exports);
var _startOfISOWeekJs = require("./startOfISOWeek.js");
parcelHelpers.exportAll(_startOfISOWeekJs, exports);
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
parcelHelpers.exportAll(_startOfISOWeekYearJs, exports);
var _startOfMinuteJs = require("./startOfMinute.js");
parcelHelpers.exportAll(_startOfMinuteJs, exports);
var _startOfMonthJs = require("./startOfMonth.js");
parcelHelpers.exportAll(_startOfMonthJs, exports);
var _startOfQuarterJs = require("./startOfQuarter.js");
parcelHelpers.exportAll(_startOfQuarterJs, exports);
var _startOfSecondJs = require("./startOfSecond.js");
parcelHelpers.exportAll(_startOfSecondJs, exports);
var _startOfTodayJs = require("./startOfToday.js");
parcelHelpers.exportAll(_startOfTodayJs, exports);
var _startOfTomorrowJs = require("./startOfTomorrow.js");
parcelHelpers.exportAll(_startOfTomorrowJs, exports);
var _startOfWeekJs = require("./startOfWeek.js");
parcelHelpers.exportAll(_startOfWeekJs, exports);
var _startOfWeekYearJs = require("./startOfWeekYear.js");
parcelHelpers.exportAll(_startOfWeekYearJs, exports);
var _startOfYearJs = require("./startOfYear.js");
parcelHelpers.exportAll(_startOfYearJs, exports);
var _startOfYesterdayJs = require("./startOfYesterday.js");
parcelHelpers.exportAll(_startOfYesterdayJs, exports);
var _subJs = require("./sub.js");
parcelHelpers.exportAll(_subJs, exports);
var _subBusinessDaysJs = require("./subBusinessDays.js");
parcelHelpers.exportAll(_subBusinessDaysJs, exports);
var _subDaysJs = require("./subDays.js");
parcelHelpers.exportAll(_subDaysJs, exports);
var _subHoursJs = require("./subHours.js");
parcelHelpers.exportAll(_subHoursJs, exports);
var _subISOWeekYearsJs = require("./subISOWeekYears.js");
parcelHelpers.exportAll(_subISOWeekYearsJs, exports);
var _subMillisecondsJs = require("./subMilliseconds.js");
parcelHelpers.exportAll(_subMillisecondsJs, exports);
var _subMinutesJs = require("./subMinutes.js");
parcelHelpers.exportAll(_subMinutesJs, exports);
var _subMonthsJs = require("./subMonths.js");
parcelHelpers.exportAll(_subMonthsJs, exports);
var _subQuartersJs = require("./subQuarters.js");
parcelHelpers.exportAll(_subQuartersJs, exports);
var _subSecondsJs = require("./subSeconds.js");
parcelHelpers.exportAll(_subSecondsJs, exports);
var _subWeeksJs = require("./subWeeks.js");
parcelHelpers.exportAll(_subWeeksJs, exports);
var _subYearsJs = require("./subYears.js");
parcelHelpers.exportAll(_subYearsJs, exports);
var _toDateJs = require("./toDate.js");
parcelHelpers.exportAll(_toDateJs, exports);
var _transposeJs = require("./transpose.js");
parcelHelpers.exportAll(_transposeJs, exports);
var _weeksToDaysJs = require("./weeksToDays.js");
parcelHelpers.exportAll(_weeksToDaysJs, exports);
var _yearsToDaysJs = require("./yearsToDays.js");
parcelHelpers.exportAll(_yearsToDaysJs, exports);
var _yearsToMonthsJs = require("./yearsToMonths.js");
parcelHelpers.exportAll(_yearsToMonthsJs, exports);
var _yearsToQuartersJs = require("./yearsToQuarters.js");
parcelHelpers.exportAll(_yearsToQuartersJs, exports);

},{"./add.js":"hboah","./addBusinessDays.js":"475kI","./addDays.js":"fL4dR","./addHours.js":"hzidA","./addISOWeekYears.js":"eZQAV","./addMilliseconds.js":"03zTk","./addMinutes.js":"7jsut","./addMonths.js":"alxIr","./addQuarters.js":"jW81o","./addSeconds.js":"1jCRu","./addWeeks.js":"6sRN6","./addYears.js":"3IQD4","./areIntervalsOverlapping.js":"aub5m","./clamp.js":"3tdAJ","./closestIndexTo.js":"g75Mq","./closestTo.js":"5V5JV","./compareAsc.js":"fgd9M","./compareDesc.js":"38snE","./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./daysToWeeks.js":"jR9nm","./differenceInBusinessDays.js":"cJL23","./differenceInCalendarDays.js":"dvya7","./differenceInCalendarISOWeekYears.js":"1uuCg","./differenceInCalendarISOWeeks.js":"5Kgvn","./differenceInCalendarMonths.js":"21Qeg","./differenceInCalendarQuarters.js":"kWjSX","./differenceInCalendarWeeks.js":"iWbGJ","./differenceInCalendarYears.js":"e0VtU","./differenceInDays.js":"fJoFi","./differenceInHours.js":"jnteW","./differenceInISOWeekYears.js":"5PiM9","./differenceInMilliseconds.js":"jkwjj","./differenceInMinutes.js":"Z5oWO","./differenceInMonths.js":"i3gFX","./differenceInQuarters.js":"eSams","./differenceInSeconds.js":"3IvxJ","./differenceInWeeks.js":"cy0mL","./differenceInYears.js":"iFe68","./eachDayOfInterval.js":"g7D5W","./eachHourOfInterval.js":"kwHze","./eachMinuteOfInterval.js":"4V6M8","./eachMonthOfInterval.js":"i1Z2B","./eachQuarterOfInterval.js":"aOi8Z","./eachWeekOfInterval.js":"99wly","./eachWeekendOfInterval.js":"5ViHa","./eachWeekendOfMonth.js":"51lqU","./eachWeekendOfYear.js":"deCgd","./eachYearOfInterval.js":"015Lr","./endOfDay.js":"jtO7f","./endOfDecade.js":"c7ju7","./endOfHour.js":"fGjDI","./endOfISOWeek.js":"5qyrI","./endOfISOWeekYear.js":"etxH3","./endOfMinute.js":"jOlnb","./endOfMonth.js":"kcCWM","./endOfQuarter.js":"jhz7T","./endOfSecond.js":"c9wPr","./endOfToday.js":"ab76B","./endOfTomorrow.js":"9sHeD","./endOfWeek.js":"3Ot4h","./endOfYear.js":"gmxYT","./endOfYesterday.js":"7ud3X","./format.js":"eeV53","./formatDistance.js":"aBg6Q","./formatDistanceStrict.js":"7aKP6","./formatDistanceToNow.js":"eLZ5b","./formatDistanceToNowStrict.js":"4IPnK","./formatDuration.js":"03dpp","./formatISO.js":"7QewX","./formatISO9075.js":"eOZFo","./formatISODuration.js":"6ZrQ5","./formatRFC3339.js":"4C2Wr","./formatRFC7231.js":"4iRjv","./formatRelative.js":"3VMIL","./fromUnixTime.js":"4kcMW","./getDate.js":"5yhYa","./getDay.js":"esFEi","./getDayOfYear.js":"lR8Io","./getDaysInMonth.js":"iS77p","./getDaysInYear.js":"f28wB","./getDecade.js":"t2HDN","./getDefaultOptions.js":"fAxdh","./getHours.js":"kRfdi","./getISODay.js":"9d1Pg","./getISOWeek.js":"fNkwc","./getISOWeekYear.js":"jWChc","./getISOWeeksInYear.js":"gwH0c","./getMilliseconds.js":"2axfx","./getMinutes.js":"jzd1E","./getMonth.js":"kio1B","./getOverlappingDaysInIntervals.js":"C2P0L","./getQuarter.js":"cr73f","./getSeconds.js":"22KCI","./getTime.js":"2lNv1","./getUnixTime.js":"hP8NA","./getWeek.js":"1zHej","./getWeekOfMonth.js":"S6fio","./getWeekYear.js":"7odmH","./getWeeksInMonth.js":"fqTdg","./getYear.js":"glolq","./hoursToMilliseconds.js":"1t8KQ","./hoursToMinutes.js":"3agDO","./hoursToSeconds.js":"l9tWS","./interval.js":"iZrN8","./intervalToDuration.js":"bpzaD","./intlFormat.js":"6yh4g","./intlFormatDistance.js":"4dv0v","./isAfter.js":"2ogSo","./isBefore.js":"6AV3j","./isDate.js":"c3MYB","./isEqual.js":"jqhPh","./isExists.js":"9cexO","./isFirstDayOfMonth.js":"dyMIP","./isFriday.js":"jzcyi","./isFuture.js":"a6qf1","./isLastDayOfMonth.js":"9dpYu","./isLeapYear.js":"5jn07","./isMatch.js":"dnyZz","./isMonday.js":"8FUr6","./isPast.js":"8QzC7","./isSameDay.js":"7FjQf","./isSameHour.js":"jSzvL","./isSameISOWeek.js":"jri8s","./isSameISOWeekYear.js":"bat4E","./isSameMinute.js":"7whBx","./isSameMonth.js":"1d9cq","./isSameQuarter.js":"fJJ3M","./isSameSecond.js":"j88au","./isSameWeek.js":"16SmB","./isSameYear.js":"jkjxd","./isSaturday.js":"c8KBS","./isSunday.js":"8cq2h","./isThisHour.js":"bUS6W","./isThisISOWeek.js":"4X4G2","./isThisMinute.js":"3IALF","./isThisMonth.js":"efMjU","./isThisQuarter.js":"7x5Jl","./isThisSecond.js":"d4Gae","./isThisWeek.js":"clx4b","./isThisYear.js":"bMtqV","./isThursday.js":"kwI0m","./isToday.js":"7J3Q2","./isTomorrow.js":"2brVA","./isTuesday.js":"azgGe","./isValid.js":"gbOJY","./isWednesday.js":"fo6X0","./isWeekend.js":"hvqeH","./isWithinInterval.js":"lsZyH","./isYesterday.js":"8fQcQ","./lastDayOfDecade.js":"4SSWt","./lastDayOfISOWeek.js":"8aCUT","./lastDayOfISOWeekYear.js":"jW013","./lastDayOfMonth.js":"lVD0G","./lastDayOfQuarter.js":"ccmoZ","./lastDayOfWeek.js":"hFSne","./lastDayOfYear.js":"9VAZa","./lightFormat.js":"kU9pl","./max.js":"hWZFG","./milliseconds.js":"lzjRb","./millisecondsToHours.js":"jMfmL","./millisecondsToMinutes.js":"enzjB","./millisecondsToSeconds.js":"jqSZU","./min.js":"gP0ns","./minutesToHours.js":"g79VA","./minutesToMilliseconds.js":"inDwO","./minutesToSeconds.js":"4Wxgd","./monthsToQuarters.js":"gHdRE","./monthsToYears.js":"5rxTb","./nextDay.js":"8JvSy","./nextFriday.js":"7LrAi","./nextMonday.js":"1YO5g","./nextSaturday.js":"gnebd","./nextSunday.js":"29SYN","./nextThursday.js":"atse6","./nextTuesday.js":"02uJh","./nextWednesday.js":"j2uXA","./parse.js":"gNLjl","./parseISO.js":"jsVo7","./parseJSON.js":"45sna","./previousDay.js":"aTT5c","./previousFriday.js":"gIu7S","./previousMonday.js":"kcslc","./previousSaturday.js":"hsMzT","./previousSunday.js":"cNh8t","./previousThursday.js":"9mDjN","./previousTuesday.js":"h1oS7","./previousWednesday.js":"f0xQR","./quartersToMonths.js":"h2o9r","./quartersToYears.js":"62942","./roundToNearestHours.js":"9YdBg","./roundToNearestMinutes.js":"1YDXi","./secondsToHours.js":"yIjPa","./secondsToMilliseconds.js":"60YWC","./secondsToMinutes.js":"7wRiH","./set.js":"4BYNm","./setDate.js":"detLY","./setDay.js":"7QCQN","./setDayOfYear.js":"8KclM","./setDefaultOptions.js":"2QTST","./setHours.js":"a7APw","./setISODay.js":"hs8xy","./setISOWeek.js":"6YGAL","./setISOWeekYear.js":"R19sp","./setMilliseconds.js":"1EFb6","./setMinutes.js":"7JQAX","./setMonth.js":"5S4Rm","./setQuarter.js":"1U8F7","./setSeconds.js":"E9tFo","./setWeek.js":"3XINN","./setWeekYear.js":"kcJtI","./setYear.js":"4hEJG","./startOfDay.js":"iJAa5","./startOfDecade.js":"lmg97","./startOfHour.js":"30rTC","./startOfISOWeek.js":"iF0wL","./startOfISOWeekYear.js":"eTm1l","./startOfMinute.js":"5zVrK","./startOfMonth.js":"1cHoB","./startOfQuarter.js":"ipmWI","./startOfSecond.js":"7GNYs","./startOfToday.js":"cMsqy","./startOfTomorrow.js":"04Svu","./startOfWeek.js":"dDDvv","./startOfWeekYear.js":"diTjA","./startOfYear.js":"cnrH3","./startOfYesterday.js":"dAxue","./sub.js":"bFznd","./subBusinessDays.js":"7oOvu","./subDays.js":"3dD7a","./subHours.js":"jVGj5","./subISOWeekYears.js":"gF8jx","./subMilliseconds.js":"22JNI","./subMinutes.js":"jPKrE","./subMonths.js":"bQpwZ","./subQuarters.js":"7ieGr","./subSeconds.js":"cvB1W","./subWeeks.js":"20wf8","./subYears.js":"jmZa1","./toDate.js":"actWA","./transpose.js":"4DdgS","./weeksToDays.js":"6D2CR","./yearsToDays.js":"gWLQa","./yearsToMonths.js":"dD3ep","./yearsToQuarters.js":"di2PR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hboah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link add} function options.
 */ /**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes, and seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */ parcelHelpers.export(exports, "add", ()=>add);
var _addDaysJs = require("./addDays.js");
var _addMonthsJs = require("./addMonths.js");
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function add(date, duration, options) {
    const { years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
    // Add years and months
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const dateWithMonths = months || years ? (0, _addMonthsJs.addMonths)(_date, months + years * 12) : _date;
    // Add weeks and days
    const dateWithDays = days || weeks ? (0, _addDaysJs.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;
    // Add days, hours, minutes, and seconds
    const minutesToAdd = minutes + hours * 60;
    const secondsToAdd = seconds + minutesToAdd * 60;
    const msToAdd = secondsToAdd * 1000;
    return (0, _constructFromJs.constructFrom)(options?.in || date, +dateWithDays + msToAdd);
}
// Fallback for modularized imports:
exports.default = add;

},{"./addDays.js":"fL4dR","./addMonths.js":"alxIr","./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fL4dR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addDays} function options.
 */ /**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */ parcelHelpers.export(exports, "addDays", ()=>addDays);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function addDays(date, amount, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    if (isNaN(amount)) return (0, _constructFromJs.constructFrom)(options?.in || date, NaN);
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    if (!amount) return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}
// Fallback for modularized imports:
exports.default = addDays;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNMdA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */ parcelHelpers.export(exports, "constructFrom", ()=>constructFrom);
var _constantsJs = require("./constants.js");
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && (0, _constantsJs.constructFromSymbol) in date) return date[0, _constantsJs.constructFromSymbol](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
// Fallback for modularized imports:
exports.default = constructFrom;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1vXXw":[function(require,module,exports) {
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "millisecondsInWeek", ()=>millisecondsInWeek);
parcelHelpers.export(exports, "millisecondsInDay", ()=>millisecondsInDay);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minutesInYear", ()=>minutesInYear);
parcelHelpers.export(exports, "minutesInMonth", ()=>minutesInMonth);
parcelHelpers.export(exports, "minutesInDay", ()=>minutesInDay);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
parcelHelpers.export(exports, "constructFromSymbol", ()=>constructFromSymbol);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 86400000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"actWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ parcelHelpers.export(exports, "toDate", ()=>toDate);
var _constructFromJs = require("./constructFrom.js");
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, _constructFromJs.constructFrom)(context || argument, argument);
}
// Fallback for modularized imports:
exports.default = toDate;

},{"./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alxIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addMonths} function options.
 */ /**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */ parcelHelpers.export(exports, "addMonths", ()=>addMonths);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function addMonths(date, amount, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    if (isNaN(amount)) return (0, _constructFromJs.constructFrom)(options?.in || date, NaN);
    if (!amount) // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
    const dayOfMonth = _date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    const endOfDesiredMonth = (0, _constructFromJs.constructFrom)(options?.in || date, _date.getTime());
    endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
    else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return _date;
    }
}
// Fallback for modularized imports:
exports.default = addMonths;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"475kI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addBusinessDays} function options.
 */ /**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */ parcelHelpers.export(exports, "addBusinessDays", ()=>addBusinessDays);
var _constructFromJs = require("./constructFrom.js");
var _isSaturdayJs = require("./isSaturday.js");
var _isSundayJs = require("./isSunday.js");
var _isWeekendJs = require("./isWeekend.js");
var _toDateJs = require("./toDate.js");
function addBusinessDays(date, amount, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const startedOnWeekend = (0, _isWeekendJs.isWeekend)(_date, options);
    if (isNaN(amount)) return (0, _constructFromJs.constructFrom)(options?.in, NaN);
    const hours = _date.getHours();
    const sign = amount < 0 ? -1 : 1;
    const fullWeeks = Math.trunc(amount / 5);
    _date.setDate(_date.getDate() + fullWeeks * 7);
    // Get remaining days not part of a full week
    let restDays = Math.abs(amount % 5);
    // Loops over remaining days
    while(restDays > 0){
        _date.setDate(_date.getDate() + sign);
        if (!(0, _isWeekendJs.isWeekend)(_date, options)) restDays -= 1;
    }
    // If the date is a weekend day and we reduce a dividable of
    // 5 from it, we land on a weekend date.
    // To counter this, we add days accordingly to land on the next business day
    if (startedOnWeekend && (0, _isWeekendJs.isWeekend)(_date, options) && amount !== 0) {
        // If we're reducing days, we want to add days until we land on a weekday
        // If we're adding days we want to reduce days until we land on a weekday
        if ((0, _isSaturdayJs.isSaturday)(_date, options)) _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
        if ((0, _isSundayJs.isSunday)(_date, options)) _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
    }
    // Restore hours to avoid DST lag
    _date.setHours(hours);
    return _date;
}
// Fallback for modularized imports:
exports.default = addBusinessDays;

},{"./constructFrom.js":"hNMdA","./isSaturday.js":"c8KBS","./isSunday.js":"8cq2h","./isWeekend.js":"hvqeH","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8KBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSaturday} function options.
 */ /**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */ parcelHelpers.export(exports, "isSaturday", ()=>isSaturday);
var _toDateJs = require("./toDate.js");
function isSaturday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 6;
}
// Fallback for modularized imports:
exports.default = isSaturday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cq2h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSunday} function options.
 */ /**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */ parcelHelpers.export(exports, "isSunday", ()=>isSunday);
var _toDateJs = require("./toDate.js");
function isSunday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 0;
}
// Fallback for modularized imports:
exports.default = isSunday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvqeH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isWeekend} function options.
 */ /**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend? A weekend is either Saturday (`6`) or Sunday (`0`).
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */ parcelHelpers.export(exports, "isWeekend", ()=>isWeekend);
var _toDateJs = require("./toDate.js");
function isWeekend(date, options) {
    const day = (0, _toDateJs.toDate)(date, options?.in).getDay();
    return day === 0 || day === 6;
}
// Fallback for modularized imports:
exports.default = isWeekend;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzidA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addHours} function options.
 */ /**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */ parcelHelpers.export(exports, "addHours", ()=>addHours);
var _addMillisecondsJs = require("./addMilliseconds.js");
var _constantsJs = require("./constants.js");
function addHours(date, amount, options) {
    return (0, _addMillisecondsJs.addMilliseconds)(date, amount * (0, _constantsJs.millisecondsInHour), options);
}
// Fallback for modularized imports:
exports.default = addHours;

},{"./addMilliseconds.js":"03zTk","./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03zTk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addMilliseconds} function options.
 */ /**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 * @param options - The options object
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */ parcelHelpers.export(exports, "addMilliseconds", ()=>addMilliseconds);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function addMilliseconds(date, amount, options) {
    return (0, _constructFromJs.constructFrom)(options?.in || date, +(0, _toDateJs.toDate)(date) + amount);
}
// Fallback for modularized imports:
exports.default = addMilliseconds;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZQAV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addISOWeekYears} function options.
 */ /**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be added.
 * @param options - An object with options
 *
 * @returns The new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */ parcelHelpers.export(exports, "addISOWeekYears", ()=>addISOWeekYears);
var _getISOWeekYearJs = require("./getISOWeekYear.js");
var _setISOWeekYearJs = require("./setISOWeekYear.js");
function addISOWeekYears(date, amount, options) {
    return (0, _setISOWeekYearJs.setISOWeekYear)(date, (0, _getISOWeekYearJs.getISOWeekYear)(date, options) + amount, options);
}
// Fallback for modularized imports:
exports.default = addISOWeekYears;

},{"./getISOWeekYear.js":"jWChc","./setISOWeekYear.js":"R19sp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jWChc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeekYear} function options.
 */ /**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */ parcelHelpers.export(exports, "getISOWeekYear", ()=>getISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
var _toDateJs = require("./toDate.js");
function getISOWeekYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, _constructFromJs.constructFrom)(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, _constructFromJs.constructFrom)(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (_date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
// Fallback for modularized imports:
exports.default = getISOWeekYear;

},{"./constructFrom.js":"hNMdA","./startOfISOWeek.js":"iF0wL","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iF0wL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfISOWeek} function options.
 */ /**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfISOWeek", ()=>startOfISOWeek);
var _startOfWeekJs = require("./startOfWeek.js");
function startOfISOWeek(date, options) {
    return (0, _startOfWeekJs.startOfWeek)(date, {
        ...options,
        weekStartsOn: 1
    });
}
// Fallback for modularized imports:
exports.default = startOfISOWeek;

},{"./startOfWeek.js":"dDDvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDDvv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeek} function options.
 */ /**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfWeek", ()=>startOfWeek);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _toDateJs = require("./toDate.js");
function startOfWeek(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeek;

},{"./_lib/defaultOptions.js":"98fau","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98fau":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"R19sp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setISOWeekYear} function options.
 */ /**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param weekYear - The ISO week-numbering year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */ parcelHelpers.export(exports, "setISOWeekYear", ()=>setISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
var _toDateJs = require("./toDate.js");
function setISOWeekYear(date, weekYear, options) {
    let _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(_date, (0, _startOfISOWeekYearJs.startOfISOWeekYear)(_date, options));
    const fourthOfJanuary = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    fourthOfJanuary.setFullYear(weekYear, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    _date = (0, _startOfISOWeekYearJs.startOfISOWeekYear)(fourthOfJanuary);
    _date.setDate(_date.getDate() + diff);
    return _date;
}
// Fallback for modularized imports:
exports.default = setISOWeekYear;

},{"./constructFrom.js":"hNMdA","./differenceInCalendarDays.js":"dvya7","./startOfISOWeekYear.js":"eTm1l","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvya7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarDays} function options.
 */ /**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */ parcelHelpers.export(exports, "differenceInCalendarDays", ()=>differenceInCalendarDays);
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
var _startOfDayJs = require("./startOfDay.js");
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, _startOfDayJs.startOfDay)(laterDate_);
    const earlierStartOfDay = (0, _startOfDayJs.startOfDay)(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / (0, _constantsJs.millisecondsInDay));
}
// Fallback for modularized imports:
exports.default = differenceInCalendarDays;

},{"./_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","./_lib/normalizeDates.js":"aCztF","./constants.js":"1vXXw","./startOfDay.js":"iJAa5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ke6Rl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ parcelHelpers.export(exports, "getTimezoneOffsetInMilliseconds", ()=>getTimezoneOffsetInMilliseconds);
var _toDateJs = require("../toDate.js");
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, _toDateJs.toDate)(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}

},{"../toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCztF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeDates", ()=>normalizeDates);
var _constructFromJs = require("../constructFrom.js");
function normalizeDates(context, ...dates) {
    const normalize = (0, _constructFromJs.constructFrom).bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}

},{"../constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJAa5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfDay} function options.
 */ /**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfDay", ()=>startOfDay);
var _toDateJs = require("./toDate.js");
function startOfDay(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfDay;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTm1l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfISOWeekYear} function options.
 */ /**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */ parcelHelpers.export(exports, "startOfISOWeekYear", ()=>startOfISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _getISOWeekYearJs = require("./getISOWeekYear.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
function startOfISOWeekYear(date, options) {
    const year = (0, _getISOWeekYearJs.getISOWeekYear)(date, options);
    const fourthOfJanuary = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuary);
}
// Fallback for modularized imports:
exports.default = startOfISOWeekYear;

},{"./constructFrom.js":"hNMdA","./getISOWeekYear.js":"jWChc","./startOfISOWeek.js":"iF0wL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jsut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addMinutes} function options.
 */ /**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 * @param options - An object with options
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */ parcelHelpers.export(exports, "addMinutes", ()=>addMinutes);
var _constantsJs = require("./constants.js");
var _toDateJs = require("./toDate.js");
function addMinutes(date, amount, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setTime(_date.getTime() + amount * (0, _constantsJs.millisecondsInMinute));
    return _date;
}
// Fallback for modularized imports:
exports.default = addMinutes;

},{"./constants.js":"1vXXw","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jW81o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addQuarters} function options.
 */ /**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be added.
 * @param options - An object with options
 *
 * @returns The new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=; Mon Dec 01 2014 00:00:00
 */ parcelHelpers.export(exports, "addQuarters", ()=>addQuarters);
var _addMonthsJs = require("./addMonths.js");
function addQuarters(date, amount, options) {
    return (0, _addMonthsJs.addMonths)(date, amount * 3, options);
}
// Fallback for modularized imports:
exports.default = addQuarters;

},{"./addMonths.js":"alxIr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jCRu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addSeconds} function options.
 */ /**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */ parcelHelpers.export(exports, "addSeconds", ()=>addSeconds);
var _addMillisecondsJs = require("./addMilliseconds.js");
function addSeconds(date, amount, options) {
    return (0, _addMillisecondsJs.addMilliseconds)(date, amount * 1000, options);
}
// Fallback for modularized imports:
exports.default = addSeconds;

},{"./addMilliseconds.js":"03zTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sRN6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addWeeks} function options.
 */ /**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */ parcelHelpers.export(exports, "addWeeks", ()=>addWeeks);
var _addDaysJs = require("./addDays.js");
function addWeeks(date, amount, options) {
    return (0, _addDaysJs.addDays)(date, amount * 7, options);
}
// Fallback for modularized imports:
exports.default = addWeeks;

},{"./addDays.js":"fL4dR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IQD4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addYears} function options.
 */ /**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */ parcelHelpers.export(exports, "addYears", ()=>addYears);
var _addMonthsJs = require("./addMonths.js");
function addYears(date, amount, options) {
    return (0, _addMonthsJs.addMonths)(date, amount * 12, options);
}
// Fallback for modularized imports:
exports.default = addYears;

},{"./addMonths.js":"alxIr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aub5m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link areIntervalsOverlapping} function options.
 */ /**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping unless `inclusive` is set to `true`.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - The object with options
 *
 * @returns Whether the time intervals are overlapping
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */ parcelHelpers.export(exports, "areIntervalsOverlapping", ()=>areIntervalsOverlapping);
var _toDateJs = require("./toDate.js");
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
    const [leftStartTime, leftEndTime] = [
        +(0, _toDateJs.toDate)(intervalLeft.start, options?.in),
        +(0, _toDateJs.toDate)(intervalLeft.end, options?.in)
    ].sort((a, b)=>a - b);
    const [rightStartTime, rightEndTime] = [
        +(0, _toDateJs.toDate)(intervalRight.start, options?.in),
        +(0, _toDateJs.toDate)(intervalRight.end, options?.in)
    ].sort((a, b)=>a - b);
    if (options?.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
    return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
// Fallback for modularized imports:
exports.default = areIntervalsOverlapping;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tdAJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link clamp} function options.
 */ /**
 * The {@link clamp} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */ /**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval.
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @typeParam DateType - Date argument type.
 * @typeParam IntervalType - Interval argument type.
 * @typeParam Options - Options type.
 *
 * @param date - The date to be bounded
 * @param interval - The interval to bound to
 * @param options - An object with options
 *
 * @returns The date bounded by the start and the end of the interval
 *
 * @example
 * // What is Mar 21, 2021 bounded to an interval starting at Mar 22, 2021 and ending at Apr 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 */ parcelHelpers.export(exports, "clamp", ()=>clamp);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _maxJs = require("./max.js");
var _minJs = require("./min.js");
function clamp(date, interval, options) {
    const [date_, start, end] = (0, _normalizeDatesJs.normalizeDates)(options?.in, date, interval.start, interval.end);
    return (0, _minJs.min)([
        (0, _maxJs.max)([
            date_,
            start
        ], options),
        end
    ], options);
}
// Fallback for modularized imports:
exports.default = clamp;

},{"./_lib/normalizeDates.js":"aCztF","./max.js":"hWZFG","./min.js":"gP0ns","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWZFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link max} function options.
 */ /**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */ parcelHelpers.export(exports, "max", ()=>max);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function max(dates, options) {
    let result;
    let context = options?.in;
    dates.forEach((date)=>{
        // Use the first date object as the context function
        if (!context && typeof date === "object") context = (0, _constructFromJs.constructFrom).bind(null, date);
        const date_ = (0, _toDateJs.toDate)(date, context);
        if (!result || result < date_ || isNaN(+date_)) result = date_;
    });
    return (0, _constructFromJs.constructFrom)(context, result || NaN);
}
// Fallback for modularized imports:
exports.default = max;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gP0ns":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link min} function options.
 */ /**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */ parcelHelpers.export(exports, "min", ()=>min);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function min(dates, options) {
    let result;
    let context = options?.in;
    dates.forEach((date)=>{
        // Use the first date object as the context function
        if (!context && typeof date === "object") context = (0, _constructFromJs.constructFrom).bind(null, date);
        const date_ = (0, _toDateJs.toDate)(date, context);
        if (!result || result > date_ || isNaN(+date_)) result = date_;
    });
    return (0, _constructFromJs.constructFrom)(context, result || NaN);
}
// Fallback for modularized imports:
exports.default = min;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g75Mq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns An index of the date closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */ parcelHelpers.export(exports, "closestIndexTo", ()=>closestIndexTo);
var _toDateJs = require("./toDate.js");
function closestIndexTo(dateToCompare, dates) {
    // [TODO] It would be better to return -1 here rather than undefined, as this
    // is how JS behaves, but it would be a breaking change, so we need
    // to consider it for v4.
    const timeToCompare = +(0, _toDateJs.toDate)(dateToCompare);
    if (isNaN(timeToCompare)) return NaN;
    let result;
    let minDistance;
    dates.forEach((date, index)=>{
        const date_ = (0, _toDateJs.toDate)(date);
        if (isNaN(+date_)) {
            result = NaN;
            minDistance = NaN;
            return;
        }
        const distance = Math.abs(timeToCompare - +date_);
        if (result == null || distance < minDistance) {
            result = index;
            minDistance = distance;
        }
    });
    return result;
}
// Fallback for modularized imports:
exports.default = closestIndexTo;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5V5JV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link closestTo} function options.
 */ /**
 * The {@link closestTo} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */ /**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateToCompare - Date to compare argument type.
 * @typeParam DatesType - Dates array argument type.
 * @typeParam Options - Options type.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */ parcelHelpers.export(exports, "closestTo", ()=>closestTo);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _closestIndexToJs = require("./closestIndexTo.js");
var _constructFromJs = require("./constructFrom.js");
function closestTo(dateToCompare, dates, options) {
    const [dateToCompare_, ...dates_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, dateToCompare, ...dates);
    const index = (0, _closestIndexToJs.closestIndexTo)(dateToCompare_, dates_);
    if (typeof index === "number" && isNaN(index)) return (0, _constructFromJs.constructFrom)(dateToCompare_, NaN);
    if (index !== undefined) return dates_[index];
}
// Fallback for modularized imports:
exports.default = closestTo;

},{"./_lib/normalizeDates.js":"aCztF","./closestIndexTo.js":"g75Mq","./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgd9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "compareAsc", ()=>compareAsc);
var _toDateJs = require("./toDate.js");
function compareAsc(dateLeft, dateRight) {
    const diff = +(0, _toDateJs.toDate)(dateLeft) - +(0, _toDateJs.toDate)(dateRight);
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
// Fallback for modularized imports:
exports.default = compareAsc;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38snE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "compareDesc", ()=>compareDesc);
var _toDateJs = require("./toDate.js");
function compareDesc(dateLeft, dateRight) {
    const diff = +(0, _toDateJs.toDate)(dateLeft) - +(0, _toDateJs.toDate)(dateRight);
    if (diff > 0) return -1;
    else if (diff < 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
// Fallback for modularized imports:
exports.default = compareDesc;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJJt5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */ parcelHelpers.export(exports, "constructNow", ()=>constructNow);
var _constructFromJs = require("./constructFrom.js");
function constructNow(date) {
    return (0, _constructFromJs.constructFrom)(date, Date.now());
}
// Fallback for modularized imports:
exports.default = constructNow;

},{"./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jR9nm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @param days - The number of days to be converted
 *
 * @returns The number of days converted in weeks
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses trunc rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */ parcelHelpers.export(exports, "daysToWeeks", ()=>daysToWeeks);
var _constantsJs = require("./constants.js");
function daysToWeeks(days) {
    const result = Math.trunc(days / (0, _constantsJs.daysInWeek));
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = daysToWeeks;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJL23":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInBusinessDays} function options.
 */ /**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that aren't in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of business days
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */ parcelHelpers.export(exports, "differenceInBusinessDays", ()=>differenceInBusinessDays);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _addDaysJs = require("./addDays.js");
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _isSameDayJs = require("./isSameDay.js");
var _isValidJs = require("./isValid.js");
var _isWeekendJs = require("./isWeekend.js");
function differenceInBusinessDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    if (!(0, _isValidJs.isValid)(laterDate_) || !(0, _isValidJs.isValid)(earlierDate_)) return NaN;
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(laterDate_, earlierDate_);
    const sign = diff < 0 ? -1 : 1;
    const weeks = Math.trunc(diff / 7);
    let result = weeks * 5;
    let movingDate = (0, _addDaysJs.addDays)(earlierDate_, weeks * 7);
    // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
    while(!(0, _isSameDayJs.isSameDay)(laterDate_, movingDate)){
        // sign is used to account for both negative and positive differences
        result += (0, _isWeekendJs.isWeekend)(movingDate, options) ? 0 : sign;
        movingDate = (0, _addDaysJs.addDays)(movingDate, sign);
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = differenceInBusinessDays;

},{"./_lib/normalizeDates.js":"aCztF","./addDays.js":"fL4dR","./differenceInCalendarDays.js":"dvya7","./isSameDay.js":"7FjQf","./isValid.js":"gbOJY","./isWeekend.js":"hvqeH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7FjQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameDay} function options.
 */ /**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */ parcelHelpers.export(exports, "isSameDay", ()=>isSameDay);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _startOfDayJs = require("./startOfDay.js");
function isSameDay(laterDate, earlierDate, options) {
    const [dateLeft_, dateRight_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return +(0, _startOfDayJs.startOfDay)(dateLeft_) === +(0, _startOfDayJs.startOfDay)(dateRight_);
}
// Fallback for modularized imports:
exports.default = isSameDay;

},{"./_lib/normalizeDates.js":"aCztF","./startOfDay.js":"iJAa5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbOJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ parcelHelpers.export(exports, "isValid", ()=>isValid);
var _isDateJs = require("./isDate.js");
var _toDateJs = require("./toDate.js");
function isValid(date) {
    return !(!(0, _isDateJs.isDate)(date) && typeof date !== "number" || isNaN(+(0, _toDateJs.toDate)(date)));
}
// Fallback for modularized imports:
exports.default = isValid;

},{"./isDate.js":"c3MYB","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3MYB":[function(require,module,exports) {
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDate", ()=>isDate);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
// Fallback for modularized imports:
exports.default = isDate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uuCg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarISOWeekYears} function options.
 */ /**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */ parcelHelpers.export(exports, "differenceInCalendarISOWeekYears", ()=>differenceInCalendarISOWeekYears);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _getISOWeekYearJs = require("./getISOWeekYear.js");
function differenceInCalendarISOWeekYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return (0, _getISOWeekYearJs.getISOWeekYear)(laterDate_, options) - (0, _getISOWeekYearJs.getISOWeekYear)(earlierDate_, options);
}
// Fallback for modularized imports:
exports.default = differenceInCalendarISOWeekYears;

},{"./_lib/normalizeDates.js":"aCztF","./getISOWeekYear.js":"jWChc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Kgvn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarISOWeeks} function options.
 */ /**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6),
 * );
 * //=> 3
 */ parcelHelpers.export(exports, "differenceInCalendarISOWeeks", ()=>differenceInCalendarISOWeeks);
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
function differenceInCalendarISOWeeks(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const startOfISOWeekLeft = (0, _startOfISOWeekJs.startOfISOWeek)(laterDate_);
    const startOfISOWeekRight = (0, _startOfISOWeekJs.startOfISOWeek)(earlierDate_);
    const timestampLeft = +startOfISOWeekLeft - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(startOfISOWeekLeft);
    const timestampRight = +startOfISOWeekRight - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(startOfISOWeekRight);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / (0, _constantsJs.millisecondsInWeek));
}
// Fallback for modularized imports:
exports.default = differenceInCalendarISOWeeks;

},{"./_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","./_lib/normalizeDates.js":"aCztF","./constants.js":"1vXXw","./startOfISOWeek.js":"iF0wL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21Qeg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarMonths} function options.
 */ /**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */ parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>differenceInCalendarMonths);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function differenceInCalendarMonths(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
    return yearsDiff * 12 + monthsDiff;
}
// Fallback for modularized imports:
exports.default = differenceInCalendarMonths;

},{"./_lib/normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWjSX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarQuarters} function options.
 */ /**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */ parcelHelpers.export(exports, "differenceInCalendarQuarters", ()=>differenceInCalendarQuarters);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _getQuarterJs = require("./getQuarter.js");
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const quartersDiff = (0, _getQuarterJs.getQuarter)(laterDate_) - (0, _getQuarterJs.getQuarter)(earlierDate_);
    return yearsDiff * 4 + quartersDiff;
}
// Fallback for modularized imports:
exports.default = differenceInCalendarQuarters;

},{"./_lib/normalizeDates.js":"aCztF","./getQuarter.js":"cr73f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cr73f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getQuarter} function options.
 */ /**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2));
 * //=> 3
 */ parcelHelpers.export(exports, "getQuarter", ()=>getQuarter);
var _toDateJs = require("./toDate.js");
function getQuarter(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const quarter = Math.trunc(_date.getMonth() / 3) + 1;
    return quarter;
}
// Fallback for modularized imports:
exports.default = getQuarter;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWbGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarWeeks} function options.
 */ /**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */ parcelHelpers.export(exports, "differenceInCalendarWeeks", ()=>differenceInCalendarWeeks);
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
var _startOfWeekJs = require("./startOfWeek.js");
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const laterStartOfWeek = (0, _startOfWeekJs.startOfWeek)(laterDate_, options);
    const earlierStartOfWeek = (0, _startOfWeekJs.startOfWeek)(earlierDate_, options);
    const laterTimestamp = +laterStartOfWeek - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterStartOfWeek);
    const earlierTimestamp = +earlierStartOfWeek - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierStartOfWeek);
    return Math.round((laterTimestamp - earlierTimestamp) / (0, _constantsJs.millisecondsInWeek));
}
// Fallback for modularized imports:
exports.default = differenceInCalendarWeeks;

},{"./_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","./_lib/normalizeDates.js":"aCztF","./constants.js":"1vXXw","./startOfWeek.js":"dDDvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0VtU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarYears} function options.
 */ /**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 */ parcelHelpers.export(exports, "differenceInCalendarYears", ()=>differenceInCalendarYears);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function differenceInCalendarYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() - earlierDate_.getFullYear();
}
// Fallback for modularized imports:
exports.default = differenceInCalendarYears;

},{"./_lib/normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJoFi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInDays} function options.
 */ /**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */ parcelHelpers.export(exports, "differenceInDays", ()=>differenceInDays);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
function differenceInDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const sign = compareLocalAsc(laterDate_, earlierDate_);
    const difference = Math.abs((0, _differenceInCalendarDaysJs.differenceInCalendarDays)(laterDate_, earlierDate_));
    laterDate_.setDate(laterDate_.getDate() - sign * difference);
    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
    const result = sign * (difference - isLastDayNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
    const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
    if (diff < 0) return -1;
    if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
// Fallback for modularized imports:
exports.default = differenceInDays;

},{"./_lib/normalizeDates.js":"aCztF","./differenceInCalendarDays.js":"dvya7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jnteW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInHours} function options.
 */ /**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */ parcelHelpers.export(exports, "differenceInHours", ()=>differenceInHours);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
function differenceInHours(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const diff = (+laterDate_ - +earlierDate_) / (0, _constantsJs.millisecondsInHour);
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInHours;

},{"./_lib/getRoundingMethod.js":"1ipL6","./_lib/normalizeDates.js":"aCztF","./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ipL6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod);
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5PiM9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInISOWeekYears} function options.
 */ /**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options
 *
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * // => 1
 */ parcelHelpers.export(exports, "differenceInISOWeekYears", ()=>differenceInISOWeekYears);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _differenceInCalendarISOWeekYearsJs = require("./differenceInCalendarISOWeekYears.js");
var _subISOWeekYearsJs = require("./subISOWeekYears.js");
function differenceInISOWeekYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const sign = (0, _compareAscJs.compareAsc)(laterDate_, earlierDate_);
    const diff = Math.abs((0, _differenceInCalendarISOWeekYearsJs.differenceInCalendarISOWeekYears)(laterDate_, earlierDate_, options));
    const adjustedDate = (0, _subISOWeekYearsJs.subISOWeekYears)(laterDate_, sign * diff, options);
    const isLastISOWeekYearNotFull = Number((0, _compareAscJs.compareAsc)(adjustedDate, earlierDate_) === -sign);
    const result = sign * (diff - isLastISOWeekYearNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = differenceInISOWeekYears;

},{"./_lib/normalizeDates.js":"aCztF","./compareAsc.js":"fgd9M","./differenceInCalendarISOWeekYears.js":"1uuCg","./subISOWeekYears.js":"gF8jx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gF8jx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subISOWeekYears} function options.
 */ /**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */ parcelHelpers.export(exports, "subISOWeekYears", ()=>subISOWeekYears);
var _addISOWeekYearsJs = require("./addISOWeekYears.js");
function subISOWeekYears(date, amount, options) {
    return (0, _addISOWeekYearsJs.addISOWeekYears)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subISOWeekYears;

},{"./addISOWeekYears.js":"eZQAV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jkwjj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */ parcelHelpers.export(exports, "differenceInMilliseconds", ()=>differenceInMilliseconds);
var _toDateJs = require("./toDate.js");
function differenceInMilliseconds(laterDate, earlierDate) {
    return +(0, _toDateJs.toDate)(laterDate) - +(0, _toDateJs.toDate)(earlierDate);
}
// Fallback for modularized imports:
exports.default = differenceInMilliseconds;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Z5oWO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInMinutes} function options.
 */ /**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */ parcelHelpers.export(exports, "differenceInMinutes", ()=>differenceInMinutes);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _constantsJs = require("./constants.js");
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
function differenceInMinutes(dateLeft, dateRight, options) {
    const diff = (0, _differenceInMillisecondsJs.differenceInMilliseconds)(dateLeft, dateRight) / (0, _constantsJs.millisecondsInMinute);
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInMinutes;

},{"./_lib/getRoundingMethod.js":"1ipL6","./constants.js":"1vXXw","./differenceInMilliseconds.js":"jkwjj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3gFX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInMonths} function options.
 */ /**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */ parcelHelpers.export(exports, "differenceInMonths", ()=>differenceInMonths);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
function differenceInMonths(laterDate, earlierDate, options) {
    const [laterDate_, workingLaterDate, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, laterDate, earlierDate);
    const sign = (0, _compareAscJs.compareAsc)(workingLaterDate, earlierDate_);
    const difference = Math.abs((0, _differenceInCalendarMonthsJs.differenceInCalendarMonths)(workingLaterDate, earlierDate_));
    if (difference < 1) return 0;
    if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
    workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
    let isLastMonthNotFull = (0, _compareAscJs.compareAsc)(workingLaterDate, earlierDate_) === -sign;
    if ((0, _isLastDayOfMonthJs.isLastDayOfMonth)(laterDate_) && difference === 1 && (0, _compareAscJs.compareAsc)(laterDate_, earlierDate_) === 1) isLastMonthNotFull = false;
    const result = sign * (difference - +isLastMonthNotFull);
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = differenceInMonths;

},{"./_lib/normalizeDates.js":"aCztF","./compareAsc.js":"fgd9M","./differenceInCalendarMonths.js":"21Qeg","./isLastDayOfMonth.js":"9dpYu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dpYu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */ parcelHelpers.export(exports, "isLastDayOfMonth", ()=>isLastDayOfMonth);
var _endOfDayJs = require("./endOfDay.js");
var _endOfMonthJs = require("./endOfMonth.js");
var _toDateJs = require("./toDate.js");
function isLastDayOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    return +(0, _endOfDayJs.endOfDay)(_date, options) === +(0, _endOfMonthJs.endOfMonth)(_date, options);
}
// Fallback for modularized imports:
exports.default = isLastDayOfMonth;

},{"./endOfDay.js":"jtO7f","./endOfMonth.js":"kcCWM","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtO7f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfDay} function options.
 */ /**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfDay", ()=>endOfDay);
var _toDateJs = require("./toDate.js");
function endOfDay(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfDay;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcCWM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfMonth} function options.
 */ /**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfMonth", ()=>endOfMonth);
var _toDateJs = require("./toDate.js");
function endOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfMonth;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSams":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInQuarters} function options.
 */ /**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */ parcelHelpers.export(exports, "differenceInQuarters", ()=>differenceInQuarters);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _differenceInMonthsJs = require("./differenceInMonths.js");
function differenceInQuarters(laterDate, earlierDate, options) {
    const diff = (0, _differenceInMonthsJs.differenceInMonths)(laterDate, earlierDate, options) / 3;
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInQuarters;

},{"./_lib/getRoundingMethod.js":"1ipL6","./differenceInMonths.js":"i3gFX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IvxJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInSeconds} function options.
 */ /**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */ parcelHelpers.export(exports, "differenceInSeconds", ()=>differenceInSeconds);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
function differenceInSeconds(laterDate, earlierDate, options) {
    const diff = (0, _differenceInMillisecondsJs.differenceInMilliseconds)(laterDate, earlierDate) / 1000;
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInSeconds;

},{"./_lib/getRoundingMethod.js":"1ipL6","./differenceInMilliseconds.js":"jkwjj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cy0mL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInWeeks} function options.
 */ /**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * @example
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */ parcelHelpers.export(exports, "differenceInWeeks", ()=>differenceInWeeks);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _differenceInDaysJs = require("./differenceInDays.js");
function differenceInWeeks(laterDate, earlierDate, options) {
    const diff = (0, _differenceInDaysJs.differenceInDays)(laterDate, earlierDate, options) / 7;
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInWeeks;

},{"./_lib/getRoundingMethod.js":"1ipL6","./differenceInDays.js":"fJoFi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFe68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInYears} function options.
 */ /**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */ parcelHelpers.export(exports, "differenceInYears", ()=>differenceInYears);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _differenceInCalendarYearsJs = require("./differenceInCalendarYears.js");
function differenceInYears(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    // -1 if the left date is earlier than the right date
    // 2023-12-31 - 2024-01-01 = -1
    const sign = (0, _compareAscJs.compareAsc)(laterDate_, earlierDate_);
    // First calculate the difference in calendar years
    // 2024-01-01 - 2023-12-31 = 1 year
    const diff = Math.abs((0, _differenceInCalendarYearsJs.differenceInCalendarYears)(laterDate_, earlierDate_));
    // Now we need to calculate if the difference is full. To do that we set
    // both dates to the same year and check if the both date's month and day
    // form a full year.
    laterDate_.setFullYear(1584);
    earlierDate_.setFullYear(1584);
    // For it to be true, when the later date is indeed later than the earlier date
    // (2026-02-01 - 2023-12-10 = 3 years), the difference is full if
    // the normalized later date is also later than the normalized earlier date.
    // In our example, 1584-02-01 is earlier than 1584-12-10, so the difference
    // is partial, hence we need to subtract 1 from the difference 3 - 1 = 2.
    const partial = (0, _compareAscJs.compareAsc)(laterDate_, earlierDate_) === -sign;
    const result = sign * (diff - +partial);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = differenceInYears;

},{"./_lib/normalizeDates.js":"aCztF","./compareAsc.js":"fgd9M","./differenceInCalendarYears.js":"e0VtU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7D5W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachDayOfInterval} function options.
 */ /**
 * The {@link eachDayOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */ /**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of days from the day of the interval start to the day of the interval end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachDayOfInterval", ()=>eachDayOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _constructFromJs = require("./constructFrom.js");
function eachDayOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, _constructFromJs.constructFrom)(start, date));
        date.setDate(date.getDate() + step);
        date.setHours(0, 0, 0, 0);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachDayOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvkOk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeInterval", ()=>normalizeInterval);
var _normalizeDatesJs = require("./normalizeDates.js");
function normalizeInterval(context, interval) {
    const [start, end] = (0, _normalizeDatesJs.normalizeDates)(context, interval.start, interval.end);
    return {
        start,
        end
    };
}

},{"./normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwHze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachHourOfInterval} function options.
 */ /**
 * The {@link eachHourOfInterval} function result type.
 * Resolves to the appropriate date type based on inputs.
 */ /**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of hours from the hour of the interval start to the hour of the interval end
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * });
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachHourOfInterval", ()=>eachHourOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _constructFromJs = require("./constructFrom.js");
function eachHourOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setMinutes(0, 0, 0);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, _constructFromJs.constructFrom)(start, date));
        date.setHours(date.getHours() + step);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachHourOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4V6M8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachMinuteOfInterval} function options.
 */ /**
 * The {@link eachMinuteOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */ /**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */ parcelHelpers.export(exports, "eachMinuteOfInterval", ()=>eachMinuteOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _addMinutesJs = require("./addMinutes.js");
var _constructFromJs = require("./constructFrom.js");
function eachMinuteOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    // Set to the start of the minute
    start.setSeconds(0, 0);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    let date = reversed ? end : start;
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, _constructFromJs.constructFrom)(start, date));
        date = (0, _addMinutesJs.addMinutes)(date, step);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachMinuteOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./addMinutes.js":"7jsut","./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1Z2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachMonthOfInterval} function options.
 */ /**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 */ /**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachMonthOfInterval", ()=>eachMonthOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _constructFromJs = require("./constructFrom.js");
function eachMonthOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    date.setDate(1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, _constructFromJs.constructFrom)(start, date));
        date.setMonth(date.getMonth() + step);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachMonthOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOi8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachQuarterOfInterval} function options.
 */ /**
 * The {@link eachQuarterOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */ /**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval
 * @param options - An object with options
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10),
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */ parcelHelpers.export(exports, "eachQuarterOfInterval", ()=>eachQuarterOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _addQuartersJs = require("./addQuarters.js");
var _constructFromJs = require("./constructFrom.js");
var _startOfQuarterJs = require("./startOfQuarter.js");
function eachQuarterOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +(0, _startOfQuarterJs.startOfQuarter)(start) : +(0, _startOfQuarterJs.startOfQuarter)(end);
    let date = reversed ? (0, _startOfQuarterJs.startOfQuarter)(end) : (0, _startOfQuarterJs.startOfQuarter)(start);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, _constructFromJs.constructFrom)(start, date));
        date = (0, _addQuartersJs.addQuarters)(date, step);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachQuarterOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./addQuarters.js":"jW81o","./constructFrom.js":"hNMdA","./startOfQuarter.js":"ipmWI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipmWI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfQuarter} function options.
 */ /**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfQuarter", ()=>startOfQuarter);
var _toDateJs = require("./toDate.js");
function startOfQuarter(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const currentMonth = _date.getMonth();
    const month = currentMonth - currentMonth % 3;
    _date.setMonth(month, 1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfQuarter;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99wly":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachWeekOfInterval} function options.
 */ /**
 * The {@link eachWeekOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the interval start date,
 * then the end interval date. If a context function is passed, it uses the context function return type.
 */ /**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachWeekOfInterval", ()=>eachWeekOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _addWeeksJs = require("./addWeeks.js");
var _constructFromJs = require("./constructFrom.js");
var _startOfWeekJs = require("./startOfWeek.js");
function eachWeekOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    let reversed = +start > +end;
    const startDateWeek = reversed ? (0, _startOfWeekJs.startOfWeek)(end, options) : (0, _startOfWeekJs.startOfWeek)(start, options);
    const endDateWeek = reversed ? (0, _startOfWeekJs.startOfWeek)(start, options) : (0, _startOfWeekJs.startOfWeek)(end, options);
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    const endTime = +endDateWeek.getTime();
    let currentDate = startDateWeek;
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        currentDate.setHours(0);
        dates.push((0, _constructFromJs.constructFrom)(start, currentDate));
        currentDate = (0, _addWeeksJs.addWeeks)(currentDate, step);
        currentDate.setHours(15);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachWeekOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./addWeeks.js":"6sRN6","./constructFrom.js":"hNMdA","./startOfWeek.js":"dDDvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ViHa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachWeekendOfInterval} function options.
 */ /**
 * The {@link eachWeekendOfInterval} function result type.
 */ /**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The given interval
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachWeekendOfInterval", ()=>eachWeekendOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _constructFromJs = require("./constructFrom.js");
var _eachDayOfIntervalJs = require("./eachDayOfInterval.js");
var _isWeekendJs = require("./isWeekend.js");
function eachWeekendOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    const dateInterval = (0, _eachDayOfIntervalJs.eachDayOfInterval)({
        start,
        end
    }, options);
    const weekends = [];
    let index = 0;
    while(index < dateInterval.length){
        const date = dateInterval[index++];
        if ((0, _isWeekendJs.isWeekend)(date)) weekends.push((0, _constructFromJs.constructFrom)(start, date));
    }
    return weekends;
}
// Fallback for modularized imports:
exports.default = eachWeekendOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./constructFrom.js":"hNMdA","./eachDayOfInterval.js":"g7D5W","./isWeekend.js":"hvqeH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51lqU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachWeekendOfMonth} function options.
 */ /**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The given month
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachWeekendOfMonth", ()=>eachWeekendOfMonth);
var _eachWeekendOfIntervalJs = require("./eachWeekendOfInterval.js");
var _endOfMonthJs = require("./endOfMonth.js");
var _startOfMonthJs = require("./startOfMonth.js");
function eachWeekendOfMonth(date, options) {
    const start = (0, _startOfMonthJs.startOfMonth)(date, options);
    const end = (0, _endOfMonthJs.endOfMonth)(date, options);
    return (0, _eachWeekendOfIntervalJs.eachWeekendOfInterval)({
        start,
        end
    }, options);
}
// Fallback for modularized imports:
exports.default = eachWeekendOfMonth;

},{"./eachWeekendOfInterval.js":"5ViHa","./endOfMonth.js":"kcCWM","./startOfMonth.js":"1cHoB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cHoB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfMonth} function options.
 */ /**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfMonth", ()=>startOfMonth);
var _toDateJs = require("./toDate.js");
function startOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setDate(1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfMonth;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"deCgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachWeekendOfYear} function options.
 */ /**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The given year
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */ parcelHelpers.export(exports, "eachWeekendOfYear", ()=>eachWeekendOfYear);
var _eachWeekendOfIntervalJs = require("./eachWeekendOfInterval.js");
var _endOfYearJs = require("./endOfYear.js");
var _startOfYearJs = require("./startOfYear.js");
function eachWeekendOfYear(date, options) {
    const start = (0, _startOfYearJs.startOfYear)(date, options);
    const end = (0, _endOfYearJs.endOfYear)(date, options);
    return (0, _eachWeekendOfIntervalJs.eachWeekendOfInterval)({
        start,
        end
    }, options);
}
// Fallback for modularized imports:
exports.default = eachWeekendOfYear;

},{"./eachWeekendOfInterval.js":"5ViHa","./endOfYear.js":"gmxYT","./startOfYear.js":"cnrH3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmxYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfYear} function options.
 */ /**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfYear", ()=>endOfYear);
var _toDateJs = require("./toDate.js");
function endOfYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    _date.setFullYear(year + 1, 0, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfYear;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnrH3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfYear} function options.
 */ /**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfYear", ()=>startOfYear);
var _toDateJs = require("./toDate.js");
function startOfYear(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = startOfYear;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"015Lr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link eachYearOfInterval} function options.
 */ /**
 * The {@link eachYearOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */ /**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "eachYearOfInterval", ()=>eachYearOfInterval);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _constructFromJs = require("./constructFrom.js");
function eachYearOfInterval(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    date.setMonth(0, 1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, _constructFromJs.constructFrom)(start, date));
        date.setFullYear(date.getFullYear() + step);
    }
    return reversed ? dates.reverse() : dates;
}
// Fallback for modularized imports:
exports.default = eachYearOfInterval;

},{"./_lib/normalizeInterval.js":"hvkOk","./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7ju7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfDecade} function options.
 */ /**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a decade
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */ parcelHelpers.export(exports, "endOfDecade", ()=>endOfDecade);
var _toDateJs = require("./toDate.js");
function endOfDecade(date, options) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const decade = 9 + Math.floor(year / 10) * 10;
    _date.setFullYear(decade, 11, 31);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfDecade;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGjDI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfHour} function options.
 */ /**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */ parcelHelpers.export(exports, "endOfHour", ()=>endOfHour);
var _toDateJs = require("./toDate.js");
function endOfHour(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setMinutes(59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfHour;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qyrI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfISOWeek} function options.
 */ /**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfISOWeek", ()=>endOfISOWeek);
var _endOfWeekJs = require("./endOfWeek.js");
function endOfISOWeek(date, options) {
    return (0, _endOfWeekJs.endOfWeek)(date, {
        ...options,
        weekStartsOn: 1
    });
}
// Fallback for modularized imports:
exports.default = endOfISOWeek;

},{"./endOfWeek.js":"3Ot4h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ot4h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfWeek} function options.
 */ /**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfWeek", ()=>endOfWeek);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _toDateJs = require("./toDate.js");
function endOfWeek(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setDate(_date.getDate() + diff);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfWeek;

},{"./_lib/defaultOptions.js":"98fau","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etxH3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfISOWeekYear} function options.
 */ /**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */ parcelHelpers.export(exports, "endOfISOWeekYear", ()=>endOfISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _getISOWeekYearJs = require("./getISOWeekYear.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
function endOfISOWeekYear(date, options) {
    const year = (0, _getISOWeekYearJs.getISOWeekYear)(date, options);
    const fourthOfJanuaryOfNextYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const _date = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfNextYear, options);
    _date.setMilliseconds(_date.getMilliseconds() - 1);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfISOWeekYear;

},{"./constructFrom.js":"hNMdA","./getISOWeekYear.js":"jWChc","./startOfISOWeek.js":"iF0wL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOlnb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfMinute} function options.
 */ /**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone or the provided context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */ parcelHelpers.export(exports, "endOfMinute", ()=>endOfMinute);
var _toDateJs = require("./toDate.js");
function endOfMinute(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setSeconds(59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfMinute;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhz7T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfQuarter} function options.
 */ /**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfQuarter", ()=>endOfQuarter);
var _toDateJs = require("./toDate.js");
function endOfQuarter(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const currentMonth = _date.getMonth();
    const month = currentMonth - currentMonth % 3 + 3;
    _date.setMonth(month, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfQuarter;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9wPr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfSecond} function options.
 */ /**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone if no `in` option is specified.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */ parcelHelpers.export(exports, "endOfSecond", ()=>endOfSecond);
var _toDateJs = require("./toDate.js");
function endOfSecond(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setMilliseconds(999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfSecond;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ab76B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfToday} function options.
 */ /**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 *
 * @returns The end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfToday", ()=>endOfToday);
var _endOfDayJs = require("./endOfDay.js");
function endOfToday(options) {
    return (0, _endOfDayJs.endOfDay)(Date.now(), options);
}
// Fallback for modularized imports:
exports.default = endOfToday;

},{"./endOfDay.js":"jtO7f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sHeD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfTomorrow} function options.
 */ /**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfTomorrow", ()=>endOfTomorrow);
var _constructNowJs = require("./constructNow.js");
function endOfTomorrow(options) {
    const now = (0, _constructNowJs.constructNow)(options?.in);
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = (0, _constructNowJs.constructNow)(options?.in);
    date.setFullYear(year, month, day + 1);
    date.setHours(23, 59, 59, 999);
    return options?.in ? options.in(date) : date;
}
// Fallback for modularized imports:
exports.default = endOfTomorrow;

},{"./constructNow.js":"aJJt5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ud3X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfYesterday} function options.
 */ /**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @returns The end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfYesterday", ()=>endOfYesterday);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
function endOfYesterday(options) {
    const now = (0, _constructNowJs.constructNow)(options?.in);
    const date = (0, _constructFromJs.constructFrom)(options?.in, 0);
    date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
// Fallback for modularized imports:
exports.default = endOfYesterday;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeV53":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
parcelHelpers.export(exports, "formatters", ()=>(0, _formattersJs.formatters));
parcelHelpers.export(exports, "longFormatters", ()=>(0, _longFormattersJs.longFormatters));
parcelHelpers.export(exports, "formatDate", ()=>format);
/**
 * The {@link format} function options.
 */ /**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ parcelHelpers.export(exports, "format", ()=>format);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _formattersJs = require("./_lib/format/formatters.js");
var _longFormattersJs = require("./_lib/format/longFormatters.js");
var _protectedTokensJs = require("./_lib/protectedTokens.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, _toDateJs.toDate)(date, options?.in);
    if (!(0, _isValidJs.isValid)(originalDate)) throw new RangeError("Invalid time value");
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = (0, _longFormattersJs.longFormatters)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") return {
            isToken: false,
            value: "'"
        };
        const firstCharacter = substring[0];
        if (firstCharacter === "'") return {
            isToken: false,
            value: cleanEscapedString(substring)
        };
        if ((0, _formattersJs.formatters)[firstCharacter]) return {
            isToken: true,
            value: substring
        };
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, _protectedTokensJs.isProtectedWeekYearToken)(token) || !options?.useAdditionalDayOfYearTokens && (0, _protectedTokensJs.isProtectedDayOfYearToken)(token)) (0, _protectedTokensJs.warnOrThrowProtectedError)(token, formatStr, String(date));
        const formatter = (0, _formattersJs.formatters)[token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace(doubleQuoteRegExp, "'");
}
// Fallback for modularized imports:
exports.default = format;

},{"./_lib/defaultLocale.js":"iG9h0","./_lib/defaultOptions.js":"98fau","./_lib/format/formatters.js":"zOLvM","./_lib/format/longFormatters.js":"jsbdH","./_lib/protectedTokens.js":"dFKqd","./isValid.js":"gbOJY","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iG9h0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultLocale", ()=>(0, _enUSJs.enUS));
var _enUSJs = require("../locale/en-US.js");

},{"../locale/en-US.js":"haY68","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haY68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enUS", ()=>enUS);
var _formatDistanceJs = require("./en-US/_lib/formatDistance.js");
var _formatLongJs = require("./en-US/_lib/formatLong.js");
var _formatRelativeJs = require("./en-US/_lib/formatRelative.js");
var _localizeJs = require("./en-US/_lib/localize.js");
var _matchJs = require("./en-US/_lib/match.js");
const enUS = {
    code: "en-US",
    formatDistance: (0, _formatDistanceJs.formatDistance),
    formatLong: (0, _formatLongJs.formatLong),
    formatRelative: (0, _formatRelativeJs.formatRelative),
    localize: (0, _localizeJs.localize),
    match: (0, _matchJs.match),
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
exports.default = enUS;

},{"./en-US/_lib/formatDistance.js":"9Lz1e","./en-US/_lib/formatLong.js":"c2f1i","./en-US/_lib/formatRelative.js":"6KKLO","./en-US/_lib/localize.js":"ldfCO","./en-US/_lib/match.js":"c3v7R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Lz1e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c2f1i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatLong", ()=>formatLong);
var _buildFormatLongFnJs = require("../../_lib/buildFormatLongFn.js");
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

},{"../../_lib/buildFormatLongFn.js":"6OYyu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OYyu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildFormatLongFn", ()=>buildFormatLongFn);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KKLO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatRelative", ()=>formatRelative);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldfCO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localize", ()=>localize);
var _buildLocalizeFnJs = require("../../_lib/buildLocalizeFn.js");
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

},{"../../_lib/buildLocalizeFn.js":"fGq1u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGq1u":[function(require,module,exports) {
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLocalizeFn", ()=>buildLocalizeFn);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3v7R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "match", ()=>match);
var _buildMatchFnJs = require("../../_lib/buildMatchFn.js");
var _buildMatchPatternFnJs = require("../../_lib/buildMatchPatternFn.js");
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, _buildMatchPatternFnJs.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

},{"../../_lib/buildMatchFn.js":"15lWd","../../_lib/buildMatchPatternFn.js":"kWqg8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"15lWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchFn", ()=>buildMatchFn);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWqg8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchPatternFn", ()=>buildMatchPatternFn);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zOLvM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatters", ()=>formatters);
var _getDayOfYearJs = require("../../getDayOfYear.js");
var _getISOWeekJs = require("../../getISOWeek.js");
var _getISOWeekYearJs = require("../../getISOWeekYear.js");
var _getWeekJs = require("../../getWeek.js");
var _getWeekYearJs = require("../../getWeekYear.js");
var _addLeadingZerosJs = require("../addLeadingZeros.js");
var _lightFormattersJs = require("./lightFormatters.js");
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return (0, _lightFormattersJs.lightFormatters).y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, _getWeekYearJs.getWeekYear)(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, _addLeadingZerosJs.addLeadingZeros)(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
        // Padding
        return (0, _addLeadingZerosJs.addLeadingZeros)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, _getISOWeekYearJs.getISOWeekYear)(date);
        // Padding
        return (0, _addLeadingZerosJs.addLeadingZeros)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, _addLeadingZerosJs.addLeadingZeros)(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, _addLeadingZerosJs.addLeadingZeros)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, _addLeadingZerosJs.addLeadingZeros)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return (0, _lightFormattersJs.lightFormatters).M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, _addLeadingZerosJs.addLeadingZeros)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, _getWeekJs.getWeek)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, _getISOWeekJs.getISOWeek)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getDate(), {
            unit: "date"
        });
        return (0, _lightFormattersJs.lightFormatters).d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, _getDayOfYearJs.getDayOfYear)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, _addLeadingZerosJs.addLeadingZeros)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, _addLeadingZerosJs.addLeadingZeros)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, _addLeadingZerosJs.addLeadingZeros)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, _lightFormattersJs.lightFormatters).h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getHours(), {
            unit: "hour"
        });
        return (0, _lightFormattersJs.lightFormatters).H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getMinutes(), {
            unit: "minute"
        });
        return (0, _lightFormattersJs.lightFormatters).m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getSeconds(), {
            unit: "second"
        });
        return (0, _lightFormattersJs.lightFormatters).s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return (0, _lightFormattersJs.lightFormatters).S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, _addLeadingZerosJs.addLeadingZeros)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    return sign + String(hours) + delimiter + (0, _addLeadingZerosJs.addLeadingZeros)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, _addLeadingZerosJs.addLeadingZeros)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, _addLeadingZerosJs.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
    const minutes = (0, _addLeadingZerosJs.addLeadingZeros)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}

},{"../../getDayOfYear.js":"lR8Io","../../getISOWeek.js":"fNkwc","../../getISOWeekYear.js":"jWChc","../../getWeek.js":"1zHej","../../getWeekYear.js":"7odmH","../addLeadingZeros.js":"jcCHs","./lightFormatters.js":"bOcKP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lR8Io":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDayOfYear} function options.
 */ /**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */ parcelHelpers.export(exports, "getDayOfYear", ()=>getDayOfYear);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _startOfYearJs = require("./startOfYear.js");
var _toDateJs = require("./toDate.js");
function getDayOfYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(_date, (0, _startOfYearJs.startOfYear)(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
// Fallback for modularized imports:
exports.default = getDayOfYear;

},{"./differenceInCalendarDays.js":"dvya7","./startOfYear.js":"cnrH3","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNkwc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeek} function options.
 */ /**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */ parcelHelpers.export(exports, "getISOWeek", ()=>getISOWeek);
var _constantsJs = require("./constants.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
var _toDateJs = require("./toDate.js");
function getISOWeek(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = +(0, _startOfISOWeekJs.startOfISOWeek)(_date) - +(0, _startOfISOWeekYearJs.startOfISOWeekYear)(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek)) + 1;
}
// Fallback for modularized imports:
exports.default = getISOWeek;

},{"./constants.js":"1vXXw","./startOfISOWeek.js":"iF0wL","./startOfISOWeekYear.js":"eTm1l","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zHej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeek} function options.
 */ /**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */ parcelHelpers.export(exports, "getWeek", ()=>getWeek);
var _constantsJs = require("./constants.js");
var _startOfWeekJs = require("./startOfWeek.js");
var _startOfWeekYearJs = require("./startOfWeekYear.js");
var _toDateJs = require("./toDate.js");
function getWeek(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = +(0, _startOfWeekJs.startOfWeek)(_date, options) - +(0, _startOfWeekYearJs.startOfWeekYear)(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek)) + 1;
}
// Fallback for modularized imports:
exports.default = getWeek;

},{"./constants.js":"1vXXw","./startOfWeek.js":"dDDvv","./startOfWeekYear.js":"diTjA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"diTjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeekYear} function options.
 */ /**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */ parcelHelpers.export(exports, "startOfWeekYear", ()=>startOfWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _getWeekYearJs = require("./getWeekYear.js");
var _startOfWeekJs = require("./startOfWeek.js");
function startOfWeekYear(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, _getWeekYearJs.getWeekYear)(date, options);
    const firstWeek = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, _startOfWeekJs.startOfWeek)(firstWeek, options);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeekYear;

},{"./_lib/defaultOptions.js":"98fau","./constructFrom.js":"hNMdA","./getWeekYear.js":"7odmH","./startOfWeek.js":"dDDvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7odmH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeekYear} function options.
 */ /**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */ parcelHelpers.export(exports, "getWeekYear", ()=>getWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _startOfWeekJs = require("./startOfWeek.js");
var _toDateJs = require("./toDate.js");
function getWeekYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, _startOfWeekJs.startOfWeek)(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, _startOfWeekJs.startOfWeek)(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) return year + 1;
    else if (+_date >= +startOfThisYear) return year;
    else return year - 1;
}
// Fallback for modularized imports:
exports.default = getWeekYear;

},{"./_lib/defaultOptions.js":"98fau","./constructFrom.js":"hNMdA","./startOfWeek.js":"dDDvv","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcCHs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addLeadingZeros", ()=>addLeadingZeros);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOcKP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lightFormatters", ()=>lightFormatters);
var _addLeadingZerosJs = require("../addLeadingZeros.js");
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _addLeadingZerosJs.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, _addLeadingZerosJs.addLeadingZeros)(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _addLeadingZerosJs.addLeadingZeros)(fractionalSeconds, token.length);
    }
};

},{"../addLeadingZeros.js":"jcCHs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsbdH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "longFormatters", ()=>longFormatters);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFKqd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken);
parcelHelpers.export(exports, "warnOrThrowProtectedError", ()=>warnOrThrowProtectedError);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aBg6Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistance} function options.
 */ /**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */ parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _constantsJs = require("./constants.js");
var _differenceInMonthsJs = require("./differenceInMonths.js");
var _differenceInSecondsJs = require("./differenceInSeconds.js");
function formatDistance(laterDate, earlierDate, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const minutesInAlmostTwoDays = 2520;
    const comparison = (0, _compareAscJs.compareAsc)(laterDate, earlierDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const seconds = (0, _differenceInSecondsJs.differenceInSeconds)(earlierDate_, laterDate_);
    const offsetInSeconds = ((0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierDate_) - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterDate_)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
            else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", 1, localizeOptions);
        } else {
            if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
    } else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
    else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
    else if (minutes < (0, _constantsJs.minutesInDay)) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
    else if (minutes < (0, _constantsJs.minutesInMonth)) {
        const days = Math.round(minutes / (0, _constantsJs.minutesInDay));
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < (0, _constantsJs.minutesInMonth) * 2) {
        months = Math.round(minutes / (0, _constantsJs.minutesInMonth));
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, _differenceInMonthsJs.differenceInMonths)(earlierDate_, laterDate_);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / (0, _constantsJs.minutesInMonth));
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
        else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
        else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
}
// Fallback for modularized imports:
exports.default = formatDistance;

},{"./_lib/defaultLocale.js":"iG9h0","./_lib/defaultOptions.js":"98fau","./_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","./_lib/normalizeDates.js":"aCztF","./compareAsc.js":"fgd9M","./constants.js":"1vXXw","./differenceInMonths.js":"i3gFX","./differenceInSeconds.js":"3IvxJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7aKP6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistanceStrict} function options.
 */ /**
 * The unit used to format the distance in {@link formatDistanceStrict}.
 */ /**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */ parcelHelpers.export(exports, "formatDistanceStrict", ()=>formatDistanceStrict);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _constantsJs = require("./constants.js");
function formatDistanceStrict(laterDate, earlierDate, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const comparison = (0, _compareAscJs.compareAsc)(laterDate, earlierDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const roundingMethod = (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod ?? "round");
    const milliseconds = earlierDate_.getTime() - laterDate_.getTime();
    const minutes = milliseconds / (0, _constantsJs.millisecondsInMinute);
    const timezoneOffset = (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierDate_) - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterDate_);
    // Use DST-normalized difference in minutes for years, months and days;
    // use regular difference in minutes for hours, minutes and seconds.
    const dstNormalizedMinutes = (milliseconds - timezoneOffset) / (0, _constantsJs.millisecondsInMinute);
    const defaultUnit = options?.unit;
    let unit;
    if (!defaultUnit) {
        if (minutes < 1) unit = "second";
        else if (minutes < 60) unit = "minute";
        else if (minutes < (0, _constantsJs.minutesInDay)) unit = "hour";
        else if (dstNormalizedMinutes < (0, _constantsJs.minutesInMonth)) unit = "day";
        else if (dstNormalizedMinutes < (0, _constantsJs.minutesInYear)) unit = "month";
        else unit = "year";
    } else unit = defaultUnit;
    // 0 up to 60 seconds
    if (unit === "second") {
        const seconds = roundingMethod(milliseconds / 1000);
        return locale.formatDistance("xSeconds", seconds, localizeOptions);
    // 1 up to 60 mins
    } else if (unit === "minute") {
        const roundedMinutes = roundingMethod(minutes);
        return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
    // 1 up to 24 hours
    } else if (unit === "hour") {
        const hours = roundingMethod(minutes / 60);
        return locale.formatDistance("xHours", hours, localizeOptions);
    // 1 up to 30 days
    } else if (unit === "day") {
        const days = roundingMethod(dstNormalizedMinutes / (0, _constantsJs.minutesInDay));
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 up to 12 months
    } else if (unit === "month") {
        const months = roundingMethod(dstNormalizedMinutes / (0, _constantsJs.minutesInMonth));
        return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
    // 1 year up to max Date
    } else {
        const years = roundingMethod(dstNormalizedMinutes / (0, _constantsJs.minutesInYear));
        return locale.formatDistance("xYears", years, localizeOptions);
    }
}
// Fallback for modularized imports:
exports.default = formatDistanceStrict;

},{"./_lib/defaultLocale.js":"iG9h0","./_lib/defaultOptions.js":"98fau","./_lib/getRoundingMethod.js":"1ipL6","./_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","./_lib/normalizeDates.js":"aCztF","./compareAsc.js":"fgd9M","./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLZ5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistanceToNow} function options.
 */ /**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param date - The given date
 * @param options - The object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */ parcelHelpers.export(exports, "formatDistanceToNow", ()=>formatDistanceToNow);
var _constructNowJs = require("./constructNow.js");
var _formatDistanceJs = require("./formatDistance.js");
function formatDistanceToNow(date, options) {
    return (0, _formatDistanceJs.formatDistance)(date, (0, _constructNowJs.constructNow)(date), options);
}
// Fallback for modularized imports:
exports.default = formatDistanceToNow;

},{"./constructNow.js":"aJJt5","./formatDistance.js":"aBg6Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4IPnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistanceToNowStrict} function options.
 */ /**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */ parcelHelpers.export(exports, "formatDistanceToNowStrict", ()=>formatDistanceToNowStrict);
var _constructNowJs = require("./constructNow.js");
var _formatDistanceStrictJs = require("./formatDistanceStrict.js");
function formatDistanceToNowStrict(date, options) {
    return (0, _formatDistanceStrictJs.formatDistanceStrict)(date, (0, _constructNowJs.constructNow)(date), options);
}
// Fallback for modularized imports:
exports.default = formatDistanceToNowStrict;

},{"./constructNow.js":"aJJt5","./formatDistanceStrict.js":"7aKP6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03dpp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param duration - The duration to format
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */ parcelHelpers.export(exports, "formatDuration", ()=>formatDuration);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
/**
 * The {@link formatDuration} function options.
 */ const defaultFormat = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds"
];
function formatDuration(duration, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const format = options?.format ?? defaultFormat;
    const zero = options?.zero ?? false;
    const delimiter = options?.delimiter ?? " ";
    if (!locale.formatDistance) return "";
    const result = format.reduce((acc, unit)=>{
        const token = `x${unit.replace(/(^.)/, (m)=>m.toUpperCase())}`;
        const value = duration[unit];
        if (value !== undefined && (zero || duration[unit])) return acc.concat(locale.formatDistance(token, value));
        return acc;
    }, []).join(delimiter);
    return result;
}
// Fallback for modularized imports:
exports.default = formatDuration;

},{"./_lib/defaultLocale.js":"iG9h0","./_lib/defaultOptions.js":"98fau","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QewX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatISO} function options.
 */ /**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in local time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */ parcelHelpers.export(exports, "formatISO", ()=>formatISO);
var _addLeadingZerosJs = require("./_lib/addLeadingZeros.js");
var _toDateJs = require("./toDate.js");
function formatISO(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    if (isNaN(+date_)) throw new RangeError("Invalid time value");
    const format = options?.format ?? "extended";
    const representation = options?.representation ?? "complete";
    let result = "";
    let tzOffset = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getDate(), 2);
        const month = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getMonth() + 1, 2);
        const year = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        // Add the timezone.
        const offset = date_.getTimezoneOffset();
        if (offset !== 0) {
            const absoluteOffset = Math.abs(offset);
            const hourOffset = (0, _addLeadingZerosJs.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
            const minuteOffset = (0, _addLeadingZerosJs.addLeadingZeros)(absoluteOffset % 60, 2);
            // If less than 0, the sign is +, because it is ahead of time.
            const sign = offset < 0 ? "+" : "-";
            tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
        } else tzOffset = "Z";
        const hour = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getHours(), 2);
        const minute = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getMinutes(), 2);
        const second = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getSeconds(), 2);
        // If there's also date, separate it with time with 'T'
        const separator = result === "" ? "" : "T";
        // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
        const time = [
            hour,
            minute,
            second
        ].join(timeDelimiter);
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${time}${tzOffset}`;
    }
    return result;
}
// Fallback for modularized imports:
exports.default = formatISO;

},{"./_lib/addLeadingZeros.js":"jcCHs","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOZFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatISO9075} function options.
 */ /**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52'
 */ parcelHelpers.export(exports, "formatISO9075", ()=>formatISO9075);
var _addLeadingZerosJs = require("./_lib/addLeadingZeros.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
function formatISO9075(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    if (!(0, _isValidJs.isValid)(date_)) throw new RangeError("Invalid time value");
    const format = options?.format ?? "extended";
    const representation = options?.representation ?? "complete";
    let result = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getDate(), 2);
        const month = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getMonth() + 1, 2);
        const year = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        const hour = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getHours(), 2);
        const minute = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getMinutes(), 2);
        const second = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getSeconds(), 2);
        // If there's also date, separate it with time with a space
        const separator = result === "" ? "" : " ";
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
    }
    return result;
}
// Fallback for modularized imports:
exports.default = formatISO9075;

},{"./_lib/addLeadingZeros.js":"jcCHs","./isValid.js":"gbOJY","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ZrQ5":[function(require,module,exports) {
/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs//90001488-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param duration - The duration to format
 *
 * @returns The ISO 8601 duration string
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatISODuration", ()=>formatISODuration);
function formatISODuration(duration) {
    const { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
    return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`;
}
// Fallback for modularized imports:
exports.default = formatISODuration;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4C2Wr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatRFC3339} function options.
 */ /**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), {
 *   fractionDigits: 3
 * })
 * //=> '2019-09-18T19:00:52.234Z'
 */ parcelHelpers.export(exports, "formatRFC3339", ()=>formatRFC3339);
var _addLeadingZerosJs = require("./_lib/addLeadingZeros.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
function formatRFC3339(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    if (!(0, _isValidJs.isValid)(date_)) throw new RangeError("Invalid time value");
    const fractionDigits = options?.fractionDigits ?? 0;
    const day = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getDate(), 2);
    const month = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getMonth() + 1, 2);
    const year = date_.getFullYear();
    const hour = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getHours(), 2);
    const minute = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getMinutes(), 2);
    const second = (0, _addLeadingZerosJs.addLeadingZeros)(date_.getSeconds(), 2);
    let fractionalSecond = "";
    if (fractionDigits > 0) {
        const milliseconds = date_.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, fractionDigits - 3));
        fractionalSecond = "." + (0, _addLeadingZerosJs.addLeadingZeros)(fractionalSeconds, fractionDigits);
    }
    let offset = "";
    const tzOffset = date_.getTimezoneOffset();
    if (tzOffset !== 0) {
        const absoluteOffset = Math.abs(tzOffset);
        const hourOffset = (0, _addLeadingZerosJs.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
        const minuteOffset = (0, _addLeadingZerosJs.addLeadingZeros)(absoluteOffset % 60, 2);
        // If less than 0, the sign is +, because it is ahead of time.
        const sign = tzOffset < 0 ? "+" : "-";
        offset = `${sign}${hourOffset}:${minuteOffset}`;
    } else offset = "Z";
    return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
}
// Fallback for modularized imports:
exports.default = formatRFC3339;

},{"./_lib/addLeadingZeros.js":"jcCHs","./isValid.js":"gbOJY","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iRjv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param date - The original date
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */ parcelHelpers.export(exports, "formatRFC7231", ()=>formatRFC7231);
var _addLeadingZerosJs = require("./_lib/addLeadingZeros.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function formatRFC7231(date) {
    const _date = (0, _toDateJs.toDate)(date);
    if (!(0, _isValidJs.isValid)(_date)) throw new RangeError("Invalid time value");
    const dayName = days[_date.getUTCDay()];
    const dayOfMonth = (0, _addLeadingZerosJs.addLeadingZeros)(_date.getUTCDate(), 2);
    const monthName = months[_date.getUTCMonth()];
    const year = _date.getUTCFullYear();
    const hour = (0, _addLeadingZerosJs.addLeadingZeros)(_date.getUTCHours(), 2);
    const minute = (0, _addLeadingZerosJs.addLeadingZeros)(_date.getUTCMinutes(), 2);
    const second = (0, _addLeadingZerosJs.addLeadingZeros)(_date.getUTCSeconds(), 2);
    // Result variables.
    return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}
// Fallback for modularized imports:
exports.default = formatRFC7231;

},{"./_lib/addLeadingZeros.js":"jcCHs","./isValid.js":"gbOJY","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VMIL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatRelative} function options.
 */ /**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The date in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(subDays(new Date(), 6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */ parcelHelpers.export(exports, "formatRelative", ()=>formatRelative);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _formatJs = require("./format.js");
function formatRelative(date, baseDate, options) {
    const [date_, baseDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, date, baseDate);
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(date_, baseDate_);
    if (isNaN(diff)) throw new RangeError("Invalid time value");
    let token;
    if (diff < -6) token = "other";
    else if (diff < -1) token = "lastWeek";
    else if (diff < 0) token = "yesterday";
    else if (diff < 1) token = "today";
    else if (diff < 2) token = "tomorrow";
    else if (diff < 7) token = "nextWeek";
    else token = "other";
    const formatStr = locale.formatRelative(token, date_, baseDate_, {
        locale,
        weekStartsOn
    });
    return (0, _formatJs.format)(date_, formatStr, {
        locale,
        weekStartsOn
    });
}
// Fallback for modularized imports:
exports.default = formatRelative;

},{"./_lib/defaultLocale.js":"iG9h0","./_lib/defaultOptions.js":"98fau","./_lib/normalizeDates.js":"aCztF","./differenceInCalendarDays.js":"dvya7","./format.js":"eeV53","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kcMW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link fromUnixTime} function options.
 */ /**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param unixTime - The given Unix timestamp (in seconds)
 * @param options - An object with options. Allows to pass a context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */ parcelHelpers.export(exports, "fromUnixTime", ()=>fromUnixTime);
var _toDateJs = require("./toDate.js");
function fromUnixTime(unixTime, options) {
    return (0, _toDateJs.toDate)(unixTime * 1000, options?.in);
}
// Fallback for modularized imports:
exports.default = fromUnixTime;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yhYa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDate} function options.
 */ /**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */ parcelHelpers.export(exports, "getDate", ()=>getDate);
var _toDateJs = require("./toDate.js");
function getDate(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDate();
}
// Fallback for modularized imports:
exports.default = getDate;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esFEi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDay} function options.
 */ /**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */ parcelHelpers.export(exports, "getDay", ()=>getDay);
var _toDateJs = require("./toDate.js");
function getDay(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay();
}
// Fallback for modularized imports:
exports.default = getDay;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iS77p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDaysInMonth} function options.
 */ /**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */ parcelHelpers.export(exports, "getDaysInMonth", ()=>getDaysInMonth);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function getDaysInMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const monthIndex = _date.getMonth();
    const lastDayOfMonth = (0, _constructFromJs.constructFrom)(_date, 0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}
// Fallback for modularized imports:
exports.default = getDaysInMonth;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f28wB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDaysInYear} function options.
 */ /**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */ parcelHelpers.export(exports, "getDaysInYear", ()=>getDaysInYear);
var _isLeapYearJs = require("./isLeapYear.js");
var _toDateJs = require("./toDate.js");
function getDaysInYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    if (Number.isNaN(+_date)) return NaN;
    return (0, _isLeapYearJs.isLeapYear)(_date) ? 366 : 365;
}
// Fallback for modularized imports:
exports.default = getDaysInYear;

},{"./isLeapYear.js":"5jn07","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jn07":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */ parcelHelpers.export(exports, "isLeapYear", ()=>isLeapYear);
var _toDateJs = require("./toDate.js");
function isLeapYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
// Fallback for modularized imports:
exports.default = isLeapYear;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"t2HDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDecade} function options.
 */ /**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year of decade
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */ parcelHelpers.export(exports, "getDecade", ()=>getDecade);
var _toDateJs = require("./toDate.js");
function getDecade(date, options) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const decade = Math.floor(year / 10) * 10;
    return decade;
}
// Fallback for modularized imports:
exports.default = getDecade;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAxdh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */ parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
function getDefaultOptions() {
    return Object.assign({}, (0, _defaultOptionsJs.getDefaultOptions)());
}
// Fallback for modularized imports:
exports.default = getDefaultOptions;

},{"./_lib/defaultOptions.js":"98fau","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRfdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getHours} function options.
 */ /**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */ parcelHelpers.export(exports, "getHours", ()=>getHours);
var _toDateJs = require("./toDate.js");
function getHours(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getHours();
}
// Fallback for modularized imports:
exports.default = getHours;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9d1Pg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISODay} function options.
 */ /**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */ parcelHelpers.export(exports, "getISODay", ()=>getISODay);
var _toDateJs = require("./toDate.js");
function getISODay(date, options) {
    const day = (0, _toDateJs.toDate)(date, options?.in).getDay();
    return day === 0 ? 7 : day;
}
// Fallback for modularized imports:
exports.default = getISODay;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwH0c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeeksInYear} function options.
 */ /**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */ parcelHelpers.export(exports, "getISOWeeksInYear", ()=>getISOWeeksInYear);
var _addWeeksJs = require("./addWeeks.js");
var _constantsJs = require("./constants.js");
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
function getISOWeeksInYear(date, options) {
    const thisYear = (0, _startOfISOWeekYearJs.startOfISOWeekYear)(date, options);
    const nextYear = (0, _startOfISOWeekYearJs.startOfISOWeekYear)((0, _addWeeksJs.addWeeks)(thisYear, 60));
    const diff = +nextYear - +thisYear;
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek));
}
// Fallback for modularized imports:
exports.default = getISOWeeksInYear;

},{"./addWeeks.js":"6sRN6","./constants.js":"1vXXw","./startOfISOWeekYear.js":"eTm1l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2axfx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param date - The given date
 *
 * @returns The milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */ parcelHelpers.export(exports, "getMilliseconds", ()=>getMilliseconds);
var _toDateJs = require("./toDate.js");
function getMilliseconds(date) {
    return (0, _toDateJs.toDate)(date).getMilliseconds();
}
// Fallback for modularized imports:
exports.default = getMilliseconds;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzd1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getMinutes} function options.
 */ /**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */ parcelHelpers.export(exports, "getMinutes", ()=>getMinutes);
var _toDateJs = require("./toDate.js");
function getMinutes(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getMinutes();
}
// Fallback for modularized imports:
exports.default = getMinutes;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kio1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getMonth} function options.
 */ /**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */ parcelHelpers.export(exports, "getMonth", ()=>getMonth);
var _toDateJs = require("./toDate.js");
function getMonth(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getMonth();
}
// Fallback for modularized imports:
exports.default = getMonth;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"C2P0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals. It uses the time
 * between dates to calculate the number of days, rounding it up to include
 * partial days.
 *
 * Two equal 0-length intervals will result in 0. Two equal 1ms intervals will
 * result in 1.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - An object with options
 *
 * @returns The number of days that overlap in two time intervals
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */ parcelHelpers.export(exports, "getOverlappingDaysInIntervals", ()=>getOverlappingDaysInIntervals);
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _constantsJs = require("./constants.js");
var _toDateJs = require("./toDate.js");
function getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
    const [leftStart, leftEnd] = [
        +(0, _toDateJs.toDate)(intervalLeft.start),
        +(0, _toDateJs.toDate)(intervalLeft.end)
    ].sort((a, b)=>a - b);
    const [rightStart, rightEnd] = [
        +(0, _toDateJs.toDate)(intervalRight.start),
        +(0, _toDateJs.toDate)(intervalRight.end)
    ].sort((a, b)=>a - b);
    // Prevent NaN result if intervals don't overlap at all.
    const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
    if (!isOverlapping) return 0;
    // Remove the timezone offset to negate the DST effect on calculations.
    const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
    const left = overlapLeft - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(overlapLeft);
    const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
    const right = overlapRight - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(overlapRight);
    // Ceil the number to include partial days too.
    return Math.ceil((right - left) / (0, _constantsJs.millisecondsInDay));
}
// Fallback for modularized imports:
exports.default = getOverlappingDaysInIntervals;

},{"./_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","./constants.js":"1vXXw","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22KCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param date - The given date
 *
 * @returns The seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */ parcelHelpers.export(exports, "getSeconds", ()=>getSeconds);
var _toDateJs = require("./toDate.js");
function getSeconds(date) {
    return (0, _toDateJs.toDate)(date).getSeconds();
}
// Fallback for modularized imports:
exports.default = getSeconds;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lNv1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */ parcelHelpers.export(exports, "getTime", ()=>getTime);
var _toDateJs = require("./toDate.js");
function getTime(date) {
    return +(0, _toDateJs.toDate)(date);
}
// Fallback for modularized imports:
exports.default = getTime;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hP8NA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */ parcelHelpers.export(exports, "getUnixTime", ()=>getUnixTime);
var _toDateJs = require("./toDate.js");
function getUnixTime(date) {
    return Math.trunc(+(0, _toDateJs.toDate)(date) / 1000);
}
// Fallback for modularized imports:
exports.default = getUnixTime;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"S6fio":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeekOfMonth} function options.
 */ /**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */ parcelHelpers.export(exports, "getWeekOfMonth", ()=>getWeekOfMonth);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _getDateJs = require("./getDate.js");
var _getDayJs = require("./getDay.js");
var _startOfMonthJs = require("./startOfMonth.js");
var _toDateJs = require("./toDate.js");
function getWeekOfMonth(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const currentDayOfMonth = (0, _getDateJs.getDate)((0, _toDateJs.toDate)(date, options?.in));
    if (isNaN(currentDayOfMonth)) return NaN;
    const startWeekDay = (0, _getDayJs.getDay)((0, _startOfMonthJs.startOfMonth)(date, options));
    let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
    if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
// Fallback for modularized imports:
exports.default = getWeekOfMonth;

},{"./_lib/defaultOptions.js":"98fau","./getDate.js":"5yhYa","./getDay.js":"esFEi","./startOfMonth.js":"1cHoB","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqTdg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeeksInMonth} function options.
 */ /**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */ parcelHelpers.export(exports, "getWeeksInMonth", ()=>getWeeksInMonth);
var _differenceInCalendarWeeksJs = require("./differenceInCalendarWeeks.js");
var _lastDayOfMonthJs = require("./lastDayOfMonth.js");
var _startOfMonthJs = require("./startOfMonth.js");
var _toDateJs = require("./toDate.js");
function getWeeksInMonth(date, options) {
    const contextDate = (0, _toDateJs.toDate)(date, options?.in);
    return (0, _differenceInCalendarWeeksJs.differenceInCalendarWeeks)((0, _lastDayOfMonthJs.lastDayOfMonth)(contextDate, options), (0, _startOfMonthJs.startOfMonth)(contextDate, options), options) + 1;
}
// Fallback for modularized imports:
exports.default = getWeeksInMonth;

},{"./differenceInCalendarWeeks.js":"iWbGJ","./lastDayOfMonth.js":"lVD0G","./startOfMonth.js":"1cHoB","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVD0G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfMonth} function options.
 */ /**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */ parcelHelpers.export(exports, "lastDayOfMonth", ()=>lastDayOfMonth);
var _toDateJs = require("./toDate.js");
function lastDayOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(0, 0, 0, 0);
    return (0, _toDateJs.toDate)(_date, options?.in);
}
// Fallback for modularized imports:
exports.default = lastDayOfMonth;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glolq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getYear} function options.
 */ /**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */ parcelHelpers.export(exports, "getYear", ()=>getYear);
var _toDateJs = require("./toDate.js");
function getYear(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getFullYear();
}
// Fallback for modularized imports:
exports.default = getYear;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1t8KQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted to milliseconds
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */ parcelHelpers.export(exports, "hoursToMilliseconds", ()=>hoursToMilliseconds);
var _constantsJs = require("./constants.js");
function hoursToMilliseconds(hours) {
    return Math.trunc(hours * (0, _constantsJs.millisecondsInHour));
}
// Fallback for modularized imports:
exports.default = hoursToMilliseconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3agDO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted in minutes
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */ parcelHelpers.export(exports, "hoursToMinutes", ()=>hoursToMinutes);
var _constantsJs = require("./constants.js");
function hoursToMinutes(hours) {
    return Math.trunc(hours * (0, _constantsJs.minutesInHour));
}
// Fallback for modularized imports:
exports.default = hoursToMinutes;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9tWS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @param hours - The number of hours to be converted
 *
 * @returns The number of hours converted in seconds
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */ parcelHelpers.export(exports, "hoursToSeconds", ()=>hoursToSeconds);
var _constantsJs = require("./constants.js");
function hoursToSeconds(hours) {
    return Math.trunc(hours * (0, _constantsJs.secondsInHour));
}
// Fallback for modularized imports:
exports.default = hoursToSeconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZrN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link interval} function options.
 */ /**
 * The {@link interval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the start argument,
 * then the end interval date. If a context function is passed, it uses the context
 * function return type.
 */ /**
 * @name interval
 * @category Interval Helpers
 * @summary Creates an interval object and validates its values.
 *
 * @description
 * Creates a normalized interval object and validates its values. If the interval is invalid, an exception is thrown.
 *
 * @typeParam StartDate - Start date type.
 * @typeParam EndDate - End date type.
 * @typeParam Options - Options type.
 *
 * @param start - The start of the interval.
 * @param end - The end of the interval.
 * @param options - The options object.
 *
 * @throws `Start date is invalid` when `start` is invalid.
 * @throws `End date is invalid` when `end` is invalid.
 * @throws `End date must be after start date` when end is before `start` and `options.assertPositive` is true.
 *
 * @returns The normalized and validated interval object.
 */ parcelHelpers.export(exports, "interval", ()=>interval);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function interval(start, end, options) {
    const [_start, _end] = (0, _normalizeDatesJs.normalizeDates)(options?.in, start, end);
    if (isNaN(+_start)) throw new TypeError("Start date is invalid");
    if (isNaN(+_end)) throw new TypeError("End date is invalid");
    if (options?.assertPositive && +_start > +_end) throw new TypeError("End date must be after start date");
    return {
        start: _start,
        end: _end
    };
}
// Fallback for modularized imports:
exports.default = interval;

},{"./_lib/normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpzaD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link intervalToDuration} function options.
 */ /**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert an interval object to a duration object.
 *
 * @param interval - The interval to convert to duration
 * @param options - The context options
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * });
 * //=> { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */ parcelHelpers.export(exports, "intervalToDuration", ()=>intervalToDuration);
var _normalizeIntervalJs = require("./_lib/normalizeInterval.js");
var _addJs = require("./add.js");
var _differenceInDaysJs = require("./differenceInDays.js");
var _differenceInHoursJs = require("./differenceInHours.js");
var _differenceInMinutesJs = require("./differenceInMinutes.js");
var _differenceInMonthsJs = require("./differenceInMonths.js");
var _differenceInSecondsJs = require("./differenceInSeconds.js");
var _differenceInYearsJs = require("./differenceInYears.js");
function intervalToDuration(interval, options) {
    const { start, end } = (0, _normalizeIntervalJs.normalizeInterval)(options?.in, interval);
    const duration = {};
    const years = (0, _differenceInYearsJs.differenceInYears)(end, start);
    if (years) duration.years = years;
    const remainingMonths = (0, _addJs.add)(start, {
        years: duration.years
    });
    const months = (0, _differenceInMonthsJs.differenceInMonths)(end, remainingMonths);
    if (months) duration.months = months;
    const remainingDays = (0, _addJs.add)(remainingMonths, {
        months: duration.months
    });
    const days = (0, _differenceInDaysJs.differenceInDays)(end, remainingDays);
    if (days) duration.days = days;
    const remainingHours = (0, _addJs.add)(remainingDays, {
        days: duration.days
    });
    const hours = (0, _differenceInHoursJs.differenceInHours)(end, remainingHours);
    if (hours) duration.hours = hours;
    const remainingMinutes = (0, _addJs.add)(remainingHours, {
        hours: duration.hours
    });
    const minutes = (0, _differenceInMinutesJs.differenceInMinutes)(end, remainingMinutes);
    if (minutes) duration.minutes = minutes;
    const remainingSeconds = (0, _addJs.add)(remainingMinutes, {
        minutes: duration.minutes
    });
    const seconds = (0, _differenceInSecondsJs.differenceInSeconds)(end, remainingSeconds);
    if (seconds) duration.seconds = seconds;
    return duration;
}
// Fallback for modularized imports:
exports.default = intervalToDuration;

},{"./_lib/normalizeInterval.js":"hvkOk","./add.js":"hboah","./differenceInDays.js":"fJoFi","./differenceInHours.js":"jnteW","./differenceInMinutes.js":"Z5oWO","./differenceInMonths.js":"i3gFX","./differenceInSeconds.js":"3IvxJ","./differenceInYears.js":"iFe68","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yh4g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 * @deprecated
 *
 * [TODO] Remove in v4
 */ /**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 */ /**
 * The locale options.
 */ /**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */ /**
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   locale: 'ko-KR',
 * })
 * //=> 2019. 10. 4.
 */ /**
 * @param date - The date to format
 * @param formatOptions - The format options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   year: 'numeric',
 *   month: 'numeric',
 *   day: 'numeric',
 *   hour: 'numeric',
 * })
 * //=> 10/4/2019, 12 PM
 */ /**
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 */ parcelHelpers.export(exports, "intlFormat", ()=>intlFormat);
var _toDateJs = require("./toDate.js");
function intlFormat(date, formatOrLocale, localeOptions) {
    let formatOptions;
    if (isFormatOptions(formatOrLocale)) formatOptions = formatOrLocale;
    else localeOptions = formatOrLocale;
    return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format((0, _toDateJs.toDate)(date));
}
function isFormatOptions(opts) {
    return opts !== undefined && !("locale" in opts);
}
// Fallback for modularized imports:
exports.default = intlFormat;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4dv0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link intlFormatDistance} function options.
 */ /**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */ /**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */ parcelHelpers.export(exports, "intlFormatDistance", ()=>intlFormatDistance);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
var _differenceInCalendarQuartersJs = require("./differenceInCalendarQuarters.js");
var _differenceInCalendarWeeksJs = require("./differenceInCalendarWeeks.js");
var _differenceInCalendarYearsJs = require("./differenceInCalendarYears.js");
var _differenceInHoursJs = require("./differenceInHours.js");
var _differenceInMinutesJs = require("./differenceInMinutes.js");
var _differenceInSecondsJs = require("./differenceInSeconds.js");
function intlFormatDistance(laterDate, earlierDate, options) {
    let value = 0;
    let unit;
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    if (!options?.unit) {
        // Get the unit based on diffInSeconds calculations if no unit is specified
        const diffInSeconds = (0, _differenceInSecondsJs.differenceInSeconds)(laterDate_, earlierDate_); // The smallest unit
        if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInMinute)) {
            value = (0, _differenceInSecondsJs.differenceInSeconds)(laterDate_, earlierDate_);
            unit = "second";
        } else if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInHour)) {
            value = (0, _differenceInMinutesJs.differenceInMinutes)(laterDate_, earlierDate_);
            unit = "minute";
        } else if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInDay) && Math.abs((0, _differenceInCalendarDaysJs.differenceInCalendarDays)(laterDate_, earlierDate_)) < 1) {
            value = (0, _differenceInHoursJs.differenceInHours)(laterDate_, earlierDate_);
            unit = "hour";
        } else if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInWeek) && (value = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(laterDate_, earlierDate_)) && Math.abs(value) < 7) unit = "day";
        else if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInMonth)) {
            value = (0, _differenceInCalendarWeeksJs.differenceInCalendarWeeks)(laterDate_, earlierDate_);
            unit = "week";
        } else if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInQuarter)) {
            value = (0, _differenceInCalendarMonthsJs.differenceInCalendarMonths)(laterDate_, earlierDate_);
            unit = "month";
        } else if (Math.abs(diffInSeconds) < (0, _constantsJs.secondsInYear)) {
            if ((0, _differenceInCalendarQuartersJs.differenceInCalendarQuarters)(laterDate_, earlierDate_) < 4) {
                // To filter out cases that are less than a year but match 4 quarters
                value = (0, _differenceInCalendarQuartersJs.differenceInCalendarQuarters)(laterDate_, earlierDate_);
                unit = "quarter";
            } else {
                value = (0, _differenceInCalendarYearsJs.differenceInCalendarYears)(laterDate_, earlierDate_);
                unit = "year";
            }
        } else {
            value = (0, _differenceInCalendarYearsJs.differenceInCalendarYears)(laterDate_, earlierDate_);
            unit = "year";
        }
    } else {
        // Get the value if unit is specified
        unit = options?.unit;
        if (unit === "second") value = (0, _differenceInSecondsJs.differenceInSeconds)(laterDate_, earlierDate_);
        else if (unit === "minute") value = (0, _differenceInMinutesJs.differenceInMinutes)(laterDate_, earlierDate_);
        else if (unit === "hour") value = (0, _differenceInHoursJs.differenceInHours)(laterDate_, earlierDate_);
        else if (unit === "day") value = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(laterDate_, earlierDate_);
        else if (unit === "week") value = (0, _differenceInCalendarWeeksJs.differenceInCalendarWeeks)(laterDate_, earlierDate_);
        else if (unit === "month") value = (0, _differenceInCalendarMonthsJs.differenceInCalendarMonths)(laterDate_, earlierDate_);
        else if (unit === "quarter") value = (0, _differenceInCalendarQuartersJs.differenceInCalendarQuarters)(laterDate_, earlierDate_);
        else if (unit === "year") value = (0, _differenceInCalendarYearsJs.differenceInCalendarYears)(laterDate_, earlierDate_);
    }
    const rtf = new Intl.RelativeTimeFormat(options?.locale, {
        numeric: "auto",
        ...options
    });
    return rtf.format(value, unit);
}
// Fallback for modularized imports:
exports.default = intlFormatDistance;

},{"./_lib/normalizeDates.js":"aCztF","./constants.js":"1vXXw","./differenceInCalendarDays.js":"dvya7","./differenceInCalendarMonths.js":"21Qeg","./differenceInCalendarQuarters.js":"kWjSX","./differenceInCalendarWeeks.js":"iWbGJ","./differenceInCalendarYears.js":"e0VtU","./differenceInHours.js":"jnteW","./differenceInMinutes.js":"Z5oWO","./differenceInSeconds.js":"3IvxJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ogSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */ parcelHelpers.export(exports, "isAfter", ()=>isAfter);
var _toDateJs = require("./toDate.js");
function isAfter(date, dateToCompare) {
    return +(0, _toDateJs.toDate)(date) > +(0, _toDateJs.toDate)(dateToCompare);
}
// Fallback for modularized imports:
exports.default = isAfter;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AV3j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */ parcelHelpers.export(exports, "isBefore", ()=>isBefore);
var _toDateJs = require("./toDate.js");
function isBefore(date, dateToCompare) {
    return +(0, _toDateJs.toDate)(date) < +(0, _toDateJs.toDate)(dateToCompare);
}
// Fallback for modularized imports:
exports.default = isBefore;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqhPh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */ parcelHelpers.export(exports, "isEqual", ()=>isEqual);
var _toDateJs = require("./toDate.js");
function isEqual(leftDate, rightDate) {
    return +(0, _toDateJs.toDate)(leftDate) === +(0, _toDateJs.toDate)(rightDate);
}
// Fallback for modularized imports:
exports.default = isEqual;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cexO":[function(require,module,exports) {
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param year - The year of the date to check
 * @param month - The month of the date to check
 * @param day - The day of the date to check
 *
 * @returns `true` if the date exists
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isExists", ()=>isExists);
function isExists(year, month, day) {
    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
// Fallback for modularized imports:
exports.default = isExists;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyMIP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isFirstDayOfMonth} function options.
 */ /**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */ parcelHelpers.export(exports, "isFirstDayOfMonth", ()=>isFirstDayOfMonth);
var _toDateJs = require("./toDate.js");
function isFirstDayOfMonth(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDate() === 1;
}
// Fallback for modularized imports:
exports.default = isFirstDayOfMonth;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzcyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isFriday} function options.
 */ /**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */ parcelHelpers.export(exports, "isFriday", ()=>isFriday);
var _toDateJs = require("./toDate.js");
function isFriday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 5;
}
// Fallback for modularized imports:
exports.default = isFriday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6qf1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * @param date - The date to check
 *
 * @returns The date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */ parcelHelpers.export(exports, "isFuture", ()=>isFuture);
var _toDateJs = require("./toDate.js");
function isFuture(date) {
    return +(0, _toDateJs.toDate)(date) > Date.now();
}
// Fallback for modularized imports:
exports.default = isFuture;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dnyZz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isMatch} function options.
 */ /**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * @param dateStr - The date string to verify
 * @param format - The string of tokens
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns Is format string a match for date string?
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * const result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * const result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */ parcelHelpers.export(exports, "isMatch", ()=>isMatch);
var _isValidJs = require("./isValid.js");
var _parseJs = require("./parse.js");
function isMatch(dateStr, formatStr, options) {
    return (0, _isValidJs.isValid)((0, _parseJs.parse)(dateStr, formatStr, new Date(), options));
}
// Fallback for modularized imports:
exports.default = isMatch;

},{"./isValid.js":"gbOJY","./parse.js":"gNLjl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNLjl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
parcelHelpers.export(exports, "longFormatters", ()=>(0, _longFormattersJs.longFormatters));
parcelHelpers.export(exports, "parsers", ()=>(0, _parsersJs.parsers));
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */ parcelHelpers.export(exports, "parse", ()=>parse);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _longFormattersJs = require("./_lib/format/longFormatters.js");
var _protectedTokensJs = require("./_lib/protectedTokens.js");
var _constructFromJs = require("./constructFrom.js");
var _getDefaultOptionsJs = require("./getDefaultOptions.js");
var _toDateJs = require("./toDate.js");
var _setterJs = require("./parse/_lib/Setter.js");
var _parsersJs = require("./parse/_lib/parsers.js");
/**
 * The {@link parse} function options.
 */ // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dateStr, formatStr, referenceDate, options) {
    const invalidDate = ()=>(0, _constructFromJs.constructFrom)(options?.in || referenceDate, NaN);
    const defaultOptions = (0, _getDefaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    if (!formatStr) return dateStr ? invalidDate() : (0, _toDateJs.toDate)(referenceDate, options?.in);
    const subFnOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    // If timezone isn't specified, it will try to use the context or
    // the reference date and fallback to the system time zone.
    const setters = [
        new (0, _setterJs.DateTimezoneSetter)(options?.in, referenceDate)
    ];
    const tokens = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter in (0, _longFormattersJs.longFormatters)) {
            const longFormatter = (0, _longFormattersJs.longFormatters)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp);
    const usedTokens = [];
    for (let token of tokens){
        if (!options?.useAdditionalWeekYearTokens && (0, _protectedTokensJs.isProtectedWeekYearToken)(token)) (0, _protectedTokensJs.warnOrThrowProtectedError)(token, formatStr, dateStr);
        if (!options?.useAdditionalDayOfYearTokens && (0, _protectedTokensJs.isProtectedDayOfYearToken)(token)) (0, _protectedTokensJs.warnOrThrowProtectedError)(token, formatStr, dateStr);
        const firstCharacter = token[0];
        const parser = (0, _parsersJs.parsers)[firstCharacter];
        if (parser) {
            const { incompatibleTokens } = parser;
            if (Array.isArray(incompatibleTokens)) {
                const incompatibleToken = usedTokens.find((usedToken)=>incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
                if (incompatibleToken) throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
            } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
            usedTokens.push({
                token: firstCharacter,
                fullToken: token
            });
            const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
            if (!parseResult) return invalidDate();
            setters.push(parseResult.setter);
            dateStr = parseResult.rest;
        } else {
            if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
            // Replace two single quote characters with one single quote character
            if (token === "''") token = "'";
            else if (firstCharacter === "'") token = cleanEscapedString(token);
            // Cut token from string, or, if string doesn't match the token, return Invalid Date
            if (dateStr.indexOf(token) === 0) dateStr = dateStr.slice(token.length);
            else return invalidDate();
        }
    }
    // Check if the remaining input contains something other than whitespace
    if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) return invalidDate();
    const uniquePrioritySetters = setters.map((setter)=>setter.priority).sort((a, b)=>b - a).filter((priority, index, array)=>array.indexOf(priority) === index).map((priority)=>setters.filter((setter)=>setter.priority === priority).sort((a, b)=>b.subPriority - a.subPriority)).map((setterArray)=>setterArray[0]);
    let date = (0, _toDateJs.toDate)(referenceDate, options?.in);
    if (isNaN(+date)) return invalidDate();
    const flags = {};
    for (const setter of uniquePrioritySetters){
        if (!setter.validate(date, subFnOptions)) return invalidDate();
        const result = setter.set(date, flags, subFnOptions);
        // Result is tuple (date, flags)
        if (Array.isArray(result)) {
            date = result[0];
            Object.assign(flags, result[1]);
        // Result is date
        } else date = result;
    }
    return date;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
// Fallback for modularized imports:
exports.default = parse;

},{"./_lib/defaultLocale.js":"iG9h0","./_lib/format/longFormatters.js":"jsbdH","./_lib/protectedTokens.js":"dFKqd","./constructFrom.js":"hNMdA","./getDefaultOptions.js":"fAxdh","./toDate.js":"actWA","./parse/_lib/Setter.js":"kYmxL","./parse/_lib/parsers.js":"2oKol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kYmxL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Setter", ()=>Setter);
parcelHelpers.export(exports, "ValueSetter", ()=>ValueSetter);
parcelHelpers.export(exports, "DateTimezoneSetter", ()=>DateTimezoneSetter);
var _constructFromJs = require("../../constructFrom.js");
var _transposeJs = require("../../transpose.js");
const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
    subPriority = 0;
    validate(_utcDate, _options) {
        return true;
    }
}
class ValueSetter extends Setter {
    constructor(value, validateValue, setValue, priority, subPriority){
        super();
        this.value = value;
        this.validateValue = validateValue;
        this.setValue = setValue;
        this.priority = priority;
        if (subPriority) this.subPriority = subPriority;
    }
    validate(date, options) {
        return this.validateValue(date, this.value, options);
    }
    set(date, flags, options) {
        return this.setValue(date, flags, this.value, options);
    }
}
class DateTimezoneSetter extends Setter {
    priority = TIMEZONE_UNIT_PRIORITY;
    subPriority = -1;
    constructor(context, reference){
        super();
        this.context = context || ((date)=>(0, _constructFromJs.constructFrom)(reference, date));
    }
    set(date, flags) {
        if (flags.timestampIsSet) return date;
        return (0, _constructFromJs.constructFrom)(date, (0, _transposeJs.transpose)(date, this.context));
    }
}

},{"../../constructFrom.js":"hNMdA","../../transpose.js":"4DdgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DdgS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam InputDate - The input `Date` type derived from the passed argument.
 * @typeParam ResultDate - The result `Date` type derived from the passed constructor.
 *
 * @param date - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
var _constructFromJs = require("./constructFrom.js");
function transpose(date, constructor) {
    const date_ = isConstructor(constructor) ? new constructor(0) : (0, _constructFromJs.constructFrom)(constructor, 0);
    date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return date_;
}
function isConstructor(constructor) {
    return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}
// Fallback for modularized imports:
exports.default = transpose;

},{"./constructFrom.js":"hNMdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2oKol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parsers", ()=>parsers);
var _eraParserJs = require("./parsers/EraParser.js");
var _yearParserJs = require("./parsers/YearParser.js");
var _localWeekYearParserJs = require("./parsers/LocalWeekYearParser.js");
var _isoweekYearParserJs = require("./parsers/ISOWeekYearParser.js");
var _extendedYearParserJs = require("./parsers/ExtendedYearParser.js");
var _quarterParserJs = require("./parsers/QuarterParser.js");
var _standAloneQuarterParserJs = require("./parsers/StandAloneQuarterParser.js");
var _monthParserJs = require("./parsers/MonthParser.js");
var _standAloneMonthParserJs = require("./parsers/StandAloneMonthParser.js");
var _localWeekParserJs = require("./parsers/LocalWeekParser.js");
var _isoweekParserJs = require("./parsers/ISOWeekParser.js");
var _dateParserJs = require("./parsers/DateParser.js");
var _dayOfYearParserJs = require("./parsers/DayOfYearParser.js");
var _dayParserJs = require("./parsers/DayParser.js");
var _localDayParserJs = require("./parsers/LocalDayParser.js");
var _standAloneLocalDayParserJs = require("./parsers/StandAloneLocalDayParser.js");
var _isodayParserJs = require("./parsers/ISODayParser.js");
var _ampmparserJs = require("./parsers/AMPMParser.js");
var _ampmmidnightParserJs = require("./parsers/AMPMMidnightParser.js");
var _dayPeriodParserJs = require("./parsers/DayPeriodParser.js");
var _hour1To12ParserJs = require("./parsers/Hour1to12Parser.js");
var _hour0To23ParserJs = require("./parsers/Hour0to23Parser.js");
var _hour0To11ParserJs = require("./parsers/Hour0To11Parser.js");
var _hour1To24ParserJs = require("./parsers/Hour1To24Parser.js");
var _minuteParserJs = require("./parsers/MinuteParser.js");
var _secondParserJs = require("./parsers/SecondParser.js");
var _fractionOfSecondParserJs = require("./parsers/FractionOfSecondParser.js");
var _isotimezoneWithZParserJs = require("./parsers/ISOTimezoneWithZParser.js");
var _isotimezoneParserJs = require("./parsers/ISOTimezoneParser.js");
var _timestampSecondsParserJs = require("./parsers/TimestampSecondsParser.js");
var _timestampMillisecondsParserJs = require("./parsers/TimestampMillisecondsParser.js");
const parsers = {
    G: new (0, _eraParserJs.EraParser)(),
    y: new (0, _yearParserJs.YearParser)(),
    Y: new (0, _localWeekYearParserJs.LocalWeekYearParser)(),
    R: new (0, _isoweekYearParserJs.ISOWeekYearParser)(),
    u: new (0, _extendedYearParserJs.ExtendedYearParser)(),
    Q: new (0, _quarterParserJs.QuarterParser)(),
    q: new (0, _standAloneQuarterParserJs.StandAloneQuarterParser)(),
    M: new (0, _monthParserJs.MonthParser)(),
    L: new (0, _standAloneMonthParserJs.StandAloneMonthParser)(),
    w: new (0, _localWeekParserJs.LocalWeekParser)(),
    I: new (0, _isoweekParserJs.ISOWeekParser)(),
    d: new (0, _dateParserJs.DateParser)(),
    D: new (0, _dayOfYearParserJs.DayOfYearParser)(),
    E: new (0, _dayParserJs.DayParser)(),
    e: new (0, _localDayParserJs.LocalDayParser)(),
    c: new (0, _standAloneLocalDayParserJs.StandAloneLocalDayParser)(),
    i: new (0, _isodayParserJs.ISODayParser)(),
    a: new (0, _ampmparserJs.AMPMParser)(),
    b: new (0, _ampmmidnightParserJs.AMPMMidnightParser)(),
    B: new (0, _dayPeriodParserJs.DayPeriodParser)(),
    h: new (0, _hour1To12ParserJs.Hour1to12Parser)(),
    H: new (0, _hour0To23ParserJs.Hour0to23Parser)(),
    K: new (0, _hour0To11ParserJs.Hour0To11Parser)(),
    k: new (0, _hour1To24ParserJs.Hour1To24Parser)(),
    m: new (0, _minuteParserJs.MinuteParser)(),
    s: new (0, _secondParserJs.SecondParser)(),
    S: new (0, _fractionOfSecondParserJs.FractionOfSecondParser)(),
    X: new (0, _isotimezoneWithZParserJs.ISOTimezoneWithZParser)(),
    x: new (0, _isotimezoneParserJs.ISOTimezoneParser)(),
    t: new (0, _timestampSecondsParserJs.TimestampSecondsParser)(),
    T: new (0, _timestampMillisecondsParserJs.TimestampMillisecondsParser)()
};

},{"./parsers/EraParser.js":"iYhYF","./parsers/YearParser.js":"kf1Wf","./parsers/LocalWeekYearParser.js":"jDcds","./parsers/ISOWeekYearParser.js":"ap5xA","./parsers/ExtendedYearParser.js":"lW99W","./parsers/QuarterParser.js":"dsY9k","./parsers/StandAloneQuarterParser.js":"aSfyW","./parsers/MonthParser.js":"EYpZp","./parsers/StandAloneMonthParser.js":"jbrkt","./parsers/LocalWeekParser.js":"8rNDN","./parsers/ISOWeekParser.js":"dfdwt","./parsers/DateParser.js":"fYv6C","./parsers/DayOfYearParser.js":"9cmRX","./parsers/DayParser.js":"ksDae","./parsers/LocalDayParser.js":"jgAEp","./parsers/StandAloneLocalDayParser.js":"4FMAA","./parsers/ISODayParser.js":"eSKw6","./parsers/AMPMParser.js":"eqkPE","./parsers/AMPMMidnightParser.js":"g3D3d","./parsers/DayPeriodParser.js":"hkyVS","./parsers/Hour1to12Parser.js":"iRbV7","./parsers/Hour0to23Parser.js":"fq0MM","./parsers/Hour0To11Parser.js":"ejbIY","./parsers/Hour1To24Parser.js":"eEJho","./parsers/MinuteParser.js":"8XZpF","./parsers/SecondParser.js":"khJSC","./parsers/FractionOfSecondParser.js":"jT3Md","./parsers/ISOTimezoneWithZParser.js":"kUxSQ","./parsers/ISOTimezoneParser.js":"ee2MS","./parsers/TimestampSecondsParser.js":"8CwPK","./parsers/TimestampMillisecondsParser.js":"czEu6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYhYF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EraParser", ()=>EraParser);
var _parserJs = require("../Parser.js");
class EraParser extends (0, _parserJs.Parser) {
    priority = 140;
    parse(dateString, token, match) {
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return match.era(dateString, {
                    width: "abbreviated"
                }) || match.era(dateString, {
                    width: "narrow"
                });
            // A, B
            case "GGGGG":
                return match.era(dateString, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return match.era(dateString, {
                    width: "wide"
                }) || match.era(dateString, {
                    width: "abbreviated"
                }) || match.era(dateString, {
                    width: "narrow"
                });
        }
    }
    set(date, flags, value) {
        flags.era = value;
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "R",
        "u",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6E7ou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Parser", ()=>Parser);
var _setterJs = require("./Setter.js");
class Parser {
    run(dateString, token, match, options) {
        const result = this.parse(dateString, token, match, options);
        if (!result) return null;
        return {
            setter: new (0, _setterJs.ValueSetter)(result.value, this.validate, this.set, this.priority, this.subPriority),
            rest: result.rest
        };
    }
    validate(_utcDate, _value, _options) {
        return true;
    }
}

},{"./Setter.js":"kYmxL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kf1Wf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
parcelHelpers.export(exports, "YearParser", ()=>YearParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class YearParser extends (0, _parserJs.Parser) {
    priority = 130;
    incompatibleTokens = [
        "Y",
        "R",
        "u",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
    parse(dateString, token, match) {
        const valueCallback = (year)=>({
                year,
                isTwoDigitYear: token === "yy"
            });
        switch(token){
            case "y":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(4, dateString), valueCallback);
            case "yo":
                return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                    unit: "year"
                }), valueCallback);
            default:
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
        }
    }
    validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
    }
    set(date, flags, value) {
        const currentYear = date.getFullYear();
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = (0, _utilsJs.normalizeTwoDigitYear)(value.year, currentYear);
            date.setFullYear(normalizedTwoDigitYear, 0, 1);
            date.setHours(0, 0, 0, 0);
            return date;
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DK60":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapValue", ()=>mapValue);
parcelHelpers.export(exports, "parseNumericPattern", ()=>parseNumericPattern);
parcelHelpers.export(exports, "parseTimezonePattern", ()=>parseTimezonePattern);
parcelHelpers.export(exports, "parseAnyDigitsSigned", ()=>parseAnyDigitsSigned);
parcelHelpers.export(exports, "parseNDigits", ()=>parseNDigits);
parcelHelpers.export(exports, "parseNDigitsSigned", ()=>parseNDigitsSigned);
parcelHelpers.export(exports, "dayPeriodEnumToHours", ()=>dayPeriodEnumToHours);
parcelHelpers.export(exports, "normalizeTwoDigitYear", ()=>normalizeTwoDigitYear);
parcelHelpers.export(exports, "isLeapYearIndex", ()=>isLeapYearIndex);
var _constantsJs = require("../../constants.js");
var _constantsJs1 = require("./constants.js");
function mapValue(parseFnResult, mapFn) {
    if (!parseFnResult) return parseFnResult;
    return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest
    };
}
function parseNumericPattern(pattern, dateString) {
    const matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, dateString) {
    const matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    // Input is 'Z'
    if (matchResult[0] === "Z") return {
        value: 0,
        rest: dateString.slice(1)
    };
    const sign = matchResult[1] === "+" ? 1 : -1;
    const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * (0, _constantsJs.millisecondsInHour) + minutes * (0, _constantsJs.millisecondsInMinute) + seconds * (0, _constantsJs.millisecondsInSecond)),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(dateString) {
    return parseNumericPattern((0, _constantsJs1.numericPatterns).anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
    switch(n){
        case 1:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).singleDigit, dateString);
        case 2:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).twoDigits, dateString);
        case 3:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).threeDigits, dateString);
        case 4:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).fourDigits, dateString);
        default:
            return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
    }
}
function parseNDigitsSigned(n, dateString) {
    switch(n){
        case 1:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).singleDigitSigned, dateString);
        case 2:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).twoDigitsSigned, dateString);
        case 3:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).threeDigitsSigned, dateString);
        case 4:
            return parseNumericPattern((0, _constantsJs1.numericPatterns).fourDigitsSigned, dateString);
        default:
            return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
    }
}
function dayPeriodEnumToHours(dayPeriod) {
    switch(dayPeriod){
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    const isCommonEra = currentYear > 0;
    // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    let result;
    if (absCurrentYear <= 50) result = twoDigitYear || 100;
    else {
        const rangeEnd = absCurrentYear + 50;
        const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
        const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

},{"../../constants.js":"1vXXw","./constants.js":"e1eTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1eTk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numericPatterns", ()=>numericPatterns);
parcelHelpers.export(exports, "timezonePatterns", ()=>timezonePatterns);
const numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
};
const timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDcds":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Local week-numbering year
parcelHelpers.export(exports, "LocalWeekYearParser", ()=>LocalWeekYearParser);
var _getWeekYearJs = require("../../../getWeekYear.js");
var _startOfWeekJs = require("../../../startOfWeek.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class LocalWeekYearParser extends (0, _parserJs.Parser) {
    priority = 130;
    parse(dateString, token, match) {
        const valueCallback = (year)=>({
                year,
                isTwoDigitYear: token === "YY"
            });
        switch(token){
            case "Y":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(4, dateString), valueCallback);
            case "Yo":
                return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                    unit: "year"
                }), valueCallback);
            default:
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
        }
    }
    validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
    }
    set(date, flags, value, options) {
        const currentYear = (0, _getWeekYearJs.getWeekYear)(date, options);
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = (0, _utilsJs.normalizeTwoDigitYear)(value.year, currentYear);
            date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
            date.setHours(0, 0, 0, 0);
            return (0, _startOfWeekJs.startOfWeek)(date, options);
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, options.firstWeekContainsDate);
        date.setHours(0, 0, 0, 0);
        return (0, _startOfWeekJs.startOfWeek)(date, options);
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T"
    ];
}

},{"../../../getWeekYear.js":"7odmH","../../../startOfWeek.js":"dDDvv","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ap5xA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ISO week-numbering year
parcelHelpers.export(exports, "ISOWeekYearParser", ()=>ISOWeekYearParser);
var _startOfISOWeekJs = require("../../../startOfISOWeek.js");
var _constructFromJs = require("../../../constructFrom.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class ISOWeekYearParser extends (0, _parserJs.Parser) {
    priority = 130;
    parse(dateString, token) {
        if (token === "R") return (0, _utilsJs.parseNDigitsSigned)(4, dateString);
        return (0, _utilsJs.parseNDigitsSigned)(token.length, dateString);
    }
    set(date, _flags, value) {
        const firstWeekOfYear = (0, _constructFromJs.constructFrom)(date, 0);
        firstWeekOfYear.setFullYear(value, 0, 4);
        firstWeekOfYear.setHours(0, 0, 0, 0);
        return (0, _startOfISOWeekJs.startOfISOWeek)(firstWeekOfYear);
    }
    incompatibleTokens = [
        "G",
        "y",
        "Y",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../../../startOfISOWeek.js":"iF0wL","../../../constructFrom.js":"hNMdA","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW99W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtendedYearParser", ()=>ExtendedYearParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class ExtendedYearParser extends (0, _parserJs.Parser) {
    priority = 130;
    parse(dateString, token) {
        if (token === "u") return (0, _utilsJs.parseNDigitsSigned)(4, dateString);
        return (0, _utilsJs.parseNDigitsSigned)(token.length, dateString);
    }
    set(date, _flags, value) {
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "G",
        "y",
        "Y",
        "R",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsY9k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuarterParser", ()=>QuarterParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class QuarterParser extends (0, _parserJs.Parser) {
    priority = 120;
    parse(dateString, token, match) {
        switch(token){
            // 1, 2, 3, 4
            case "Q":
            case "QQ":
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return match.ordinalNumber(dateString, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return match.quarter(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return match.quarter(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.quarter(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 4;
    }
    set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aSfyW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneQuarterParser", ()=>StandAloneQuarterParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class StandAloneQuarterParser extends (0, _parserJs.Parser) {
    priority = 120;
    parse(dateString, token, match) {
        switch(token){
            // 1, 2, 3, 4
            case "q":
            case "qq":
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return match.ordinalNumber(dateString, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return match.quarter(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return match.quarter(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return match.quarter(dateString, {
                    width: "wide",
                    context: "standalone"
                }) || match.quarter(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 4;
    }
    set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"EYpZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MonthParser", ()=>MonthParser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class MonthParser extends (0, _parserJs.Parser) {
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "L",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
    priority = 110;
    parse(dateString, token, match) {
        const valueCallback = (value)=>value - 1;
        switch(token){
            // 1, 2, ..., 12
            case "M":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).month, dateString), valueCallback);
            // 01, 02, ..., 12
            case "MM":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                    unit: "month"
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case "MMM":
                return match.month(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return match.month(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return match.month(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.month(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbrkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneMonthParser", ()=>StandAloneMonthParser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class StandAloneMonthParser extends (0, _parserJs.Parser) {
    priority = 110;
    parse(dateString, token, match) {
        const valueCallback = (value)=>value - 1;
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).month, dateString), valueCallback);
            // 01, 02, ..., 12
            case "LL":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                    unit: "month"
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case "LLL":
                return match.month(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return match.month(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return match.month(dateString, {
                    width: "wide",
                    context: "standalone"
                }) || match.month(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rNDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Local week of year
parcelHelpers.export(exports, "LocalWeekParser", ()=>LocalWeekParser);
var _setWeekJs = require("../../../setWeek.js");
var _startOfWeekJs = require("../../../startOfWeek.js");
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class LocalWeekParser extends (0, _parserJs.Parser) {
    priority = 100;
    parse(dateString, token, match) {
        switch(token){
            case "w":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).week, dateString);
            case "wo":
                return match.ordinalNumber(dateString, {
                    unit: "week"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value, options) {
        return (0, _startOfWeekJs.startOfWeek)((0, _setWeekJs.setWeek)(date, value, options), options);
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T"
    ];
}

},{"../../../setWeek.js":"3XINN","../../../startOfWeek.js":"dDDvv","../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XINN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setWeek} function options.
 */ /**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */ parcelHelpers.export(exports, "setWeek", ()=>setWeek);
var _getWeekJs = require("./getWeek.js");
var _toDateJs = require("./toDate.js");
function setWeek(date, week, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const diff = (0, _getWeekJs.getWeek)(date_, options) - week;
    date_.setDate(date_.getDate() - diff * 7);
    return (0, _toDateJs.toDate)(date_, options?.in);
}
// Fallback for modularized imports:
exports.default = setWeek;

},{"./getWeek.js":"1zHej","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfdwt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ISO week of year
parcelHelpers.export(exports, "ISOWeekParser", ()=>ISOWeekParser);
var _setISOWeekJs = require("../../../setISOWeek.js");
var _startOfISOWeekJs = require("../../../startOfISOWeek.js");
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class ISOWeekParser extends (0, _parserJs.Parser) {
    priority = 100;
    parse(dateString, token, match) {
        switch(token){
            case "I":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).week, dateString);
            case "Io":
                return match.ordinalNumber(dateString, {
                    unit: "week"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value) {
        return (0, _startOfISOWeekJs.startOfISOWeek)((0, _setISOWeekJs.setISOWeek)(date, value));
    }
    incompatibleTokens = [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../../../setISOWeek.js":"6YGAL","../../../startOfISOWeek.js":"iF0wL","../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YGAL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setISOWeek} function options.
 */ /**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The `Date` type of the context function.
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */ parcelHelpers.export(exports, "setISOWeek", ()=>setISOWeek);
var _getISOWeekJs = require("./getISOWeek.js");
var _toDateJs = require("./toDate.js");
function setISOWeek(date, week, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = (0, _getISOWeekJs.getISOWeek)(_date, options) - week;
    _date.setDate(_date.getDate() - diff * 7);
    return _date;
}
// Fallback for modularized imports:
exports.default = setISOWeek;

},{"./getISOWeek.js":"fNkwc","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYv6C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Day of the month
parcelHelpers.export(exports, "DateParser", ()=>DateParser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
const DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
const DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
class DateParser extends (0, _parserJs.Parser) {
    priority = 90;
    subPriority = 1;
    parse(dateString, token, match) {
        switch(token){
            case "d":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).date, dateString);
            case "do":
                return match.ordinalNumber(dateString, {
                    unit: "date"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, _utilsJs.isLeapYearIndex)(year);
        const month = date.getMonth();
        if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
        else return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
    set(date, _flags, value) {
        date.setDate(value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cmRX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayOfYearParser", ()=>DayOfYearParser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class DayOfYearParser extends (0, _parserJs.Parser) {
    priority = 90;
    subpriority = 1;
    parse(dateString, token, match) {
        switch(token){
            case "D":
            case "DD":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).dayOfYear, dateString);
            case "Do":
                return match.ordinalNumber(dateString, {
                    unit: "date"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, _utilsJs.isLeapYearIndex)(year);
        if (isLeapYear) return value >= 1 && value <= 366;
        else return value >= 1 && value <= 365;
    }
    set(date, _flags, value) {
        date.setMonth(0, value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "E",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksDae":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Day of week
parcelHelpers.export(exports, "DayParser", ()=>DayParser);
var _setDayJs = require("../../../setDay.js");
var _parserJs = require("../Parser.js");
class DayParser extends (0, _parserJs.Parser) {
    priority = 90;
    parse(dateString, token, match) {
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return match.day(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, _setDayJs.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../../../setDay.js":"7QCQN","../Parser.js":"6E7ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QCQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setDay} function options.
 */ /**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */ parcelHelpers.export(exports, "setDay", ()=>setDay);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _addDaysJs = require("./addDays.js");
var _toDateJs = require("./toDate.js");
function setDay(date, day, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const currentDay = date_.getDay();
    const remainder = day % 7;
    const dayIndex = (remainder + 7) % 7;
    const delta = 7 - weekStartsOn;
    const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
    return (0, _addDaysJs.addDays)(date_, diff, options);
}
// Fallback for modularized imports:
exports.default = setDay;

},{"./_lib/defaultOptions.js":"98fau","./addDays.js":"fL4dR","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jgAEp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Local day of week
parcelHelpers.export(exports, "LocalDayParser", ()=>LocalDayParser);
var _setDayJs = require("../../../setDay.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class LocalDayParser extends (0, _parserJs.Parser) {
    priority = 90;
    parse(dateString, token, match, options) {
        const valueCallback = (value)=>{
            // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
            const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };
        switch(token){
            // 3
            case "e":
            case "ee":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
            // 3rd
            case "eo":
                return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                    unit: "day"
                }), valueCallback);
            // Tue
            case "eee":
                return match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return match.day(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, _setDayJs.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "c",
        "t",
        "T"
    ];
}

},{"../../../setDay.js":"7QCQN","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FMAA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Stand-alone local day of week
parcelHelpers.export(exports, "StandAloneLocalDayParser", ()=>StandAloneLocalDayParser);
var _setDayJs = require("../../../setDay.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class StandAloneLocalDayParser extends (0, _parserJs.Parser) {
    priority = 90;
    parse(dateString, token, match, options) {
        const valueCallback = (value)=>{
            // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
            const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };
        switch(token){
            // 3
            case "c":
            case "cc":
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
            // 3rd
            case "co":
                return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                    unit: "day"
                }), valueCallback);
            // Tue
            case "ccc":
                return match.day(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "short",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return match.day(dateString, {
                    width: "short",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return match.day(dateString, {
                    width: "wide",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "short",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, _setDayJs.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "e",
        "t",
        "T"
    ];
}

},{"../../../setDay.js":"7QCQN","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSKw6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ISO day of week
parcelHelpers.export(exports, "ISODayParser", ()=>ISODayParser);
var _setISODayJs = require("../../../setISODay.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class ISODayParser extends (0, _parserJs.Parser) {
    priority = 90;
    parse(dateString, token, match) {
        const valueCallback = (value)=>{
            if (value === 0) return 7;
            return value;
        };
        switch(token){
            // 2
            case "i":
            case "ii":
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
            // 2nd
            case "io":
                return match.ordinalNumber(dateString, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return (0, _utilsJs.mapValue)(match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
            // T
            case "iiiii":
                return (0, _utilsJs.mapValue)(match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
            // Tu
            case "iiiiii":
                return (0, _utilsJs.mapValue)(match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
            // Tuesday
            case "iiii":
            default:
                return (0, _utilsJs.mapValue)(match.day(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 7;
    }
    set(date, _flags, value) {
        date = (0, _setISODayJs.setISODay)(date, value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "E",
        "e",
        "c",
        "t",
        "T"
    ];
}

},{"../../../setISODay.js":"hs8xy","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hs8xy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setISODay} function options.
 */ /**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday, etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */ parcelHelpers.export(exports, "setISODay", ()=>setISODay);
var _addDaysJs = require("./addDays.js");
var _getISODayJs = require("./getISODay.js");
var _toDateJs = require("./toDate.js");
function setISODay(date, day, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const currentDay = (0, _getISODayJs.getISODay)(date_, options);
    const diff = day - currentDay;
    return (0, _addDaysJs.addDays)(date_, diff, options);
}
// Fallback for modularized imports:
exports.default = setISODay;

},{"./addDays.js":"fL4dR","./getISODay.js":"9d1Pg","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqkPE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AMPMParser", ()=>AMPMParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class AMPMParser extends (0, _parserJs.Parser) {
    priority = 80;
    parse(dateString, token, match) {
        switch(token){
            case "a":
            case "aa":
            case "aaa":
                return match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaaa":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    set(date, _flags, value) {
        date.setHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "b",
        "B",
        "H",
        "k",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3D3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AMPMMidnightParser", ()=>AMPMMidnightParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class AMPMMidnightParser extends (0, _parserJs.Parser) {
    priority = 80;
    parse(dateString, token, match) {
        switch(token){
            case "b":
            case "bb":
            case "bbb":
                return match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbbb":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    set(date, _flags, value) {
        date.setHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "B",
        "H",
        "k",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkyVS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// in the morning, in the afternoon, in the evening, at night
parcelHelpers.export(exports, "DayPeriodParser", ()=>DayPeriodParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class DayPeriodParser extends (0, _parserJs.Parser) {
    priority = 80;
    parse(dateString, token, match) {
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBBB":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    set(date, _flags, value) {
        date.setHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "b",
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iRbV7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour1to12Parser", ()=>Hour1to12Parser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class Hour1to12Parser extends (0, _parserJs.Parser) {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "h":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour12h, dateString);
            case "ho":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 12;
    }
    set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
        else if (!isPM && value === 12) date.setHours(0, 0, 0, 0);
        else date.setHours(value, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "H",
        "K",
        "k",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fq0MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour0to23Parser", ()=>Hour0to23Parser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class Hour0to23Parser extends (0, _parserJs.Parser) {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "H":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour23h, dateString);
            case "Ho":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 23;
    }
    set(date, _flags, value) {
        date.setHours(value, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "b",
        "h",
        "K",
        "k",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejbIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour0To11Parser", ()=>Hour0To11Parser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class Hour0To11Parser extends (0, _parserJs.Parser) {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "K":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour11h, dateString);
            case "Ko":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
        else date.setHours(value, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "h",
        "H",
        "k",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEJho":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour1To24Parser", ()=>Hour1To24Parser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class Hour1To24Parser extends (0, _parserJs.Parser) {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "k":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour24h, dateString);
            case "ko":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 24;
    }
    set(date, _flags, value) {
        const hours = value <= 24 ? value % 24 : value;
        date.setHours(hours, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "b",
        "h",
        "H",
        "K",
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XZpF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MinuteParser", ()=>MinuteParser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class MinuteParser extends (0, _parserJs.Parser) {
    priority = 60;
    parse(dateString, token, match) {
        switch(token){
            case "m":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).minute, dateString);
            case "mo":
                return match.ordinalNumber(dateString, {
                    unit: "minute"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setMinutes(value, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khJSC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SecondParser", ()=>SecondParser);
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class SecondParser extends (0, _parserJs.Parser) {
    priority = 50;
    parse(dateString, token, match) {
        switch(token){
            case "s":
                return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).second, dateString);
            case "so":
                return match.ordinalNumber(dateString, {
                    unit: "second"
                });
            default:
                return (0, _utilsJs.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setSeconds(value, 0);
        return date;
    }
    incompatibleTokens = [
        "t",
        "T"
    ];
}

},{"../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jT3Md":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FractionOfSecondParser", ()=>FractionOfSecondParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class FractionOfSecondParser extends (0, _parserJs.Parser) {
    priority = 30;
    parse(dateString, token) {
        const valueCallback = (value)=>Math.trunc(value * Math.pow(10, -token.length + 3));
        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
    }
    set(date, _flags, value) {
        date.setMilliseconds(value);
        return date;
    }
    incompatibleTokens = [
        "t",
        "T"
    ];
}

},{"../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUxSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Timezone (ISO-8601. +00:00 is `'Z'`)
parcelHelpers.export(exports, "ISOTimezoneWithZParser", ()=>ISOTimezoneWithZParser);
var _constructFromJs = require("../../../constructFrom.js");
var _getTimezoneOffsetInMillisecondsJs = require("../../../_lib/getTimezoneOffsetInMilliseconds.js");
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class ISOTimezoneWithZParser extends (0, _parserJs.Parser) {
    priority = 10;
    parse(dateString, token) {
        switch(token){
            case "X":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalMinutes, dateString);
            case "XX":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basic, dateString);
            case "XXXX":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalSeconds, dateString);
            case "XXXXX":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extendedOptionalSeconds, dateString);
            case "XXX":
            default:
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extended, dateString);
        }
    }
    set(date, flags, value) {
        if (flags.timestampIsSet) return date;
        return (0, _constructFromJs.constructFrom)(date, date.getTime() - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(date) - value);
    }
    incompatibleTokens = [
        "t",
        "T",
        "x"
    ];
}

},{"../../../constructFrom.js":"hNMdA","../../../_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ee2MS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Timezone (ISO-8601)
parcelHelpers.export(exports, "ISOTimezoneParser", ()=>ISOTimezoneParser);
var _constructFromJs = require("../../../constructFrom.js");
var _getTimezoneOffsetInMillisecondsJs = require("../../../_lib/getTimezoneOffsetInMilliseconds.js");
var _constantsJs = require("../constants.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class ISOTimezoneParser extends (0, _parserJs.Parser) {
    priority = 10;
    parse(dateString, token) {
        switch(token){
            case "x":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalMinutes, dateString);
            case "xx":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basic, dateString);
            case "xxxx":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalSeconds, dateString);
            case "xxxxx":
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extendedOptionalSeconds, dateString);
            case "xxx":
            default:
                return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extended, dateString);
        }
    }
    set(date, flags, value) {
        if (flags.timestampIsSet) return date;
        return (0, _constructFromJs.constructFrom)(date, date.getTime() - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(date) - value);
    }
    incompatibleTokens = [
        "t",
        "T",
        "X"
    ];
}

},{"../../../constructFrom.js":"hNMdA","../../../_lib/getTimezoneOffsetInMilliseconds.js":"ke6Rl","../constants.js":"e1eTk","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CwPK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimestampSecondsParser", ()=>TimestampSecondsParser);
var _constructFromJs = require("../../../constructFrom.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class TimestampSecondsParser extends (0, _parserJs.Parser) {
    priority = 40;
    parse(dateString) {
        return (0, _utilsJs.parseAnyDigitsSigned)(dateString);
    }
    set(date, _flags, value) {
        return [
            (0, _constructFromJs.constructFrom)(date, value * 1000),
            {
                timestampIsSet: true
            }
        ];
    }
    incompatibleTokens = "*";
}

},{"../../../constructFrom.js":"hNMdA","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"czEu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimestampMillisecondsParser", ()=>TimestampMillisecondsParser);
var _constructFromJs = require("../../../constructFrom.js");
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
class TimestampMillisecondsParser extends (0, _parserJs.Parser) {
    priority = 20;
    parse(dateString) {
        return (0, _utilsJs.parseAnyDigitsSigned)(dateString);
    }
    set(date, _flags, value) {
        return [
            (0, _constructFromJs.constructFrom)(date, value),
            {
                timestampIsSet: true
            }
        ];
    }
    incompatibleTokens = "*";
}

},{"../../../constructFrom.js":"hNMdA","../Parser.js":"6E7ou","../utils.js":"6DK60","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FUr6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isMonday} function options.
 */ /**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */ parcelHelpers.export(exports, "isMonday", ()=>isMonday);
var _toDateJs = require("./toDate.js");
function isMonday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 1;
}
// Fallback for modularized imports:
exports.default = isMonday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QzC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */ parcelHelpers.export(exports, "isPast", ()=>isPast);
var _toDateJs = require("./toDate.js");
function isPast(date) {
    return +(0, _toDateJs.toDate)(date) < Date.now();
}
// Fallback for modularized imports:
exports.default = isPast;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSzvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameHour} function options.
 */ /**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */ parcelHelpers.export(exports, "isSameHour", ()=>isSameHour);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _startOfHourJs = require("./startOfHour.js");
function isSameHour(dateLeft, dateRight, options) {
    const [dateLeft_, dateRight_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, dateLeft, dateRight);
    return +(0, _startOfHourJs.startOfHour)(dateLeft_) === +(0, _startOfHourJs.startOfHour)(dateRight_);
}
// Fallback for modularized imports:
exports.default = isSameHour;

},{"./_lib/normalizeDates.js":"aCztF","./startOfHour.js":"30rTC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"30rTC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfHour} function options.
 */ /**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */ parcelHelpers.export(exports, "startOfHour", ()=>startOfHour);
var _toDateJs = require("./toDate.js");
function startOfHour(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setMinutes(0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfHour;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jri8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameISOWeek} function options.
 */ /**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */ parcelHelpers.export(exports, "isSameISOWeek", ()=>isSameISOWeek);
var _isSameWeekJs = require("./isSameWeek.js");
function isSameISOWeek(laterDate, earlierDate, options) {
    return (0, _isSameWeekJs.isSameWeek)(laterDate, earlierDate, {
        ...options,
        weekStartsOn: 1
    });
}
// Fallback for modularized imports:
exports.default = isSameISOWeek;

},{"./isSameWeek.js":"16SmB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16SmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameWeek} function options.
 */ /**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */ parcelHelpers.export(exports, "isSameWeek", ()=>isSameWeek);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _startOfWeekJs = require("./startOfWeek.js");
function isSameWeek(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return +(0, _startOfWeekJs.startOfWeek)(laterDate_, options) === +(0, _startOfWeekJs.startOfWeek)(earlierDate_, options);
}
// Fallback for modularized imports:
exports.default = isSameWeek;

},{"./_lib/normalizeDates.js":"aCztF","./startOfWeek.js":"dDDvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bat4E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameISOWeekYear} function options.
 */ /**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */ parcelHelpers.export(exports, "isSameISOWeekYear", ()=>isSameISOWeekYear);
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function isSameISOWeekYear(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return +(0, _startOfISOWeekYearJs.startOfISOWeekYear)(laterDate_) === +(0, _startOfISOWeekYearJs.startOfISOWeekYear)(earlierDate_);
}
// Fallback for modularized imports:
exports.default = isSameISOWeekYear;

},{"./startOfISOWeekYear.js":"eTm1l","./_lib/normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7whBx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same minute (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */ parcelHelpers.export(exports, "isSameMinute", ()=>isSameMinute);
var _startOfMinuteJs = require("./startOfMinute.js");
function isSameMinute(laterDate, earlierDate) {
    return +(0, _startOfMinuteJs.startOfMinute)(laterDate) === +(0, _startOfMinuteJs.startOfMinute)(earlierDate);
}
// Fallback for modularized imports:
exports.default = isSameMinute;

},{"./startOfMinute.js":"5zVrK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zVrK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfMinute} function options.
 */ /**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */ parcelHelpers.export(exports, "startOfMinute", ()=>startOfMinute);
var _toDateJs = require("./toDate.js");
function startOfMinute(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setSeconds(0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = startOfMinute;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1d9cq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameMonth} function options.
 */ /**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */ parcelHelpers.export(exports, "isSameMonth", ()=>isSameMonth);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function isSameMonth(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
// Fallback for modularized imports:
exports.default = isSameMonth;

},{"./_lib/normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJJ3M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameQuarter} function options.
 */ /**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */ parcelHelpers.export(exports, "isSameQuarter", ()=>isSameQuarter);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _startOfQuarterJs = require("./startOfQuarter.js");
function isSameQuarter(laterDate, earlierDate, options) {
    const [dateLeft_, dateRight_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return +(0, _startOfQuarterJs.startOfQuarter)(dateLeft_) === +(0, _startOfQuarterJs.startOfQuarter)(dateRight_);
}
// Fallback for modularized imports:
exports.default = isSameQuarter;

},{"./_lib/normalizeDates.js":"aCztF","./startOfQuarter.js":"ipmWI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j88au":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second (and hour and day)?
 *
 * @description
 * Are the given dates in the same second (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same second (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 4 September 2014 06:01.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 4, 6, 1, 15)
 * )
 * //=> false
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 5 September 2014 06:00.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 5, 6, 0, 15)
 * )
 * //=> false
 */ parcelHelpers.export(exports, "isSameSecond", ()=>isSameSecond);
var _startOfSecondJs = require("./startOfSecond.js");
function isSameSecond(laterDate, earlierDate) {
    return +(0, _startOfSecondJs.startOfSecond)(laterDate) === +(0, _startOfSecondJs.startOfSecond)(earlierDate);
}
// Fallback for modularized imports:
exports.default = isSameSecond;

},{"./startOfSecond.js":"7GNYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7GNYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfSecond} function options.
 */ /**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */ parcelHelpers.export(exports, "startOfSecond", ()=>startOfSecond);
var _toDateJs = require("./toDate.js");
function startOfSecond(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setMilliseconds(0);
    return date_;
}
// Fallback for modularized imports:
exports.default = startOfSecond;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jkjxd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameYear} function options.
 */ /**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */ parcelHelpers.export(exports, "isSameYear", ()=>isSameYear);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function isSameYear(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
// Fallback for modularized imports:
exports.default = isSameYear;

},{"./_lib/normalizeDates.js":"aCztF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUS6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThisHour} function options.
 */ /**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */ parcelHelpers.export(exports, "isThisHour", ()=>isThisHour);
var _constructNowJs = require("./constructNow.js");
var _isSameHourJs = require("./isSameHour.js");
var _toDateJs = require("./toDate.js");
function isThisHour(date, options) {
    return (0, _isSameHourJs.isSameHour)((0, _toDateJs.toDate)(date, options?.in), (0, _constructNowJs.constructNow)(options?.in || date));
}
// Fallback for modularized imports:
exports.default = isThisHour;

},{"./constructNow.js":"aJJt5","./isSameHour.js":"jSzvL","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4X4G2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThisISOWeek} function options.
 */ /**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */ parcelHelpers.export(exports, "isThisISOWeek", ()=>isThisISOWeek);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameISOWeekJs = require("./isSameISOWeek.js");
function isThisISOWeek(date, options) {
    return (0, _isSameISOWeekJs.isSameISOWeek)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _constructNowJs.constructNow)(options?.in || date));
}
// Fallback for modularized imports:
exports.default = isThisISOWeek;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameISOWeek.js":"jri8s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IALF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */ parcelHelpers.export(exports, "isThisMinute", ()=>isThisMinute);
var _constructNowJs = require("./constructNow.js");
var _isSameMinuteJs = require("./isSameMinute.js");
function isThisMinute(date) {
    return (0, _isSameMinuteJs.isSameMinute)(date, (0, _constructNowJs.constructNow)(date));
}
// Fallback for modularized imports:
exports.default = isThisMinute;

},{"./constructNow.js":"aJJt5","./isSameMinute.js":"7whBx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"efMjU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThisMonth} function options.
 */ /**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */ parcelHelpers.export(exports, "isThisMonth", ()=>isThisMonth);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameMonthJs = require("./isSameMonth.js");
function isThisMonth(date, options) {
    return (0, _isSameMonthJs.isSameMonth)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _constructNowJs.constructNow)(options?.in || date));
}
// Fallback for modularized imports:
exports.default = isThisMonth;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameMonth.js":"1d9cq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7x5Jl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThisQuarter} function options.
 */ /**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */ parcelHelpers.export(exports, "isThisQuarter", ()=>isThisQuarter);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameQuarterJs = require("./isSameQuarter.js");
function isThisQuarter(date, options) {
    return (0, _isSameQuarterJs.isSameQuarter)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _constructNowJs.constructNow)(options?.in || date));
}
// Fallback for modularized imports:
exports.default = isThisQuarter;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameQuarter.js":"fJJ3M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4Gae":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * const result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */ parcelHelpers.export(exports, "isThisSecond", ()=>isThisSecond);
var _constructNowJs = require("./constructNow.js");
var _isSameSecondJs = require("./isSameSecond.js");
function isThisSecond(date) {
    return (0, _isSameSecondJs.isSameSecond)(date, (0, _constructNowJs.constructNow)(date));
}
// Fallback for modularized imports:
exports.default = isThisSecond;

},{"./constructNow.js":"aJJt5","./isSameSecond.js":"j88au","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clx4b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThisWeek} function options.
 */ /**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */ parcelHelpers.export(exports, "isThisWeek", ()=>isThisWeek);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameWeekJs = require("./isSameWeek.js");
function isThisWeek(date, options) {
    return (0, _isSameWeekJs.isSameWeek)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _constructNowJs.constructNow)(options?.in || date), options);
}
// Fallback for modularized imports:
exports.default = isThisWeek;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameWeek.js":"16SmB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMtqV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThisYear} function options.
 */ /**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */ parcelHelpers.export(exports, "isThisYear", ()=>isThisYear);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameYearJs = require("./isSameYear.js");
function isThisYear(date, options) {
    return (0, _isSameYearJs.isSameYear)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _constructNowJs.constructNow)(options?.in || date));
}
// Fallback for modularized imports:
exports.default = isThisYear;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameYear.js":"jkjxd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwI0m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isThursday} function options.
 */ /**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */ parcelHelpers.export(exports, "isThursday", ()=>isThursday);
var _toDateJs = require("./toDate.js");
function isThursday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 4;
}
// Fallback for modularized imports:
exports.default = isThursday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7J3Q2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isToday} function options.
 */ /**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */ parcelHelpers.export(exports, "isToday", ()=>isToday);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameDayJs = require("./isSameDay.js");
function isToday(date, options) {
    return (0, _isSameDayJs.isSameDay)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _constructNowJs.constructNow)(options?.in || date));
}
// Fallback for modularized imports:
exports.default = isToday;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameDay.js":"7FjQf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2brVA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isTomorrow} function options.
 */ /**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */ parcelHelpers.export(exports, "isTomorrow", ()=>isTomorrow);
var _addDaysJs = require("./addDays.js");
var _constructNowJs = require("./constructNow.js");
var _isSameDayJs = require("./isSameDay.js");
function isTomorrow(date, options) {
    return (0, _isSameDayJs.isSameDay)(date, (0, _addDaysJs.addDays)((0, _constructNowJs.constructNow)(options?.in || date), 1), options);
}
// Fallback for modularized imports:
exports.default = isTomorrow;

},{"./addDays.js":"fL4dR","./constructNow.js":"aJJt5","./isSameDay.js":"7FjQf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azgGe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isTuesday} function options.
 */ /**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */ parcelHelpers.export(exports, "isTuesday", ()=>isTuesday);
var _toDateJs = require("./toDate.js");
function isTuesday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 2;
}
// Fallback for modularized imports:
exports.default = isTuesday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fo6X0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isWednesday} function options.
 */ /**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */ parcelHelpers.export(exports, "isWednesday", ()=>isWednesday);
var _toDateJs = require("./toDate.js");
function isWednesday(date, options) {
    return (0, _toDateJs.toDate)(date, options?.in).getDay() === 3;
}
// Fallback for modularized imports:
exports.default = isWednesday;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lsZyH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isWithinInterval} function options.
 */ /**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param date - The date to check
 * @param interval - The interval to check
 * @param options - An object with options
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => false
 *
 * @example
 * // For date equal to the interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to the interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */ parcelHelpers.export(exports, "isWithinInterval", ()=>isWithinInterval);
var _toDateJs = require("./toDate.js");
function isWithinInterval(date, interval, options) {
    const time = +(0, _toDateJs.toDate)(date, options?.in);
    const [startTime, endTime] = [
        +(0, _toDateJs.toDate)(interval.start, options?.in),
        +(0, _toDateJs.toDate)(interval.end, options?.in)
    ].sort((a, b)=>a - b);
    return time >= startTime && time <= endTime;
}
// Fallback for modularized imports:
exports.default = isWithinInterval;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fQcQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isYesterday} function options.
 */ /**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */ parcelHelpers.export(exports, "isYesterday", ()=>isYesterday);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
var _isSameDayJs = require("./isSameDay.js");
var _subDaysJs = require("./subDays.js");
function isYesterday(date, options) {
    return (0, _isSameDayJs.isSameDay)((0, _constructFromJs.constructFrom)(options?.in || date, date), (0, _subDaysJs.subDays)((0, _constructNowJs.constructNow)(options?.in || date), 1));
}
// Fallback for modularized imports:
exports.default = isYesterday;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","./isSameDay.js":"7FjQf","./subDays.js":"3dD7a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dD7a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subDays} function options.
 */ /**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */ parcelHelpers.export(exports, "subDays", ()=>subDays);
var _addDaysJs = require("./addDays.js");
function subDays(date, amount, options) {
    return (0, _addDaysJs.addDays)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subDays;

},{"./addDays.js":"fL4dR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SSWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfDecade} function options.
 */ /**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type; inferred from arguments or specified by context.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The last day of a decade
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * const result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */ parcelHelpers.export(exports, "lastDayOfDecade", ()=>lastDayOfDecade);
var _toDateJs = require("./toDate.js");
function lastDayOfDecade(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const decade = 9 + Math.floor(year / 10) * 10;
    _date.setFullYear(decade + 1, 0, 0);
    _date.setHours(0, 0, 0, 0);
    return (0, _toDateJs.toDate)(_date, options?.in);
}
// Fallback for modularized imports:
exports.default = lastDayOfDecade;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aCUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfISOWeek} function options.
 */ /**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The Date type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * const result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */ parcelHelpers.export(exports, "lastDayOfISOWeek", ()=>lastDayOfISOWeek);
var _lastDayOfWeekJs = require("./lastDayOfWeek.js");
function lastDayOfISOWeek(date, options) {
    return (0, _lastDayOfWeekJs.lastDayOfWeek)(date, {
        ...options,
        weekStartsOn: 1
    });
}
// Fallback for modularized imports:
exports.default = lastDayOfISOWeek;

},{"./lastDayOfWeek.js":"hFSne","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFSne":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfWeek} function options.
 */ /**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone unless a context is specified.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a week
 */ parcelHelpers.export(exports, "lastDayOfWeek", ()=>lastDayOfWeek);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _toDateJs = require("./toDate.js");
function lastDayOfWeek(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setHours(0, 0, 0, 0);
    _date.setDate(_date.getDate() + diff);
    return _date;
}
// Fallback for modularized imports:
exports.default = lastDayOfWeek;

},{"./_lib/defaultOptions.js":"98fau","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jW013":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfISOWeekYear} function options.
 */ /**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * const result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */ parcelHelpers.export(exports, "lastDayOfISOWeekYear", ()=>lastDayOfISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _getISOWeekYearJs = require("./getISOWeekYear.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
function lastDayOfISOWeekYear(date, options) {
    const year = (0, _getISOWeekYearJs.getISOWeekYear)(date, options);
    const fourthOfJanuary = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year + 1, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    const date_ = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuary, options);
    date_.setDate(date_.getDate() - 1);
    return date_;
}
// Fallback for modularized imports:
exports.default = lastDayOfISOWeekYear;

},{"./constructFrom.js":"hNMdA","./getISOWeekYear.js":"jWChc","./startOfISOWeek.js":"iF0wL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccmoZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfQuarter} function options.
 */ /**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */ parcelHelpers.export(exports, "lastDayOfQuarter", ()=>lastDayOfQuarter);
var _toDateJs = require("./toDate.js");
function lastDayOfQuarter(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const currentMonth = date_.getMonth();
    const month = currentMonth - currentMonth % 3 + 3;
    date_.setMonth(month, 0);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = lastDayOfQuarter;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VAZa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link lastDayOfYear} function options.
 */ /**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * const result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */ parcelHelpers.export(exports, "lastDayOfYear", ()=>lastDayOfYear);
var _toDateJs = require("./toDate.js");
function lastDayOfYear(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const year = date_.getFullYear();
    date_.setFullYear(year + 1, 0, 0);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = lastDayOfYear;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kU9pl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
parcelHelpers.export(exports, "lightFormatters", ()=>(0, _lightFormattersJs.lightFormatters));
/**
 * @private
 */ /**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 001, ..., 999                |
 * |                                 | SSSS    | ...                               |
 *
 * @param date - The original date
 * @param format - The string of tokens
 *
 * @returns The formatted date string
 *
 * @throws `Invalid time value` if the date is invalid
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */ parcelHelpers.export(exports, "lightFormat", ()=>lightFormat);
var _lightFormattersJs = require("./_lib/format/lightFormatters.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
// This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function lightFormat(date, formatStr) {
    const date_ = (0, _toDateJs.toDate)(date);
    if (!(0, _isValidJs.isValid)(date_)) throw new RangeError("Invalid time value");
    const tokens = formatStr.match(formattingTokensRegExp);
    // The only case when formattingTokensRegExp doesn't match the string is when it's empty
    if (!tokens) return "";
    const result = tokens.map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        const firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        const formatter = (0, _lightFormattersJs.lightFormatters)[firstCharacter];
        if (formatter) return formatter(date_, substring);
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
    }).join("");
    return result;
}
function cleanEscapedString(input) {
    const matches = input.match(escapedStringRegExp);
    if (!matches) return input;
    return matches[1].replace(doubleQuoteRegExp, "'");
}
// Fallback for modularized imports:
exports.default = lightFormat;

},{"./_lib/format/lightFormatters.js":"bOcKP","./isValid.js":"gbOJY","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzjRb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * @returns The milliseconds
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */ parcelHelpers.export(exports, "milliseconds", ()=>milliseconds);
var _constantsJs = require("./constants.js");
function milliseconds({ years, months, weeks, days, hours, minutes, seconds }) {
    let totalDays = 0;
    if (years) totalDays += years * (0, _constantsJs.daysInYear);
    if (months) totalDays += months * ((0, _constantsJs.daysInYear) / 12);
    if (weeks) totalDays += weeks * 7;
    if (days) totalDays += days;
    let totalSeconds = totalDays * 86400;
    if (hours) totalSeconds += hours * 3600;
    if (minutes) totalSeconds += minutes * 60;
    if (seconds) totalSeconds += seconds;
    return Math.trunc(totalSeconds * 1000);
}
// Fallback for modularized imports:
exports.default = milliseconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMfmL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in hours
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */ parcelHelpers.export(exports, "millisecondsToHours", ()=>millisecondsToHours);
var _constantsJs = require("./constants.js");
function millisecondsToHours(milliseconds) {
    const hours = milliseconds / (0, _constantsJs.millisecondsInHour);
    return Math.trunc(hours);
}
// Fallback for modularized imports:
exports.default = millisecondsToHours;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enzjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in minutes
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */ parcelHelpers.export(exports, "millisecondsToMinutes", ()=>millisecondsToMinutes);
var _constantsJs = require("./constants.js");
function millisecondsToMinutes(milliseconds) {
    const minutes = milliseconds / (0, _constantsJs.millisecondsInMinute);
    return Math.trunc(minutes);
}
// Fallback for modularized imports:
exports.default = millisecondsToMinutes;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqSZU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in seconds
 *
 * @example
 * // Convert 1000 milliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */ parcelHelpers.export(exports, "millisecondsToSeconds", ()=>millisecondsToSeconds);
var _constantsJs = require("./constants.js");
function millisecondsToSeconds(milliseconds) {
    const seconds = milliseconds / (0, _constantsJs.millisecondsInSecond);
    return Math.trunc(seconds);
}
// Fallback for modularized imports:
exports.default = millisecondsToSeconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g79VA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in hours
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */ parcelHelpers.export(exports, "minutesToHours", ()=>minutesToHours);
var _constantsJs = require("./constants.js");
function minutesToHours(minutes) {
    const hours = minutes / (0, _constantsJs.minutesInHour);
    return Math.trunc(hours);
}
// Fallback for modularized imports:
exports.default = minutesToHours;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inDwO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in milliseconds
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */ parcelHelpers.export(exports, "minutesToMilliseconds", ()=>minutesToMilliseconds);
var _constantsJs = require("./constants.js");
function minutesToMilliseconds(minutes) {
    return Math.trunc(minutes * (0, _constantsJs.millisecondsInMinute));
}
// Fallback for modularized imports:
exports.default = minutesToMilliseconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wxgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in seconds
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */ parcelHelpers.export(exports, "minutesToSeconds", ()=>minutesToSeconds);
var _constantsJs = require("./constants.js");
function minutesToSeconds(minutes) {
    return Math.trunc(minutes * (0, _constantsJs.secondsInMinute));
}
// Fallback for modularized imports:
exports.default = minutesToSeconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHdRE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param months - The number of months to be converted.
 *
 * @returns The number of months converted in quarters
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */ parcelHelpers.export(exports, "monthsToQuarters", ()=>monthsToQuarters);
var _constantsJs = require("./constants.js");
function monthsToQuarters(months) {
    const quarters = months / (0, _constantsJs.monthsInQuarter);
    return Math.trunc(quarters);
}
// Fallback for modularized imports:
exports.default = monthsToQuarters;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rxTb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param months - The number of months to be converted
 *
 * @returns The number of months converted in years
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding:
 * const result = monthsToYears(40)
 * //=> 3
 */ parcelHelpers.export(exports, "monthsToYears", ()=>monthsToYears);
var _constantsJs = require("./constants.js");
function monthsToYears(months) {
    const years = months / (0, _constantsJs.monthsInYear);
    return Math.trunc(years);
}
// Fallback for modularized imports:
exports.default = monthsToYears;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JvSy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextDay} function options.
 */ /**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to check
 * @param day - Day of the week
 * @param options - An object with options
 *
 * @returns The date is the next day of the week
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */ parcelHelpers.export(exports, "nextDay", ()=>nextDay);
var _addDaysJs = require("./addDays.js");
var _getDayJs = require("./getDay.js");
function nextDay(date, day, options) {
    let delta = day - (0, _getDayJs.getDay)(date, options);
    if (delta <= 0) delta += 7;
    return (0, _addDaysJs.addDays)(date, delta, options);
}
// Fallback for modularized imports:
exports.default = nextDay;

},{"./addDays.js":"fL4dR","./getDay.js":"esFEi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7LrAi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextFriday} function options.
 */ /**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Friday
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */ parcelHelpers.export(exports, "nextFriday", ()=>nextFriday);
var _nextDayJs = require("./nextDay.js");
function nextFriday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 5, options);
}
// Fallback for modularized imports:
exports.default = nextFriday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YO5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextMonday} function options.
 */ /**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function if passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Monday
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */ parcelHelpers.export(exports, "nextMonday", ()=>nextMonday);
var _nextDayJs = require("./nextDay.js");
function nextMonday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 1, options);
}
// Fallback for modularized imports:
exports.default = nextMonday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnebd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextSaturday} function options.
 */ /**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Saturday
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */ parcelHelpers.export(exports, "nextSaturday", ()=>nextSaturday);
var _nextDayJs = require("./nextDay.js");
function nextSaturday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 6, options);
}
// Fallback for modularized imports:
exports.default = nextSaturday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29SYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextSunday} function options.
 */ /**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned if a context is provided.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Sunday
 *
 * @example
 * // When is the next Sunday after March 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */ parcelHelpers.export(exports, "nextSunday", ()=>nextSunday);
var _nextDayJs = require("./nextDay.js");
function nextSunday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 0, options);
}
// Fallback for modularized imports:
exports.default = nextSunday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atse6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextThursday} function options.
 */ /**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Thursday
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */ parcelHelpers.export(exports, "nextThursday", ()=>nextThursday);
var _nextDayJs = require("./nextDay.js");
function nextThursday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 4, options);
}
// Fallback for modularized imports:
exports.default = nextThursday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"02uJh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextTuesday} function options.
 */ /**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Tuesday
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */ parcelHelpers.export(exports, "nextTuesday", ()=>nextTuesday);
var _nextDayJs = require("./nextDay.js");
function nextTuesday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 2, options);
}
// Fallback for modularized imports:
exports.default = nextTuesday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j2uXA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link nextWednesday} function options.
 */ /**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Wednesday
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */ parcelHelpers.export(exports, "nextWednesday", ()=>nextWednesday);
var _nextDayJs = require("./nextDay.js");
function nextWednesday(date, options) {
    return (0, _nextDayJs.nextDay)(date, 3, options);
}
// Fallback for modularized imports:
exports.default = nextWednesday;

},{"./nextDay.js":"8JvSy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsVo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link parseISO} function options.
 */ /**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */ parcelHelpers.export(exports, "parseISO", ()=>parseISO);
var _constantsJs = require("./constants.js");
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function parseISO(argument, options) {
    const invalidDate = ()=>(0, _constructFromJs.constructFrom)(options?.in, NaN);
    const additionalDigits = options?.additionalDigits ?? 2;
    const dateStrings = splitDateString(argument);
    let date;
    if (dateStrings.date) {
        const parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (!date || isNaN(+date)) return invalidDate();
    const timestamp = +date;
    let time = 0;
    let offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time)) return invalidDate();
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) return invalidDate();
    } else {
        const tmpDate = new Date(timestamp + time);
        const result = (0, _toDateJs.toDate)(0, options?.in);
        result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
        result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
        return result;
    }
    return (0, _toDateJs.toDate)(timestamp + time + offset, options?.in);
}
const patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
    const dateStrings = {};
    const array = dateString.split(patterns.dateTimeDelimiter);
    let timeString;
    // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) return dateStrings;
    if (/:/.test(array[0])) timeString = array[0];
    else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        const token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], "");
            dateStrings.timezone = token[1];
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
    const captures = dateString.match(regex);
    // Invalid ISO-formatted year
    if (!captures) return {
        year: NaN,
        restDateString: ""
    };
    const year = captures[1] ? parseInt(captures[1]) : null;
    const century = captures[2] ? parseInt(captures[2]) : null;
    // either year or century is null, not both
    return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return new Date(NaN);
    const captures = dateString.match(dateRegex);
    // Invalid ISO-formatted string
    if (!captures) return new Date(NaN);
    const isWeekDate = !!captures[4];
    const dayOfYear = parseDateUnit(captures[1]);
    const month = parseDateUnit(captures[2]) - 1;
    const day = parseDateUnit(captures[3]);
    const week = parseDateUnit(captures[4]);
    const dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        const date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    const captures = timeString.match(timeRegex);
    if (!captures) return NaN; // Invalid ISO-formatted time
    const hours = parseTimeUnit(captures[1]);
    const minutes = parseTimeUnit(captures[2]);
    const seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) return NaN;
    return hours * (0, _constantsJs.millisecondsInHour) + minutes * (0, _constantsJs.millisecondsInMinute) + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === "Z") return 0;
    const captures = timezoneString.match(timezoneRegex);
    if (!captures) return 0;
    const sign = captures[1] === "+" ? -1 : 1;
    const hours = parseInt(captures[2]);
    const minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) return NaN;
    return sign * (hours * (0, _constantsJs.millisecondsInHour) + minutes * (0, _constantsJs.millisecondsInMinute));
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    const date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    const fourthOfJanuaryDay = date.getUTCDay() || 7;
    const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
// February is null to handle the leap year (using ||)
const daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) return minutes === 0 && seconds === 0;
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}
// Fallback for modularized imports:
exports.default = parseISO;

},{"./constants.js":"1vXXw","./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45sna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link parseJSON} function options.
 */ /**
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 * - `2000-03-15T05:20:10Z`: Without milliseconds
 * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds
 * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate](https://date-fns.org/docs/toDate):
 *
 * - A `Date` instance will be cloned
 * - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - A fully formed ISO8601 date string to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 */ parcelHelpers.export(exports, "parseJSON", ()=>parseJSON);
var _toDateJs = require("./toDate.js");
function parseJSON(dateStr, options) {
    const parts = dateStr.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    if (!parts) return (0, _toDateJs.toDate)(NaN, options?.in);
    return (0, _toDateJs.toDate)(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1), +parts[6], +((parts[7] || "0") + "00").substring(0, 3)), options?.in);
}
// Fallback for modularized imports:
exports.default = parseJSON;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTT5c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousDay} function options.
 */ /**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to check
 * @param day - The day of the week
 * @param options - An object with options
 *
 * @returns The date is the previous day of week
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */ parcelHelpers.export(exports, "previousDay", ()=>previousDay);
var _getDayJs = require("./getDay.js");
var _subDaysJs = require("./subDays.js");
function previousDay(date, day, options) {
    let delta = (0, _getDayJs.getDay)(date, options) - day;
    if (delta <= 0) delta += 7;
    return (0, _subDaysJs.subDays)(date, delta, options);
}
// Fallback for modularized imports:
exports.default = previousDay;

},{"./getDay.js":"esFEi","./subDays.js":"3dD7a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIu7S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousFriday} function options.
 */ /**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Friday
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * const result = previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */ parcelHelpers.export(exports, "previousFriday", ()=>previousFriday);
var _previousDayJs = require("./previousDay.js");
function previousFriday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 5, options);
}
// Fallback for modularized imports:
exports.default = previousFriday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcslc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousMonday} function options.
 */ /**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Monday
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * const result = previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */ parcelHelpers.export(exports, "previousMonday", ()=>previousMonday);
var _previousDayJs = require("./previousDay.js");
function previousMonday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 1, options);
}
// Fallback for modularized imports:
exports.default = previousMonday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsMzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousSaturday} function options.
 */ /**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Saturday
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Sat June 19 2021 00:00:00
 */ parcelHelpers.export(exports, "previousSaturday", ()=>previousSaturday);
var _previousDayJs = require("./previousDay.js");
function previousSaturday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 6, options);
}
// Fallback for modularized imports:
exports.default = previousSaturday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNh8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousSunday} function options.
 */ /**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Sunday
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */ parcelHelpers.export(exports, "previousSunday", ()=>previousSunday);
var _previousDayJs = require("./previousDay.js");
function previousSunday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 0, options);
}
// Fallback for modularized imports:
exports.default = previousSunday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mDjN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousThursday} function options.
 */ /**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Thursday
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */ parcelHelpers.export(exports, "previousThursday", ()=>previousThursday);
var _previousDayJs = require("./previousDay.js");
function previousThursday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 4, options);
}
// Fallback for modularized imports:
exports.default = previousThursday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1oS7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousTuesday} function options.
 */ /**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Tuesday
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */ parcelHelpers.export(exports, "previousTuesday", ()=>previousTuesday);
var _previousDayJs = require("./previousDay.js");
function previousTuesday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 2, options);
}
// Fallback for modularized imports:
exports.default = previousTuesday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0xQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link previousWednesday} function options.
 */ /**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @typeParam DateType - The Date type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Wednesday
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */ parcelHelpers.export(exports, "previousWednesday", ()=>previousWednesday);
var _previousDayJs = require("./previousDay.js");
function previousWednesday(date, options) {
    return (0, _previousDayJs.previousDay)(date, 3, options);
}
// Fallback for modularized imports:
exports.default = previousWednesday;

},{"./previousDay.js":"aTT5c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2o9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in months
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */ parcelHelpers.export(exports, "quartersToMonths", ()=>quartersToMonths);
var _constantsJs = require("./constants.js");
function quartersToMonths(quarters) {
    return Math.trunc(quarters * (0, _constantsJs.monthsInQuarter));
}
// Fallback for modularized imports:
exports.default = quartersToMonths;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62942":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name quartersToYears
 * @category Conversion Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert a number of quarters to a full number of years.
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in years
 *
 * @example
 * // Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = quartersToYears(11)
 * //=> 2
 */ parcelHelpers.export(exports, "quartersToYears", ()=>quartersToYears);
var _constantsJs = require("./constants.js");
function quartersToYears(quarters) {
    const years = quarters / (0, _constantsJs.quartersInYear);
    return Math.trunc(years);
}
// Fallback for modularized imports:
exports.default = quartersToYears;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YdBg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link roundToNearestHours} function options.
 */ /**
 * @name roundToNearestHours
 * @category Hour Helpers
 * @summary Rounds the given date to the nearest hour
 *
 * @description
 * Rounds the given date to the nearest hour (or number of hours).
 * Rounds up when the given date is exactly between the nearest round hours.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest hour
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56))
 * //=> Thu Jul 10 2014 13:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 6 })
 * //=> Thu Jul 10 2014 12:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 8 })
 * //=> Thu Jul 10 2014 16:00:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), { roundingMethod: 'ceil' })
 * //=> Thu Jul 10 2014 02:00:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:34:56 to nearest quarter hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { roundingMethod: 'floor', nearestTo: 8 })
 * //=> Thu Jul 10 2014 08:00:00
 */ parcelHelpers.export(exports, "roundToNearestHours", ()=>roundToNearestHours);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function roundToNearestHours(date, options) {
    const nearestTo = options?.nearestTo ?? 1;
    if (nearestTo < 1 || nearestTo > 12) return (0, _constructFromJs.constructFrom)(options?.in || date, NaN);
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const fractionalMinutes = date_.getMinutes() / 60;
    const fractionalSeconds = date_.getSeconds() / 60 / 60;
    const fractionalMilliseconds = date_.getMilliseconds() / 1000 / 60 / 60;
    const hours = date_.getHours() + fractionalMinutes + fractionalSeconds + fractionalMilliseconds;
    const method = options?.roundingMethod ?? "round";
    const roundingMethod = (0, _getRoundingMethodJs.getRoundingMethod)(method);
    const roundedHours = roundingMethod(hours / nearestTo) * nearestTo;
    date_.setHours(roundedHours, 0, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = roundToNearestHours;

},{"./_lib/getRoundingMethod.js":"1ipL6","./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YDXi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link roundToNearestMinutes} function options.
 */ /**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest minute
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * //=> Thu Jul 10 2014 12:15:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'floor' })
 * //=> Thu Jul 10 2014 12:12:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:12:34 to nearest half hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'ceil', nearestTo: 30 })
 * //=> Thu Jul 10 2014 12:30:00
 */ parcelHelpers.export(exports, "roundToNearestMinutes", ()=>roundToNearestMinutes);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function roundToNearestMinutes(date, options) {
    const nearestTo = options?.nearestTo ?? 1;
    if (nearestTo < 1 || nearestTo > 30) return (0, _constructFromJs.constructFrom)(date, NaN);
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const fractionalSeconds = date_.getSeconds() / 60;
    const fractionalMilliseconds = date_.getMilliseconds() / 1000 / 60;
    const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
    const method = options?.roundingMethod ?? "round";
    const roundingMethod = (0, _getRoundingMethodJs.getRoundingMethod)(method);
    const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
    date_.setMinutes(roundedMinutes, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = roundToNearestMinutes;

},{"./_lib/getRoundingMethod.js":"1ipL6","./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yIjPa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in hours
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */ parcelHelpers.export(exports, "secondsToHours", ()=>secondsToHours);
var _constantsJs = require("./constants.js");
function secondsToHours(seconds) {
    const hours = seconds / (0, _constantsJs.secondsInHour);
    return Math.trunc(hours);
}
// Fallback for modularized imports:
exports.default = secondsToHours;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60YWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in milliseconds
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */ parcelHelpers.export(exports, "secondsToMilliseconds", ()=>secondsToMilliseconds);
var _constantsJs = require("./constants.js");
function secondsToMilliseconds(seconds) {
    return seconds * (0, _constantsJs.millisecondsInSecond);
}
// Fallback for modularized imports:
exports.default = secondsToMilliseconds;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wRiH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in minutes
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */ parcelHelpers.export(exports, "secondsToMinutes", ()=>secondsToMinutes);
var _constantsJs = require("./constants.js");
function secondsToMinutes(seconds) {
    const minutes = seconds / (0, _constantsJs.secondsInMinute);
    return Math.trunc(minutes);
}
// Fallback for modularized imports:
exports.default = secondsToMinutes;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BYNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link set} function options.
 */ /**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 * @param options - The options
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */ parcelHelpers.export(exports, "set", ()=>set);
var _constructFromJs = require("./constructFrom.js");
var _setMonthJs = require("./setMonth.js");
var _toDateJs = require("./toDate.js");
function set(date, values, options) {
    let _date = (0, _toDateJs.toDate)(date, options?.in);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(+_date)) return (0, _constructFromJs.constructFrom)(options?.in || date, NaN);
    if (values.year != null) _date.setFullYear(values.year);
    if (values.month != null) _date = (0, _setMonthJs.setMonth)(_date, values.month);
    if (values.date != null) _date.setDate(values.date);
    if (values.hours != null) _date.setHours(values.hours);
    if (values.minutes != null) _date.setMinutes(values.minutes);
    if (values.seconds != null) _date.setSeconds(values.seconds);
    if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
    return _date;
}
// Fallback for modularized imports:
exports.default = set;

},{"./constructFrom.js":"hNMdA","./setMonth.js":"5S4Rm","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5S4Rm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setMonth} function options.
 */ /**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */ parcelHelpers.export(exports, "setMonth", ()=>setMonth);
var _constructFromJs = require("./constructFrom.js");
var _getDaysInMonthJs = require("./getDaysInMonth.js");
var _toDateJs = require("./toDate.js");
function setMonth(date, month, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const day = _date.getDate();
    const midMonth = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    midMonth.setFullYear(year, month, 15);
    midMonth.setHours(0, 0, 0, 0);
    const daysInMonth = (0, _getDaysInMonthJs.getDaysInMonth)(midMonth);
    // Set the earlier date, allows to wrap Jan 31 to Feb 28
    _date.setMonth(month, Math.min(day, daysInMonth));
    return _date;
}
// Fallback for modularized imports:
exports.default = setMonth;

},{"./constructFrom.js":"hNMdA","./getDaysInMonth.js":"iS77p","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"detLY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setDate} function options.
 */ /**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param dayOfMonth - The day of the month of the new date
 * @param options - The options
 *
 * @returns The new date with the day of the month set
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * const result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */ parcelHelpers.export(exports, "setDate", ()=>setDate);
var _toDateJs = require("./toDate.js");
function setDate(date, dayOfMonth, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setDate(dayOfMonth);
    return _date;
}
// Fallback for modularized imports:
exports.default = setDate;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KclM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setDayOfYear} function options.
 */ /**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param dayOfYear - The day of the year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the year set
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * const result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */ parcelHelpers.export(exports, "setDayOfYear", ()=>setDayOfYear);
var _toDateJs = require("./toDate.js");
function setDayOfYear(date, dayOfYear, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setMonth(0);
    date_.setDate(dayOfYear);
    return date_;
}
// Fallback for modularized imports:
exports.default = setDayOfYear;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2QTST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default options including locale.
 * @pure false
 *
 * @description
 * Sets the defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * @param options - An object with options
 *
 * @example
 * // Set global locale:
 * import { es } from 'date-fns/locale'
 * setDefaultOptions({ locale: es })
 * const result = format(new Date(2014, 8, 2), 'PPPP')
 * //=> 'martes, 2 de septiembre de 2014'
 *
 * @example
 * // Start of the week for 2 September 2014:
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Start of the week for 2 September 2014,
 * // when we set that week starts on Monday by default:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Mon Sep 01 2014 00:00:00
 *
 * @example
 * // Manually set options take priority over default options:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Remove the option by setting it to `undefined`:
 * setDefaultOptions({ weekStartsOn: 1 })
 * setDefaultOptions({ weekStartsOn: undefined })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 */ parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
function setDefaultOptions(options) {
    const result = {};
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    for(const property in defaultOptions)if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) // [TODO] I challenge you to fix the type
    result[property] = defaultOptions[property];
    for(const property in options)if (Object.prototype.hasOwnProperty.call(options, property)) {
        if (options[property] === undefined) // [TODO] I challenge you to fix the type
        delete result[property];
        else // [TODO] I challenge you to fix the type
        result[property] = options[property];
    }
    (0, _defaultOptionsJs.setDefaultOptions)(result);
}
// Fallback for modularized imports:
exports.default = setDefaultOptions;

},{"./_lib/defaultOptions.js":"98fau","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7APw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setHours} function options.
 */ /**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param hours - The hours of the new date
 * @param options - An object with options
 *
 * @returns The new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */ parcelHelpers.export(exports, "setHours", ()=>setHours);
var _toDateJs = require("./toDate.js");
function setHours(date, hours, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(hours);
    return _date;
}
// Fallback for modularized imports:
exports.default = setHours;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1EFb6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setMilliseconds} function options.
 */ /**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param milliseconds - The milliseconds of the new date
 * @param options - The options
 *
 * @returns The new date with the milliseconds set
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */ parcelHelpers.export(exports, "setMilliseconds", ()=>setMilliseconds);
var _toDateJs = require("./toDate.js");
function setMilliseconds(date, milliseconds, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setMilliseconds(milliseconds);
    return _date;
}
// Fallback for modularized imports:
exports.default = setMilliseconds;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JQAX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setMinutes} function options.
 */ /**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 * @param options - An object with options
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */ parcelHelpers.export(exports, "setMinutes", ()=>setMinutes);
var _toDateJs = require("./toDate.js");
function setMinutes(date, minutes, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setMinutes(minutes);
    return date_;
}
// Fallback for modularized imports:
exports.default = setMinutes;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1U8F7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setQuarter} function options.
 */ /**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param quarter - The quarter of the new date
 * @param options - The options
 *
 * @returns The new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */ parcelHelpers.export(exports, "setQuarter", ()=>setQuarter);
var _setMonthJs = require("./setMonth.js");
var _toDateJs = require("./toDate.js");
function setQuarter(date, quarter, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    const oldQuarter = Math.trunc(date_.getMonth() / 3) + 1;
    const diff = quarter - oldQuarter;
    return (0, _setMonthJs.setMonth)(date_, date_.getMonth() + diff * 3);
}
// Fallback for modularized imports:
exports.default = setQuarter;

},{"./setMonth.js":"5S4Rm","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"E9tFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setSeconds} function options.
 */ /**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date, with context support.
 *
 * @description
 * Set the seconds to the given date, with an optional context for time zone specification.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param seconds - The seconds of the new date
 * @param options - An object with options
 *
 * @returns The new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */ parcelHelpers.export(exports, "setSeconds", ()=>setSeconds);
var _toDateJs = require("./toDate.js");
function setSeconds(date, seconds, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setSeconds(seconds);
    return _date;
}
// Fallback for modularized imports:
exports.default = setSeconds;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcJtI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setWeekYear} function options.
 */ /**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param weekYear - The local week-numbering year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week-numbering year set
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * const result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = setWeekYear(new Date(2010, 0, 2), 2004, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sat Jan 01 2005 00:00:00
 */ parcelHelpers.export(exports, "setWeekYear", ()=>setWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _startOfWeekYearJs = require("./startOfWeekYear.js");
var _toDateJs = require("./toDate.js");
function setWeekYear(date, weekYear, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)((0, _toDateJs.toDate)(date, options?.in), (0, _startOfWeekYearJs.startOfWeekYear)(date, options), options);
    const firstWeek = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const date_ = (0, _startOfWeekYearJs.startOfWeekYear)(firstWeek, options);
    date_.setDate(date_.getDate() + diff);
    return date_;
}
// Fallback for modularized imports:
exports.default = setWeekYear;

},{"./_lib/defaultOptions.js":"98fau","./constructFrom.js":"hNMdA","./differenceInCalendarDays.js":"dvya7","./startOfWeekYear.js":"diTjA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4hEJG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link setYear} function options.
 */ /**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */ parcelHelpers.export(exports, "setYear", ()=>setYear);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function setYear(date, year, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(+date_)) return (0, _constructFromJs.constructFrom)(options?.in || date, NaN);
    date_.setFullYear(year);
    return date_;
}
// Fallback for modularized imports:
exports.default = setYear;

},{"./constructFrom.js":"hNMdA","./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmg97":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfDecade} options.
 */ /**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */ parcelHelpers.export(exports, "startOfDecade", ()=>startOfDecade);
var _toDateJs = require("./toDate.js");
function startOfDecade(date, options) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const decade = Math.floor(year / 10) * 10;
    _date.setFullYear(decade, 0, 1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfDecade;

},{"./toDate.js":"actWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMsqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfToday} function options.
 */ /**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfToday", ()=>startOfToday);
var _startOfDayJs = require("./startOfDay.js");
function startOfToday(options) {
    return (0, _startOfDayJs.startOfDay)(Date.now(), options);
}
// Fallback for modularized imports:
exports.default = startOfToday;

},{"./startOfDay.js":"iJAa5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04Svu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfTomorrow} function options.
 */ /**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of tomorrow
 *
 * @description
 * Return the start of tomorrow.
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfTomorrow", ()=>startOfTomorrow);
var _constructFromJs = require("./constructFrom.js");
var _constructNowJs = require("./constructNow.js");
function startOfTomorrow(options) {
    const now = (0, _constructNowJs.constructNow)(options?.in);
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = (0, _constructFromJs.constructFrom)(options?.in, 0);
    date.setFullYear(year, month, day + 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
// Fallback for modularized imports:
exports.default = startOfTomorrow;

},{"./constructFrom.js":"hNMdA","./constructNow.js":"aJJt5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dAxue":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfYesterday} function options.
 */ /**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns The start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfYesterday", ()=>startOfYesterday);
var _constructNowJs = require("./constructNow.js");
function startOfYesterday(options) {
    const now = (0, _constructNowJs.constructNow)(options?.in);
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = (0, _constructNowJs.constructNow)(options?.in);
    date.setFullYear(year, month, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
// Fallback for modularized imports:
exports.default = startOfYesterday;

},{"./constructNow.js":"aJJt5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bFznd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link sub} function options.
 */ /**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 * @param options - An object with options
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */ parcelHelpers.export(exports, "sub", ()=>sub);
var _constructFromJs = require("./constructFrom.js");
var _subDaysJs = require("./subDays.js");
var _subMonthsJs = require("./subMonths.js");
function sub(date, duration, options) {
    const { years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
    const withoutMonths = (0, _subMonthsJs.subMonths)(date, months + years * 12, options);
    const withoutDays = (0, _subDaysJs.subDays)(withoutMonths, days + weeks * 7, options);
    const minutesToSub = minutes + hours * 60;
    const secondsToSub = seconds + minutesToSub * 60;
    const msToSub = secondsToSub * 1000;
    return (0, _constructFromJs.constructFrom)(options?.in || date, +withoutDays - msToSub);
}
// Fallback for modularized imports:
exports.default = sub;

},{"./constructFrom.js":"hNMdA","./subDays.js":"3dD7a","./subMonths.js":"bQpwZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQpwZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The subMonths function options.
 */ /**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "subMonths", ()=>subMonths);
var _addMonthsJs = require("./addMonths.js");
function subMonths(date, amount, options) {
    return (0, _addMonthsJs.addMonths)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subMonths;

},{"./addMonths.js":"alxIr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oOvu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subBusinessDays} function options.
 */ /**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Subtract the specified number of business days (mon - fri) from the given date.
 *
 * @description
 * Subtract the specified number of business days (mon - fri) from the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the business days subtracted
 *
 * @example
 * // Subtract 10 business days from 1 September 2014:
 * const result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */ parcelHelpers.export(exports, "subBusinessDays", ()=>subBusinessDays);
var _addBusinessDaysJs = require("./addBusinessDays.js");
function subBusinessDays(date, amount, options) {
    return (0, _addBusinessDaysJs.addBusinessDays)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subBusinessDays;

},{"./addBusinessDays.js":"475kI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVGj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subHours} function options.
 */ /**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */ parcelHelpers.export(exports, "subHours", ()=>subHours);
var _addHoursJs = require("./addHours.js");
function subHours(date, amount, options) {
    return (0, _addHoursJs.addHours)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subHours;

},{"./addHours.js":"hzidA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22JNI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subMilliseconds} function options.
 */ /**
 * Subtract the specified number of milliseconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the milliseconds subtracted
 */ parcelHelpers.export(exports, "subMilliseconds", ()=>subMilliseconds);
var _addMillisecondsJs = require("./addMilliseconds.js");
function subMilliseconds(date, amount, options) {
    return (0, _addMillisecondsJs.addMilliseconds)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subMilliseconds;

},{"./addMilliseconds.js":"03zTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPKrE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subMinutes} function options.
 */ /**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the minutes subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */ parcelHelpers.export(exports, "subMinutes", ()=>subMinutes);
var _addMinutesJs = require("./addMinutes.js");
function subMinutes(date, amount, options) {
    return (0, _addMinutesJs.addMinutes)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subMinutes;

},{"./addMinutes.js":"7jsut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ieGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subQuarters} function options.
 */ /**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */ parcelHelpers.export(exports, "subQuarters", ()=>subQuarters);
var _addQuartersJs = require("./addQuarters.js");
function subQuarters(date, amount, options) {
    return (0, _addQuartersJs.addQuarters)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subQuarters;

},{"./addQuarters.js":"jW81o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvB1W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subSeconds} function options.
 */ /**
 * Subtract the specified number of seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */ parcelHelpers.export(exports, "subSeconds", ()=>subSeconds);
var _addSecondsJs = require("./addSeconds.js");
function subSeconds(date, amount, options) {
    return (0, _addSecondsJs.addSeconds)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subSeconds;

},{"./addSeconds.js":"1jCRu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20wf8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subWeeks} function options.
 */ /**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */ parcelHelpers.export(exports, "subWeeks", ()=>subWeeks);
var _addWeeksJs = require("./addWeeks.js");
function subWeeks(date, amount, options) {
    return (0, _addWeeksJs.addWeeks)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subWeeks;

},{"./addWeeks.js":"6sRN6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jmZa1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link subYears} function options.
 */ /**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */ parcelHelpers.export(exports, "subYears", ()=>subYears);
var _addYearsJs = require("./addYears.js");
function subYears(date, amount, options) {
    return (0, _addYearsJs.addYears)(date, -amount, options);
}
// Fallback for modularized imports:
exports.default = subYears;

},{"./addYears.js":"3IQD4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6D2CR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param weeks - The number of weeks to be converted
 *
 * @returns The number of weeks converted in days
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */ parcelHelpers.export(exports, "weeksToDays", ()=>weeksToDays);
var _constantsJs = require("./constants.js");
function weeksToDays(weeks) {
    return Math.trunc(weeks * (0, _constantsJs.daysInWeek));
}
// Fallback for modularized imports:
exports.default = weeksToDays;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWLQa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name yearsToDays
 * @category Conversion Helpers
 * @summary Convert years to days.
 *
 * @description
 * Convert a number of years to a full number of days.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in days
 *
 * @example
 * // Convert 2 years into days
 * const result = yearsToDays(2)
 * //=> 730
 */ parcelHelpers.export(exports, "yearsToDays", ()=>yearsToDays);
var _constantsJs = require("./constants.js");
function yearsToDays(years) {
    return Math.trunc(years * (0, _constantsJs.daysInYear));
}
// Fallback for modularized imports:
exports.default = yearsToDays;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD3ep":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in months
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */ parcelHelpers.export(exports, "yearsToMonths", ()=>yearsToMonths);
var _constantsJs = require("./constants.js");
function yearsToMonths(years) {
    return Math.trunc(years * (0, _constantsJs.monthsInYear));
}
// Fallback for modularized imports:
exports.default = yearsToMonths;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"di2PR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in quarters
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */ parcelHelpers.export(exports, "yearsToQuarters", ()=>yearsToQuarters);
var _constantsJs = require("./constants.js");
function yearsToQuarters(years) {
    return Math.trunc(years * (0, _constantsJs.quartersInYear));
}
// Fallback for modularized imports:
exports.default = yearsToQuarters;

},{"./constants.js":"1vXXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequiredcbb")

//# sourceMappingURL=index.e37f48ea.js.map
