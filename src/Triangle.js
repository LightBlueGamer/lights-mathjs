/**
 * @returns Area or Perimeter of the triangle
 * @example
 * const { triangle } = require('lights-mathjs');
 * console.log(new triangle().area(3, 3));
 * console.log(new triangle().perimeter(3, 3, 3));
 */
module.exports = function Triangle() {
  this.length = length;
  /**
   * @returns Area of the triangle
   * @example
   * const { triangle } = require('lights-mathjs');
   * console.log(new triangle().area(3, 3));
   */
  this.area = function (height, base) {
    return (height * base) / 2;
  };
  /**
   * @returns Perimeter of the triangle
   * @example
   * const { triangle } = require('lights-mathjs');
   * console.log(new triangle().perimeter(3, 3, 3));
   */
  this.perimeter = function (side1Length, side2Length, side3Length) {
    return side1Length + side2Length + side3Length;
  };
};
