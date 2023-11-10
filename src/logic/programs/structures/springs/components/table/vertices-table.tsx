import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { IInputReactVertices } from "../../interfaces/vertices";
import { useSpringStore } from "../../controller/springStore";
import { cn } from "@/lib/utils";

interface Props {
  reactVerticesData: IInputReactVertices[];
}

const VerticesTable = ({ reactVerticesData }: Props) => {
  const config = useSpringStore((state) => state.config);

  console.log(reactVerticesData);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Add</TableHead>
            <TableHead>Remove</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Fuerza</TableHead>
            <TableHead>Desplazamiento</TableHead>
            <TableHead>Restringido</TableHead>
            <TableHead className={cn({ hidden: !config.userWantToDefineDOF })}>
              Grado de libertad
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default VerticesTable;
