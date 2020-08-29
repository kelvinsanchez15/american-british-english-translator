# Quality Assurance Project #5: American / British English Translator.

## View project

[American / British English Translator](https://american-british-english-translator-kel.glitch.me/)

## User stories:

1. I can enter a simple sentence into the text area and select whether to translate to British or American English from the dropdown menu.
1. When the "Translate" button is pressed, append the translated sentence to the `translated-sentence` `div`. See the JavaScript files in `/public` for the different spelling and terms your application should translate.
1. Your application should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English.
1. Your application should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See `/public/american-to-british-titles.js` for the different titles your application should handle.
1. Wrap any translated spelling or terms with `<span class="highlight">...</span>` tags so they appear in green.
1. If the sentence in the text area has no spelling or terms that should be translated, append the message "Everything looks good to me!" to the `translated-sentence` `div`.
1. If there is no text in the text area, append the message "Error: No text to translate." to the `error-msg` `div` so the text appears in red.
1. I can press the "Clear Input" button to remove all text from the text area and the `translated-sentence` `div`.
1. All 20 unit tests are complete and passing. See `/tests/1_unit-tests.js`.
1. All 4 functional tests are complete and passing. See `/tests/2_functional-tests.js`.

## Additional Dependencies

- [Chai](https://www.npmjs.com/package/chai).
- [CORS](https://www.npmjs.com/package/cors).
- [Express](https://www.npmjs.com/package/express).
- [JSDom](https://www.npmjs.com/package/jsdom).
- [Mocha](https://www.npmjs.com/package/mocha).
