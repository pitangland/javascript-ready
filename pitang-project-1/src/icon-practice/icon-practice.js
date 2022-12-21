import styled from "styled-components";

// 해당 라이브러리 설치
// npm install react-icons --save

// react-icons 들어가면 여러 사이트에 있는 아이콘을 사용할 수 있음.
// font Awesome으로 사용해보자!
import { BsDownload } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";

// Line은 이 아이콘 방법말고 다른 방법으로 해봐야겠다.
// import { AiOutlineLine } from "react-icons/ai";

const Download = styled(BsDownload)``;
const Reload = styled(IoReloadOutline)`
  color: #da234f;
`;

// const Line = styled(AiOutlineLine)`
//   flex-direction: row;
//   width: 56px;
// `;

// 이게 대체 왜 안되는지 모르겠네 휴
const Line = styled.div`
  display: flex;
  flex-basis:100%;
  align-items: center;
  color: black;
  font-size: 14px;
  margin: 8px 0px;

  &::before {
    content: "";
    flex-grow: 1,
    margin: 0px 16px;
    background: black;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  &::after {
    content: "";
    flex-grow: 1,
    margin: 0px 16px;
    background: black;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // background-color: lightgrey;
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
            {/* 다운로드 아이콘 생성 */}
            <Download />
            {/* 다시 다운로드 아이콘 생성 */}
            <Reload />
            <Line>공유하기 왜 안돼?</Line>
            <hr />
            <div display="flex">
              <hr />
              <div>공유하기</div>
              <hr />
            </div>
          </Block>
        );
      })}
    </Wrapper>
  );
}

export default Blocks;
