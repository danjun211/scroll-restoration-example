import { useEffect } from "react";
import useAppStore from "./useAppStore";
import fakeFetch from "./fakeFetch";

const Contents = (props = {}) => {
  const { count = 10 } = props;
  const items = useAppStore((state) => state.items);
  const setItems = useAppStore((state) => state.setItems);
  const delay = useAppStore((state) => state.delay);

  useEffect(() => {
    (async () => {
      const data = await fakeFetch.get(count, delay);

      setItems(data);
    })();
  }, [count, delay, setItems]);

  return (
    <div className="items-container">
      <ul className="items">
        {items?.map((_, i) => {
          return (
            <li key={i} className="item">
              {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contents;
