const { assert } = require("chai");

let Translator;

suite("Functional Tests", () => {
  suiteSetup(() => {
    // DOM already mocked -- load translator then run tests
    Translator = require("../public/translator.js");
  });

  suite("Function translateClickHandler()", () => {
    test("Translation appended to the `translated-sentence` `div`", (done) => {
      /*
      The translated sentence is appended to the `translated-sentence` `div`
      and the translated words or terms are wrapped in
      `<span class="highlight">...</span>` tags when the "Translate" button is pressed.
    */
      const input = "Play guitar is my favorite hobby";
      const expected =
        'Play guitar is my <span class="highlight">favourite</span> hobby';

      const textInput = document.querySelector("#text-input");
      const localeSelect = document.querySelector("#locale-select");
      const translationDiv = document.querySelector("#translated-sentence");

      textInput.value = input;
      localeSelect.value = "american-to-british";

      Translator.translateClickHandler();

      assert.strictEqual(translationDiv.innerHTML, expected);

      done();
    });

    test("'Everything looks good to me!' message appended to the `translated-sentence` `div`", (done) => {
      /*
      If there are no words or terms that need to be translated,
      the message 'Everything looks good to me!' is appended to the
      `translated-sentence` `div` when the "Translate" button is pressed.
    */
      const input = "A test string with nothing to translate";
      const expected = "Everything looks good to me!";

      const textInput = document.querySelector("#text-input");
      const localeSelect = document.querySelector("#locale-select");
      const translationDiv = document.querySelector("#translated-sentence");

      textInput.value = input;
      localeSelect.value = "american-to-british";

      Translator.translateClickHandler();

      assert.strictEqual(translationDiv.innerHTML, expected);

      done();
    });

    test("'Error: No text to translate.' message appended to the `error-msg` `div`", (done) => {
      /*
      If the text area is empty when the "Translation" button is
      pressed, append the message 'Error: No text to translate.' to
      the `error-msg` `div`.
    */
      const input = "";
      const expected = "Error: No text to translate.";

      const textInput = document.querySelector("#text-input");
      const localeSelect = document.querySelector("#locale-select");
      const errorDiv = document.querySelector("#error-msg");

      textInput.value = input;
      localeSelect.value = "american-to-british";

      Translator.translateClickHandler();

      assert.strictEqual(errorDiv.textContent, expected);

      done();
    });
  });

  suite("Function clearClickHandler()", () => {
    test("Text area, `translated-sentence`, and `error-msg` are cleared", (done) => {
      /*
      The text area and both the `translated-sentence` and `error-msg`
      `divs` are cleared when the "Clear" button is pressed.
    */
      const input = "Play guitar is my favorite hobby";
      const expected =
        'Play guitar is my <span class="highlight">favourite</span> hobby';

      const textInput = document.querySelector("#text-input");
      const localeSelect = document.querySelector("#locale-select");
      const translationDiv = document.querySelector("#translated-sentence");
      const errorDiv = document.querySelector("#error-msg");

      // Mock translation
      textInput.value = input;
      localeSelect.value = "american-to-british";

      Translator.translateClickHandler();

      assert.strictEqual(translationDiv.innerHTML, expected);

      // Clear All
      Translator.clearClickHandler();

      assert.strictEqual(textInput.value, "");
      assert.strictEqual(translationDiv.innerHTML, "");
      assert.strictEqual(errorDiv.textContent, "");

      done();
    });
  });
});
