'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.I18n = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PinConst = require('./PinConst');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var I18n = exports.I18n = function () {
    _createClass(I18n, [{
        key: 'lang',


        /**
         * @property
         * @type {string} The currently set language
         */
        get: function get() {
            return this._lang;
        }

        /**
         * If the lang is supported (found has a key in Strings), set new lang.
         * @property
         * @param {string} _lang - the language code to set
         */
        ,
        set: function set(lang) {
            if (this.dictionary.hasOwnProperty(lang)) {
                this._lang = lang;
            }
        }

        /**
         * @property
         * @type {Object} map of languages and strings
         */

    }, {
        key: 'dictionary',
        get: function get() {
            return this._dictionary;
        }

        /**
         * @property
         * @param  {object} dictionary
         */
        ,
        set: function set(dictionary) {
            this._dictionary = dictionary;
        }

        /**
         * Create a new i18n class to translate strings
         * @param {Object} dictionary
         * @param {string} language Initial language for the dictionary
         */

    }]);

    function I18n(dictionary, language) {
        _classCallCheck(this, I18n);

        this._lang = language || _PinConst.DEFAULT_LANGUAGE;
        this._dictionary = dictionary;
    }

    /**
     * This is a wrapper for translating strings. It provides simple
     * interpolation via "test $1 $2". Each $index will be replaced
     * with the argument at $index.
     *
     * @param {string} key - the string to translate
     * @param {string} ...args - the list of arguments to use in interpolation
     * @returns {string} the translated/interpolated string
     */


    _createClass(I18n, [{
        key: 'translate',
        value: function translate(key) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return this.dictionary[this.lang][key].replace(/\$([1-9])/g, function (match, index) {
                return args[index - 1] || match;
            });
        }
    }]);

    return I18n;
}();

var singleton = new I18n(_PinConst.I18N_DICTIONARY, _PinConst.DEFAULT_LANGUAGE);

exports.default = singleton;