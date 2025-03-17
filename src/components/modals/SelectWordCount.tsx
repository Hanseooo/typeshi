import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from '../../context/modalContext';
import WordCountBtn from '../ui/WordCountBtn';


export default function SelectWordCount() {
    const [, setModalState] = useModal()
  return (
    <div className='modalContainer display-flex flex-column justify-content-center align-items-center'>
        <div className="modal-content pb-4 p-2 d-flex rounded-2 justify-content-center align-items-center ">
            <button onClick={() => setModalState((prev) => ({...prev, isWordCountOpen: false }))} className='bg-transparent border-0 align-self-end pt-1 px-2'>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h4 className='mb-2'>Word Count</h4>
            <WordCountBtn />
        </div>
    </div>
  )
}
