import { useRef } from "react";
import "./style.css"

function DataTableHeader({ mode, setMode, setProducts }) {

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            alert("상품추가");
        }
        if(mode === 2) {
            alert("상품수정");
        }
        if(mode === 3) {
            alert("상품삭제");
        }
        resetMode();
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
    }

    
    const handleProductAdd = (e) => {
        const { productName, size, color, price } = inputRef;
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "productName":
                    size.current.focus();
                    break;
                case "size":
                    color.current.focus();
                    break;
                case "color":
                    price.current.focus();
                    break;
                case "price":
                    productName.current.focus();
                    // setProducts(productList => [productList, ...]);
                    break;
                default:
            }
        }
    }
    
    return (
        <header className="table-header">
            <div className="input-group">
                <input name="productName" type="text" disabled={mode === 0 || mode === 3} placeholder="상품명" ref={inputRef.productName}/>
                <input name="size" type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈" ref={inputRef.size} />
                <input name="color" type="text" disabled={mode === 0 || mode === 3} placeholder="색상" ref={inputRef.color} />
                <input name="price" type="text" disabled={mode === 0 || mode === 3} placeholder="가격" ref={inputRef.price}/>
            </div>
            <div>
            {
                !mode && (
                    <div className="button-group">
                        <button name="add" onClick={handleChangeModeClick} value={1} >추가</button>
                        <button name="edit" onClick={handleChangeModeClick} value={2} >수정</button>
                        <button name="delete" onClick={handleChangeModeClick} value={3} >삭제</button>
                    </div>
                )
            }
            {
                !!mode && (
                    <div className="button-group">
                        <button onClick={handleSubmitClick}>확인</button>
                        <button onClick={handleCancelClick}>취소</button>
                    </div>
                )
            }
            </div>
        </header>
    );
}

export default DataTableHeader;