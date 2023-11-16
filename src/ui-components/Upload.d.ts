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
export declare type UploadOverridesProps = {
    Upload?: PrimitiveOverrideProps<ViewProps>;
    "Photo Page Pink Theme"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Group 15"?: PrimitiveOverrideProps<ViewProps>;
    Oval5808?: PrimitiveOverrideProps<IconProps>;
    Oval5809?: PrimitiveOverrideProps<IconProps>;
    "Group 1458010"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 28358011"?: PrimitiveOverrideProps<IconProps>;
    "Group 16"?: PrimitiveOverrideProps<ViewProps>;
    Oval58013?: PrimitiveOverrideProps<IconProps>;
    Oval58014?: PrimitiveOverrideProps<IconProps>;
    "Group 1458015"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 28358016"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Queen Selena"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Add a comment"?: PrimitiveOverrideProps<TextProps>;
    "Isolated closeup shot of a gray cat looking into the camera"?: PrimitiveOverrideProps<ImageProps>;
    "age 2 yrs"?: PrimitiveOverrideProps<TextProps>;
    Vector58023?: PrimitiveOverrideProps<IconProps>;
    "ph:plus-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector58025?: PrimitiveOverrideProps<IconProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Stories Line"?: PrimitiveOverrideProps<ViewProps>;
    "Profile + Stories"?: PrimitiveOverrideProps<ViewProps>;
    Oval58029?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories Copy"?: PrimitiveOverrideProps<ViewProps>;
    Oval58031?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories Copy 2"?: PrimitiveOverrideProps<ViewProps>;
    Oval58033?: PrimitiveOverrideProps<IconProps>;
    "photo-1518829579054-df4bf5d42da758034"?: PrimitiveOverrideProps<ViewProps>;
    Mask?: PrimitiveOverrideProps<IconProps>;
    "photo-1518829579054-df4bf5d42da758036"?: PrimitiveOverrideProps<IconProps>;
    "Profile + Stories Copy 3"?: PrimitiveOverrideProps<ViewProps>;
    Oval58038?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Text Copy"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 2"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 3"?: PrimitiveOverrideProps<TextProps>;
    "Text Copy 4"?: PrimitiveOverrideProps<TextProps>;
    "Add Button"?: PrimitiveOverrideProps<ViewProps>;
    Oval58045?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle58047?: PrimitiveOverrideProps<ViewProps>;
    Rectangle58048?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 1"?: PrimitiveOverrideProps<ImageProps>;
    "lucide:upload"?: PrimitiveOverrideProps<ViewProps>;
    Vector58053?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 33"?: PrimitiveOverrideProps<ViewProps>;
    Upload58055?: PrimitiveOverrideProps<TextProps>;
    "Show your cat photo"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UploadProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadOverridesProps | undefined | null;
}>;
export default function Upload(props: UploadProps): React.ReactElement;
