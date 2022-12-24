import { useState } from 'react'
import './App.css'
import { Button } from './components/Button';
import { Dot } from './components/Dot';

interface dotsList {
  clientX: number,
  clientY: number
}

function App() {
  const [ dotsList, setDotsList ] = useState<dotsList[]>([]);
  const [ undidList, setUndidList ] = useState<dotsList[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;

    const newDot = {
      clientX,
      clientY
    }

    setDotsList(dots => [...dots, newDot]);
  }

  const handleUndo = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if(dotsList.length === 0){
      return;
    }
    
    const lastDot = dotsList[dotsList.length -1];
    const undoDotsList = [...dotsList].slice(0, -1);

    setUndidList(dots => [...dots, lastDot])
    setDotsList(undoDotsList);
  }

  const handleRedo = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if(undidList.length === 0){
      return;
    }

    const recoveredDot = undidList[undidList.length -1];
    const undidDot = [...undidList].slice(0, -1);

    setUndidList(undidDot);
    setDotsList(dots => [...dots, recoveredDot])
  }

  return (
    <div id="page" onClick={handleClick}>
      <div className="container-buttons">
        <Button subtitle="Undo" handleFunction={handleUndo}/>
        <Button subtitle="Redo" handleFunction={handleRedo}/>
      </div>
      {dotsList.map(
        (dot, index) => (
          <Dot 
            key={index} 
            top={dot.clientY} 
            left={dot.clientX}
          />
        )
      )}
    </div>
  )
}

export default App
