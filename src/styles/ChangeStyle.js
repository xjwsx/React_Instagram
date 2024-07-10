import styled from "styled-components";
import { Colors } from "./ColorStyle";

export const StInput = styled.input`
  width: 100%;
  line-height: 2rem;
  font-size: 0.8rem;
  padding: 1% 0%;
  margin: 1.2% 0;
  background-color: ${Colors.borderGrey};
  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;
  &:focus {
    outline: 2px solid ${Colors.buttonBlue};
  }
`;

export const StButton = styled.button`
  width: ${(props) => props.width || "100%"};
  line-height: 2rem;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
  background-color: ${(props) => props.bgcolor || Colors.buttonBlue};
  border: none;
  border-radius: 7px;
  box-shadow: ${Colors.shadow};
  &:hover {
    cursor: pointer;
  }
`;

export const StLinkCon = styled.div`
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 7%;

  a {
    color: ${Colors.buttonBlue};
    font-weight: bold;
  }
`;

export const StImg = styled.img`
  margin: 20px 10px;
  margin-bottom: 40px;
  width: 190px;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  max-width: 300px;
  height: auto;
  margin: 50px auto;
  padding: 2.3rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
`;
