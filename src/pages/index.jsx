import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import HomeFour from "../components/homes/home-4";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Cybertronix - Solutions"} />
      <HomeFour />
    </Wrapper>
  );
};

export default Home;
