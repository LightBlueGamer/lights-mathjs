/**
 * @param {number} radius The radius of the circle
 * @returns Area or Perimeter of the circle
 * @example
 * const { circle } = require('lights_extended_js');
 * console.log(new circle(3).area());
 * console.log(new circle(3).perimeter());
 */
module.exports = function Circle(radius) {
  if (isNaN(radius))
    return console.error(`Type ${typeof radius} is not a number.`);
  this.radius = radius;
  /**
   * @returns Area of the circle
   * @example
   * const { circle } = require('lights_extended_js');
   * console.log(new circle(3).area());
   */
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  /**
   * @returns Perimeter of the circle
   * @example
   * const { circle } = require('lights_extended_js');
   * console.log(new circle(3).perimeter());
   */
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
};
