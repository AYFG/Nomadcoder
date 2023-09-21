import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("render"); //처음 시작 때 렌더링 , 버튼 클릭시 렌더링

  const iRunOnlyOnce = () => {
    console.log("한번만실행될거야!");
  };
  // component가 처음 render 될 때만 코드가 실행되길 원할 수 있다
  // 첫번째 렌더에만 코드가 실행되고 다른 state 변화에는 실행되지 않도록 하기
  // API를 통해 데이터를 가져올 때 첫번째 컴포넌트 렌더에서 api를 콜하고 이후에 스테이트가 변화할때 다시 가져오고 싶지는 않다
  // 이것의 해답 : useEffect
  // useEffect : 두개의 argument를 가진 함수 useEffect(한번만 실행하고싶은 코드,마법같은 친구 )
  useEffect(iRunOnlyOnce, []); // 두번째 인자는 마법의 친구
  useEffect(() => {
    console.log("call the api");
  }); // 의존배열이 들어가야 렌더링을 한번만 한다
  console.log("Search For", keyword);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default App;
