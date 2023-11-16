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
export declare type User5UpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User5UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User5UpdateFormOverridesProps = {
    User5UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User5UpdateFormProps = React.PropsWithChildren<{
    overrides?: User5UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user5?: any;
    onSubmit?: (fields: User5UpdateFormInputValues) => User5UpdateFormInputValues;
    onSuccess?: (fields: User5UpdateFormInputValues) => void;
    onError?: (fields: User5UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User5UpdateFormInputValues) => User5UpdateFormInputValues;
    onValidate?: User5UpdateFormValidationValues;
} & React.CSSProperties>;
export default function User5UpdateForm(props: User5UpdateFormProps): React.ReactElement;
