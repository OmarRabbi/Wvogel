import Locationicon from "@/assets/icons/location-icon";
import PhoneIcon from "@/assets/icons/phone-icon";
import WatchIcon from "@/assets/icons/watch-icon";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-header-foreground text-center  text-[40px] font-light leading-normal">
            Get In Touch With Us
          </h1>
          <p className="text-foreground text-center font-poppins text-base font-normal leading-normal max-w-xl">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex gap-5 mt-20">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div>
                <Locationicon />
              </div>
              <div>
                <h1 className="text-header-foreground font-normal leading-normal">
                  Address
                </h1>
                <p className="text-foreground text-start  text-base font-normal leading-normal max-w-xs">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <PhoneIcon />
              </div>
              <div>
                <h1 className="text-header-foreground font-normal leading-normal">
                  Address
                </h1>
                <p className="text-foreground text-start  text-base font-normal leading-normal max-w-xs">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <WatchIcon />
              </div>
              <div>
                <h1 className="text-header-foreground font-normal leading-normal">
                  Address
                </h1>
                <p className="text-foreground text-start  text-base font-normal leading-normal max-w-xs">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navbg p-20  w-full rounded ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(Contact)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          {...field}
                          className="p-7"
                        />
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

                <div>
                  <Button
                    className="w-full "
                    variant={"destructive"}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
