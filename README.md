# VAMTIGER Regex HTML Title
A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match an HTML **_title_** for a defined input string.

## Installation
[VAMTIGER Regex HTML Title](https://github.com/vamtiger-project/vamtiger-regex-html-title) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-regex-html-title
```
or
```bash
yarn add vamtiger-regex-html-title
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Regex HTML Title](https://github.com/vamtiger-project/vamtiger-regex-html-title):
```javascript
import regex from 'vamtiger-regex-html-title';
```
or
```javascript
const regex = require('vamtiger-regex-html-title').default;
```

[VAMTIGER Regex HTML Title](https://github.com/vamtiger-project/vamtiger-regex-html-title) can then be used to test whether a defined input string contains a _HTML_ **Title**:
```javascript
const regex = require('vamtiger-regex-html-title').default;

const input = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Some HTML Title</title>
</head>
<body>

</body>
</html>
`;
const match = input.match(regex);

/**
 * if (match) {
 *     // Yep, the input string has a HTML title
 *     match[1] === 'Some HTML Title'
 * }
 **/
```

Named capture groups can be referenced when used together with [XRegExp](https://www.npmjs.com/package/xregexp):
```javascript
const XRegExp = require('xregexp');
const regex = require('vamtiger-regex-html-title').default;
// import {default as regex, Match} from 'vamtiger-regex-html-title'; // Typescript
const input = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Some HTML Title</title>
</head>
<body>

</body>
</html>
`;
const match = XRegExp.exec(input, regex);
// const match: Match = XRegExp.exec(input, regex); // Typescript

/**
 * if (match) {
 *     // Yep, the input string has a HTML title
 *     match.title === 'Some HTML Title'
 * }
 **/
```