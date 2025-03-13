import { StyleSheet, View } from "react-native";
import React from "react";
import { PrimaryTextLink, SecureTextInput, TextInput } from "@/components/ui";
import { Label } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EmailPolicy, PasswordPolicy } from "@/utils/policies/FieldsPolicies";
import { useTheme } from "react-native-paper";

const LoginFormSchema = z.object({
  email: EmailPolicy,
  password: PasswordPolicy,
});

type LoginFormTypes = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm<LoginFormTypes>({
    mode: "onBlur",
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Label label="Email" />
        <TextInput
          placeholder="Digite seu email"
          control={control}
          name="email"
          errorMessage={errors.email?.message}
        />
      </View>
      <View style={styles.section}>
        <Label label="Password" />
        <SecureTextInput
          control={control}
          name="password"
          placeholder="Digite sua senha"
          errorMessage={errors.password?.message}
        />
      </View>
      <View>
        <PrimaryTextLink
          href={"/(auth)/reset-password"}
          label="Forgot Password?"
          textAlign="right"
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <Button
          mode="contained"
          label="Sign In"
          onPress={handleSubmit(onSubmit)}
          style={{
            backgroundColor: theme.colors.primary,
            opacity: !isValid || isLoading ? 0.6 : 1,
          }}
          disabled={!isValid || isLoading}
        />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 24,
  },

  section: {
    display: "flex",
    gap: 8,
  },
});
