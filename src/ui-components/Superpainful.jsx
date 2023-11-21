/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Painful from "./Painful";
import { Image, View } from "@aws-amplify/ui-react";
export default function Superpainful(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "Superpainful")}
      {...rest}
    >
      <Painful
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
        {...getOverrideProps(overrides, "painful")}
      ></Painful>
      <Image
        width="0.27%"
        height="0.12%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48.03%"
        bottom="51.85%"
        left="20.8%"
        right="78.93%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "british-shorthair-kitty-with-monochrome-wall-her 3"
        )}
      ></Image>
    </View>
  );
}
