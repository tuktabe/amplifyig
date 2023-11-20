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
export declare type ProfilepageOverridesProps = {
    Profilepage?: PrimitiveOverrideProps<ViewProps>;
    "Profile page"?: PrimitiveOverrideProps<ViewProps>;
    "Group 15"?: PrimitiveOverrideProps<ViewProps>;
    Oval5761093?: PrimitiveOverrideProps<IconProps>;
    Oval5761094?: PrimitiveOverrideProps<IconProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 283"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Isolated closeup shot of a gray cat looking into the camera5761106"?: PrimitiveOverrideProps<ImageProps>;
    Vector5761108?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector5761110?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "user-icon 4"?: PrimitiveOverrideProps<ViewProps>;
    "Isolated closeup shot of a gray cat looking into the camera57739"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57743"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57744"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57741"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57745"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57747"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57742"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57746"?: PrimitiveOverrideProps<ImageProps>;
    "Isolated closeup shot of a gray cat looking into the camera57748"?: PrimitiveOverrideProps<ImageProps>;
    "Group 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3157736"?: PrimitiveOverrideProps<ViewProps>;
    "Ask to Date"?: PrimitiveOverrideProps<TextProps>;
    "Group 20"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31577120"?: PrimitiveOverrideProps<ViewProps>;
    "Super Like"?: PrimitiveOverrideProps<TextProps>;
    "Group 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31577123"?: PrimitiveOverrideProps<ViewProps>;
    Message?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfilepageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfilepageOverridesProps | undefined | null;
}>;
export default function Profilepage(props: ProfilepageProps): React.ReactElement;
