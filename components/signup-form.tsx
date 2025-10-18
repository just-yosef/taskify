"use client";

import { signupSchema } from "@/app/(features)/(general)/(signin)/(schemas)";
import { SignupFormValues } from "@/app/(features)/(general)/(signin)/(schemas)/signup.schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/app/(features)/(general)/(signin)/_components";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/app/(features)/(users)/(service)";
export function SignupForm({ switchMode }: { switchMode: () => void }) {
  const { handleSubmit, register, formState, getValues } =
    useForm<SignupFormValues>({
      resolver: zodResolver(signupSchema),
    });
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
  });
  console.log(getValues());

  const { confirmPassword, email, fullName, password, role } = formState.errors;
  const onSubmit = (data: SignupFormValues) => mutate(data);
  return (
    <Card className="border-teal-500">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription className="text-xs">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="gap-3">
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                {...register("fullName", { required: true })}
                type="text"
              />
              {fullName && <ErrorMessage error={fullName} />}
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
              {email && <ErrorMessage error={email} />}
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
              {password && <ErrorMessage error={password} />}
            </Field>
            <Field>
              <select
                id="role"
                {...register("role", { required: true })}
                className="p-2 border-teal rounded-lg"
              >
                <FieldLabel htmlFor="role">Role</FieldLabel>
                <option className="p-2" value="freelancer">
                  Freelancer
                </option>
                <option className="p-2" value="client">
                  Client
                </option>
              </select>
              {role && <ErrorMessage error={role} />}
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                {...register("confirmPassword", { required: true })}
              />
              {confirmPassword && <ErrorMessage error={confirmPassword} />}
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={isPending} variant="teal">
                  Create Account
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account?
                  <span
                    className="underline cursor-pointer"
                    onClick={switchMode}
                  >
                    Sign in
                  </span>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
