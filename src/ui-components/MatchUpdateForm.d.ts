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
export declare type MatchUpdateFormInputValues = {
    Userid1?: string;
    Userid2?: string;
};
export declare type MatchUpdateFormValidationValues = {
    Userid1?: ValidationFunction<string>;
    Userid2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchUpdateFormOverridesProps = {
    MatchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Userid1?: PrimitiveOverrideProps<TextFieldProps>;
    Userid2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchUpdateFormProps = React.PropsWithChildren<{
    overrides?: MatchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    match?: any;
    onSubmit?: (fields: MatchUpdateFormInputValues) => MatchUpdateFormInputValues;
    onSuccess?: (fields: MatchUpdateFormInputValues) => void;
    onError?: (fields: MatchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchUpdateFormInputValues) => MatchUpdateFormInputValues;
    onValidate?: MatchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MatchUpdateForm(props: MatchUpdateFormProps): React.ReactElement;
