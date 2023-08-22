function returnY() {
  'use strict';
  y = 123;
  return y;
}

returnY(); // Uncaught ReferenceError

'use strict';
var NaN = NaN // Uncaught TypeError: Cannot
var undefined = undefined