// Safari
const isSafari = (ua: string) =>
  ua.indexOf("safari") > -1 && ua.indexOf("chrome") == -1;

// iPhone
const isiPhone = (ua: string) => ua.indexOf("iphone") > -1;

// iPad
const isiPad = (ua: string) => ua.indexOf("ipad") > -1;

/**
 * iOS Safariかどうかを判定する
 */
export const isIOSSafari = (ua: string) => {
  const uaLower = ua.toLowerCase();
  return (isiPad(uaLower) || isiPhone(uaLower)) && isSafari(uaLower);
};
