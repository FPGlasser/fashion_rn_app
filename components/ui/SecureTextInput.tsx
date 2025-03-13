import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput as PaperTextInput, useTheme } from "react-native-paper";
import { InputFieldWithValidation } from "@/types/InputFields";
import { Controller } from "react-hook-form";

export const SecureTextInput: React.FC<
  Omit<InputFieldWithValidation, "right">
> = ({ placeholder, label, style, errorMessage, control, name, ...props }) => {
  const theme = useTheme();
  const [secure, setSecure] = useState<boolean>(true);

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
            secureTextEntry={secure}
            right={
              <PaperTextInput.Icon
                icon={!secure ? "eye-outline" : "eye-off-outline"}
                onPress={() => setSecure(!secure)}
              />
            }
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
});
