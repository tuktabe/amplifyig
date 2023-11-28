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
export declare type MatchCreateFormInputValues = {
    Userid1?: string;
    Userid2?: string;
};
export declare type MatchCreateFormValidationValues = {
    Userid1?: ValidationFunction<string>;
    Userid2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchCreateFormOverridesProps = {
    MatchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Userid1?: PrimitiveOverrideProps<TextFieldProps>;
    Userid2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchCreateFormProps = React.PropsWithChildren<{
    overrides?: MatchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MatchCreateFormInputValues) => MatchCreateFormInputValues;
    onSuccess?: (fields: MatchCreateFormInputValues) => void;
    onError?: (fields: MatchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchCreateFormInputValues) => MatchCreateFormInputValues;
    onValidate?: MatchCreateFormValidationValues;
} & React.CSSProperties>;
export default function MatchCreateForm(props: MatchCreateFormProps): React.ReactElement;
