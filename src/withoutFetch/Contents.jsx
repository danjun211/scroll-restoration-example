const Contents = (props = {}) => {
  const { count = 10 } = props;

  return (
    <div className="items-container">
      <ul className="items">
        {new Array(count).fill(0).map((_, i) => {
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
