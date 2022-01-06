import styled from "styled-components";
import {COLORS} from "../../styles/Global.styles";

export const HeaderStyle = styled.div`
  height: 55px;
  width: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.liberty};
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  h1 {
    font-family: Baskerville, sans-serif;
    font-weight: normal;
    text-align: center;
    letter-spacing: 1px;
    width: 100%;
    margin: 0;
    color: ${COLORS.celeste}; 
  }
`