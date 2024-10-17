import React from "react";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";

export const CoursesContext = React.createContext();

export const CourseProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();

      if (user?.data?.user) {
        setUser(user.data.user);
      } else {
        return;
      }
    };

    getUser();
  }, []);

  const userSignUp = async (
    email,
    password,
    username,
    first_name,
    last_name,
    address,
    country,
    city,
    zip_code,
    birth_date
  ) => {
    const res = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
          first_name: first_name,
          last_name: last_name,
          country: country,
          address: address,
          city: city,
          zip_code: zip_code,
          birth_date: birth_date,
        },
      },
    });

    if (res.error) {
      return toast.error(res.error.message);
    } else {
      return toast.success("Usuario registrado correctamente");
    }
  };

  const userSignIn = async (email, password) => {
    if (user) {
      return toast.error("Ya tienes una sesión iniciada.");
    } else {
      await supabase.auth
        .signInWithPassword({
          email: email,
          password: password,
        })
        .catch(() => {
          return toast.error(
            "Ups hubo un error al iniciar sesión. Verifica tus credenciales o intenta más tarde."
          );
        });

      return toast.success("Has iniciado sesión correctamente");
    }
  };

  const userSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    return toast.success("Has cerrado sesión correctamente");
  };

  return (
    <CoursesContext.Provider
      value={{
        user,
        setUser,
        userSignUp,
        userSignIn,
        userSignOut,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
