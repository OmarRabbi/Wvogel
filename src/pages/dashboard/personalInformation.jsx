import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { personalInfoSchema } from "@/schemas/editinfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUploadIcon } from "lucide-react";
import { ImagePlus } from "lucide-react";
import { useCallback } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

const PersonalInformation = () => {
  const [serviceImagePreview, setServiceImagePreview] = useState("");
  const form = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullname: "",
      email: "",
      dob: "",
      phone: "",
      address: "",
    },
  });
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setServiceImagePreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("service_images.0", acceptedFiles[0]);
        form.clearErrors("service_images.0");
      } catch {
        setServiceImagePreview(null);
        form.resetField("service_images.0");
      }
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: {
        "image/png": [],
        "image/jpg": [],
        "image/jpeg": [],
      },
    });

  return (
    <>
      <div className="border px-6 md:px-8 w-full max-w-full md:w-full h-auto  bg-white flex flex-col justify-center gap-6  md:py-8">
        <div className="space-y-5 text-center md:text-left">
          <h2 className="font-semibold text-3xl leading-normal text-black">
            Personal Information
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(PersonalInformation)}
            className="space-y-4"
          >
            <div className="flex flex-row gap-5">
              <div className="flex-1 max-w-lg">
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
              <div className="flex-1 max-w-lg">
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
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex-1 max-w-lg">
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
              <div className="flex-1 max-w-lg">
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
            </div>
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="grid w-full gap-1.5">
                        <Textarea
                          placeholder="Type your message here."
                          id="message"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="service_images.0"
                render={() => (
                  <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                    <div className="max-w-sm flex-1">
                      <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                        Photo
                      </h1>
                    </div>
                    <FormControl>
                      <div
                        {...getRootProps()}
                        className="flex-1 w-full @2xl:max-w-sm flex gap-[18px] items-center"
                      >
                        <Avatar
                          className={cn("size-[80px] cursor-pointer", {
                            "ring-2 ring-primary ring-offset-2":
                              !!serviceImagePreview,
                          })}
                        >
                          <AvatarImage
                            src={serviceImagePreview}
                            alt="Uploaded image"
                          />
                          <AvatarFallback className="bg-muted border border-dashed">
                            <ImagePlus
                              className={`size-[40px] ${
                                serviceImagePreview ? "hidden" : "block"
                              }`}
                            />
                          </AvatarFallback>
                        </Avatar>
                        <Input {...getInputProps()} type="file" />
                        <div>
                          <Button
                            variant="outline"
                            type="button"
                            className="bg-transparent hover:bg-primary/10 rounded-full"
                          >
                            <CloudUploadIcon />
                            Upload profile picture
                          </Button>

                          {fileRejections.length !== 0 ? (
                            <FormMessage>
                              <p className="mt-[13px] text-sm">
                                Image must be less than 1MB and of type png,
                                jpg, or jpeg
                              </p>
                            </FormMessage>
                          ) : isDragActive ? (
                            <p className="text-muted-foreground mt-[13px] text-sm">
                              Drop the image!
                            </p>
                          ) : (
                            <p className="text-muted-foreground mt-[13px] text-sm">
                              At least 256x256 PNG or JPG file
                            </p>
                          )}
                        </div>
                      </div>
                    </FormControl>
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

export default PersonalInformation;
