/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Modelcat from "./Modelcat";
import { Image, View } from "@aws-amplify/ui-react";
export default function Painful(props) {
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
      {...getOverrideProps(overrides, "Painful")}
      {...rest}
    >
      <Modelcat
        width="375px"
        height="812px"
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
        src={post?.image}
        {...getOverrideProps(overrides, "modelcat")}
      ></Modelcat>
      <Image
        width="10.93%"
        height="6.16%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="92.24%"
        bottom="1.6%"
        left="80.8%"
        right="8.27%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={post?.image}
        {...getOverrideProps(
          overrides,
          "british-shorthair-kitty-with-monochrome-wall-her 3"
        )}
      ></Image>
    </View>
  );
}
