import React from "react";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Camera } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CoursesContext } from "../../../context";
import { Toaster } from "@/components/ui/sonner"

const formSchema = z.object({
  email: z.string().email("No es algun email."),
  password: z.string().min(7).max(50),
});

const SpaceIllustration = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 bg-primary rounded-3xl overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-6xl font-bold">
          Akademia en vivo <Camera className="inline w-16 h-16" />
        </div>
      </div>
      <div className="absolute bottom-10 left-10 text-white text-4xl font-bold">
        Cursos en vivo,
        <br />
        Interacción 100% real.
      </div>
    </div>
  </div>
);

export const SignIn = () => {
  const { userSignIn } = React.useContext(CoursesContext);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    await userSignIn(values.email, values.password);
    console.log(values)
  };

  return (
    <div className="flex min-h-screen">
      <Toaster />
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div className="flex items-center">
              <h1 className="">Akademia.</h1>
            </div>
            <h2 className="mt-6">Comienza ahora</h2>
            <p className="mt-2 text-sm text-gray-600">
              No tienes una cuenta?{" "}
              <Link
                to="/auth/sign-up"
                className={buttonVariants({ variant: "link" })}
              >
                Registraté
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electronico</FormLabel>
                        <FormControl>
                          <Input placeholder="chris@example.com" type="email" {...field} />
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
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu contraseña..." type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Iniciar sesión
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <SpaceIllustration />
      </div>
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <Link
          to={"/"}
          className={`${buttonVariants({ variant: "secondary" })} rounded-full`}
        >
          Ir al inicio <Home className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};
