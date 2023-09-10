import img from './image.png'
import img1 from './circle image.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='p1'>Welcome back!</p>
        <p className='p2'>Login below to reach your application behind Access</p>
        <section className='sec'>
        <img src={img} alt='img' />
        <button className='btn'><a href='/'>Login</a></button>
        </section>
        <img className='low' src={img1} alt='img' />
      </header>
    </div>
  );
}

export default App;
