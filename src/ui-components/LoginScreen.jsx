/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function LoginScreen(props) {
  const { login, overrides, ...rest } = props;
  return (
    <View
      width="376px"
      height="667px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      src={login?.image}
      {...getOverrideProps(overrides, "LoginScreen")}
      {...rest}
    >
      <View
        width="250px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="263px"
        left="63px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        opacity="0.25"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        textTransform="capitalize"
        lineHeight="20.799999237060547px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="269px"
        left="67px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Username"
        {...getOverrideProps(overrides, "Username")}
      ></Text>
      <View
        width="250px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="304px"
        left="63px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        opacity="0.25"
        {...getOverrideProps(overrides, "Rectangle 11")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(229,229,229,1)"
        textTransform="capitalize"
        lineHeight="20.799999237060547px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="307px"
        left="69px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Password"
        {...getOverrideProps(overrides, "Password")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="77px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="379px"
        left="111px"
        {...getOverrideProps(overrides, "Group 13")}
      >
        <View
          width="77px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 16px - 0px)"
          left="calc(50% - 38.5px - 0px)"
          borderRadius="32px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(229,229,229,1)"
          {...getOverrideProps(overrides, "Rectangle 13")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="18.19999885559082px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="56px"
          height="18px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="7px"
          left="calc(50% - 28px - -2.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign in"
          {...getOverrideProps(overrides, "Sign in")}
        ></Text>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="40px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        textTransform="uppercase"
        lineHeight="52px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="PURR"
        {...getOverrideProps(overrides, "PURR")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        textTransform="uppercase"
        lineHeight="23.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="148px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="113px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cat dating App"
        {...getOverrideProps(overrides, "Cat dating App")}
      ></Text>
    </View>
  );
}
