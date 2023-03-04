import styled from "styled-components";

export const Gallerylist = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-top:15px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 100px;
`
export const LoadMoreButton = styled.button`
background-color:#B120E7;
margin-top:15px;
border-radius:30%;
:hover{
  background-color:#8420E7;  
};
`