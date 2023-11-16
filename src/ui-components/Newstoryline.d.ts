/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UploadpageProps } from "./Uploadpage";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NewstorylineOverridesProps = {
    Newstoryline?: PrimitiveOverrideProps<ViewProps>;
    noborderstory?: PrimitiveOverrideProps<ViewProps>;
    uploadpage?: UploadpageProps;
    "Isolated closeup shot of a gray cat looking into the camera594416"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594456"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594455"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594417"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera594418"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 34"?: PrimitiveOverrideProps<ViewProps>;
    "Add Button"?: PrimitiveOverrideProps<ViewProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle594423?: PrimitiveOverrideProps<ViewProps>;
    Rectangle594424?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewstorylineProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: NewstorylineOverridesProps | undefined | null;
}>;
export default function Newstoryline(props: NewstorylineProps): React.ReactElement;
