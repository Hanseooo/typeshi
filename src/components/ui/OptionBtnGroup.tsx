import { faClock, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OptionBtn from './OptionBtn'

export default function OptionBtnGroup() {
  return (
    <div className='d-flex'>
    <div className='d-flex align-items-center mx-2'>
        <FontAwesomeIcon icon={faClock} size='sm' />
        <OptionBtn distance={4} text='time' />
    </div>
    <div className='d-flex align-items-center mx-2'>
    <FontAwesomeIcon icon={faHashtag} />
        <OptionBtn distance={4} text='words' />
    </div>
  </div>
  )
}
