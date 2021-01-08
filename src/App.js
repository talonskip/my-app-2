
import './App.css';
import Example from './components/Example';
import Name from './components/Name';
import Hobby from './components/Hobby';
import Funfact from './components/Funfact';

function App() {

  const theFunc = () => <div>this is embedded jsx</div>

  const handleClick = (event) => {
      event.preventDefault();
      console.log("youclicked on me ")
  }
  
const handleHover = (e) => {
  e.preventDefault();
  console.log("you're hovering!!");
}

  return (
    <div>
      <Example name='Talon'
      dinosaur='Triceratops'/>
      <Name />
      <Hobby />
      <Funfact />
      

    {theFunc()}
    <button onClick={handleClick}>ClickIT!</button>
    <h1 onMouseOver={handleHover}> HOVER OVER </h1>
    </div>
  );
}

export default App;
