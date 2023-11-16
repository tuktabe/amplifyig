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
export declare type User5CreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User5CreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User5CreateFormOverridesProps = {
    User5CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User5CreateFormProps = React.PropsWithChildren<{
    overrides?: User5CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: User5CreateFormInputValues) => User5CreateFormInputValues;
    onSuccess?: (fields: User5CreateFormInputValues) => void;
    onError?: (fields: User5CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User5CreateFormInputValues) => User5CreateFormInputValues;
    onValidate?: User5CreateFormValidationValues;
} & React.CSSProperties>;
export default function User5CreateForm(props: User5CreateFormProps): React.ReactElement;
