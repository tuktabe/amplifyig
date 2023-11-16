/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImgbgProps } from "./Imgbg";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type SigninOverridesProps = {
    Signin?: PrimitiveOverrideProps<ViewProps>;
    grouplogin?: PrimitiveOverrideProps<ViewProps>;
    "Group 22"?: PrimitiveOverrideProps<ViewProps>;
    imgbg?: ImgbgProps;
} & EscapeHatchProps;
export declare type SigninProps = React.PropsWithChildren<Partial<ViewProps> & {
    login?: any;
} & {
    overrides?: SigninOverridesProps | undefined | null;
}>;
export default function Signin(props: SigninProps): React.ReactElement;
