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
export declare type FeedpageOverridesProps = {
    Feedpage?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Group 15"?: PrimitiveOverrideProps<ViewProps>;
    Oval5825?: PrimitiveOverrideProps<IconProps>;
    Oval5826?: PrimitiveOverrideProps<IconProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2835828"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
    "Isolated closeup shot of a gray cat looking into the camera58213"?: PrimitiveOverrideProps<ImageProps>;
    "age 2 yrs"?: PrimitiveOverrideProps<TextProps>;
    Vector58215?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector58217?: PrimitiveOverrideProps<IconProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Stories Line"?: PrimitiveOverrideProps<ViewProps>;
    "Profile + Stories58220"?: PrimitiveOverrideProps<ViewProps>;
    Oval58221?: PrimitiveOverrideProps<IconProps>;
    Oval58222?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories58223"?: PrimitiveOverrideProps<ViewProps>;
    Oval58224?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories58225"?: PrimitiveOverrideProps<ViewProps>;
    Oval58226?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories58227"?: PrimitiveOverrideProps<ViewProps>;
    Oval58228?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories Copy 2"?: PrimitiveOverrideProps<ViewProps>;
    "photo-1518829579054-df4bf5d42da758230"?: PrimitiveOverrideProps<ViewProps>;
    Mask?: PrimitiveOverrideProps<IconProps>;
    "photo-1518829579054-df4bf5d42da758232"?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Text Copy"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 2"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 3"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 4"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 28358238"?: PrimitiveOverrideProps<IconProps>;
    "Add Button"?: PrimitiveOverrideProps<ViewProps>;
    Oval58240?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle58242?: PrimitiveOverrideProps<ViewProps>;
    Rectangle58243?: PrimitiveOverrideProps<IconProps>;
    "Isolated closeup shot of a gray cat looking into the camera58244"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FeedpageProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: FeedpageOverridesProps | undefined | null;
}>;
export default function Feedpage(props: FeedpageProps): React.ReactElement;
