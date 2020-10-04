import React from 'react';
import './App.css';

function hola () {
  return (
    <div>Hola</div>
  )
}
function Helloworld () {
  return (
    <div id="hello">Hello world</div>
  )
}
function App() {
  return (
    <div>this is my component: <Helloworld/> </div>
  );
}

export default App;
