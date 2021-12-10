import { useCallback } from "react";
import { counterSelector, useCounterStore } from "../stores/counterStore";

export function Bar() {
  const { count } = useCounterStore(useCallback(counterSelector, []));

  return (
    <div>
      <h2>
        Counter: <strong>{count}</strong>
      </h2>
    </div>
  );
}
