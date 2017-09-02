'use strict';

jest.dontMock('../i18n');

describe('i18n', function () {

    var i18n = require('../i18n').default;

    var mockStrings = {
        'en': {
            'hello $1': 'hello $1'
        },
        'mi': {
            'hello $1': 'kia ora $1'
        }
    };

    i18n.dictionary = mockStrings;

    it('defaults to `en` language', function () {
        expect(i18n.lang).toEqual('en');
    });

    describe('set lang()', function () {

        it('should allow setting of the language to a valid language code, returning true', function () {
            i18n.lang = 'mi';
            expect(i18n.lang).toEqual('mi');
        });

        it('should ignore setting the language to an invalid language code, returning false', function () {
            i18n.lang = 'piglatin';
            expect(i18n.lang).not.toEqual('piglatin');
        });
    });

    describe('translate()', function () {

        it('should translate a string', function () {
            i18n.lang = 'en';
            expect(i18n.translate('hello $1', 'world')).toEqual('hello world');

            i18n.lang = 'mi';
            expect(i18n.translate('hello $1', 'world')).toEqual('kia ora world');
        });
    });
});