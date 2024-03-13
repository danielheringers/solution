"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  })
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const values = form.getValues();

    const res = await fetch('https://liveops-api.seidorbrasil.com.br/v2/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'password',
        username: values.username,
        password: values.password,
        language: 'br',
        loginType: '2',
      }),
    });
    
    if (res.status === 200) {
      const data = await res.json();
      sessionStorage.setItem('token', data.access_token);
      window.location.href = "/dashboard";// Redireciona para /dashboard
    } else {
      // Mantém na página e pode exibir uma mensagem de erro
      console.error('Authentication failed');
    }
  };
    
  
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="bg-zinc-100 rounded space-y-8 flex flex-col items-center shadow p-6 w-80">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
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
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >Login</Button>
      </form>
    </Form>
  )
}
