import * as React from "react";
import styled from "styled-components";

interface IProps {
  /** 画像パス */
  icon?: string;
  /** ボタン内テキスト */
  text: string;
  /** ボタンタイプ */
  type?: "submit" | "button" | "reset";
  /** クリック時のイベントハンドラ */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * button component
 */
export const Button: React.FC<IProps> = ({
  icon,
  text,
  type = "submit",
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {icon && <Icon src={icon}></Icon>}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button``;

const Icon = styled.img`
  width: 12px;
  height: 12px;
`;
