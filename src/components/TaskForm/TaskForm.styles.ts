import styled from "styled-components";
import {COLORS} from "../../styles/Global.styles";

export const TaskFormStyles = styled.div`
    height: 60vh;
    width: auto;
    padding: 0 30px;
    max-width: 20vw;
    margin-bottom: 50px;
    position: absolute;
    z-index: 10;
    border-radius: 35px;
    background: ${COLORS.champagnePink}; 
    transition: all 0.3s ease-in;
    animation-name: appear;
    animation-duration: 0.2s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    font-size: 1.3em;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p {
    color: #000; 
    font-family: Geomanist, sans-serif;
    font-size: 1.5em;
    width: 100%;
    margin: 10px auto 0 auto;
    font-weight: bold;
    text-align: center;
  }

  form {
    height: 85%;
    width: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    
    select {
      margin-top: 5px;
    }
  }
`

export const FormElStyle = styled.div`
  width: 90%;
  height: 10%;
  margin: 15px 0;
  text-align: center;
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  label {
    margin: 5px 0;
    width: 100%;
    font-size: 1.2em;
    font-family: Verdana, sans-serif;
  }
  
  input[type=text] {
    height: 50%;
    width: 80%;
    font-size: 1em;
  }
`

export const SubmitButton = styled.button`
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  padding: 0 5px;
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2em;
  font-family: Geomanist, sans-serif;
  height: 50px;
  width: 70%;
  line-height: 1.2em;
  list-style: none;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover, :focus {
    background-color: #F082AC;
  }
`