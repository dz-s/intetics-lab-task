import React, { Component } from "react";

import LoginForm from "./LoginForm.js";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4em;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: papayawhip;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <LoginForm />
      </Wrapper>
    );
  }
}
