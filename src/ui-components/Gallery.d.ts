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
export declare type GalleryOverridesProps = {
    "214432821"?: PrimitiveOverrideProps<TextProps>;
    "214432835"?: PrimitiveOverrideProps<TextProps>;
    Gallery?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Menu?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432801?: PrimitiveOverrideProps<ViewProps>;
    "Home Indicator"?: PrimitiveOverrideProps<ViewProps>;
    Mess?: PrimitiveOverrideProps<ViewProps>;
    Shape4432804?: PrimitiveOverrideProps<IconProps>;
    Path4432805?: PrimitiveOverrideProps<IconProps>;
    Path4432806?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 35"?: PrimitiveOverrideProps<ImageProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Card 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14432814"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
    "4-25 1"?: PrimitiveOverrideProps<ImageProps>;
    Info4432817?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432818?: PrimitiveOverrideProps<ViewProps>;
    age4432819?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432820?: PrimitiveOverrideProps<ViewProps>;
    female4432822?: PrimitiveOverrideProps<ViewProps>;
    Shape4432823?: PrimitiveOverrideProps<IconProps>;
    Path4432824?: PrimitiveOverrideProps<IconProps>;
    Path4432825?: PrimitiveOverrideProps<IconProps>;
    City4432826?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Card 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14432829"?: PrimitiveOverrideProps<ViewProps>;
    Photo?: PrimitiveOverrideProps<ImageProps>;
    Info4432831?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432832?: PrimitiveOverrideProps<ViewProps>;
    age4432833?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432834?: PrimitiveOverrideProps<ViewProps>;
    female4432836?: PrimitiveOverrideProps<ViewProps>;
    Shape4432837?: PrimitiveOverrideProps<IconProps>;
    Path4432838?: PrimitiveOverrideProps<IconProps>;
    Path4432839?: PrimitiveOverrideProps<IconProps>;
    City4432840?: PrimitiveOverrideProps<TextProps>;
    "Status Bar Dark"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 38"?: PrimitiveOverrideProps<ImageProps>;
    "Group 23"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 37"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 39"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 42"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 40"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 43"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 41"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 44"?: PrimitiveOverrideProps<ImageProps>;
    Tukta?: PrimitiveOverrideProps<TextProps>;
    "Photo Gallery"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GalleryProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: any;
} & {
    overrides?: GalleryOverridesProps | undefined | null;
}>;
export default function Gallery(props: GalleryProps): React.ReactElement;
