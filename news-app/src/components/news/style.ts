import { css, styled } from "styled-components";

export const base = css`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 8px;
`;

export const Container = styled.div`
  ${base};

  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;

  ul, li {
    list-style: none;
    padding: 0;
  }
`;

export const Wrap = styled.div`
  ${base};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0px;
  background-color: rgb(75, 75, 75);
`;

export const Img = styled.div`
  display: flex;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid rgb(236, 236, 236);
  background-color: rgb(42, 42, 42);
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const Content = styled.div`
  display: block;
  gap: 1rem;
  justify-content: flex-start;
  flex: 1 1 0%;

  @media (min-width: 36.25rem) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1 1 0%;

    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: .5rem;
    }
  }

  h2 {
    font-size: 1rem;
    flex: 1 1 0%;
    margin: 0px 1rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: .5rem;
    flex: 1 1 0%;
    margin: 0px 1rem;
    color: white;
    margin-bottom: .5rem;

    p + p {
      margin-bottom: .5rem;
    }
  }

  a {
    text-decoration: none;
    flex: 1 1 0%;
    font-size: .7rem;
    margin: 0px 1rem;
    color: white;

    &:hover {
      color: grey;
      transition: all .3s ease-in;
    }
  }
`;