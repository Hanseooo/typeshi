
import { Button } from 'react-bootstrap'
import { useOption } from '../../context/optionContext'
import { useModal } from '../../context/modalContext'

export default function WordCountBtn() {
    const [options ,setOptions] = useOption()
    const [, setModalState] = useModal()
  return (
<div className='d-flex justify-content-center flex-wrap p-2'>
    {
        wordCount.map((count) => [
            <Button onClick= {() => {setOptions((prev) => ({...prev, words: count})); setModalState((prev) => ({...prev,isWordCountOpen: false}));}} key={count} className={`bg-transparent border-2 mx-1 my-2 px-3 py-2 select-timer-btn ${count === options.words ? 'selected-btn-active' : ''}`}>
                <p className='m-auto'>{count}</p>
            </Button>
        ])
    }
</div>
  )
}

const wordCount = [50, 75, 100, 125, 150, 175, 200]
