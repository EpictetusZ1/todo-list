import styled from "styled-components";
import {COLORS} from "../../styles/Global.styles";

export const ProjectStyle = styled.div`
  height: 95%;
  margin-left: 30px;
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const StatusBoardStyle = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StatusSection = styled.div`
  height: 65vh;
  min-height: 60vh;
  width: 24vw;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const StatusHeader = styled.h3`
  height: 1.5em;
  width: auto;
  max-width: 20vw;
  margin-top: 8px;
  font-family: Geomanist, sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: 1px;
  text-align: left;
  color: ${COLORS.celeste};`

export const ButtonStyle = styled.button`
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
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 70%;
  margin: 0 auto;

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
