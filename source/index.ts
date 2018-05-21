import * as XRegExp from 'xregexp';

const pattern = `
    <title>
    (?<title>
        .*?
    )
    </title>
$`;
const flags = 'xnmsi';
const regex = XRegExp(pattern, flags);

export default regex;

export interface IMatch {
    title?: string;
}

export type Match = RegExpExecArray & IMatch;