const ua = navigator.userAgent.toLowerCase();
console.log("outer", ua);
// Safari
const isSafari = () => ua.indexOf("safari") > -1 && ua.indexOf("chrome") == -1;

// iPhone
const isiPhone = () => ua.indexOf("iphone") > -1;

// iPad
const isiPad = () => ua.indexOf("ipad") > -1;

/**
 * iOS Safariかどうかを判定する
 */
export const isIOSSafari = () => {
  console.log(ua);
  return (isiPad() || isiPhone()) && isSafari();
};
