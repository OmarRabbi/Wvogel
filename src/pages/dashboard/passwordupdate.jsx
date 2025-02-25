import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordSchema } from "@/schemas/password.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Passwordupdate = () => {
  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      newPassword: "",
    },
  });

  return (
    <>
      <div className="border px-6 md:px-8 w-full max-w-full md:w-full h-auto  bg-white flex flex-col justify-center gap-6  md:py-8">
        <div className="space-y-5 text-center md:text-left">
          <h2 className="font-semibold text-3xl leading-normal text-black">
            Email Updates
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(Passwordupdate)}
            className="space-y-4"
          >
            <div className=" max-w-full">
              {" "}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        className="p-7"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" max-w-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="p-7"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-lg" variant={"destructive"} type="submit">
              Save Changes
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Passwordupdate;
