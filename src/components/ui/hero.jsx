import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge color="bg-pink-100 text-pink-800">DEJA DE VER PREGRABADO</Badge>
          
          <h1 className="mt-6">
            Cursos totalmente en VIVO
            <br />
            Para diseñadores, programadores, creadores de contenidos, etc...
          </h1>
          
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge>100% EN VIVO</Badge>
            <Badge>CURSOS DE CALIDAD</Badge>
            <Badge>PRECIOS MODESTOS</Badge>
          </div>
          
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Empieza registrandote con nosotros para inscribirte o postular tu curso.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/auth/sign-up" className={buttonVariants({ variant: 'secondary'})}>
              Registrarse
            </Link>
            <Link to="/about" className={buttonVariants({ variant: 'default'})}>
              Acerca de Akademia
            </Link>
          </div>
        </div>
      </div>
    )
  }