import { useCounterStore } from "../stores/counterStore";

export function Bar() {
  const { count } = useCounterStore();

  return (
    <div>
      <h2>
        Counter: <strong>{count}</strong>
      </h2>
    </div>
  );
}
