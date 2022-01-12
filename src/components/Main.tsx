import React from "react";
import { Project } from "./Project/Project";
import * as styled from "../styles/Main.styles";

const Main: React.FC = () => {
    return (
            <styled.MainStyles>
                <Project/>
            </styled.MainStyles>
   )
}

export default Main