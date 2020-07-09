import React from 'react';
import {StyledNotFound} from "./styled";
import NavigationBar from "../NavigationBar";

function NotFound(props) {
    return (
        <StyledNotFound>
            <NavigationBar/>
            <h1>
                KHÔNG TÌM THẤY TRANG
            </h1>
        </StyledNotFound>
    );
}
export default NotFound;