import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="mb-4">404 NOT FOUND</h1>
      <h2>Akademia.</h2>
      <h3>Oops!</h3>
      <p className="mt-2">
        No podemos encontrar lo que buscar, por favor ve al inicio.
      </p>
      <Link to={'/'} className={`mt-8 ${buttonVariants({ variant: "ghost" })}`}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Ve al inicio
      </Link>
    </div>
  );
};
