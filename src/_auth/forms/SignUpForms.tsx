import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  Formfield,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupValidation } from "@/lib/validation";

const formSchema = z.object({ username: z.string().min(2).max(50) });

const SignUpForms = () => {
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name:'',
      username: "",
      email:'',
      password:'',
    },
  });

  function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log(values);
  }

  return (
    
      <Form {...form}>
<div className="sm:w-420 flex-center flex-col">
  <img src="/assets/images/logo.svg" alt="logo"/>
</div>

      <div className="sm;w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is my public display name.
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
            />
          </Form>
    
  )

export default SignUpForms;
