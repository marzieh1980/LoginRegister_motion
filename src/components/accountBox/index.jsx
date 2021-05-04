import React, { useState } from "react"
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import {motion} from "framer-motion";
import { SignupForm} from "./signupForm"
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
  width: 850px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fce2fb;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top: 70px;
 
`;

const TopContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.4em;
  padding-bottom: 1em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: row;
  border-radius: 50%;
  transform: rotate(60deg);
  bottom: -400px;
  left: -70px;
  background: #964dbd;
  background: linear-gradient(
    58deg,
    #e2b8f9 30%,
    #992493 100%
  );
`;
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;  
    font-size: 50px;
    font-weight: 800;
    line-height: 1.14;
    color: #a60da0;
    z-index: 10;  
    `;
const HeaderText = styled.h2`
    font-size: 35px;
    font-weight: 700;
    line-height: 1.4;
    color: #82107e;
    z-index: 10;
    padding: 30px 20px 0px 460px;
`;

const SmallText = styled.h5`
    color: #946e92;
    font-size:17px;
    z-indez: 10;
    margin: 30px 20px;
    padding: 0px 20px 10px 470px;
   
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.1em;
    
`;

const backdropVariants = {
    expanded: {
        width: "130%",
        height: "1050px",
        borderRadius: "50%",
        transform: "rotate(10deg)"
    },
    collapsed: {
        width: "100%",
        height: "550%",
        borderRadius: "30%",
        transform: "rotate(50deg)"
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 20,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
  
    const playExpandingAnimation = () => {
      setExpanded(true);
      setTimeout(() => {
        setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
    };
  
    const switchToSignup = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signup");
      }, 400);
    };
  
    const switchToSignin = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signin");
      }, 400);
    };

const contextValue = { switchToSignup, switchToSignin};

return (
  <AccountContext.Provider value={contextValue}>
 
    <BoxContainer>
      <TopContainer>
        <BackDrop
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === "signin" && (
          <HeaderContainer>
            <HeaderText>Welcome Back</HeaderText>
            <SmallText>Please sign-in to continue!</SmallText>
          </HeaderContainer>
        )}
        {active === "signup" && (
          <HeaderContainer>
            <HeaderText>Create Account</HeaderText>
            <SmallText>Please sign-up to continue!</SmallText>
          </HeaderContainer>
        )}
      </TopContainer>
      <InnerContainer>
        {active === "signin" && <LoginForm />}
        {active === "signup" && <SignupForm />}
      </InnerContainer>
    </BoxContainer>
    
  </AccountContext.Provider>
);
}