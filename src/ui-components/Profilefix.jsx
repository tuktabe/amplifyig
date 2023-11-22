/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Profilefix(props) {
  const { user, overrides, ...rest } = props;
  const isolatedcloseupshotofagraycatlookingintothecameraSixZeroFiveTwoSevenSixOnClick =
    useNavigateAction({ target: "_blank", type: "url", url: "" });
  const vectorSixZeroFiveTwoSevenSevenOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "",
  });
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
      {...getOverrideProps(overrides, "Profilefix")}
      {...rest}
    >
      <View
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
        {...getOverrideProps(overrides, "Profile page")}
      >
        <View
          width="375px"
          height="53px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="614px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-90deg, rgba(17,111,237,1), rgba(47,128,237,0))"
          {...getOverrideProps(overrides, "Rectangle 17")}
        ></View>
        <Image
          width="49px"
          height="38px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="624px"
          left="310px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          onClick={() => {
            isolatedcloseupshotofagraycatlookingintothecameraSixZeroFiveTwoSevenSixOnClick();
          }}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605276"
          )}
        ></Image>
        <Icon
          width="40px"
          height="27px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 27 }}
          paths={[
            {
              d: "M0 27L0 9.04332L20 0L40 9.04332L40 27L25.1657 27L25.1657 16.0806L14.8343 16.0806L14.8343 27L0 27Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="94.45%"
          bottom="1.5%"
          left="4.53%"
          right="84.8%"
          src={user?.image}
          onClick={() => {
            vectorSixZeroFiveTwoSevenSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Vector605277")}
        ></Icon>
        <View
          width="46px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="624px"
          left="165px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ph:plus-fill")}
        >
          <Icon
            width="34.5px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 34.5, height: 30 }}
            paths={[
              {
                d: "M31.625 0L2.875 0C2.1125 1.11022e-15 1.38123 0.263392 0.842068 0.732233C0.302901 1.20107 2.55351e-15 1.83696 0 2.5L0 27.5C1.27676e-15 28.163 0.302901 28.7989 0.842068 29.2678C1.38123 29.7366 2.1125 30 2.875 30L31.625 30C32.3875 30 33.1188 29.7366 33.6579 29.2678C34.1971 28.7989 34.5 28.163 34.5 27.5L34.5 2.5C34.5 1.83696 34.1971 1.20107 33.6579 0.732233C33.1188 0.263392 32.3875 1.66533e-15 31.625 0ZM27.3125 16.25L18.6875 16.25L18.6875 23.75C18.6875 24.0815 18.5361 24.3995 18.2665 24.6339C17.9969 24.8683 17.6312 25 17.25 25C16.8688 25 16.5031 24.8683 16.2335 24.6339C15.964 24.3995 15.8125 24.0815 15.8125 23.75L15.8125 16.25L7.1875 16.25C6.80625 16.25 6.44062 16.1183 6.17103 15.8839C5.90145 15.6495 5.75 15.3315 5.75 15C5.75 14.6685 5.90145 14.3505 6.17103 14.1161C6.44062 13.8817 6.80625 13.75 7.1875 13.75L15.8125 13.75L15.8125 6.25C15.8125 5.91848 15.964 5.60054 16.2335 5.36612C16.5031 5.1317 16.8688 5 17.25 5C17.6312 5 17.9969 5.1317 18.2665 5.36612C18.5361 5.60054 18.6875 5.91848 18.6875 6.25L18.6875 13.75L27.3125 13.75C27.6937 13.75 28.0594 13.8817 28.329 14.1161C28.5986 14.3505 28.75 14.6685 28.75 15C28.75 15.3315 28.5986 15.6495 28.329 15.8839C28.0594 16.1183 27.6937 16.25 27.3125 16.25Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector605279")}
          ></Icon>
        </View>
        <View
          width="375px"
          height="85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 28")}
        ></View>
        <View
          width="375px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-90deg, rgba(124,81,249,0.7188), rgba(217,217,217,0))"
          {...getOverrideProps(overrides, "Rectangle 29")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="360px"
          height="403px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="193px"
          left="1px"
          {...getOverrideProps(overrides, "Group 17")}
        >
          <View
            width="360px"
            height="309px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="94px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(69,52,172,1)"
            {...getOverrideProps(overrides, "Rectangle 30")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            textTransform="capitalize"
            lineHeight="18.19999885559082px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="99px"
            height="23px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="141px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Queen Selena"
            {...getOverrideProps(overrides, "Queen Selena")}
          ></Text>
          <View
            width="102px"
            height="85px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="206px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "user-icon 4")}
          ></View>
        </View>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="291px"
          left="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605286"
          )}
        ></Image>
        <Image
          width="144px"
          height="145px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25px"
          left="115px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605304"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="397px"
          left="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605287"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="503px"
          left="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605288"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="291px"
          left="130px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605289"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="398px"
          left="129px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={`${user?.image}${user?.image}`}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605290"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="503px"
          left="129px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605291"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="291px"
          left="252px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605292"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="398px"
          left="253px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605293"
          )}
        ></Image>
        <Image
          width="102px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="503px"
          left="253px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.image}
          {...getOverrideProps(
            overrides,
            "Isolated closeup shot of a gray cat looking into the camera605294"
          )}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="100px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="228px"
          left="11px"
          {...getOverrideProps(overrides, "Group 19")}
        >
          <View
            width="100px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 31605296")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            textTransform="capitalize"
            lineHeight="20.799999237060547px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="89px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10px"
            left="8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Ask to Date"
            {...getOverrideProps(overrides, "Ask to Date")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="102px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="228px"
          left="137px"
          {...getOverrideProps(overrides, "Group 20")}
        >
          <View
            width="100px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 31605299")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            textTransform="capitalize"
            lineHeight="20.799999237060547px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="89px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10px"
            left="13px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Super Like"
            {...getOverrideProps(overrides, "Super Like")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="102px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="228px"
          left="257px"
          {...getOverrideProps(overrides, "Group 21")}
        >
          <View
            width="100px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 31605302")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            textTransform="capitalize"
            lineHeight="20.799999237060547px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="89px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10px"
            left="13px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Message"
            {...getOverrideProps(overrides, "Message")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
