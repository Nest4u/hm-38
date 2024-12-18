import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>React Component Example</h1>
      <Input placeholder="Enter some text" onChange={handleInputChange} />
      <Button text="Submit" onClick={handleButtonClick} />
    </div>
  );
};

export default App;
