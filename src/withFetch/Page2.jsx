import Contents from "./Contents";
import Header from "./Header";

function Page2() {
  return (
    <>
      <Header title="page2" />
      <Contents pageNumber={2} count={10} />
    </>
  );
}

export default Page2;
