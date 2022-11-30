const jsen = require("jsen")
const fs = require("fs")
schema = JSON.parse(fs.readFileSync("./v4exanded.schema.json"))
testingJSON = JSON.parse(fs.readFileSync("./testing.json"))
var validate = jsen(schema);
var valid = validate(testingJSON);

// V4 encoding will be seperated by semicolons, to be semi backwards compatible with V3-. FIELDS:
// V4 Identification: "V4"
// Width in Base64
// Height in Base64
// Cell String Length (Length of b64 characters) in Numbers
// Modified lz77 encoding. use v3, but each character is actually a run of characters of CSL length.
// Mod list. Seperated by commas, list the concatenated binary of the devID and the modID, followed by a dot followed by perms required.
// Core Disabled. iModID represented as b64, seperated by commas.
// cell update order. Split into 8 sections, which are seperated by commas. iCellID list


// how to get iCellID
// every mod returns a list of cells, and that is used for the list of cells in the encoding

