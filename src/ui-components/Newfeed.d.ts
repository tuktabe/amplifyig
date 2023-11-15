/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewfeedOverridesProps = {
    Newfeed?: PrimitiveOverrideProps<ViewProps>;
    feed?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
    "age 2 yrs"?: PrimitiveOverrideProps<TextProps>;
    Vector587167?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector587169?: PrimitiveOverrideProps<IconProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Stories Line"?: PrimitiveOverrideProps<ViewProps>;
    "Profile + Stories587172"?: PrimitiveOverrideProps<ViewProps>;
    Oval587173?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories587175"?: PrimitiveOverrideProps<ViewProps>;
    Oval587176?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories587177"?: PrimitiveOverrideProps<ViewProps>;
    Oval587178?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories587179"?: PrimitiveOverrideProps<ViewProps>;
    Oval587180?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories Copy 2"?: PrimitiveOverrideProps<ViewProps>;
    "photo-1518829579054-df4bf5d42da7587182"?: PrimitiveOverrideProps<ViewProps>;
    Mask?: PrimitiveOverrideProps<IconProps>;
    "photo-1518829579054-df4bf5d42da7587184"?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Text Copy"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 2"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 3"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 4"?: PrimitiveOverrideProps<TextProps>;
    "Isolated closeup shot of a gray cat looking into the camera587165"?: PrimitiveOverrideProps<ImageProps>;
    "Add Button"?: PrimitiveOverrideProps<ViewProps>;
    Oval587192?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle587194?: PrimitiveOverrideProps<ViewProps>;
    Rectangle587195?: PrimitiveOverrideProps<IconProps>;
    "Isolated closeup shot of a gray cat looking into the camera587200"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera587202"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera587196"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NewfeedProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: NewfeedOverridesProps | undefined | null;
}>;
export default function Newfeed(props: NewfeedProps): React.ReactElement;
