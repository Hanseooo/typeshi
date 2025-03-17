import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { Option, useOption } from '../../context/optionContext';
import { useState } from 'react';
import { useModal } from '../../context/modalContext';

type OptionBtnProps = {
    text: string,
    distance: number
}

export default function OptionBtn({ text, distance } :OptionBtnProps) {
    const [options, setOptions] = useOption()
    const [isActive, setIsActive] = useState(false)
    const [,setModalState] = useModal();


    const activeStateStyle = isActive ? 'activeState' : ''

    const optionFunctions = () => {
        switch (text) {
            case "punctuation":
                setOptions((prev :Option)=>({ ...prev, punctuation: !options.punctuation }))
                setIsActive(!isActive)
                break
            case "numbers":
                setOptions((prev :Option)=>({ ...prev, numbers: !options.numbers }))
                setIsActive(!isActive)
                break
            case "capitalization":
                setOptions((prev :Option)=>({ ...prev, capitalization: !options.capitalization }))
                setIsActive(!isActive)
                break
            case "language":
                setModalState((prev)=>({ ...prev, isLanguageOpen: true }))
                break
            case "time":
                setModalState((prev)=>({ ...prev, isTimeOpen: true }))
                break
            case "words":
                setModalState((prev)=>({ ...prev, isWordCountOpen: true }))
                break
            default:
                break
        }
    }
  return (
<Button onClick={optionFunctions} style={{padding: distance}} className='bg-transparent border-0 d-flex'>
    <p className={`${activeStateStyle} m-auto option-btn`} style={{fontSize: '12px'}}>{text}</p>
</Button>
  )
}
