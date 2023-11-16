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
export declare type User2CreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User2CreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User2CreateFormOverridesProps = {
    User2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User2CreateFormProps = React.PropsWithChildren<{
    overrides?: User2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: User2CreateFormInputValues) => User2CreateFormInputValues;
    onSuccess?: (fields: User2CreateFormInputValues) => void;
    onError?: (fields: User2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User2CreateFormInputValues) => User2CreateFormInputValues;
    onValidate?: User2CreateFormValidationValues;
} & React.CSSProperties>;
export default function User2CreateForm(props: User2CreateFormProps): React.ReactElement;
