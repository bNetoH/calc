import { Container, Content, Row } from './styles';
import  Button  from './components/Button';
import  Input  from './components/Input';
import FakeButton from './components/FakeButton';

import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setCurrentOperator('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handlePlus = () => {
    return Number(firstNumber) + Number(currentNumber)
  }
  const handleMinus = () => {
    return Number(firstNumber) - Number(currentNumber)
  }
  const handleTimes = () => {
    return Number(firstNumber) * Number(currentNumber)
  }
  const handleSlashs = () => 
  {
    return Number(firstNumber) / Number(currentNumber)
  }
  const handlePercents = () => {
    return Number(firstNumber) * (Number(currentNumber) / 100)
  }
  const handlePowers = () => {
    return Number(firstNumber) ** Number(currentNumber);
  }

  const handleOperator = (op) => {
    setFirstNumber(String(currentNumber))
    setCurrentOperator(op)
    setCurrentNumber('0')
  }

  const handleEquals = () => {

      console.log(currentOperator)

      var memo = 0;

      switch(currentOperator) 
      {
        case '+':
          memo = handlePlus()
          break;
        case '-':
          memo = handleMinus()
          break;
        case '*':
          memo = handleTimes()  
          break;
        case '/':
          memo = handleSlashs()
          break;
        case '%':
          memo = handlePercents()
          break;
        case '^':
          memo = handlePowers()
          break;
        default:
          break;
        }
        setCurrentNumber(String(memo))
        setFirstNumber(String(memo))
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="CE" onClick={() => handleClear()}/>
          <Button label="/" onClick={() => handleOperator('/')}/>
          <Button label="*" onClick={() => handleOperator('*')}/>
          <Button label="-" onClick={() => handleOperator('-')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={() => handleOperator('+')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="^" onClick={() => handleOperator('^')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="%" onClick={() => handleOperator('%')}/>
        </Row>
        <Row>
          <FakeButton  />
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <FakeButton  />
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
