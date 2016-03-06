/**
 * Created by mfisher on 3/6/16.
 *
 * component.js. File for adding an h1 to the app div.
 */
module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello world!!';

  return element;
};