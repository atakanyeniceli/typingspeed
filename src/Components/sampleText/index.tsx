import { useAppSelector } from "../../app/hooks"


const SampleText = () => {

    const _sampleText = useAppSelector((e) => e.words.sampleText)

    return (
        <div className='w-[90%] h-1/2 flex flex-wrap mx-auto overflow-scroll justify-center scrollBarHidden'>
            {_sampleText.map((word, index) => <span style={{ color: word.status }} key={index} className='mx-1 font-bold'>{word.word}</span>)}
        </div>
    )
}

export default SampleText