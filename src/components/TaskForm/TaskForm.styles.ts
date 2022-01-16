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
    color: ${COLORS.mnBlue}; 
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
  background-color: ${COLORS.liberty};
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
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: all 0.3s ease-in-out;

  :hover, :focus {
    background-color: #233fc0;
  }
`

export const FormHeader = styled.div`
  width: 97%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  button {
    height: 22px;
    width: 24px;
    background-image: linear-gradient(#0dccea, #0d70ea);
    border: 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, .3) 0 2px 5px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: Verdana, sans-serif;
    font-weight: bold;
    font-size: .8em;
    line-height: .8em;
    margin: 5px;
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