/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Discover16Props } from "./Discover16";
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
export declare type Discover16CollectionOverridesProps = {
    Discover16Collection?: PrimitiveOverrideProps<CollectionProps>;
    Discover16?: Discover16Props;
} & EscapeHatchProps;
export declare type Discover16CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Discover16Props;
} & {
    overrides?: Discover16CollectionOverridesProps | undefined | null;
}>;
export default function Discover16Collection(props: Discover16CollectionProps): React.ReactElement;
