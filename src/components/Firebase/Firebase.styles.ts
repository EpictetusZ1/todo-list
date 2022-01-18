import styled from "styled-components";

export const DisplayLoginDiv = styled.div`  
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center
`

export const SignInGoogle = styled.button`
  background-color: #0276FF;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  color: #fff;
  box-sizing: border-box;
  width: auto;
  cursor: pointer;
  font-family: Geomanist ,sans-serif;
  letter-spacing: 1px;
  font-size: 100%;
  line-height: 1.2;
  margin: 50px auto;
  padding: 12px 21px 10px 21px;
  text-align: center;
  text-transform: none;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  user-select: none;
  touch-action: manipulation;

  :active {
    background-color: #006AE8;
  }

  :hover {
    background-color: #1C84FF;
  }
`