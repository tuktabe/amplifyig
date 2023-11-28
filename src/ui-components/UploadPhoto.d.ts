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
export declare type UploadPhotoOverridesProps = {
    "214432747"?: PrimitiveOverrideProps<TextProps>;
    "214432761"?: PrimitiveOverrideProps<TextProps>;
    UploadPhoto?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Menu?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432727?: PrimitiveOverrideProps<ViewProps>;
    "Home Indicator"?: PrimitiveOverrideProps<ViewProps>;
    Mess?: PrimitiveOverrideProps<ViewProps>;
    Shape4432730?: PrimitiveOverrideProps<IconProps>;
    Path4432731?: PrimitiveOverrideProps<IconProps>;
    Path4432732?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 35"?: PrimitiveOverrideProps<ImageProps>;
    Vector4491450?: PrimitiveOverrideProps<IconProps>;
    "Card 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14432740"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
    "4-25 1"?: PrimitiveOverrideProps<ImageProps>;
    Info4432743?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432744?: PrimitiveOverrideProps<ViewProps>;
    age4432745?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432746?: PrimitiveOverrideProps<ViewProps>;
    female4432748?: PrimitiveOverrideProps<ViewProps>;
    Shape4432749?: PrimitiveOverrideProps<IconProps>;
    Path4432750?: PrimitiveOverrideProps<IconProps>;
    Path4432751?: PrimitiveOverrideProps<IconProps>;
    City4432752?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Card 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14432755"?: PrimitiveOverrideProps<ViewProps>;
    Photo?: PrimitiveOverrideProps<ImageProps>;
    Info4432757?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432758?: PrimitiveOverrideProps<ViewProps>;
    age4432759?: PrimitiveOverrideProps<ViewProps>;
    Rectangle4432760?: PrimitiveOverrideProps<ViewProps>;
    female4432762?: PrimitiveOverrideProps<ViewProps>;
    Shape4432763?: PrimitiveOverrideProps<IconProps>;
    Path4432764?: PrimitiveOverrideProps<IconProps>;
    Path4432765?: PrimitiveOverrideProps<IconProps>;
    City4432766?: PrimitiveOverrideProps<TextProps>;
    Discover?: PrimitiveOverrideProps<TextProps>;
    "Status Bar Dark"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 33"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 34"?: PrimitiveOverrideProps<ViewProps>;
    "UPLOAD YOUR CAT PHOTO"?: PrimitiveOverrideProps<TextProps>;
    "ion:arrow-up-circle"?: PrimitiveOverrideProps<ViewProps>;
    Vector4432773?: PrimitiveOverrideProps<IconProps>;
    "ion:cloud-upload"?: PrimitiveOverrideProps<ViewProps>;
    Vector4432775?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type UploadPhotoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadPhotoOverridesProps | undefined | null;
}>;
export default function UploadPhoto(props: UploadPhotoProps): React.ReactElement;
