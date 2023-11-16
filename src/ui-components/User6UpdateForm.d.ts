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
export declare type User6UpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User6UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User6UpdateFormOverridesProps = {
    User6UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User6UpdateFormProps = React.PropsWithChildren<{
    overrides?: User6UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user6?: any;
    onSubmit?: (fields: User6UpdateFormInputValues) => User6UpdateFormInputValues;
    onSuccess?: (fields: User6UpdateFormInputValues) => void;
    onError?: (fields: User6UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User6UpdateFormInputValues) => User6UpdateFormInputValues;
    onValidate?: User6UpdateFormValidationValues;
} & React.CSSProperties>;
export default function User6UpdateForm(props: User6UpdateFormProps): React.ReactElement;
