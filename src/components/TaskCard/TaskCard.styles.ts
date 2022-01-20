import styled from "styled-components";
import {COLORS} from "../../styles/Global.styles";

export const TaskCardStyle = styled.div`
  width: 100%;
  height: auto;
  min-height: 15vh;
  padding-left: 5px;
  margin-bottom: 20px;
  background-color: rgb(255, 254, 252);
  border-radius: 8px;
  box-shadow: rgba(35, 35, 35, 0.3) 0 19px 38px, rgba(70, 70, 70, 0.22) 0 15px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  
  h4 {
    color: ${COLORS.liberty};
  }
  
  h6 {
    min-width: 33%;
    color: #000;
    font-size: 0.75em;
    line-height: 1.2em;
  }
  
  p {
    font-size: .9em;
    line-height: 1.2em;
    padding: 0;
    margin: 5px 0;
  }
`

export const CardHeader = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    height: 22px;
    width: 22px;
    background-image: linear-gradient(#0dccea, #0d70ea);
    border: 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, .3) 0 2px 5px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: Verdana, sans-serif;
    font-weight: bold;
    font-size: .9em;
    line-height: .9em;
    margin: 5px;
    padding: 5px; 
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    color: #838d9f;
  }
`

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  justify-content: space-between;
`
