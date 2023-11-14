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
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="662px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(47,128,237,1)"
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
        width="77px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 16px - -76px)"
        left="calc(50% - 38.5px - 2px)"
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
        width="57px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="397px"
        left="calc(50% - 28.5px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign in"
        {...getOverrideProps(overrides, "Sign in")}
      ></Text>
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
        top="126px"
        left="126px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="filter"
        {...getOverrideProps(overrides, "filter")}
      ></Text>
    </View>
  );
}
