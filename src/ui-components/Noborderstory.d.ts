/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NoborderstoryOverridesProps = {
    Noborderstory?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 285"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 284"?: PrimitiveOverrideProps<IconProps>;
    uploadpage?: UploadpageProps;
    "Isolated closeup shot of a gray cat looking into the camera594273"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594275"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594276"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594277"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 34"?: PrimitiveOverrideProps<ViewProps>;
    "Add Button"?: PrimitiveOverrideProps<ViewProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle594295?: PrimitiveOverrideProps<ViewProps>;
    Rectangle594296?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NoborderstoryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoborderstoryOverridesProps | undefined | null;
}>;
export default function Noborderstory(props: NoborderstoryProps): React.ReactElement;
