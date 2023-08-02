import { styled } from "styled-components";

export const Container = styled.form`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    font: inherit;
    cursor: pointer;
    padding: .5rem 1rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;

    &:hover, &:active {
      background-color: #510674;
      border-color: #510674;
      transition: all .3s ease-in-out;
    }
  }

  input {
    padding: .5rem .5rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
  }
`;

export const Label = styled.label`
  margin-right: .3rem;
  color: black;
`;