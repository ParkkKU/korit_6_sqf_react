import { useRef, useState } from "react";


function App() {

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [inputValue, setInputValue] = useState({...emptyUser});
    const [userList, setUserList] = useState([]);

        const handleInputChange = (e) => {
            setInputValue(inputValue => {
                return {
                    ...inputValue,
                    [e.target.name]: e.target.value,
                }
            })
    }

    const handleKeyDown = (e) => {

        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    inputRef.username.current.focus();
                    setUserList(userList => [...userList, inputValue]);
                    setInputValue({...emptyUser});
                    break;
                default:
            }
        }
    }


    return <>
        {/*
            1. 입력 후에 엔터를 입력하면 다음 input으로 포커스 이동 (마지막 -> 처음)
            2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명"
        onChange={handleInputChange} onKeyDown={handleKeyDown}
        ref={inputRef.username} value={inputValue.username} />
        <input name="password" placeholder="비밀번호"
        onChange={handleInputChange} onKeyDown={handleKeyDown}
        ref={inputRef.password} value={inputValue.password} />
        <input name="name" placeholder="이름"
        onChange={handleInputChange} onKeyDown={handleKeyDown}
        ref={inputRef.name} value={inputValue.name} />

        {/*
            3. tbody -> tr 묶음을 userList에서 map 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
        */}
        <table border={1}>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {userList.map((user, index)=> <td key={index}>{user}</td>)}
                </tr>
            </tbody>
        </table>
    </>

}

export default App;