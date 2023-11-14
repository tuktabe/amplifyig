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
export declare type PhotoStreamOverridesProps = {
    PhotoStream?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 280"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 281"?: PrimitiveOverrideProps<IconProps>;
    "Line 19"?: PrimitiveOverrideProps<IconProps>;
    "Line 20"?: PrimitiveOverrideProps<IconProps>;
    "Line 21"?: PrimitiveOverrideProps<IconProps>;
    filter?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "user-icon 1501254"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 4"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 1501262"?: PrimitiveOverrideProps<ImageProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "user-icon 5"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 3"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 6"?: PrimitiveOverrideProps<ImageProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "user-icon 7"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 8"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 9"?: PrimitiveOverrideProps<ImageProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "user-icon 10"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 11"?: PrimitiveOverrideProps<ImageProps>;
    "user-icon 12"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PhotoStreamProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PhotoStreamOverridesProps | undefined | null;
}>;
export default function PhotoStream(props: PhotoStreamProps): React.ReactElement;
