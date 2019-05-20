import Cookies from 'universal-cookie';

export default function cookies(cookie) {
    return cookie ? new Cookies(cookie) : new Cookies();
}
