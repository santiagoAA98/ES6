"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PERSONA = ['carlos', 23, 'Mexico'];
var nombre = PERSONA[0],
    pais = PERSONA[2],
    _PERSONA$ = PERSONA[3],
    profesion = _PERSONA$ === void 0 ? 'no especificado' : _PERSONA$;

var MOSTRARINFO = function MOSTRARINFO() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PERSONA,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      pais = _ref2[2],
      _ref2$ = _ref2[3],
      profesion = _ref2$ === void 0 ? 'no especificado' : _ref2$;

  return console.log("".concat(nombre, " - ").concat(pais, " - ").concat(profesion));
};

MOSTRARINFO();