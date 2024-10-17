import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { Earth } from "lucide-react";
import { Stamp } from "lucide-react";
import { CoursesContext } from "../../context";

const Navbar = () => {
  const { user, userSignOut } = React.useContext(CoursesContext);

  return (
    <header className="sticky top-0 left-0 w-full h-fit bg-background/60 backdrop-blur-md z-50">
      <div className="relative container mx-auto w-full max-h-32 h-32 flex items-center justify-between">
        <h2 className="border-b-0">Akademia.</h2>

        <div className="flex items-center gap-x-2">
          {!user ? (
            <>
              <Link
                to={"/auth/sign-in"}
                className={buttonVariants({ variant: "outline" })}
              >
                Iniciar sesión
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/"}
                className={`${buttonVariants({ variant: "link" })}`}
              >
                Home
              </Link>

              <Dialog>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarFallback>
                        {user?.user_metadata?.first_name[0]}
                        {user?.user_metadata?.last_name[0]}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      {user?.user_metadata?.first_name}{" "}
                      {user?.user_metadata?.last_name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={"/app"}>Cursos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={"/pricing"}>Premium</Link>
                    </DropdownMenuItem>
                    <DialogTrigger asChild>
                      <DropdownMenuItem>Postea tu curso 🎓</DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem>Configuración</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={userSignOut}>
                      Cerrar sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className="rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="border-0">
                      Postea tu curso con nosotros
                    </DialogTitle>
                    <DialogDescription>
                      Vas por buen camino posteando tu curso con nosotros.
                      Contamos con varios beneficios para la visibilidad de tu
                      curso y agendar todo en calendar.
                    </DialogDescription>
                  </DialogHeader>

                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="grid sm:grid-cols-3 grid-cols-1 h-full w-full gap-4 p-0">
                      <div className="w-full col-span-1 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-col h-full p-4 text-center">
                        <span>
                          <Users width={24} height={24} />
                        </span>
                        <h4>30k usuarios.</h4>
                      </div>
                      <div className="w-full col-span-1 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-col h-full p-4 text-center">
                        <span>
                          <Earth width={24} height={24} />
                        </span>
                        <h4>Internacional</h4>
                      </div>
                      <div className="w-full col-span-1 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-col h-full p-4 text-center">
                        <span>
                          <Stamp width={24} height={24} />
                        </span>
                        <h4>100% Real</h4>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex w-full h-fit flex-col items-start justify-start gap-4">
                    <Card className="w-full cursor-pointer transition-all delay-150 duration-500 outline-none hover:ring-1 hover:ring-primary hover:shadow-primary hover:shadow-md">
                      <CardContent className="p-4 h-fit flex flex-col items-start justify-start">
                        <div className="flex items-center justify-between w-full">
                          <h3>Curso online + Streaming</h3>
                          <h4 className="text-primary">$69.99</h4>
                        </div>

                        <p className="text-sm">
                          Visible hasta el día del curso. Máximo de 50 personas.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="w-full cursor-pointer transition-all delay-150 duration-500 outline-none hover:ring-1 hover:ring-primary hover:shadow-primary hover:shadow-md">
                      <CardContent className="p-4 h-fit flex flex-col items-start justify-start">
                        <div className="flex items-center justify-between w-full">
                          <h3>Curso + Streaming + Extended Students</h3>
                          <h4 className="text-primary">$99.99</h4>
                        </div>

                        <p className="text-sm">
                          Visible hasta el día del curso. Máximo de 100
                          personas.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
