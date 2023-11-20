/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type TuktafeedfixOverridesProps = {
    Tuktafeedfix?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
    "Isolated closeup shot of a gray cat looking into the camera608572"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera608611"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera608606"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera608607"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera608609"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera608608"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera608610"?: PrimitiveOverrideProps<ImageProps>;
    "age 2 yrs"?: PrimitiveOverrideProps<TextProps>;
    Vector608574?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector608576?: PrimitiveOverrideProps<IconProps>;
    "Isolated closeup shot of a gray cat looking into the camera608603"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TuktafeedfixProps = React.PropsWithChildren<Partial<ViewProps> & {
    post?: any;
} & {
    overrides?: TuktafeedfixOverridesProps | undefined | null;
}>;
export default function Tuktafeedfix(props: TuktafeedfixProps): React.ReactElement;
