/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DatingpageOverridesProps = {
    Datingpage?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Menu?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Home Indicator"?: PrimitiveOverrideProps<ViewProps>;
    Profile099?: PrimitiveOverrideProps<ViewProps>;
    Shape0102?: PrimitiveOverrideProps<IconProps>;
    Path0100?: PrimitiveOverrideProps<IconProps>;
    Path0101?: PrimitiveOverrideProps<IconProps>;
    Path0103?: PrimitiveOverrideProps<IconProps>;
    Path0104?: PrimitiveOverrideProps<IconProps>;
    Path0105?: PrimitiveOverrideProps<IconProps>;
    Path0106?: PrimitiveOverrideProps<IconProps>;
    Path0107?: PrimitiveOverrideProps<IconProps>;
    Profile41639?: PrimitiveOverrideProps<ViewProps>;
    Shape41640?: PrimitiveOverrideProps<IconProps>;
    Path41641?: PrimitiveOverrideProps<IconProps>;
    Path41642?: PrimitiveOverrideProps<IconProps>;
    Path41643?: PrimitiveOverrideProps<IconProps>;
    Path41644?: PrimitiveOverrideProps<IconProps>;
    Path41645?: PrimitiveOverrideProps<IconProps>;
    Path41646?: PrimitiveOverrideProps<IconProps>;
    Path41647?: PrimitiveOverrideProps<IconProps>;
    Mess?: PrimitiveOverrideProps<ViewProps>;
    Shape41218?: PrimitiveOverrideProps<IconProps>;
    Path41219?: PrimitiveOverrideProps<IconProps>;
    Path41220?: PrimitiveOverrideProps<IconProps>;
    Oval41224?: PrimitiveOverrideProps<IconProps>;
    "Group 17"?: PrimitiveOverrideProps<ViewProps>;
    "ion:logo-octocat"?: PrimitiveOverrideProps<ViewProps>;
    Vector354109?: PrimitiveOverrideProps<IconProps>;
    Vector354110?: PrimitiveOverrideProps<IconProps>;
    Photo2?: PrimitiveOverrideProps<ViewProps>;
    Discover?: PrimitiveOverrideProps<TextProps>;
    "Status Bar Dark"?: PrimitiveOverrideProps<ViewProps>;
    Buttons?: PrimitiveOverrideProps<ViewProps>;
    Close?: PrimitiveOverrideProps<ViewProps>;
    Oval4632?: PrimitiveOverrideProps<IconProps>;
    multiply?: PrimitiveOverrideProps<ViewProps>;
    Path4634?: PrimitiveOverrideProps<IconProps>;
    Lightning?: PrimitiveOverrideProps<ViewProps>;
    Oval4644?: PrimitiveOverrideProps<IconProps>;
    Like?: PrimitiveOverrideProps<ViewProps>;
    like?: PrimitiveOverrideProps<ViewProps>;
    Path4650?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DatingpageProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: DatingpageOverridesProps | undefined | null;
}>;
export default function Datingpage(props: DatingpageProps): React.ReactElement;
