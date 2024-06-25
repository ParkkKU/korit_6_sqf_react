function SetTimeoutTest() {
    
    setTimeout(() => {
        print(count);
    }, 2000);

    function print(fx) {
        console.log(4)
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }
    
    function test(fx) {
        console.log("test 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출")
    }

    test(add);

    return (
        <>
        
        </>
    )
}

export default SetTimeoutTest;