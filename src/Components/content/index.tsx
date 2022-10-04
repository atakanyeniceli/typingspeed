import { useAppSelector } from '../../app/hooks'
import { InputText } from '../inputText'
import Result from '../result'
import SampleText from '../sampleText'

const Content = () => {
    const _time = useAppSelector((e) => e.words.time)
    return (
        <div className='h-1/2'>
            <SampleText />
            <InputText />
            {_time === 0 && <Result />}
        </div>
    )
}

export default Content