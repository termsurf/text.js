import { build, transform } from '~/base'

const letters = {

    Α : 'ˈælfə',
    Β : 'ˈbiːt',
    Γ : 'ˈɡæmə',
    Δ : 'ˈdɛlt',
    Η : 'ˈiːtə',
    Θ : 'ˈθiːt',
    Ι : 'aɪˈoʊ',
    Κ : 'ˈkæpə',
    Λ : 'ˈlæmd',
    Μ : 'mjuː',
    Ν : 'njuː',
    Ρ : 'roʊ',
    Τ : 'taʊ',
    Τ : 'tɔː'

}


const symbols = {
    ...letters
}

const s = build(symbols)
const make = (t: string) => transform(t, s, s)

export default make