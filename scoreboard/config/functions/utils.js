module.exports = {
  // Function: getRandomInt
  // Description: Returns a random integer between min (inclusive) and max (inclusive)
  // Parameters:
  //   min: The minimum number to return
  //   max: The maximum number to return
  // Returns:
  //   A random integer between min and max
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

};

