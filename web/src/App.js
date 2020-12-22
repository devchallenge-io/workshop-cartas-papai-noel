import React, {useState} from 'react';

function App() {
  const [v, setV] = useState(0);
  function adicionar(){
    setV(v + 1);
  }
  return (
    <div>
      Contagem {v}
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}

export default App;
