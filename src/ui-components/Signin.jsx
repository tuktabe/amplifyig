/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Imgbg from "./Imgbg";
import { View } from "@aws-amplify/ui-react";
export default function Signin(props) {
  const { login, overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="667px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Signin")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="375px"
        height="667px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "grouplogin")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="375px"
          height="667px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group 22")}
        >
          <Imgbg
            width="375px"
            height="667px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            src={login?.image}
            {...getOverrideProps(overrides, "imgbg")}
          ></Imgbg>
        </View>
      </View>
    </View>
  );
}
