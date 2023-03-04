import styled from "styled-components";

export const ImageItem = styled.div`
.GalleryImage:hover{
    transform: scale(1.03);
`
export const ListItem = styled.li`
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

`
export const ImgStyle = styled.img`
width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  
  }
`

// display: grid;
//   max-width: 1140px;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   grid-auto-rows: 240px;
//   grid-gap: 12px;
//   justify-content: center;
//   padding: 0;  
//   margin-left: auto;
//   margin-right: auto;