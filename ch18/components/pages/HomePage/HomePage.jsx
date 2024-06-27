/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as s from "./style.js";

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

function HomePage(props) {
    return (
        <div css={s.layout}>
            <h1>메인페이지입니다.</h1>
        </div>
    );
}

export default HomePage;