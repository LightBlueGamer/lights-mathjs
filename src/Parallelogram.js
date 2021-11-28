/**
 * @param {number} lenght The length of the parallelogram
 * @param {number} height The height of the parallelogram
 * @returns Area or Perimeter of a parallelogram
 * @example
 * const { parallelogram } = require('lights-mathjs');
 * console.log(new parallelogram(3, 3).area());
 * console.log(new parallelogram(3, 3).perimeter());
 */
module.exports = function Parallelogram(length, height) {
  if (isNaN(length))
    return console.error(`Type ${typeof length} is not a number.`);
  if (isNaN(height))
    return console.error(`Type ${typeof height} is not a number.`);

  this.length = length;
  this.height = height;

  /**
   * @returns Area of the parallelogram
   * @example
   * const { parallelogram } = require('lights-mathjs');
   * console.log(new parallelogram(3, 3).area());
   */
  this.area = function () {
    return length * height;
  };
  /**
   * @returns Perimeter of the parallelogram
   * @example
   * const { parallelogram } = require('lights-mathjs');
   * console.log(new parallelogram(3, 3).perimeter());
   */
  this.perimeter = function () {
    return 2 * length + 2 * height;
  };
};
