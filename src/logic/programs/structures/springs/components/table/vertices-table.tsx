import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const VerticesTable = () => {
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
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default VerticesTable;
