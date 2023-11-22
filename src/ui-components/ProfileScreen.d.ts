/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProfileScreenOverridesProps = {
    ProfileScreen?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Group 11"?: PrimitiveOverrideProps<FlexProps>;
    "Full Name"?: PrimitiveOverrideProps<TextProps>;
    "Tuna Italia"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Group 12"?: PrimitiveOverrideProps<FlexProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    "Tuna@gmail.com"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Group 15"?: PrimitiveOverrideProps<FlexProps>;
    "Group 13"?: PrimitiveOverrideProps<ViewProps>;
    Following?: PrimitiveOverrideProps<TextProps>;
    "21 Friends"?: PrimitiveOverrideProps<TextProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    Follower?: PrimitiveOverrideProps<TextProps>;
    "11 Friends"?: PrimitiveOverrideProps<TextProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Group 16"?: PrimitiveOverrideProps<FlexProps>;
    "Social URL"?: PrimitiveOverrideProps<TextProps>;
    "Facebook.com/rahul****"?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    Menu?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Home Indicator"?: PrimitiveOverrideProps<ViewProps>;
    Mess?: PrimitiveOverrideProps<ViewProps>;
    Shape?: PrimitiveOverrideProps<IconProps>;
    Path41449?: PrimitiveOverrideProps<IconProps>;
    Path41450?: PrimitiveOverrideProps<IconProps>;
    Oval41454?: PrimitiveOverrideProps<IconProps>;
    "ion:logo-octocat"?: PrimitiveOverrideProps<ViewProps>;
    Vector380654?: PrimitiveOverrideProps<IconProps>;
    Vector380655?: PrimitiveOverrideProps<IconProps>;
    Close?: PrimitiveOverrideProps<ViewProps>;
    Oval380666?: PrimitiveOverrideProps<IconProps>;
    multiply?: PrimitiveOverrideProps<ViewProps>;
    Path380668?: PrimitiveOverrideProps<IconProps>;
    "Status Bar"?: PrimitiveOverrideProps<ViewProps>;
    Discover?: PrimitiveOverrideProps<TextProps>;
    Tuna?: PrimitiveOverrideProps<TextProps>;
    "New York, USA"?: PrimitiveOverrideProps<TextProps>;
    "About "?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    iconaddphoto?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    camera?: PrimitiveOverrideProps<ViewProps>;
    Group41570?: PrimitiveOverrideProps<ViewProps>;
    Group41571?: PrimitiveOverrideProps<ViewProps>;
    Group41572?: PrimitiveOverrideProps<ViewProps>;
    Vector41573?: PrimitiveOverrideProps<IconProps>;
    Vector41574?: PrimitiveOverrideProps<IconProps>;
    Vector41575?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProfileScreenProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: any;
} & {
    overrides?: ProfileScreenOverridesProps | undefined | null;
}>;
export default function ProfileScreen(props: ProfileScreenProps): React.ReactElement;
