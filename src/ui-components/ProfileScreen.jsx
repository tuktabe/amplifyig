/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileScreen(props) {
  const { user, overrides, ...rest } = props;
  const profileScreenOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "#/Myuploadpage/",
  });
  const rectangleOneOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: user?.image,
  });
  const vectorThreeEightZeroSixFiveFiveOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const ovalThreeEightZeroSixSixSixOnClick = useAuthSignOutAction({
    global: false,
  });
  const ellipseTwoOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "#/Myuploadpage/",
  });
  const cameraOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "#/Myuploadpage/",
  });
  const vectorFourOneFiveSevenThreeOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "#/Myuploadpage/",
  });
  const vectorFourOneFiveSevenFourOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "#/Myuploadpage/",
  });
  return (
    <View
      width="375px"
      height="812px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="50px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        profileScreenOnClick();
      }}
      {...getOverrideProps(overrides, "ProfileScreen")}
      {...rest}
    >
      <Image
        width="157px"
        height="153px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="150px"
        left="113px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={user?.image}
        onClick={() => {
          rectangleOneOneOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 11")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="460px"
        left="24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 16")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="65px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 11")}
        >
          <Text
            fontFamily="Nunito"
            fontSize="14px"
            fontWeight="400"
            color="rgba(137,137,137,1)"
            lineHeight="17.5751953125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Full Name"
            {...getOverrideProps(overrides, "Full Name")}
          ></Text>
          <Text
            fontFamily="Nunito"
            fontSize="14px"
            fontWeight="400"
            color="rgba(44,44,44,1)"
            lineHeight="19.095998764038086px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="26px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user?.name}
            {...getOverrideProps(overrides, "Tuna Italia")}
          ></Text>
        </Flex>
        <Icon
          width="322px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 322, height: 1 }}
          paths={[
            {
              d: "M0 -2.77556e-17L322 -2.77556e-17L322 -0.5L0 -0.5L0 -2.77556e-17Z",
              stroke: "rgba(153,153,153,0.3)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
        <Flex
          padding="0px 0px 0px 0px"
          width="109px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 12")}
        >
          <Text
            fontFamily="Nunito"
            fontSize="14px"
            fontWeight="400"
            color="rgba(137,137,137,1)"
            lineHeight="17.5751953125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Email"
            {...getOverrideProps(overrides, "Email")}
          ></Text>
          <Text
            fontFamily="Nunito"
            fontSize="14px"
            fontWeight="400"
            color="rgba(44,44,44,1)"
            lineHeight="19.095998764038086px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="26px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Tuna@gmail.com"
            {...getOverrideProps(overrides, "Tuna@gmail.com")}
          ></Text>
        </Flex>
        <Icon
          width="322px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 322, height: 1 }}
          paths={[
            {
              d: "M0 -2.77556e-17L322 -2.77556e-17L322 -0.5L0 -0.5L0 -2.77556e-17Z",
              stroke: "rgba(153,153,153,0.3)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 2")}
        ></Icon>
        <Flex
          padding="0px 0px 0px 0px"
          width="202px"
          height="44px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 15")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="67px"
            height="44px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 13")}
          >
            <Text
              fontFamily="Nunito"
              fontSize="14px"
              fontWeight="400"
              color="rgba(137,137,137,1)"
              lineHeight="17.5751953125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Following"
              {...getOverrideProps(overrides, "Following")}
            ></Text>
            <Text
              fontFamily="Nunito"
              fontSize="14px"
              fontWeight="400"
              color="rgba(44,44,44,1)"
              lineHeight="17.5751953125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="26px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="21 Friends"
              {...getOverrideProps(overrides, "21 Friends")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="67px"
            height="44px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="135px"
            {...getOverrideProps(overrides, "Group 14")}
          >
            <Text
              fontFamily="Nunito"
              fontSize="14px"
              fontWeight="400"
              color="rgba(137,137,137,1)"
              lineHeight="17.5751953125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Follower"
              {...getOverrideProps(overrides, "Follower")}
            ></Text>
            <Text
              fontFamily="Nunito"
              fontSize="14px"
              fontWeight="400"
              color="rgba(44,44,44,1)"
              lineHeight="17.5751953125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="26px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="11 Friends"
              {...getOverrideProps(overrides, "11 Friends")}
            ></Text>
          </View>
        </Flex>
        <Icon
          width="322px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 322, height: 1 }}
          paths={[
            {
              d: "M0 -2.77556e-17L322 -2.77556e-17L322 -0.5L0 -0.5L0 -2.77556e-17Z",
              stroke: "rgba(153,153,153,0.3)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 4")}
        ></Icon>
        <Flex
          padding="0px 0px 0px 0px"
          width="158px"
          height="44px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 16")}
        >
          <Text
            fontFamily="Nunito"
            fontSize="14px"
            fontWeight="400"
            color="rgba(137,137,137,1)"
            lineHeight="17.5751953125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Social URL"
            {...getOverrideProps(overrides, "Social URL")}
          ></Text>
          <Text
            fontFamily="Nunito"
            fontSize="14px"
            fontWeight="400"
            color="rgba(44,44,44,1)"
            lineHeight="17.5751953125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="26px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Facebook.com/rahul****"
            {...getOverrideProps(overrides, "Facebook.com/rahul****")}
          ></Text>
        </Flex>
        <Icon
          width="322px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 322, height: 1 }}
          paths={[
            {
              d: "M0 -2.77556e-17L322 -2.77556e-17L322 -0.5L0 -0.5L0 -2.77556e-17Z",
              stroke: "rgba(153,153,153,0.3)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 3")}
        ></Icon>
      </Flex>
      <View
        width="375px"
        height="73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="739px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Menu")}
      >
        <View
          width="375px"
          height="73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="0.2px SOLID rgba(153,163,176,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
        <View
          width="134px"
          height="34px"
          {...getOverrideProps(overrides, "Home Indicator")}
        ></View>
        <View
          width="29px"
          height="31px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="18px"
          left="174px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Mess")}
        >
          <Icon
            width="24px"
            height="26px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 26 }}
            paths={[
              {
                d: "M0 11.0933C0 4.89836 5.45834 0 12 0C18.5417 0 24 4.89836 24 11.0933C24 11.4911 23.9745 11.8794 23.932 12.2585C23.262 18.6311 17.6438 23.0713 15.0492 24.7819L13.2 26L13.2 22.0615C13.059 22.0754 12.9204 22.0949 12.7819 22.1144C12.5256 22.1506 12.2697 22.1867 12 22.1867C5.45834 22.1867 0 17.2883 0 11.0933ZM21.6 11.0933C21.6 6.39712 17.3887 2.46519 12 2.46519C6.61126 2.46519 2.4 6.39712 2.4 11.0933C2.4 15.7896 6.61126 19.7215 12 19.7215C12.7384 19.7215 13.4605 19.6385 14.1633 19.4928L15.6 19.1943L15.6 21.0576C18.057 19.0372 21.1314 15.9387 21.5461 11.9937L21.5484 11.9889L21.5484 11.9841C21.5821 11.6857 21.6 11.3899 21.6 11.0933Z",
                fill: "rgba(153,163,176,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="5px"
            left="0px"
            {...getOverrideProps(overrides, "Shape")}
          >
            <Icon
              width="24px"
              height="26px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 26 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Path41449")}
            ></Icon>
            <Icon
              width="19.2px"
              height="18.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.199951171875,
                height: 18.5924072265625,
              }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.47px"
              left="2.4px"
              {...getOverrideProps(overrides, "Path41450")}
            ></Icon>
          </Icon>
          <Icon
            width="13px"
            height="13px"
            viewBox={{ minX: 0, minY: 0, width: 13, height: 13 }}
            paths={[
              {
                d: "M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5Z",
                fill: "rgba(254,52,73,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="16px"
            {...getOverrideProps(overrides, "Oval41454")}
          ></Icon>
        </View>
        <View
          width="54px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="11px"
          left="35px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ion:logo-octocat")}
        >
          <Icon
            width="24.92px"
            height="8.43px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 24.9169921875,
              height: 8.42695426940918,
            }}
            paths={[
              {
                d: "M3.68402 0C2.6557 0 1.77399 0.400781 1.06207 1.21904C0.350157 2.0373 0 3.02783 0 4.20732C0 5.38682 0.361759 6.39668 1.06207 7.20615C1.76238 8.01562 2.6441 8.42695 3.68402 8.42695C4.64379 8.42695 5.47699 8.01738 6.18152 7.20791C6.88605 6.39844 7.24359 5.39912 7.24359 4.20908C7.24359 3.01904 6.88184 2.02852 6.18152 1.2208C5.48121 0.413087 4.64801 0 3.68402 0ZM21.3458 0C20.3291 0 19.4358 0.400781 18.7239 1.21904C18.012 2.0373 17.6618 3.02783 17.6618 4.20732C17.6618 5.38682 18.0236 6.39668 18.7239 7.20615C19.4242 8.01562 20.3175 8.42695 21.3458 8.42695C22.3066 8.42695 23.1388 8.01738 23.8549 7.20791C24.5711 6.39844 24.917 5.39912 24.917 4.20908C24.917 3.01904 24.5552 2.02852 23.8549 1.2208C23.1546 0.413087 22.3182 0 21.3458 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="56.66%"
            bottom="24.61%"
            left="26.94%"
            right="26.92%"
            {...getOverrideProps(overrides, "Vector380654")}
          ></Icon>
          <Icon
            width="50.63px"
            height="36.56px"
            viewBox={{ minX: 0, minY: 0, width: 50.625, height: 36.5625 }}
            paths={[
              {
                d: "M46.7606 10.2832C46.749 10.2832 47.0654 8.92178 46.7944 6.55049C46.5455 4.17744 45.9506 1.99951 44.975 0C44.975 0 44.4772 0.0764648 43.528 0.275977C42.5788 0.475488 41.0273 0.878906 38.9064 1.68574C36.816 2.49434 34.6127 3.57012 32.3188 4.87529C30.7589 4.50352 28.4312 4.31367 25.3125 4.31367C22.3404 4.31367 20.0127 4.50352 18.3062 4.87529C13.2669 1.93271 9.0443 0.307617 5.63836 0C4.66734 1.9998 4.06477 4.18975 3.83063 6.56982C3.55957 8.94287 3.87598 10.3122 3.87598 10.3122C1.12957 12.8162 0 16.425 0 19.4045C0 21.709 0.0791017 23.7938 0.689766 25.6447C1.32258 27.4825 2.12414 28.9846 3.07336 30.1395C4.05544 31.3073 5.26204 32.3321 6.64453 33.1726C8.05676 34.0585 9.35613 34.6966 10.5321 35.0965C11.7186 35.5148 13.0634 35.8198 14.6 36.0387C15.7389 36.2223 16.8898 36.3497 18.0468 36.4201C18.0468 36.4201 21.2108 36.5625 25.3241 36.5625C29.4374 36.5625 32.5898 36.4201 32.5898 36.4201C33.7467 36.3473 34.8975 36.2188 36.0366 36.0352C37.4266 35.8482 38.7872 35.5322 40.0929 35.093C41.2689 34.6834 42.5682 34.055 43.9952 33.169C45.3771 32.3298 46.5803 31.3033 47.5548 30.1324C48.504 28.9802 49.3056 27.4755 49.9384 25.6377C50.5712 23.7999 50.625 21.6993 50.625 19.3948C50.625 16.5103 49.4954 12.854 46.7606 10.2832ZM39.3704 32.5257C36.2169 33.7729 31.5837 34.2773 25.437 34.2773L25.1996 34.2773C19.0519 34.2773 14.4186 33.7825 11.3231 32.5257C8.22762 31.2688 6.65613 28.7068 6.65613 24.8414C6.65613 22.5281 7.6275 20.6525 9.53754 19.2164C10.3739 18.6012 11.3906 18.1688 12.6562 17.9121C13.9219 17.6555 15.0746 17.6484 16.1589 17.6739C17.222 17.7117 18.7133 17.8831 20.6002 18.007C22.487 18.131 23.9108 18.2927 25.3241 18.2927C26.6456 18.2927 28.3975 18.102 31.2114 17.9121C34.0253 17.7223 36.1273 17.6265 37.4825 17.8163C38.8726 18.007 40.0823 18.4069 41.1107 19.2164C43.1104 20.7205 44.1123 22.5955 44.1165 24.8414C44.1049 28.7068 42.5113 31.2785 39.3704 32.5257Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.38%"
            bottom="9.38%"
            left="3.13%"
            right="3.13%"
            onClick={() => {
              vectorThreeEightZeroSixFiveFiveOnClick();
            }}
            {...getOverrideProps(overrides, "Vector380655")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="54px"
          height="54px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="5px"
          left="288px"
          {...getOverrideProps(overrides, "Close")}
        >
          <Icon
            width="54px"
            height="54px"
            viewBox={{ minX: 0, minY: 0, width: 54, height: 54 }}
            paths={[
              {
                d: "M53.5 27C53.5 41.6355 41.6355 53.5 27 53.5L27 54.5C42.1878 54.5 54.5 42.1878 54.5 27L53.5 27ZM27 53.5C12.3645 53.5 0.5 41.6355 0.5 27L-0.5 27C-0.5 42.1878 11.8122 54.5 27 54.5L27 53.5ZM0.5 27C0.5 12.3645 12.3645 0.5 27 0.5L27 -0.5C11.8122 -0.5 -0.5 11.8122 -0.5 27L0.5 27ZM27 0.5C41.6355 0.5 53.5 12.3645 53.5 27L54.5 27C54.5 11.8122 42.1878 -0.5 27 -0.5L27 0.5Z",
                stroke: "rgba(0,0,0,0.04)",
                fillRule: "nonzero",
                strokeWidth: 0,
              },
              {
                d: "M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            onClick={() => {
              ovalThreeEightZeroSixSixSixOnClick();
            }}
            {...getOverrideProps(overrides, "Oval380666")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="18.95px"
            height="18.95px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="18px"
            left="18px"
            {...getOverrideProps(overrides, "multiply")}
          >
            <Icon
              width="18.95px"
              height="18.95px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.947265625,
                height: 18.947368621826172,
              }}
              paths={[
                {
                  d: "M1.357 0.000591055C0.807412 0.000735433 0.312713 0.333957 0.105909 0.843303C-0.100895 1.35265 0.0214352 1.93655 0.41528 2.31998L7.56387 9.47077L0.41528 16.6216C0.0624572 16.9604 -0.0796681 17.4636 0.0437175 17.937C0.167103 18.4105 0.536719 18.7802 1.01002 18.9036C1.48332 19.0271 1.98634 18.8849 2.32509 18.532L9.47368 11.3812L16.6223 18.532C16.961 18.8849 17.464 19.0271 17.9373 18.9036C18.4106 18.7802 18.7803 18.4105 18.9037 17.937C19.027 17.4636 18.8849 16.9604 18.5321 16.6216L11.3835 9.47077L18.5321 2.31998C18.9315 1.93158 19.0516 1.33772 18.8345 0.824543C18.6174 0.311371 18.1076 -0.0158349 17.5508 0.000591055C17.1999 0.0110493 16.8669 0.15774 16.6223 0.409585L9.47368 7.56037L2.32509 0.409585C2.07081 0.148122 1.72166 0.000612319 1.357 0.000591055Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Path380668")}
            ></Icon>
          </View>
        </View>
      </View>
      <View
        width="375px"
        height="44px"
        {...getOverrideProps(overrides, "Status Bar")}
      ></View>
      <Text
        fontFamily="Nunito"
        fontSize="36px"
        fontWeight="800"
        color="rgba(51,51,51,1)"
        lineHeight="45.193359375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="47px"
        left="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile"
        {...getOverrideProps(overrides, "Discover")}
      ></Text>
      <Text
        fontFamily="Nunito"
        fontSize="20px"
        fontWeight="500"
        color="rgba(44,44,44,1)"
        lineHeight="27.279998779296875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="301px"
        left="165px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={user?.name}
        {...getOverrideProps(overrides, "Tuna")}
      ></Text>
      <Text
        fontFamily="Nunito"
        fontSize="16px"
        fontWeight="400"
        color="rgba(137,137,137,1)"
        lineHeight="21.823999404907227px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="335px"
        left="150px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="New York, USA"
        {...getOverrideProps(overrides, "New York, USA")}
      ></Text>
      <Text
        fontFamily="Nunito"
        fontSize="21px"
        fontWeight="500"
        color="rgba(235,87,87,1)"
        lineHeight="26.36279296875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 13px - -18px)"
        left="6.4%"
        right="77.87%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="About"
        {...getOverrideProps(overrides, "About ")}
      ></Text>
      <View
        width="375px"
        height="8px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="389px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,240,240,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="52px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="258px"
        left="251px"
        {...getOverrideProps(overrides, "iconaddphoto")}
      >
        <Icon
          width="52px"
          height="45px"
          viewBox={{ minX: 0, minY: 0, width: 52, height: 45 }}
          paths={[
            {
              d: "M52 22.5C52 34.9264 40.3594 45 26 45C11.6406 45 0 34.9264 0 22.5C0 10.0736 11.6406 0 26 0C40.3594 0 52 10.0736 52 22.5Z",
              fill: "rgba(88,124,244,0.5)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          onClick={() => {
            ellipseTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <View
          width="28.89px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="10px"
          left="11.56px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            cameraOnClick();
          }}
          {...getOverrideProps(overrides, "camera")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="28.89px"
            height="19.68px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.65%"
            bottom="10.65%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group41570")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="28.89px"
              height="19.68px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group41571")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="28.89px"
                height="19.68px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group41572")}
              >
                <Icon
                  width="28.89px"
                  height="19.68px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 28.888916015625,
                    height: 19.67681884765625,
                  }}
                  paths={[
                    {
                      d: "M27.9278 3.06559C27.3511 2.54278 26.5547 2.23384 25.6485 2.23384L21.09 2.23384L21.09 2.18631C21.09 1.59221 20.8154 1.02186 20.3485 0.641635C19.8817 0.237643 19.2501 0 18.5636 0L10.3253 0C9.61132 0 8.97972 0.237643 8.51289 0.641635C8.04605 1.04563 7.77144 1.59221 7.77144 2.18631L7.77144 2.23384L3.24039 2.23384C2.33418 2.23384 1.53781 2.54278 0.961132 3.06559C0.384453 3.56464 8.01525e-30 4.27757 8.01525e-30 5.03802L8.01525e-30 16.8726C-1.95122e-15 17.6568 0.356992 18.346 0.961132 18.8451C1.53781 19.3441 2.36164 19.6768 3.24039 19.6768L25.6485 19.6768C26.5547 19.6768 27.3511 19.3679 27.9278 18.8451C28.5044 18.346 28.8889 17.6331 28.8889 16.8726L28.8889 5.03802C28.8889 4.2538 28.5319 3.56464 27.9278 3.06559ZM27.4609 16.8726L27.4335 16.8726C27.4335 17.3004 27.2412 17.6806 26.9117 17.9658C26.5822 18.251 26.1428 18.4173 25.6485 18.4173L3.24039 18.4173C2.74609 18.4173 2.30672 18.251 1.97719 17.9658C1.64766 17.6806 1.45543 17.3004 1.45543 16.8726L1.45543 5.03802C1.45543 4.61027 1.64766 4.23004 1.97719 3.94487C2.30672 3.6597 2.74609 3.49335 3.24039 3.49335L8.54035 3.49335C8.95226 3.49335 9.28179 3.20818 9.28179 2.85171L9.28179 2.16255C9.28179 1.90114 9.39163 1.6635 9.58386 1.49715C9.77609 1.3308 10.0507 1.23574 10.3528 1.23574L18.5636 1.23574C18.8657 1.23574 19.1403 1.3308 19.3325 1.49715C19.5247 1.6635 19.6346 1.90114 19.6346 2.16255L19.6346 2.85171C19.6346 3.20818 19.9641 3.49335 20.376 3.49335L25.676 3.49335C26.1703 3.49335 26.6096 3.6597 26.9392 3.94487C27.2687 4.23004 27.4609 4.61027 27.4609 5.03802L27.4609 16.8726Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  onClick={() => {
                    vectorFourOneFiveSevenThreeOnClick();
                  }}
                  {...getOverrideProps(overrides, "Vector41573")}
                ></Icon>
                <Icon
                  width="13.51px"
                  height="11.69px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 13.5107421875,
                    height: 11.6920166015625,
                  }}
                  paths={[
                    {
                      d: "M6.75539 0C4.88804 0 3.18547 0.665399 1.97719 1.71103C0.741445 2.78042 0 4.23004 0 5.84601C0 7.46198 0.768906 8.93536 1.97719 9.98099C3.21293 11.0504 4.88804 11.692 6.75539 11.692C8.62273 11.692 10.3253 11.0266 11.5336 9.98099C12.7693 8.9116 13.5108 7.46198 13.5108 5.84601C13.5108 4.23004 12.7419 2.75665 11.5336 1.71103C10.3253 0.665399 8.62273 0 6.75539 0ZM10.4901 9.10171C9.52894 9.9097 8.21082 10.4325 6.75539 10.4325C5.29996 10.4325 3.98183 9.9097 3.0207 9.10171C2.05957 8.26996 1.48289 7.12928 1.48289 5.86977C1.48289 4.61027 2.08703 3.46958 3.0207 2.63783C3.98183 1.80608 5.29996 1.30703 6.75539 1.30703C8.21082 1.30703 9.52894 1.82985 10.4901 2.63783C11.4512 3.46958 12.0279 4.61027 12.0279 5.86977C12.0553 7.12928 11.4512 8.26996 10.4901 9.10171Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="25.97%"
                  bottom="14.61%"
                  left="26.62%"
                  right="26.62%"
                  onClick={() => {
                    vectorFourOneFiveSevenFourOnClick();
                  }}
                  {...getOverrideProps(overrides, "Vector41574")}
                ></Icon>
                <Icon
                  width="2.69px"
                  height="2.33px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 2.691162109375,
                    height: 2.328887939453125,
                  }}
                  paths={[
                    {
                      d: "M1.34558 2.3289C2.08873 2.3289 2.69117 1.80756 2.69117 1.16445C2.69117 0.521341 2.08873 0 1.34558 0C0.602437 0 0 0.521341 0 1.16445C0 1.80756 0.602437 2.3289 1.34558 2.3289Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="25.85%"
                  bottom="62.32%"
                  left="79.18%"
                  right="11.5%"
                  {...getOverrideProps(overrides, "Vector41575")}
                ></Icon>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
