import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/auth.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function SignIn() {
  const form = useForm({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10  min-h-[calc(100svh-116px)] container mx-auto px-4 md:max-w-[1272px]">
      <div className="border px-6 md:px-8 w-full max-w-md md:w-[460px] h-auto md:h-[500px] lg:h-[550px] bg-white flex flex-col justify-center gap-6 py-8 md:py-0">
        <div className="space-y-5 text-center md:text-left">
          <h2 className="font-semibold text-3xl leading-normal text-black">
            Login
          </h2>
          <p className="text-foreground/70 ">
            <span>Welcome to the log in page </span>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(SignIn)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between mt-2 mb-2">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember Me</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <p className="text-sm font-medium text-gray-600">
                Forgot Password?
              </p>
            </div>

            <div>
              <Button className="w-full " variant={"destructive"} type="submit">
                Sign In
              </Button>
              <p className="text-foreground/70 text-start ">
                <span className="text-xs">New User? </span>
                <Link
                  to="/auth/sign-up"
                  className="font-medium text-black text-sm"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
