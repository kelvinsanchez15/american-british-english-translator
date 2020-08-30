import { americanOnly } from "./american-only.js";
import { britishOnly } from "./british-only.js";
import { americanToBritishSpelling } from "./american-to-british-spelling.js";
import { americanToBritishTitles } from "./american-to-british-titles.js";

// Reverse object key/value pairs
const reverseDict = (obj) =>
  Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [v]: k })));

// American/British dictionary
const americanBritishDict = {
  ...americanOnly,
  ...americanToBritishSpelling,
  ...americanToBritishTitles,
};

// British/American dictionary
const reverseAmericanToBritishSpelling = reverseDict(americanToBritishSpelling);
const reverseAmericanToBritishTitles = reverseDict(americanToBritishTitles);

const britishAmericanDict = {
  ...britishOnly,
  ...reverseAmericanToBritishSpelling,
  ...reverseAmericanToBritishTitles,
};

// Selectors
const textInput = document.querySelector("#text-input");
const localeSelect = document.querySelector("#locale-select");
const translateBtn = document.querySelector("#translate-btn");
const translationDiv = document.querySelector("#translated-sentence");

// "Mangoes are my favorite fruit. --> Mangoes are my favourite fruit."
// "I ate yogurt for breakfast. --> I ate yoghurt for breakfast."
const translate = () => {
  const originalStr = textInput.value;
  const lowerCasedOriginalStr = originalStr.toLowerCase();
  const translationType = localeSelect.value;
  const dict =
    translationType === "american-to-british"
      ? americanBritishDict
      : britishAmericanDict;

  const matchesMap = {};

  // Filter words with spaces from current dictionary
  const wordsWithSpace = Object.fromEntries(
    Object.entries(dict).filter(([k, v]) => k.includes(" "))
  );

  // Search for spaced word matches and add'em to the matchesMap object
  Object.entries(wordsWithSpace).map(([k, v]) => {
    if (lowerCasedOriginalStr.includes(k)) {
      matchesMap[k] = v;
    }
  });

  // Search for individual word matches and add'em to the matchesMap object
  lowerCasedOriginalStr
    .match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g)
    .map((word) => {
      if (dict[word]) return (matchesMap[word] = dict[word]);
    });

  const result = replaceAll(originalStr, matchesMap);

  translationDiv.innerHTML = result;

  console.log(result);
};

const replaceAll = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join("|"), "gi");

  return str.replace(
    re,
    (matched) =>
      `<span class='highlight'>${mapObj[matched.toLowerCase()]}</span>`
  );
};

//`<span class='highlight'>${upperWordOrTerm}</span>`

// console.log(americanBritishDict["certified"]);

// Event listeners
translateBtn.addEventListener("click", translate);

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {};
} catch (e) {}
