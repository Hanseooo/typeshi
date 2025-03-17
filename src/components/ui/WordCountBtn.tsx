
import { Button } from 'react-bootstrap'
import { useOption } from '../../context/optionContext'
import { useModal } from '../../context/modalContext'

export default function WordCountBtn() {
    const [,setOptions] = useOption()
    const [, setModalState] = useModal()
  return (
<div className='d-flex justify-content-center flex-wrap'>
    {
        wordCount.map((count) => [
            <Button onClick= {() => {setOptions((prev) => ({...prev, words: count})); setModalState((prev) => ({...prev,isWordCountOpen: false}));}} key={count} className='bg-transparent mx-1 my-2 px-3 py-2 select-timer-btn'>
                <p className='m-auto'>{count}</p>
            </Button>
        ])
    }
</div>
  )
}

const wordCount = [15, 30, 45, 60]
