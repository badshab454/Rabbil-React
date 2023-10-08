import {useState} from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Number clicked {number} times.</h1>
      <button onClick={() => setNumber(number + 1)}>Clicked</button>
    </div>
  );
};

export default App;