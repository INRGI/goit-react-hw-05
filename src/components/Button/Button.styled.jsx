import styled from "@emotion/styled";

export const Btn = styled.button`

  background-color: #810bad;
  border-radius: 8px;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  min-height: 26px;
  min-width: 100px;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);

 &:hover {
  background-color: #BD00FF;
  transform: translateY(-2px);
}

`;