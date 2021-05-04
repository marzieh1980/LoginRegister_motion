import React, { Fragment, useContext } from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink} from "./common";
import {Marginer} from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props){
    const {switchToSignin} = useContext(AccountContext);

    return (
    <BoxContainer>
        <Fragment>
            <FormContainer>
                    <Input type="text" placeholder="Full Name"  />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="PassWord" />
                    <Input type="password" placeholder="Confirm PassWord" /> 
            </FormContainer>
            <Marginer direction ="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
            <Marginer direction ="vertical" margin="0.30em" />
            <MutedLink href="#">
                Alredy have an account ?
                <BoldLink href = "#" onClick={switchToSignin}>Signin</BoldLink>
            </MutedLink>
            </Fragment>
        </BoxContainer>
    );
}
