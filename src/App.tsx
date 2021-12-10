import { useCallback } from "react";

import { Bar } from "./bar";
import { counterSelector, useCounterStore } from "./stores/counterStore";

function App() {
  const { count, increment, decrement } = useCounterStore(
    useCallback(counterSelector, [])
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={increment}>
            increment is: {count}
          </button>
          <button type="button" onClick={decrement}>
            decrement is: {count}
          </button>
        </p>
      </header>

      <Bar />
    </div>
  );
}

export default App;
