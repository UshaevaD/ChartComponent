import s from './app.module.css';
import UnionDonutChart from './components/UnionDonutChart/UnionDonutChart';

const App = () => {
  const nit = { title: "Нит", current: 234840, max: 246051 }
  const prognosis = { title: "Прогноз", current: 272289, max: 283500 }

  return (
    <div className={s.app}>
      <UnionDonutChart 
        nit={nit}
        prognosis={prognosis}
      />
    </div>
  );
}

export default App;