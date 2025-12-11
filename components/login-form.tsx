"use client";
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
import { PendingFormLabel } from "@/app/(shared)/_components";
import { loginAction } from "@/app/(features)/(general)/(signin)/(actions)";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Info } from "lucide-react";
interface Prpos {
  switchMode: () => void;
  className?: string;
}
export function LoginForm({ switchMode, className }: Prpos) {
  const [isPending, transition] = useTransition();
  const router = useRouter();
  async function handleLoginAction(formData: FormData) {
    transition(async () => {
      try {
        const data = await loginAction(formData);
        localStorage.setItem("userId", data?.id!);
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    });
  }
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h3 className="p-3 font-[rubicMedium] bg-orange-100 rounded-lg border-orange-500 border-2 text-orange-500 font-semibold flex items-center gap-2">
        <Info size={18} /> Use This Default Values Below For Testing
      </h3>
      <Card className="border-teal">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* @ts-ignore */}
          <form action={handleLoginAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={"ahmed.mostafa@1example.com"}
                />
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
                  name="password"
                  defaultValue={"MyStrongPass123"}
                  required
                />
              </Field>
              <Field>
                <Button type="submit" variant="teal" disabled={isPending}>
                  <PendingFormLabel isSubmitting={isPending} action="Login" />
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?
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
