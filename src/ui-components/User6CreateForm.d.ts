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
export declare type User6CreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User6CreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User6CreateFormOverridesProps = {
    User6CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User6CreateFormProps = React.PropsWithChildren<{
    overrides?: User6CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: User6CreateFormInputValues) => User6CreateFormInputValues;
    onSuccess?: (fields: User6CreateFormInputValues) => void;
    onError?: (fields: User6CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User6CreateFormInputValues) => User6CreateFormInputValues;
    onValidate?: User6CreateFormValidationValues;
} & React.CSSProperties>;
export default function User6CreateForm(props: User6CreateFormProps): React.ReactElement;
