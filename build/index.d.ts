declare const regex: RegExp;
export default regex;
export interface IMatch {
    title?: string;
}
export declare type Match = RegExpExecArray & IMatch;
