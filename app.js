import fs from 'fs'

fs.readFile('file.txt', 'utf8', (err, data) => {
  const lines = data.split('\n')

  console.log(lines)

  lines.forEach((line) => {
    console.log(line)
  })

  if (err) {
    console.log(err)
    console.log('Error reading file')
  
})
