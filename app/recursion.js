recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: (data, dirName) => {
    const files = [];
    const getFiles = (directory) => {
      files.push(...directory.files);
      if (directory.subDirs.length > 0) {
        directory.subDirs.forEach((dir) => {
          getFiles(dir);
        });
      }
    };
    getFiles(data);
    return dirName ? files.filter(file => file.includes(dirName)) : files;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: (n) => {
    const fib = num => (num < 2 ? num : fib(num - 1) + fib(num - 2));
    return fib(n);
  },
};
