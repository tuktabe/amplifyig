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
export declare type ProfilefixOverridesProps = {
    Profilefix?: PrimitiveOverrideProps<ViewProps>;
    "Profile page"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Isolated closeup shot of a gray cat looking into the camera391673"?: PrimitiveOverrideProps<ImageProps>;
    Vector391674?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector391676?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "user-icon 4"?: PrimitiveOverrideProps<ViewProps>;
    "Isolated closeup shot of a gray cat looking into the camera391683"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391684"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391685"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391686"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391687"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391688"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391689"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391690"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391691"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera391692"?: PrimitiveOverrideProps<ImageProps>;
    "Group 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31391694"?: PrimitiveOverrideProps<ViewProps>;
    "Ask to Date"?: PrimitiveOverrideProps<TextProps>;
    "Group 20"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31391697"?: PrimitiveOverrideProps<ViewProps>;
    "Super Like"?: PrimitiveOverrideProps<TextProps>;
    "Group 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31391700"?: PrimitiveOverrideProps<ViewProps>;
    Message?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfilefixProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: any;
} & {
    overrides?: ProfilefixOverridesProps | undefined | null;
}>;
export default function Profilefix(props: ProfilefixProps): React.ReactElement;
