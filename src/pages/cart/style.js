import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 30%;
    min-width: 175px;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;
