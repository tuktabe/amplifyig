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
export declare type FeedOverridesProps = {
    Feed?: PrimitiveOverrideProps<ViewProps>;
    feed?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Group 15"?: PrimitiveOverrideProps<ViewProps>;
    Oval5751003?: PrimitiveOverrideProps<IconProps>;
    Oval5751005?: PrimitiveOverrideProps<IconProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 283575976"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
    "Isolated closeup shot of a gray cat looking into the camera"?: PrimitiveOverrideProps<ImageProps>;
    "age 2 yrs"?: PrimitiveOverrideProps<TextProps>;
    Vector575972?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector575974?: PrimitiveOverrideProps<IconProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Stories Line"?: PrimitiveOverrideProps<ViewProps>;
    "Profile + Stories573716"?: PrimitiveOverrideProps<ViewProps>;
    Oval573717?: PrimitiveOverrideProps<IconProps>;
    Oval5761084?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories5761077"?: PrimitiveOverrideProps<ViewProps>;
    Oval5761078?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories5761079"?: PrimitiveOverrideProps<ViewProps>;
    Oval5761080?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories5761081"?: PrimitiveOverrideProps<ViewProps>;
    Oval5761082?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories Copy 2"?: PrimitiveOverrideProps<ViewProps>;
    "photo-1518829579054-df4bf5d42da7573734"?: PrimitiveOverrideProps<ViewProps>;
    Mask?: PrimitiveOverrideProps<IconProps>;
    "photo-1518829579054-df4bf5d42da7573737"?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Text Copy"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 2"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 3"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 4"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 2835751011"?: PrimitiveOverrideProps<IconProps>;
    "Add Button"?: PrimitiveOverrideProps<ViewProps>;
    Oval5761086?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle5761088?: PrimitiveOverrideProps<ViewProps>;
    Rectangle5761089?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FeedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedOverridesProps | undefined | null;
}>;
export default function Feed(props: FeedProps): React.ReactElement;
