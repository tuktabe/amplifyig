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
export declare type User2UpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type User2UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type User2UpdateFormOverridesProps = {
    User2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type User2UpdateFormProps = React.PropsWithChildren<{
    overrides?: User2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user2?: any;
    onSubmit?: (fields: User2UpdateFormInputValues) => User2UpdateFormInputValues;
    onSuccess?: (fields: User2UpdateFormInputValues) => void;
    onError?: (fields: User2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: User2UpdateFormInputValues) => User2UpdateFormInputValues;
    onValidate?: User2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function User2UpdateForm(props: User2UpdateFormProps): React.ReactElement;
