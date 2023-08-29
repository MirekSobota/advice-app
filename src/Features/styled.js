import { styled } from "styled-components";
import { ReactComponent as PatternDividerDesktop } from "../assets/pattern-divider-desktop.svg";
import { ReactComponent as PatternDividerMobile } from "../assets/pattern-divider-mobile.svg";
import { ReactComponent as IconDice } from "../assets/icon-dice.svg";

export const Container = styled.div`
  min-width: 500px;
  min-height: 300px;
  margin: auto;
  padding: 16px;
  background: hsl(217, 19%, 24%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 60px;
  justify-content: space-between;
`;

export const Header = styled.p`
  color: hsl(150, 100%, 66%);
  letter-spacing: 4px;
  font-size: 12px;
`;

export const Advice = styled.p`
  color: hsl(193, 38%, 86%);
  font-size: 28px;
  text-align: center;
`;

export const Circle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background: hsl(150, 100%, 66%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  &:hover {
    box-shadow: 0 0 15px #FFFFFF;
  }
  
`;



export const DividerDesktop = styled(PatternDividerDesktop)``;

export const DiceIcon = styled(IconDice)`
`;