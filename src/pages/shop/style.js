import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px auto;
  padding: 0px 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  li {
    width: 30%;
    min-width: 340px;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 5px;
    border: solid 1px var(--purple);
    box-shadow: 2px 2px 5px 1px var(--dark-green);
    margin-bottom: 10px;
  }
  h2 {
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px var(--dark-green);
  }
`;
