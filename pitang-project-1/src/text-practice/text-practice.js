import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

// div 가 아닌 pre 태그 쓰면 그대로 나오긴 함!
const Content = styled.pre`
  margin-top: 2vh;
  padding: 12px 16px 16px;

  width: 100%;
  height: 76px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 16px;
  border-radius: 4px;
  text-align: left;
  margin-bottom: 8px;
  display: inline-block;

  overflow: scroll;

  font-color: #6fa4f2;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function Blocks(props) {
  const content =
    "다혜입니다\n다혜입니다\n다혜입니다\n다혜입니다\n다혜입니다\n다혜입니다\n다혜입니다\n다혜입니다\n다혜입니다\n";

  const aa = "#6FA4F2";
  const aaa = "#6fa4f2";

  //  font-color={bgc}

  return (
    <Wrapper>
      <Content>{content}</Content>
      <img
        src={
          "https://www.figma.com/file/Whi3bWeGIzJsqqPFZfgcbb/%EC%83%88%ED%95%B4%EB%B6%80%EC%A0%81?node-id=804%3A10679&t=p6MPE2TlM3dZi83b-4"
        }
        alt={"한번뛰어볼까?"}
      />
    </Wrapper>
  );
}

export default Blocks;
