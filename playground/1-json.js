const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy', 
//     author: 'Ryan Holiday'
// }

//const bookJson = JSON.stringify(book)
//console.log(bookJson)

//const persedData = JSON.parse(bookJson)
//console.log(parsedData.author)

//fs.writeFileSync('saved_data.json', bookJson)

// const dataBuffer = fs.readFileSync('saved_data.json')
// dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// //console.log(dataBuffer.toString())
// console.log(data)

const dataBuffer = fs.readFileSync('saved_data.json')
dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.title = 'hit refresh'
data.author = 'satya nadella'


writeString = JSON.stringify(data)
fs.writeFileSync('saved_data.json', writeString)