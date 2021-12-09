import { Bar } from "./bar";
import { useCounterStore } from "./stores/counterStore";

function App() {
  const { count, increment } = useCounterStore();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={increment}>
            count is: {count}
          </button>
        </p>
      </header>

      <Bar />
    </div>
  );
}

export default App;
