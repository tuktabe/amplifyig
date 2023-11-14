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
export declare type PhotoPageOverridesProps = {
    PhotoPage?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 280"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 281"?: PrimitiveOverrideProps<IconProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    "Line 19"?: PrimitiveOverrideProps<IconProps>;
    "Line 20"?: PrimitiveOverrideProps<IconProps>;
    "Line 21"?: PrimitiveOverrideProps<IconProps>;
    filter?: PrimitiveOverrideProps<TextProps>;
    "user-icon 1"?: PrimitiveOverrideProps<ImageProps>;
    "Heron in the Reeds"?: PrimitiveOverrideProps<TextProps>;
    "30 Oct 2023"?: PrimitiveOverrideProps<TextProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 282"?: PrimitiveOverrideProps<IconProps>;
    "user-icon 13"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PhotoPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: PhotoPageOverridesProps | undefined | null;
}>;
export default function PhotoPage(props: PhotoPageProps): React.ReactElement;
