import './App.css';
import SearchAutoComplete from './SearchAutoComplete.jsx';
import GradeSorter from './sort/GradeSorter.jsx';
import PriceSorter from './sort/PriceSorter.jsx';

function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Day 3 — 정렬 알고리즘</h1>
      <GradeSorter />
      <hr style={{ margin: '24px 0' }} />
      <PriceSorter />
    </main>
  );
}

export default App;
