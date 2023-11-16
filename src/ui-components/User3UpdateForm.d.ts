/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type User3UpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User3UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User3UpdateFormOverridesProps = {
    User3UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User3UpdateFormProps = React.PropsWithChildren<{
    overrides?: User3UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user3?: any;
    onSubmit?: (fields: User3UpdateFormInputValues) => User3UpdateFormInputValues;
    onSuccess?: (fields: User3UpdateFormInputValues) => void;
    onError?: (fields: User3UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User3UpdateFormInputValues) => User3UpdateFormInputValues;
    onValidate?: User3UpdateFormValidationValues;
} & React.CSSProperties>;
export default function User3UpdateForm(props: User3UpdateFormProps): React.ReactElement;
