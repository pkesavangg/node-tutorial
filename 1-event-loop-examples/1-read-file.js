const _ = require('lodash')

const items = [1, [6, [3, [4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems)

const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH file path set for app.js!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')