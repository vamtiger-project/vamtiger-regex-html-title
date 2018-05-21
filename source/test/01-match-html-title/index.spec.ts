import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import {default as regex, Match} from '../../index';
import html from './mock-data';

describe("vamtiger-regex-html-title: should match", function () {
    it("HTML title", async function () {
        const input = html;
        const expected = 'Some HTML Title';
        const match = input.match(regex) as RegExpExecArray;
        const xMatch = XRegExp.exec(input, regex) as Match;

        expect(match).to.be.ok;
        expect(match.length).to.be.gt(0);
        expect(match[1].trim()).to.equal(expected);

        expect(xMatch).to.be.ok;
        expect(xMatch.length).to.be.gt(0);
        expect(xMatch[1].trim()).to.equal(expected);
        expect(xMatch.title && xMatch.title.trim()).to.equal(expected);
    })
})