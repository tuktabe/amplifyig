/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BackhurtProps } from "./Backhurt";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type BackhurtCollectionOverridesProps = {
    BackhurtCollection?: PrimitiveOverrideProps<CollectionProps>;
    Backhurt?: BackhurtProps;
} & EscapeHatchProps;
export declare type BackhurtCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => BackhurtProps;
} & {
    overrides?: BackhurtCollectionOverridesProps | undefined | null;
}>;
export default function BackhurtCollection(props: BackhurtCollectionProps): React.ReactElement;
