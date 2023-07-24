//prepare a JS program to read an excel file(which will contain student roll no, name and marks) 
//and as an output it will give the roll no, name and marks of the student who will have highest and lowest marks using Node.js


// Requiring the module
const reader = require('xlsx')
// Reading our test file 
const file = reader.readFile('dummy.xlsx');   //Here we will get no of sheets
let data = [];
const sheets = file.SheetNames
console.log(sheets)
for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[0]])
        //console.log(temp);
    //temp.forEach((res) => { data.push(res) })
    console.log(temp);
    temp.sort((a, b) => a.Marks - b.Marks);
    var filterdData = [];
    filterdData.push(temp[0]);
    filterdData.push(temp[temp.length - 1]);
}
// Printing data 
console.log(filterdData);
