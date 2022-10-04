

export type TStatus = 'green' | 'red' | 'none'
export type TLang = 'turkish' | 'english'

export interface IinitialState {
    sampleText: Array<{ word: string, status: TStatus }>,
    inputText: Array<string>,
    wordsCount: number,
    correct: number,
    incorrect: number,
    time: number
}