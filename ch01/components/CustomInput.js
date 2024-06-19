function CustomInput({ph, disabled, value}) {
    return <input type="text" placeholder={ph} disabled={disabled} value={value}/>
}
//components는 매개변수 props 사용
export default CustomInput;