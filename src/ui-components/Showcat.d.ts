/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { UploadpageProps } from "./Uploadpage";
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
export declare type ShowcatOverridesProps = {
    Showcat?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30585460"?: PrimitiveOverrideProps<ViewProps>;
    uploadpage585461?: PrimitiveOverrideProps<ViewProps>;
    uploadpage585462?: UploadpageProps;
    "Rectangle 30585463"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ShowcatProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ShowcatOverridesProps | undefined | null;
}>;
export default function Showcat(props: ShowcatProps): React.ReactElement;
