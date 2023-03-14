import './App.css';

import InputSearch from './components/InputSearch/InputSearch';
import MainInfoContainer from './components/MainInfoContainer/MainInfoContainer';

function App() {
  return (
    <main>
      <header>
        <InputSearch/>
      </header>
      <section id='container'>
        <MainInfoContainer/>
        <aside>

        </aside>
      </section>
    </main>
  )
}

export default App
