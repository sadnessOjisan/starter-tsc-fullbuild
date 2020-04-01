import * as React from "react";
import styled from "styled-components";

interface IProps {
  icon?: string;
  text: string;
  type?: "submit" | "button" | "reset";
}

/**
 * button component
 *
 * @note { type = "submit" } = props;という書き方でdefault値をセットできる。
 * @param props
 */
export const Button: React.FC<IProps> = (props) => {
  const { icon, text = "default", type = "submit" } = props;
  return (
    <StyledButton type={type}>
      <Icon src={icon}></Icon>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button``;

const Icon = styled.img`
  width: 12px;
  height: 12px;
`;
