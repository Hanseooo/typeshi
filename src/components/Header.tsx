import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/themeContext';


export default function Header() {
    const [theme, setTheme] = useTheme()
  return (
    <Container className='p-2 pt-4 pt-md-2 d-flex justify-content-between align-items-center'>
      <h3 className='my-auto'>Type<span className='tertiary-color'>Shi</span></h3>
      <Button className='bg-transparent border border-0' onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {
            theme === 'dark' ? 
            <FontAwesomeIcon icon={faSun} style={{color: "#d1d1d1",}} /> :
            <FontAwesomeIcon icon={faMoon} style={{color: "#303030",}} />
        }        
    </Button>
    </Container>
  )
}
