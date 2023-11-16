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
export declare type User4UpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User4UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User4UpdateFormOverridesProps = {
    User4UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User4UpdateFormProps = React.PropsWithChildren<{
    overrides?: User4UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user4?: any;
    onSubmit?: (fields: User4UpdateFormInputValues) => User4UpdateFormInputValues;
    onSuccess?: (fields: User4UpdateFormInputValues) => void;
    onError?: (fields: User4UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User4UpdateFormInputValues) => User4UpdateFormInputValues;
    onValidate?: User4UpdateFormValidationValues;
} & React.CSSProperties>;
export default function User4UpdateForm(props: User4UpdateFormProps): React.ReactElement;
