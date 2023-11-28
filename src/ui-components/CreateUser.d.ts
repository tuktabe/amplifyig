/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CreateUserInputValues = {
    name?: string;
    image?: string;
    gender?: string;
    lookingFor?: string;
    bio?: string;
};
export declare type CreateUserValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    lookingFor?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateUserOverridesProps = {
    CreateUserGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    lookingFor?: PrimitiveOverrideProps<SelectFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateUserProps = React.PropsWithChildren<{
    overrides?: CreateUserOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateUserInputValues) => CreateUserInputValues;
    onSuccess?: (fields: CreateUserInputValues) => void;
    onError?: (fields: CreateUserInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateUserInputValues) => CreateUserInputValues;
    onValidate?: CreateUserValidationValues;
} & React.CSSProperties>;
export default function CreateUser(props: CreateUserProps): React.ReactElement;
