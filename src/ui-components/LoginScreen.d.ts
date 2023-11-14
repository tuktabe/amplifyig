/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LoginScreenOverridesProps = {
    LoginScreen?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Sign in"?: PrimitiveOverrideProps<TextProps>;
    filter?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginScreenProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginScreenOverridesProps | undefined | null;
}>;
export default function LoginScreen(props: LoginScreenProps): React.ReactElement;
