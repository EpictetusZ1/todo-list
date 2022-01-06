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
    color: #000;
    font-size: 0.75em;
  }
  
  p {
    padding: 0;
    margin: 5px 0;
  }
`

