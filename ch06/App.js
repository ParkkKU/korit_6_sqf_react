import { useState } from "react"

function App() {
    const [ grade, setGrade ] = useState(0);
    const [ group, setGroup ] = useState(0);
    const [ number, setNumber ] = useState(0);
    const [ name, setName ] = useState(0);

    const emptyStudent = {
        grade : "",
        group : "",
        number : "",
        name : ""
    }

    const [student, setStudent] = useState({...emptyStudent});

    // const handleGradeChange = (e) => {
    //     setGrade(e.target.value);
    // }

    // const handleGroupChange = (e) => {
    //     setGroup(e.target.value);
    // }

    // const handleNumberChange = (e) => {
    //     setNumber(e.target.value);
    // }

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    const handleInputonChange = (e) => {
        switch(e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            default:
        }
    }

    const handleInputChange2 = (e) => {
        const [ name,value ] = e.target;
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent);
    }


    return <>
        <input name="grade" placeholder="학년" onChange={handleInputonChange} value={grade}/>
        <input name="class" placeholder="반" onChange={handleInputonChange} value={group}/>
        <input name="number" placeholder="번호" onChange={handleInputonChange} value={number}/>
        <input name="name" placeholder="이름" onChange={handleInputonChange} value={name}/>
    
        <ul>
            <li>학년 = {grade}</li>
            <li>반 = {group}</li>
            <li>번호 = {number}</li>
            <li>이름 = {name}</li>
        </ul>
    </>
}

export default App;