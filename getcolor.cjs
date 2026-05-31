const fs = require('fs');

function getPixelColor(buf, x, y, width) {
  // Simple PNG parsing is too hard, let's just find the IDAT chunk, zlib decompress it...
}
