/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TuktafeedfixProps } from "./Tuktafeedfix";
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
export declare type StorypageCollectionOverridesProps = {
    StorypageCollection?: PrimitiveOverrideProps<CollectionProps>;
    Tuktafeedfix?: TuktafeedfixProps;
} & EscapeHatchProps;
export declare type StorypageCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TuktafeedfixProps;
} & {
    overrides?: StorypageCollectionOverridesProps | undefined | null;
}>;
export default function StorypageCollection(props: StorypageCollectionProps): React.ReactElement;
