import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Camera } from "lucide-react";
import { CoursesContext } from "../../../context";
import { Toaster } from "@/components/ui/sonner";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(7).max(50),
  email: z.string().email("No es algun email."),
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  zip_code: z.string().min(2).max(50),
  birth_date: z.string().min(2).max(50),
});

const SpaceIllustration = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 bg-primary rounded-3xl overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
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

export const SignUp = () => {
  const { userSignUp } = React.useContext(CoursesContext);
  const [step, setStep] = React.useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      country: "",
      address: "",
      city: "",
      zip_code: "",
      birth_date: "",
    },
  });

  const submit = () => {
    setStep(2);
  };

  const onSubmit = async (data) => {
    await userSignUp(
      data.email,
      data.password,
      data.username,
      data.first_name,
      data.last_name,
      data.address,
      data.country,
      data.city,
      data.zip_code,
      data.birth_date
    );
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
              Ya tienes una cuenta?{" "}
              <Link
                to="/auth/sign-in"
                className={buttonVariants({ variant: "link" })}
              >
                Iniciar sesión
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
                  <div
                    className={`${step === 1 ? "block" : "hidden"} space-y-8`}
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de usuario</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre de usuario"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electronico</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="chris@example.com"
                              type="email"
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
                          <FormLabel>Contraseña</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu contraseña"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button onClick={submit} type="button" className="w-full">
                      Siguiente
                    </Button>
                  </div>
                  <div
                    className={`${step === 2 ? "block" : "hidden"} space-y-8`}
                  >
                    <Button onClick={() => setStep(1)} type="button">Ir atras</Button>
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>País</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dirección</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ciudad</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Código postal</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="birth_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fecha de nacimiento</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Enviar
                    </Button>
                  </div>
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
