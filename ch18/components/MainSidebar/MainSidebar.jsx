/** @jsxImportSource @emotion/react */
import MainSidebarHeader from "./MainSidebarHeader/MainSidebarHeader";
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import * as s from "./style";
import { useRecoilState } from "recoil";
import mainSidebarShowAtom from "../../atoms/mainSidebarShowAtom";

function MainSidebar({}) {
    const [ mainSidebarShow ] = useRecoilState(mainSidebarShowAtom);
    return (
        <div css={s.layout(mainSidebarShow)}>
            <MainSidebarHeader />
            <MainSidebarBody />
        </div>
    );
};

export default MainSidebar;