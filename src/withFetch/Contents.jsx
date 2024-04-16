import { useEffect } from "react";
import useAppStore from "./useAppStore";
import fakeFetch from "./fakeFetch";

const Contents = (props = {}) => {
  const { pageNumber = 0, count = 10 } = props;
  const items = useAppStore((state) => state.items);
  const setItems = useAppStore((state) => state.setItems);
  const delay = useAppStore((state) => state.delay);

  useEffect(() => {
    (async () => {
      const data = await fakeFetch.get(count, delay);
      const replaceItems = items.slice();
      replaceItems.splice(pageNumber, 1, data);
      setItems(replaceItems);
    })();
    // setItems(new Array(count).fill(0));

    return () => {
      // 이전 상태 초기화
      setItems([[], [], []]);
    };
  }, [count, delay, setItems]);

  return (
    <div className="items-container">
      <ul className="items">
        {items[pageNumber]?.map((_, i) => {
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
