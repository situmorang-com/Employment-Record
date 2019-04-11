import { KEY_SKILL, KEY_DEFAULT} from './actionTypes';

export function addSkills(payload) {
return { type: KEY_SKILL,payload }
}

export function defaultAction(payload) {
return { type: KEY_DEFAULT, payload }
}

