import { useAppSelector } from '../../app/hooks'

const Result = () => {

    const _result = useAppSelector((e) => { return { wordsCount: e.words.wordsCount, correct: e.words.correct, incorrect: e.words.incorrect } })

    return (
        <div className='my-5 w-1/2 mx-auto'>

            <div className='text-3xl font-bold'>
                Result
            </div>

            <div className='grid grid-cols-2'>
                <div className='text-end'>Word Count:</div>
                <div className='text-start mx-2'>{_result.wordsCount}</div>
            </div>

            <div className='grid grid-cols-2'>
                <div className='text-end'>Correct:</div>
                <div className='text-start mx-2'>{_result.correct}</div>
            </div>

            <div className='grid grid-cols-2'>
                <div className='text-end'>Incorrect:</div>
                <div className='text-start mx-2'>{_result.incorrect}</div>
            </div>

        </div>
    )
}

export default Result