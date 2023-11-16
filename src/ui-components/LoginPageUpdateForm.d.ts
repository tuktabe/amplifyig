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
export declare type LoginPageUpdateFormInputValues = {
    title?: string;
    image?: string;
};
export declare type LoginPageUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageUpdateFormOverridesProps = {
    LoginPageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginPageUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoginPageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    loginPage?: any;
    onSubmit?: (fields: LoginPageUpdateFormInputValues) => LoginPageUpdateFormInputValues;
    onSuccess?: (fields: LoginPageUpdateFormInputValues) => void;
    onError?: (fields: LoginPageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginPageUpdateFormInputValues) => LoginPageUpdateFormInputValues;
    onValidate?: LoginPageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoginPageUpdateForm(props: LoginPageUpdateFormProps): React.ReactElement;
