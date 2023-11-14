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
export declare type PhotoPageMenuOverridesProps = {
    PhotoPageMenu?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    Subtract502388?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 16502389"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 280502390"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 281502391"?: PrimitiveOverrideProps<IconProps>;
    "Nav Bar"?: PrimitiveOverrideProps<ViewProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    Subtract502371?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 16502372"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 280502373"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 281502374"?: PrimitiveOverrideProps<IconProps>;
    "Group 11"?: PrimitiveOverrideProps<ViewProps>;
    "Line 19"?: PrimitiveOverrideProps<IconProps>;
    "Line 20"?: PrimitiveOverrideProps<IconProps>;
    "Line 21"?: PrimitiveOverrideProps<IconProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    filter?: PrimitiveOverrideProps<TextProps>;
    "user-icon 1"?: PrimitiveOverrideProps<ImageProps>;
    "Heron in the Reeds"?: PrimitiveOverrideProps<TextProps>;
    "30 Oct 2023"?: PrimitiveOverrideProps<TextProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 282"?: PrimitiveOverrideProps<IconProps>;
    "user-icon 13"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
    "Line 22"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
    "My account"?: PrimitiveOverrideProps<TextProps>;
    "Invite friends"?: PrimitiveOverrideProps<TextProps>;
    "Help Center"?: PrimitiveOverrideProps<TextProps>;
    "Who to follow"?: PrimitiveOverrideProps<TextProps>;
    "log out"?: PrimitiveOverrideProps<TextProps>;
    "Line 23"?: PrimitiveOverrideProps<IconProps>;
    "Line 24"?: PrimitiveOverrideProps<IconProps>;
    "Line 25"?: PrimitiveOverrideProps<IconProps>;
    "Line 26"?: PrimitiveOverrideProps<IconProps>;
    "Line 27"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PhotoPageMenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PhotoPageMenuOverridesProps | undefined | null;
}>;
export default function PhotoPageMenu(props: PhotoPageMenuProps): React.ReactElement;
