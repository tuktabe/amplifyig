/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IsolatedcloseupshotofagraycatlookingintothecameraProps } from "./Isolatedcloseupshotofagraycatlookingintothecamera";
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
export declare type LoginimgOverridesProps = {
    Loginimg?: PrimitiveOverrideProps<ViewProps>;
    newloginform?: PrimitiveOverrideProps<ViewProps>;
    "Isolated closeup shot of a gray cat looking into the camera"?: IsolatedcloseupshotofagraycatlookingintothecameraProps;
    PURR?: PrimitiveOverrideProps<TextProps>;
    "Cat dating App"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15598508"?: PrimitiveOverrideProps<ViewProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15598510"?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<TextProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Sign in"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginimgProps = React.PropsWithChildren<Partial<ViewProps> & {
    login?: any;
} & {
    overrides?: LoginimgOverridesProps | undefined | null;
}>;
export default function Loginimg(props: LoginimgProps): React.ReactElement;
