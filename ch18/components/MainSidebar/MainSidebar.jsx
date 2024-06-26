/** @jsxImportSource @emotion/react */
import MainSidebarHeader from "./MainSidebarHeader/MainSidebarHeader";
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import * as s from "./style";

function MainSidebar({isMainSidebarShow, setMainSidebarShow}) {
    return (
        <div css={s.layout(isMainSidebarShow)}>
            <MainSidebarHeader setMainSidebarShow={setMainSidebarShow}/>
            <MainSidebarBody />
        </div>
    );
};

export default MainSidebar;