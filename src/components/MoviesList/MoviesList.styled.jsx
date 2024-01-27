import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;  
`;

export const Li = styled.li`
    border-radius: 8px;
`;

export const Img = styled.img`
  width: 260px;
  height: 400px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  
  &:hover {
  transform: scale(1.05);
  cursor: pointer;
}  
`;