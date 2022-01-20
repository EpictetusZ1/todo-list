import styled from "styled-components";
import {COLORS} from "../../styles/Global.styles";

export const HeaderStyle = styled.div`
  height: 55px;
  width: 100%;
  position: fixed;
  z-index: 2;
  display: inline-grid;
  grid-template-columns: [col-1-start] 1fr [col-1-end] 3fr [col-2-end] 1fr; 
  align-items: center;
  background-color: ${COLORS.liberty};
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  
  h1 {
    font-family: Baskerville, sans-serif;
    font-weight: normal;
    text-align: center;
    letter-spacing: 1px;
    z-index: 4;
    margin: 0;
    color: ${COLORS.celeste}; 
  }
  
`

export const ProjectSelectStyle = styled.div`
  max-height: 55px;
  max-width: 450px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  font-family: Baskerville, sans-serif;
  color: #FFF;
  font-size: 1.5em;
  
  label {
    width: 50%;
    padding: 0 5px;
  }

  select {
    border: none;
    padding: 2px 5px;
    border-radius: 4px;
    margin: auto 10px;
  }
`

export const AddProjectBtn = styled.button`
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${COLORS.desertSand};
  cursor: pointer;
  display: inline-flex;
  font-family: Geomanist, sans-serif;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  line-height: 15px;
  min-height: 30px;
  padding: 2px 5px;
  margin: auto 10px;
  position: relative;
  z-index: 7;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  
  :hover, :focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :hover {
    transform: translateY(-1px);
  }

  :active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  } 
`


