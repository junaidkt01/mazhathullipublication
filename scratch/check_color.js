const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('public/herosection/ezgif-frame-001.png');
// Find IDAT chunk
let offset = 8;
let idatBufs = [];
while (offset < buf.length) {
  const length = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') {
    idatBufs.push(buf.slice(offset + 8, offset + 8 + length));
  }
  offset += 12 + length;
}
const compressed = Buffer.concat(idatBufs);
const uncompressed = zlib.inflateSync(compressed);
// Row length = 1 (filter byte) + 1280 * 3 = 3841 bytes
const r = uncompressed[1];
const g = uncompressed[2];
const b = uncompressed[3];
console.log(`Top-left pixel RGB: rgb(${r}, ${g}, ${b}) -> hex: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
