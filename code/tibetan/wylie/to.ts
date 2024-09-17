import converter from './converter'

export default function make(text: string) {
  return converter.to_ewts(text)
}
