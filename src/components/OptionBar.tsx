import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import OptionBtn from './ui/OptionBtn';


export default function OptionBar() {
  return (
    <Container className='p-2 mt-2 d-flex flex-column justify-content-center align-items-center p-2'>
        <div className='option-bar d-flex px-2 p-1'>
            <OptionBtn distance={8} text='punctuation' />
            <OptionBtn distance={8} text='numbers' />
            <OptionBtn distance={8} text='capitalization' />
            <OptionBtn distance={8} text='language' />
        </div>
    </Container>
  )
}
