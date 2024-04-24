export default function cleanSet(set, startString) {
  let text = '';
  if (startString === '' || startString === undefined) { return ''; }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      text += `${value.substr(3)}-`;
    }
  });

  return text.slice(0, -1);
}
