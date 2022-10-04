import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Words } from "../Data/words";
import { IinitialState, TLang, TStatus } from "../Interfaces/wordSliceInitial";


const selectLang = (_lang: TLang = 'turkish') => {
    switch (_lang) {
        case 'turkish':
            return Words.map((word) => { return { word: word.turkish, status: 'none' as TStatus } })
        case 'english':
            return Words.map((word) => { return { word: word.english, status: 'none' as TStatus } })
    }
}

const initialState: IinitialState = {
    sampleText: selectLang().sort(() => Math.random() - 0.5),
    inputText: Array<string>(),
    wordsCount: 0,
    correct: 0,
    incorrect: 0,
    time: 60
}

export const wordSlice = createSlice(
    {
        name: 'words',
        initialState,
        reducers: {
            changeInputText: (state: IinitialState, action: PayloadAction<string>) => {

                if (state.sampleText[state.wordsCount].word === action.payload) {
                    state.correct++
                    state.sampleText[state.wordsCount].status = 'green'
                }

                else {
                    state.incorrect++
                    state.sampleText[state.wordsCount].status = 'red'
                }

                state.wordsCount++

            },
            changeLang: (state: IinitialState, action: PayloadAction<TLang>) => {
                state.sampleText = selectLang(action.payload.toLowerCase() as TLang).sort(() => Math.random() - 0.5)
            },
            timeChange: (state: IinitialState) => {
                state.time--
            }
        }
    }
)


export const { changeInputText, changeLang, timeChange } = wordSlice.actions