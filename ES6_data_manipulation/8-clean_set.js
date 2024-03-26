export default function cleanSet(set, startString) {
  let text = "";
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      text += `${value.substr(3)}-`;
    }
  });

  return text.slice(0, -1);
}