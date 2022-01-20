import styled from "styled-components";
import {COLORS} from "./Global.styles";

export const AppStyles = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const PromptContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 250px;
  margin-top: 200px;
  color: #FFF;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 25px;
  font-family: Verdana, sans-serif;
  font-size: 1.2em;
  line-height: 1.2em;
  
   h3 {
     margin: 5px 0;
     color: ${COLORS.celeste};
     font-family: Baskerville, sans-serif;
     font-weight: normal;
     font-size: 2em;
     line-height: 1em;
   }
  
  h4 {
    color: ${COLORS.desertSand};
    margin: 10px 0;
  }

  hr {
    background-color: #FFF;
    width: 400px;
    height: 2px;
    border-radius: 5px;
    margin: 2px auto;
  }

  p {
    margin: 5px;
  }

  sup {
    font-size: 0.8em;
  }

  .footNote {
    padding: 0 5px;
    margin-top: auto;
    font-size: 0.6em;
  }
  
  .btnContainer {
    width: auto;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }
`

export const ChooseStorage = styled.button`
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  margin: 0 15px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

  :hover {
    background-color: #e5e6e8;
    text-decoration: none;
    transition-duration: 0.1s;
  }


  :active {
    background-color: #EDEFF2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  :focus {
    outline: 1px transparent;
  }

  .chooseStorage:before {
    display: none;
  }

`