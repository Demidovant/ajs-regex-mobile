export default function formatMobile(mobile) {
  const regexpmobile = /^(\+?)([0-9]{1,3}) ?\(?([0-9]{3})\)? ?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/;
  const match = mobile.match(regexpmobile);
  if (`${match[2]}` === '8') {
    return `+7${match[3]}${match[4]}${match[5]}${match[6]}`;
  }
  return `+${match[2]}${match[3]}${match[4]}${match[5]}${match[6]}`;
}
