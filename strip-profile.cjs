const fs = require('fs');
const buf = fs.readFileSync('public/images/showcase/jci.png');
const chunks = [];
let offset = 8;
while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  chunks.push({
    len,
    type,
    start: offset,
    end: offset + 12 + len
  });
  offset += 12 + len;
}
const dropTypes = ['sRGB', 'iCCP', 'gAMA', 'cHRM'];
const newChunks = chunks.filter(c => !dropTypes.includes(c.type));
const outBufs = [buf.slice(0, 8)];
newChunks.forEach(c => outBufs.push(buf.slice(c.start, c.end)));
const out = Buffer.concat(outBufs);
fs.writeFileSync('public/images/showcase/jci.png', out);
fs.writeFileSync('open-directly/images/showcase/jci.png', out);
console.log('Stripped profile chunks.');
