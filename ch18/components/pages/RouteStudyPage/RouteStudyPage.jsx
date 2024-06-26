/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import MainContainer from "../../MainContainer/MainContainer.jsx";
import * as s from "./style.js";
import RouteStudySubPage1 from "../RouteStudySubPage1/RouteStudySubPage1.jsx";

function RouteStudyPage() {
    return (
        <MainContainer>
            <h1>라우트 수업</h1>
            <ul>
                <Link to={"/routestudy/page1"}><li>1번페이지</li></Link>
                <Link to={"/routestudy/page2"}><li>2번페이지</li></Link>
                <Link to={"/routestudy/page3"}><li>3번페이지</li></Link>
            </ul>
            <div>
                <Routes>
                    <Route path="/page1/*" element={<RouteStudySubPage1 />} />
                    <Route path="/page2" element={<div>페이지2</div>} />
                    <Route path="/page3" element={<div>페이지3</div>} />
                </Routes>
            </div>
            
        </MainContainer>
    );
}

export default RouteStudyPage;