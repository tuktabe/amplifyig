/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getMatch } from "../graphql/queries";
import { updateMatch } from "../graphql/mutations";
export default function MatchUpdateForm(props) {
  const {
    id: idProp,
    match: matchModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Userid1: "",
    Userid2: "",
  };
  const [Userid1, setUserid1] = React.useState(initialValues.Userid1);
  const [Userid2, setUserid2] = React.useState(initialValues.Userid2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = matchRecord
      ? { ...initialValues, ...matchRecord }
      : initialValues;
    setUserid1(cleanValues.Userid1);
    setUserid2(cleanValues.Userid2);
    setErrors({});
  };
  const [matchRecord, setMatchRecord] = React.useState(matchModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getMatch.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMatch
        : matchModelProp;
      setMatchRecord(record);
    };
    queryData();
  }, [idProp, matchModelProp]);
  React.useEffect(resetStateValues, [matchRecord]);
  const validations = {
    Userid1: [{ type: "Required" }],
    Userid2: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Userid1,
          Userid2: Userid2 ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateMatch.replaceAll("__typename", ""),
            variables: {
              input: {
                id: matchRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MatchUpdateForm")}
      {...rest}
    >
      <TextField
        label="Userid1"
        isRequired={true}
        isReadOnly={false}
        value={Userid1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Userid1: value,
              Userid2,
            };
            const result = onChange(modelFields);
            value = result?.Userid1 ?? value;
          }
          if (errors.Userid1?.hasError) {
            runValidationTasks("Userid1", value);
          }
          setUserid1(value);
        }}
        onBlur={() => runValidationTasks("Userid1", Userid1)}
        errorMessage={errors.Userid1?.errorMessage}
        hasError={errors.Userid1?.hasError}
        {...getOverrideProps(overrides, "Userid1")}
      ></TextField>
      <TextField
        label="Userid2"
        isRequired={false}
        isReadOnly={false}
        value={Userid2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Userid1,
              Userid2: value,
            };
            const result = onChange(modelFields);
            value = result?.Userid2 ?? value;
          }
          if (errors.Userid2?.hasError) {
            runValidationTasks("Userid2", value);
          }
          setUserid2(value);
        }}
        onBlur={() => runValidationTasks("Userid2", Userid2)}
        errorMessage={errors.Userid2?.errorMessage}
        hasError={errors.Userid2?.hasError}
        {...getOverrideProps(overrides, "Userid2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || matchModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || matchModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
