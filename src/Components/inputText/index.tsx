import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { changeInputText, timeChange } from "../../features/wordsSlice"





export const InputText = () => {

    const [value, setValue] = useState("")
    const dispatch = useAppDispatch()
    const _time = useAppSelector((e) => e.words.time)

    useEffect(() => {
        if (_time !== 60 && _time !== 0)
            setTimeout(() => dispatch(timeChange()), 1000)
    }, [_time])

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const tempValue = e.target.value

        if (_time === 60 && value.length === 0)
            setTimeout(() => dispatch(timeChange()), 1000)

        if (tempValue.includes(' ')) {
            dispatch(changeInputText(value))
            setValue('')
        }
        else
            setValue(tempValue)
    }

    return (
        <div className='mt-5 w-full mx-auto'>
            <input disabled={_time === 0 ? true : false} className='w-1/2 mx-2 outline-none px-2 py-1 disabled:bg-slate-300' type="text" value={value} onChange={_onChange} />
            <span className=''>{_time}</span>
        </div>
    )
}

