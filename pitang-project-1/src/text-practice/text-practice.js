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
    </Wrapper>
  );
}

export default Blocks;
