import assert from 'assert'
import fs from 'fs/promises'
import ipaToTalk from '@termsurf/talk/make/ipa/talk'

const language = process.argv[2] as string

assert(language, `Must pass in a language.`)

make(language)

async function make(language: string) {
  const path = `code/${language}/index.ts`
  let text = await fs.readFile(path, `utf-8`)
  text = text.replace(/:\s*([^\n]+),?\s*\n/g, (_, $1) => {
    if ($1.startsWith('[')) {
      $1 = $1.trim().replace(/,$/, '')

      return (
        ': [' +
        $1
          .trim()
          .slice(1, -1)
          .split(/\s*,\s*/)
          .map(mapPart)
          .join(', ') +
        '],\n'
      )
    } else if ($1.startsWith('"')) {
      $1 = $1.trim().replace(/,$/, '')

      return ': ' + mapPart($1) + ',\n'
    } else if ($1.startsWith("'")) {
      $1 = $1.trim().replace(/,$/, '')

      return ': ' + mapPart($1) + ',\n'
    } else {
      return `: ${$1}\n`
    }
  })
  await fs.writeFile(path, text)
}

function mapPart(part: string) {
  return part
    .trim()
    .replace(/'([^']+)'/g, (_, $1) => {
      try {
        const talk = ipaToTalk($1)
        if (talk.match(/'/)) {
          return `<<<${talk}>>>`
        } else {
          return `'${talk}'`
        }
      } catch (e) {
        return `'${$1}'`
      }
    })
    .replace(/"([^"]+)"/g, (_, $1) => {
      try {
        const talk = ipaToTalk($1)

        if (talk.match(/'/)) {
          return `"${talk}"`
        } else {
          return `'${talk}'`
        }
      } catch (e) {
        return `"${$1}"`
      }
    })
    .replace('<<<', '"')
    .replace('>>>', '"')
}
