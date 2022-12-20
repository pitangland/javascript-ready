import styled from "styled-components";

// 해당 라이브러리 설치
// npm install react-icons --save

// react-icons 들어가면 여러 사이트에 있는 아이콘을 사용할 수 있음.
// font Awesome으로 사용해보자!
import { BsDownload } from "react-icons/bs";
// <GrDownload/> 로 사용하면된다!

import { IoReloadOutline } from "react-icons/io5";

const Download = styled(BsDownload)``;
const Reload = styled(IoReloadOutline)`
  color: #da234f;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: lightgrey;
`;

const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: "1",
    padding: "1rem",
    backgroundColor: "red",
  },
  {
    label: "2",
    padding: "3rem",
    backgroundColor: "green",
  },
  {
    label: "3",
    padding: "2rem",
    backgroundColor: "blue",
  },
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => {
        return (
          <Block
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label}
            <Download />
            <Reload />
          </Block>
        );
      })}
    </Wrapper>
  );
}

export default Blocks;
