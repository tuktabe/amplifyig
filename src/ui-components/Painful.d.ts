/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ModelcatProps } from "./Modelcat";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PainfulOverridesProps = {
    Painful?: PrimitiveOverrideProps<ViewProps>;
    modelcat?: ModelcatProps;
    "british-shorthair-kitty-with-monochrome-wall-her 3"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PainfulProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: PainfulOverridesProps | undefined | null;
}>;
export default function Painful(props: PainfulProps): React.ReactElement;
