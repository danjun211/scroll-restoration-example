import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigations">
      <Link to="/">Root로 히스토리 이동</Link>
      <Link to="/page1">Page1로 히스토리 이동</Link>
      <Link to="/page2">Page2로 히스토리 이동</Link>
      <a href="https://google.co.kr">구글 이동</a>
      <button
        onClick={() => {
          history.back();
        }}
      >
        뒤로가기
      </button>

      <button
        onClick={() => {
          history.forward();
        }}
      >
        앞으로가기
      </button>
    </div>
  );
};

export default Navigations;
