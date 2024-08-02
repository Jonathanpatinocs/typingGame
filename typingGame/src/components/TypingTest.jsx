const TypingTest = () => {
    const testParagraph = "This is a typing test"
  
    return (
      <div className='container'>
        <div className='test'>
          {testParagraph.split("").map((char, index) => (
            <span className='character' key={index}>{char}</span>
          ))}
        </div>
      </div>
    )
}

export default TypingTest
