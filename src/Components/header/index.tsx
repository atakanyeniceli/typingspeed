import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { changeLang } from '../../features/wordsSlice'
import { TLang } from '../../Interfaces/wordSliceInitial'

const Header = () => {

    const dispatch = useAppDispatch()

    return (
        <div className='my-2'>
            <span className='text-3xl'>Welcome Typing Speed App</span>
            <div className='my-2 '>
                <select onChange={(e) => dispatch(changeLang(e.target.value as TLang))} className='border border-slate-500 outline-none px-2 rounded-lg bg-transparent'>
                    <option value="Turkish">Türkçe</option>
                    <option value="English">English</option>
                </select>
            </div>
        </div>
    )
}

export default Header