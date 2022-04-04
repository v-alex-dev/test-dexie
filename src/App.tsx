import React from 'react';
import logo from './logo.svg';
import {Button} from 'primereact/button';
import './App.css';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

import todoRepository from './Core/repositories/todoRepository';
import {v4 as uuidv4} from 'uuid';

function App() {
  const todoRepo = new todoRepository();

  return (
    <div className="App">

      <Button label="TEST" onClick={() => console.log({
        id: uuidv4(),
        description: "Desc",
        done: false,
      })}></Button>
      <Button label="Get All" onClick={async () => console.log(await todoRepo.getAll())}/>
      {/*                                 OU 
      <Button label="GETALL" onClick={() => todoRepo.getAll().then(todos => console.log(todos))}/> */}
      
    </div>
  );
}

export default App;
