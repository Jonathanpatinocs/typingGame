const TypingTest = () => {
    const testParagraph = "This is a typing test"
  
    return (
      <div className='container'> 
        <div className='test'>
          {testParagraph.split("").map((char, index) => (
            <span className='character' key={index}>{char}</span>
          ))}
        </div>
        <div className="testFooter">
          <p>Mistakes: </p>
          <p>WPM: </p>
          <p>Difficulty: </p>
          <button className="btn">Restart</button>
        </div>
      </div>
    )
}

export default TypingTest
