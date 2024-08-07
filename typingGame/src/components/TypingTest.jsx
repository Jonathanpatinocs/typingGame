import { useState, useRef } from "react"


const TypingTest = () => {
    const testParagraph = "This is a typing test"

    const [time, setTime] = useState(0)
    const [mistakes, setMistakes] = useState(0)
    const [wpm, setwmp] = useState(0)
    const [difficulty, setDifficulty] = useState('Easy')
    const inputRef = useRef()
    
    const handleTime = () => {
      setTime()
    }
    return (
      <div className='container'> 
        <div className='test'>
          <input type="text" className="testInput"  ref={inputRef}/>
          {testParagraph.split("").map((char, index) => (
            <span className='character' key={index}>{char}</span>
          ))}
        </div>
        <div className="testFooter">
          <p>Time: {time}</p>
          <p>Mistakes: {mistakes}</p>
          <p>WPM: {wpm} </p>
          <p>Difficulty: {difficulty}</p>
          <button className="resetButton" onClick={handleTime}>Restart</button>
        </div>
      </div>
    )
}

export default TypingTest
