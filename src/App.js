// import logo from './logo.svg';
import './App.js';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItems from './components/NewsItems';

function App() {
  let headingstyle = {
    color:" #4682B4",
    fontFamily:"Helvetica",
    margin:"30px 215px",
  }
  return (
   <>
    <Navbar />
    <News />
    <div className='Cards' style = {{marginLeft:"15em"}}>
      <h1 style= {headingstyle} >HeadLines of Your News </h1>
    <div className='row'>
    <NewsItems pageSize={5}/>
    </div>
    </div>
   </>
  );
}

export default App;
