import { build, transform } from '~/base'

const letters={

    ?:'æ',
    ?:'b',
    ?:'?',
    ??:'??',
    ?:'d',
    ?:'d?',
    ?:'?',
    ?:'f',
    ?:'k',
    ??:'k?',
    ?:'h',
    ?:'?',
    ?:'?',
    ?:'?',
    ?:'q',
    ?:'i',
    ?:'?',
    ?:'l',
    ?:'m',
    ?:'n',
    ?:'w',
    ?:'r',
    ?:'r?',
    ?:'?',
    ?:'s',
    ?:'s?',
    ?:'?',
    ?:'t',
    ?:'t?',
    ?:'w',
    ?:'j',
    ?:'z',
    ?:'z?',

}


const symbols = {
    ...letters
}

const s = build(symbols)
const make = (t: string) => transform(t, s, s)

export default make