/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { Upload1Props } from "./Upload1";
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
export declare type UploadpageOverridesProps = {
    Uploadpage?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30582103"?: PrimitiveOverrideProps<ViewProps>;
    uploadpage?: PrimitiveOverrideProps<ViewProps>;
    upload1?: Upload1Props;
    "Rectangle 30582104"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type UploadpageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadpageOverridesProps | undefined | null;
}>;
export default function Uploadpage(props: UploadpageProps): React.ReactElement;
