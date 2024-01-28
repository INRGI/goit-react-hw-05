import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
`;

export const Title = styled.h2`
  font-size:34px;
   font-weight:700;
   letter-spacing:1px; 
   text-transform:uppercase;  
   text-align:center; 
   margin-top:15px;
   margin-bottom:15px;
   white-space:nowrap;
   color: #910505;
`;


export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Li = styled.li`
    border-radius: 10px;
`;