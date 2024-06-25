function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 이행
     * 2. 대기
     * 3. 거부
     */

    function p1(name) {
        return new Promise((resolve, reject) => {
            console.log(name + " 프로미스 생성")
            if(!name) {
                reject("오류!!");
            }
            resolve(name);
        });
    }

    async function p2() {
        let a = null;
        try {
            a = await p4(); // await -> 이행할 때까지 기다려
        // await은 async 안에서만 사용할 수 있고, promise 객체에만 사용할 수 있다
            await p5();
        } catch(error) {
            console.log(error)
            a = "p5"// then

        return a;
        }
    }

    /**
     * p3는 p2와 동일
     */

    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
        });
    }
    
    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!");
    }


    const handleClick = () => {
        p1("p1")
        .then(result => {
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부!!");
            }
            return "두번째 then"; // 이행 (resolve)
        })
        .then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error);
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        p2.then(r => {
            console.log(r);
        })
        // p3().then(r => console.log(r));
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
    )
}

export default PromiseTest;