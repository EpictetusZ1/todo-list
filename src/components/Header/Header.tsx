import React from "react"
import * as styled from "./Header.styles"

export const Header: React.FC = () => {
    return (
        <styled.HeaderStyle className={"header"}>
            <h1>To Do-ify</h1>
        </styled.HeaderStyle>
    )
}
