import { useTheme } from "./context/themeContext"
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import OptionBar from "./components/OptionBar";
import TextBox from "./components/TextBox";
import Header from "./components/Header";
import SelectLanguage from "./components/modals/SelectLanguage";
import { useModal } from "./context/modalContext";
import SelectWordCount from "./components/modals/SelectWordCount";
import SelectTimeDuration from "./components/modals/SelectTimeDuration";
// import { useOption } from "./context/optionContext";


function App() {
  const [theme] = useTheme()
  const [modalState] = useModal()
  return (
    <>
      <Container fluid className="containerDefault" data-theme={theme}>
        {modalState.isLanguageOpen &&<SelectLanguage />}
        {modalState.isTimeOpen && <SelectTimeDuration />}
        {modalState.isWordCountOpen &&<SelectWordCount />}
        <Header />
        <OptionBar />
        <TextBox />
      </Container>
    </>
  )
}

export default App
