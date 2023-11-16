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
export declare type LoginPageCreateFormInputValues = {
    title?: string;
    image?: string;
};
export declare type LoginPageCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageCreateFormOverridesProps = {
    LoginPageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginPageCreateFormProps = React.PropsWithChildren<{
    overrides?: LoginPageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoginPageCreateFormInputValues) => LoginPageCreateFormInputValues;
    onSuccess?: (fields: LoginPageCreateFormInputValues) => void;
    onError?: (fields: LoginPageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginPageCreateFormInputValues) => LoginPageCreateFormInputValues;
    onValidate?: LoginPageCreateFormValidationValues;
} & React.CSSProperties>;
export default function LoginPageCreateForm(props: LoginPageCreateFormProps): React.ReactElement;
