import React from "react";
import { StyleSheet, View } from "react-native";
import {
  TextInput as PaperTextInput,
  Text,
  useTheme,
} from "react-native-paper";
import { Controller } from "react-hook-form";
import { InputFieldWithValidation } from "@/types/InputFields";

export const TextInput: React.FC<InputFieldWithValidation> = ({
  placeholder,
  label,
  style,
  errorMessage,
  control,
  name,
  ...props
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <PaperTextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={[styles.input, style]}
            label={label}
            mode="outlined"
            outlineStyle={[
              styles.outline,
              {
                borderColor: errorMessage
                  ? theme.colors.error
                  : theme.colors.primary,
              },
            ]}
            {...props}
          />
        )}
        name={name}
      />
      {errorMessage && (
        <Text style={{ color: theme.colors.error }}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    height: 50,
  },
  outline: {
    borderRadius: 50,
  },

  error: {},
});
