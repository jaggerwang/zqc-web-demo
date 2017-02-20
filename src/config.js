/**
 * 在球场
 * zaiqiuchang.com
 */

export const VERSION = '1.0.0';

export let SCHEME = 'https';
export let DOMAIN_API = 'api.zaiqiuchang.com';
if (__DEV__) {
  SCHEME = 'http';
  DOMAIN_API = 'api.zqc.dev';
}
export const API_BASE_URL = `${SCHEME}://${DOMAIN_API}`;
