import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NotebookText } from "lucide-react";

export const CourseListing = ({
  company,
  title,
  location,
  time,
  salary,
  type,
  tags,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="mb-4 cursor-pointer ring-1 border-primary">
          <CardContent className="flex items-center p-4">
            <Avatar className="h-10 w-10 mr-4">
              <AvatarImage
                src={`/logos/${company.toLowerCase()}.png`}
                alt={company}
              />
              <AvatarFallback className="bg-primary">
                {company[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <h3 className="font-semibold">
                {company}—{title}
              </h3>
              <p className="text-sm">
                {salary}, {type}, {location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm">{time}</p>
              <div className="mt-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="mr-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="rounded-xl">
        <DialogHeader>
          <div className="mt-4 rounded-xl w-full max-h-32 h-32 bg-gradient-to-br from-primary via-warning to-secondary"></div>
          <DialogTitle className="border-0">
            Nombre de curso
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-y-2">
            <div className="flex flex-col">
              <span>Creado por: Miguel Salazar</span>
              <span>Día del curso: 24/04/2024</span>
              <span>Estudiantes <NotebookText className="inline w-4 h-4" /> : 0/125</span>
            </div>
            <div className="flex gap-x-2">
              <Badge className="w-fit">Software Development</Badge>
              <Badge className="w-fit">Node.js</Badge>
              <Badge className="w-fit">React</Badge>
            </div>
          </DialogDescription>
        </DialogHeader>

        <hr />

        <div className="flex w-full h-40 flex-col items-start justify-start gap-4 overflow-y-scroll max-h-40">
         <h4>Acerca del curso</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptates debitis dolor doloremque? Nulla saepe at sint debitis unde ab ducimus quas soluta pariatur beatae accusantium repudiandae quo delectus animi temporibus laborum error eos, iusto tempora, repellat quaerat ea. Dicta ratione quibusdam possimus quam, perspiciatis laboriosam ab tempora eum aspernatur, autem iste. Quaerat possimus molestiae maiores sint aut perspiciatis voluptas consectetur, ipsam et cupiditate adipisci animi optio. Repudiandae saepe maiores quibusdam, atque, optio corporis blanditiis harum doloremque omnis facere illum, repellat voluptates. Qui, repellendus pariatur doloribus reprehenderit unde nisi dolores molestias suscipit accusamus repellat dolorum quo ullam modi mollitia deleniti!</p>
        </div>

        <hr />
        <div className="flex w-full h-fit flex-col items-start justify-start gap-4">
          <h4>Entradas</h4>
          <Card className="w-full cursor-pointer transition-all delay-150 duration-500 outline-none hover:ring-1 hover:ring-primary hover:shadow-primary hover:shadow-md">
            <CardContent className="p-4 h-fit flex flex-col items-start justify-start">
              <div className="flex items-center justify-between w-full">
                <h3>Becado</h3>
                <h4 className="text-primary">$9.99</h4>
              </div>

              <p className="text-sm">Obtienes beneficios extras para el curso.</p>
            </CardContent>
          </Card>
          <Card className="w-full cursor-pointer transition-all delay-150 duration-500 outline-none hover:ring-1 hover:ring-primary hover:shadow-primary hover:shadow-md">
            <CardContent className="p-4 h-fit flex flex-col items-start justify-start">
              <div className="flex items-center justify-between w-full">
                <h3>Estudiante</h3>
                <h4 className="text-primary">$7.99</h4>
              </div>

              <p className="text-sm">Entrada asegurada para el curso.</p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
