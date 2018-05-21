"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const pattern = `
    <title>
    (?<title>
        .*?
    )
    </title>
$`;
const flags = 'xnmsi';
const regex = XRegExp(pattern, flags);
exports.default = regex;
//# sourceMappingURL=index.js.map