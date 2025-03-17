
import { Button } from 'react-bootstrap'
import { useOption } from '../../context/optionContext'
import { useModal } from '../../context/modalContext'

export default function TimerDurationBtn() {
    const [,setOptions] = useOption()
    const [, setModalState] = useModal()
  return (
    <div>
        {
            timerDuration.map((duration) => [
                <Button onClick= {() => {setOptions((prev) => ({...prev,time: duration})); setModalState((prev) => ({...prev,isTimeOpen: false}));}} key={duration} className='bg-transparent mx-1 my-2 px-3 py-2 select-timer-btn'>
                    <p className='m-auto'>{`${duration}s`}</p>
                </Button>
            ])
        }
    </div>
  )
}

const timerDuration = [15, 30, 45, 60]
