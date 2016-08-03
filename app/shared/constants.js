"use strict";
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "CONTEXT_PATH", {
        get: function () { return '/OIS'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "DATA_PATH", {
        get: function () { return '/generated/data'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "DEFAULT_LANGUAGE", {
        get: function () { return 'ENG'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "UPDATE_INTERVAL_DATA", {
        get: function () { return 120000; } // in milliseconds
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "START_DATE", {
        get: function () { return new Date('2018-02-08'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "END_DATE", {
        get: function () { return new Date('2018-02-25'); },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());
exports.Constants = Constants;
