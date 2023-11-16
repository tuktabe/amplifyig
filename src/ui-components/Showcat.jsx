/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
import Uploadpage from "./Uploadpage";
export default function Showcat(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "Showcat")}
      {...rest}
    >
      <View
        width="375px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="89.21%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(234,148,225,1), rgba(217,217,217,0))"
        {...getOverrideProps(overrides, "Rectangle 30585460")}
      ></View>
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
        {...getOverrideProps(overrides, "uploadpage585461")}
      >
        <Uploadpage
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "uploadpage585462")}
        ></Uploadpage>
      </View>
      <View
        width="375px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="91%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(234,148,225,1), rgba(217,217,217,0))"
        {...getOverrideProps(overrides, "Rectangle 30585463")}
      ></View>
    </View>
  );
}
