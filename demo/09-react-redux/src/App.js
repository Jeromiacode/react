import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import CounterDisplay from './counter/CounterDisplay';
import Counter from './counter/Counter';
import CounterReset from './counter/CounterReset';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
      <CounterDisplay />
      <Counter />
      <Counter step={5} />
      <CounterReset />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
