import fs from 'fs'

export const buildListStylesheet = ({filename,props}, {selector,prefix}) => {
  const file = fs.createWriteStream("../src/" + filename)
  Object.entries(props).forEach(([prop, val]) => {
    file.write(`${val}${val === '' ? '' : ';'}\n`)
  })

  file.end()
}