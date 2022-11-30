const timestamp = Date.now()
const buf = Buffer.allocUnsafe(6);
console.log(buf.writeIntBE(Math.floor(timestamp/1000), 0, 4).toString(36))
console.log(Buffer.from((Math.floor(timestamp/1000) << 32) + (1 << 22) + 532589))