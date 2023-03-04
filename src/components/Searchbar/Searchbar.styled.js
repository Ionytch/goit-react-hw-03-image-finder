import styled from "styled-components";

export const SearchbarStyle = styled.header`
width:100%;
display: flex;

  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #833E0C;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const Form = styled.form`
display: flex;

 align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const Button = styled.button`
background-color:#20E4E7;
border-round:2px;
:hover{
  background-color:#8420E7;  
};
`

