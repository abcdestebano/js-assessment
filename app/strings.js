stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: (str, amount) => {
    const arrayStr = str.split('');
    const newStr = [];
    let count = 0;
    let chart = '';
    arrayStr.forEach((elem) => {
      if (elem !== chart) {
        count = 1;
        chart = elem;
        newStr.push(elem);
      } else if (count < amount) {
        count += 1;
        newStr.push(elem);
      }
    });
    return newStr.join('');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: str => str.split('').reverse().join(''),
};
