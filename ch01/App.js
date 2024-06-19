/*
  컴포넌트 -> 함수 -> html 태그를 리턴하는 함수
  JSX
  1. 태그를 열었으면 닫아줘야 한다. <a></a> <a />
  2. 여러 태그를 리턴하려는 경우에는 하나로 묶어야 한다.
  3. JSX 안에 값 또는 변수를 사용하려면 {}로 감싸야 한다.
  4. JSX 안에서 주석 처리할 땐 {/* 사용
*/

import "./App.css";
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";

const age = <h2>{31}</h2>;

function App() {
  const name = "김준일";
  const fontColorRed = {
    color: "red"
  };

  return <>
    <div><Hello /></div>
    {/*<div><Hello></Hello></div>*/}
    <h1 style={fontColorRed} className ={"fs-20 itelic"}>{name}</h1>
    <CustomInput ph= {"이름"} disabled={true} value={"김준일"} />
    <CustomInput ph= {"나이"} disabled={false} value={"추어"}/>
    <CustomInput ph= {"연락처"} disabled={true} value={"제발"}/>
    <Box name= "김준일" isShow={true}/>
  </>
  //<Fragment> == <>
}

export default App;
