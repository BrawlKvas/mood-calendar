const { default: styled } = require("styled-components");

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ItemWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.color};
`;

export const ItemLine = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 10px;
  background-color: ${props => props.bgc};
`;