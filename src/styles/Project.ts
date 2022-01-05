import styled from "styled-components";

export const ProjectStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const StatusBoardStyle = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const StatusSection = styled.div`
  height: 65vh;
  min-height: 60vh;
  width: 25vw;
  margin: 5px 25px 5px 0;

  /*Here for spacing view*/
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
  color: var(--gold);`
