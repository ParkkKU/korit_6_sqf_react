import useInput from '../../../hooks/useInput';

function CustomHookPage(props) {
    const usernameInput = useInput("test", 20);
    const passswordInput = useInput("", 10);

    return (
        <div>
            <input type='text' onChange={usernameInput.onChange} value={usernameInput.value}/>
            <input type='password' onChange={passswordInput.onChange} value={passswordInput.value}/>
        </div>
    );
}

export default CustomHookPage;