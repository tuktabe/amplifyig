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
export declare type User3CreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User3CreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User3CreateFormOverridesProps = {
    User3CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User3CreateFormProps = React.PropsWithChildren<{
    overrides?: User3CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: User3CreateFormInputValues) => User3CreateFormInputValues;
    onSuccess?: (fields: User3CreateFormInputValues) => void;
    onError?: (fields: User3CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User3CreateFormInputValues) => User3CreateFormInputValues;
    onValidate?: User3CreateFormValidationValues;
} & React.CSSProperties>;
export default function User3CreateForm(props: User3CreateFormProps): React.ReactElement;
