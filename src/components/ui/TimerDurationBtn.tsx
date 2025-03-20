
import { Button } from 'react-bootstrap'
import { useOption } from '../../context/optionContext'
import { useModal } from '../../context/modalContext'

export default function TimerDurationBtn() {
    const [options, setOptions] = useOption()
    const [, setModalState] = useModal()
  return (
    <div className='p-2'>
        {
            timerDuration.map((duration) => [
                <Button onClick= {() => {setOptions((prev) => ({...prev,time: duration})); setModalState((prev) => ({...prev,isTimeOpen: false}));}} key={duration} className={` ${options.time === duration ? 'selected-btn-active' : ''} bg-transparent border-2 mx-1 my-2 px-3 py-2 select-timer-btn`}>
                    <p className='m-auto'>{`${duration}s`}</p>
                </Button>
            ])
        }
    </div>
  )
}

const timerDuration = [15, 30, 45, 60]
