// import 'bootstrap/dist/css/bootstrap.min.css';
// import OptionBtnGroup from './ui/OptionBtnGroup';
// import { useRef, useState } from 'react';

// export default function TextBox() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   const inputRef = useRef(null)
//   const sampleText = `The quick brown fox jumps over the lazy dog. Programming is the process of creating a set of instructions that tell a computer how to perform a task. Web development refers to building, creating, and maintaining websites. React is a JavaScript library for building user interfaces. TypeScript is a strongly typed programming language that builds on JavaScript. Good typing practice requires consistency and patience.`;

//   const wordsPerLine = 6;
//   const words = sampleText.split(' ').map((word, index, array) => index < array.length - 1 ? word + ' ' : word);
  

//   const getDisplayLines = () => {
//     const lines = [];
//     const startWord = Math.max(0, currentWordIndex - wordsPerLine);
//     for (let i = 0; i < 3; i++) {
//       const lineStart = startWord + (i * wordsPerLine);
//       const lineWords = words.slice(lineStart, lineStart + wordsPerLine);
//       if (lineWords.length > 0) {
//         lines.push(lineWords);
//       }
//     }
//     return lines;
//   };

//   const displayLines = getDisplayLines()



//   return (
//     <div className=' d-flex flex-column align-items-center justify-content-center p-2 textbox-container'>
//         <OptionBtnGroup />
//         <div className='textbox-content mt-4 rounded-4 p-4'>
//         <input ref={inputRef} type="text" className='textbox-input border bg-transparent border-0' autoFocus onMouseDown={(e) => e.preventDefault()}   />
//           {/* <p className='fs-3 display-text'>{sampleText}</p> */}
//           {
//             displayLines.map((line, lineIndex) => (
//               <div key={lineIndex} className='fs-3 display-text'>
//                 {line.map((word, wordIndex) => {
//                   const absoluteIndex = Math.max(0, currentWordIndex)
//                   return(
//                     <span key={wordIndex} >{word}</span>
//                   )
//                 })}
//               </div>
//             ) )
//           }
//         </div>
//     </div>
//   )
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import OptionBtnGroup from './ui/OptionBtnGroup';
import { useRef, useState } from 'react';

export default function TextBox() {
  const [typedText, setTypedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [groupedInputs, setGroupedInputs] = useState('')
  // const [groupedWords, setGroupedWords] = useState<string[]>([])
  
  const textboxRef = useRef<HTMLDivElement>(null);
  
  const sampleText = `The quick brown fox jumps over the lazy dog. Programming is the process of creating a set of instructions that tell a computer how to perform a task. Web development refers to building, creating, and maintaining websites. React is a JavaScript library for building user interfaces. TypeScript is a strongly typed programming language that builds on JavaScript. Good typing practice requires consistency and patience.`;
  
  // const words = sampleText.split(' ').map((word, index, array) => 
  //   index < array.length - 1 ? word + ' ' : word
  // );
  const words = sampleText.split(' ');
  const groupedWords: string[] = [];
  let currentString = '';

  for (const word of words) {
    if (currentString.length + word.length + 1 <= 45) {
        currentString += (currentString ? ' ' : '') + word; 
    } else {
        // Append a space to the last word before pushing to groupedWords
        groupedWords.push(currentString + ' '); // Add a space here

        currentString = word; 
    }
}

// After the loop, ensure to add the last currentString with a space if it exists
if (currentString) {
    groupedWords.push(currentString + ' '); // Add a space here as well
}


  if (currentString) {
    // setGroupedWords((prev:string[]) => [...prev, currentString]);
    groupedWords.push(currentString);
  }

  console.log(typedText)
  console.log(lineIndex)

  
  return (
    <div className='d-flex flex-column align-items-center justify-content-center p-2 textbox-container'>
      <OptionBtnGroup />
      <div 
        ref={textboxRef} 
        className='textbox-content d-flex flex-column align-items-center justify-content-center mt-4 rounded-4 p-4 position-relative overflow-hidden'
      >
        <input 
          type="text" 
          className='textbox-input border bg-transparent border-0 position-absolute'
          style={{wordBreak: 'break-word'}} 
          autoFocus 
          value={typedText}
          onChange={e => setTypedText(e.target.value)}
          onMouseDown={(e) => {
            e.preventDefault(); // Prevent default behavior
            const inputElement = e.currentTarget; // Get the input element
            inputElement.focus(); // Focus the input
            const length = typedText.length; // Get the length of typedText
            inputElement.setSelectionRange(length, length); // Set caret to the end
        }} 
        />
{

  <p className='display-text'>
    {groupedWords[lineIndex] && <span>
      {
        groupedWords[lineIndex].split('').map((char, i) => {
          const isCurrentChar = i === typedText.length;
          const isTypedChar = i < typedText.length && typedText[i] === char;
          const lineLength:number = groupedWords[lineIndex].length;
          if (typedText.length === lineLength) {
            setLineIndex(lineIndex + 1)
            setTypedText('');
          }
          return (
            <span
              key={i}
              className={isCurrentChar 
                ? 'current-char' 
                : (isTypedChar ? 'typed-char' : (i < typedText.length ? 'error-char' : 'inactive-state'))} //todo: add styling if correct
            >
              {char}
            </span>
          );
        })
      }
    </span>}
    {lineIndex != groupedWords.length - 1 && groupedWords[lineIndex + 1] && <span className='inactive-state'>
      {groupedWords[lineIndex + 1]}
    </span>}
    {lineIndex != groupedWords.length - 2 && groupedWords[lineIndex + 2] && <span className='inactive-state'>
      {groupedWords[lineIndex + 2]}
    </span>}
  </p>
}

      </div>
    </div>
  );
}
