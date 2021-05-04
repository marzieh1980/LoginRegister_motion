import React , {useContext} from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink} from "./common";
import {Marginer} from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props){
    const {switchToSignup} = useContext(AccountContext);

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="PassWord" />   
        </FormContainer>
        <Marginer direction ="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction ="vertical" margin=" 0.70em" />
        <SubmitButton type="submit">Signin</SubmitButton>
        <Marginer direction ="vertical" margin="0.70em" />
        <MutedLink href="#">Don't have an account? 
            <BoldLink href = "#" onClick={switchToSignup}>
            Signup
            </BoldLink>
        </MutedLink>
    </BoxContainer>
    );
}
