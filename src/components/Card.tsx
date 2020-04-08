import * as React from "react";
import styled from "styled-components";
import icon from "../assets/sample.png";

interface IProps {
  /** ボタン内テキスト */
  text: string;
}

/**
 * button component
 */
export const Card: React.FC<IProps> = ({ text }) => {
  return (
    <CardWrapper>
      <Icon src={icon} alt="icon"></Icon>
      {text}
    </CardWrapper>
  );
};

const CardWrapper = styled.div``;

const Icon = styled.img``;
