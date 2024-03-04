import { views } from "../lib/View";

export function match(param) {
    return param in views
}