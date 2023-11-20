/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Datingpage from "./Datingpage";
import { Image, View } from "@aws-amplify/ui-react";
export default function Modelcat(props) {
  const { post, overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Modelcat")}
      {...rest}
    >
      <Datingpage
        width="375px"
        height="812px"
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
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={post?.image}
        {...getOverrideProps(overrides, "Datingpage")}
      ></Datingpage>
      <Image
        width="90.67%"
        height="48.77%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.38%"
        bottom="26.85%"
        left="4.8%"
        right="4.53%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "british-shorthair-kitty-with-monochrome-wall-her 1"
        )}
      ></Image>
      <Image
        width="90.67%"
        height="48.77%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.38%"
        bottom="26.85%"
        left="4.8%"
        right="4.53%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={post?.image}
        {...getOverrideProps(
          overrides,
          "british-shorthair-kitty-with-monochrome-wall-her 2"
        )}
      ></Image>
    </View>
  );
}
