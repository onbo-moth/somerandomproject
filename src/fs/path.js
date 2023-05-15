class Path {
  /**
   * Return tokenized version of the directory string.
   * 
   * @param {String} str Directory string. 
   * 
   * @returns {Array} Returns the array of tokens.
   */
  static tokenizeDirectoryString(str) {
    if(str.charAt(0) == "/") str = str.substring(1);

    let tokens = str.split("/");

    return tokens
  }
}