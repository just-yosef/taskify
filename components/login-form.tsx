import { cn } from "@/lib/utils";
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
import { login } from "@/app/(features)/(users)/(service)";
import { useMutation } from "@tanstack/react-query";
import { SigninInput } from "@/app/(features)/(general)/types";
import { ErrorMessage } from "@/app/(features)/(general)/(signin)/_components";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/(features)/(general)/(signin)/(schemas)";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { PendingFormLabel, Toast } from "@/app/(shared)/_components";
import { redirect } from "next/navigation";

export function LoginForm({
  switchMode,
  className,
}: {
  switchMode: () => void;
  className?: string;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninInput>({
    resolver: zodResolver(loginSchema),
  });
  const { mutate, isPending } = useMutation({ mutationFn: login });
  const onSubmit = (data: SigninInput) =>
    mutate(data, {
      onSuccess(data) {
        toast.custom(() => <Toast status="success" message={data.message!} />);
        redirect("/dashboard");
      },
      onError(error) {
        toast.custom(() => (
          <Toast
            status="error"
            message={
              ((error as AxiosError).response?.data as { error: string }).error
            }
          />
        ));
      },
    });
  const { email, password } = errors;
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card className="border-teal">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" {...register("email")} />
                {email && <ErrorMessage error={email} />}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  required
                />
                {password && <ErrorMessage error={password} />}
              </Field>
              <Field>
                <Button type="submit" variant="teal" disabled={isPending}>
                  <PendingFormLabel isSubmitting={isPending} action="Login" />
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={switchMode}
                  >
                    Sign up
                  </span>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
