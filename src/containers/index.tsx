import * as React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Hero } from "../sections/Hero";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <Hero />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
