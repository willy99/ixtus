const PLACEHOLDER = /(?:__)(.*?)(?:__)/g;

let dict = {};

export default function init(data) {
  dict = data || {};
}

export function append(data) {
  Object.assign(dict, data);
}

export function t(key = '', data = {}) {
  const value = dict[key] || key;

  if (!value) return key;

  // eslint-disable-next-line
  return value.replace(PLACEHOLDER, (match, escape) =>
    typeof data[escape] !== 'undefined' ? data[escape] : match,
  );
}
