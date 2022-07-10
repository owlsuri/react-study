function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click Here!"
  );
}
// 리액트 돔에 렌더 함수를 사용해서 리액트 컴포넌트를 돔 컨테이너에 렌더링
// 스크립트 태그를 사용해 컴포넌트를 가져왔다고해도 컴포넌트가 화면에 보이는 것이 아니기 때문에 필요
const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);
