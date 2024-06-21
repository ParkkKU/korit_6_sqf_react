import { useRef, useState } from "react";
import "./App.css"

function App() {

    const Swal = require('sweetalert2');

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    
    const [userList, setUserList] = useState([]);
    const [inputData, setInputData] = useState({...emptyUser});
    
    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [...userList, inputData]);
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }
    

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value,
            }
        });
    }

    const handleEditClick = (key, index) => {
        // Swal.fire({
        //     title: "사용자 수정",
        //     input: "text"
        // })
        console.log(key);
        console.log(index);
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancleButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [...userList.filter((user, index) => index !== parseInt(e.target.value))]);
            }
        })
    }


    return <>
        {/*
            1. 입력 후에 엔터를 입력하면 다음 input으로 포커스 이동 (마지막 -> 처음)
            2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명"
        onKeyDown={handleInputKeyDown} onChange={handleInputChange} 
        ref={inputRef.username} value={inputData.username} />
        <input name="password" placeholder="비밀번호"
        onKeyDown={handleInputKeyDown} onChange={handleInputChange}
        ref={inputRef.password} value={inputData.password} />
        <input name="name" placeholder="이름"
        onKeyDown={handleInputKeyDown} onChange={handleInputChange}
        ref={inputRef.name} value={inputData.name} />

        {/*
            3. tbody -> tr 묶음을 userList에서 map 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                userList.map(({username, password, name}, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td name="username" onClick={() => handleEditClick("username", index)}>{username}</td>
                            <td name="password" onClick={() => handleEditClick("password", index)}>{password}</td>
                            <td name="name" onClick={() => handleEditClick("name", index)}>{name}</td>
                            <td>
                                <button value={index}>수정</button>
                            </td>
                            <td>
                                <button onClick={handleDeleteClick} value={index}>삭제</button>
                            </td>                        
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    </>
}

export default App;