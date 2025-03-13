import { StyleSheet } from "react-native";
import React from "react";
import TitleSubtitleView from "@/components/text/TitleSubtitleView";
import ViewScreenWrapper from "@/components/layout/ViewScreenWrapper";
import Container from "@/components/layout/Container";
import LoginForm from "@/components/auth/forms/login/LoginForm";
import SocialSignForm from "@/components/auth/forms/SocialSignForm";

const SignInScreen = () => {
  return (
    <ViewScreenWrapper>
      <Container style={{ paddingTop: 64 }}>
        <TitleSubtitleView
          title="Sign In"
          description="Hi Welcome back, you've been missed "
        />
      </Container>
      <Container>
        <LoginForm />
      </Container>
      <Container>
        <SocialSignForm
          title="Don't have an account?"
          label="Sign Up"
          href={"/(auth)/signup"}
        />
      </Container>
    </ViewScreenWrapper>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
