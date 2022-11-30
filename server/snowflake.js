var path = require("path");
const fs = require("fs");
var enumerator = BigInt(fs.readFileSync(path.join(__dirname, "snowflakeenumerator.txt")));
exports.getNewSnowflake = newSnowflake;
function newSnowflake() {
    let timestamp = BigInt(Date.now());
    console.log((timestamp / 1000n) << 32n);
    console.log(BigInt(enumerator) << 22n);
    console.log(BigInt((Math.random * 2) ^ 22));
    let tempNum =
        ((timestamp / 1000n) << 32n) +
        (BigInt(enumerator) << 22n) +
        BigInt(Math.floor(Math.random() * 4194304));
    fs.writeFile(
        "./snowflakeenumerator.txt",
        (enumerator + 1n) % 1024n,
        () => {}
    );
    return tempNum;
}

function binOut(num) {
    let output = "";
    let tempNum = num;
    while (true) {
        if (!tempNum) break;
        output = (tempNum % 2n ? "1" : "0") + output;
        tempNum = tempNum / 2n;
    }
    return output;
}

console.log(newSnowflake());
