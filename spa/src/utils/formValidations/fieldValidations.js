import { EMAIL_REGEX } from '../../constants';

export function isValidPassword(password) {
    if(password.length < 8) return false
    return true
}

export function isValidEmail(email) {
    return EMAIL_REGEX.test(email)
}
