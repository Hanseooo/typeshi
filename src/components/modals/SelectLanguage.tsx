import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Option, useOption } from '../../context/optionContext';
import { useTheme } from '../../context/themeContext';
import { useModal } from '../../context/modalContext';

export default function SelectLanguage() {
    const [options, setOptions] = useOption();
    const [theme, ] = useTheme()
    const [,setModalState] = useModal()

  return (
    <div className='modalContainer display-flex flex-column justify-content-center align-items-center'>
      <div className="modal-content p-2 d-flex rounded-2 ">
        <button onClick={() => setModalState((prev) => ({...prev, isLanguageOpen: false }))} className='bg-transparent border-0 align-self-end pt-1 px-2'>
            <FontAwesomeIcon icon={faXmark} />
        </button>
        <h4 className={`fw-bold fst-italic border-bottom text-center pb-4 ${theme === 'light' ? 'border-dark' : 'border-light'}`}>Select Language</h4>
        {
            languages.map((lang, index) => (
                <button key={index} onClick={() => {setOptions((prev :Option)=>({...prev, language: lang.param})); setModalState((prev) => ({...prev, isLanguageOpen: false })); console.log(options) } } className='list-button p-2'>{lang.language}</button>
                )
            )
        }
      </div>
    </div>
  )
}

const languages = [
    {language: 'english', param: 'en'}, 
    {language: 'spanish', param: 'es'}, 
    {language: 'german', param: 'de'}, 
    {language: 'french', param: 'fr'}, 
    {language: 'italian', param: 'it'},
    {language: 'chinese', param:'zh'},
    {language: 'brazilian portugese', param:'pt-br'}
]