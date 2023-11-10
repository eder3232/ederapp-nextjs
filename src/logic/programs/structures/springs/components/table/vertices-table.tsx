import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { IInputReactVertices } from "../../interfaces/vertices";
import { useSpringStore } from "../../controller/springStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const VerticesTable = () => {
  const reactVertices = useSpringStore((state) => state.reactVertices);
  const config = useSpringStore((state) => state.config);

  const vertices_onAddNewRow = useSpringStore(
    (state) => state.vertices_onAddNewRow,
  );

  const vertices_onDeleteRow = useSpringStore(
    (state) => state.vertices_onDeleteRow,
  );

  const vertices_onChange = useSpringStore((state) => state.vertices_onChange);

  const vertices_onClickCheckbox = useSpringStore(
    (state) => state.vertices_onClickCheckbox,
  );

  return (
    <div>
      <Table className="w-auto table-auto">
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

        <TableBody>
          {reactVertices.map((vertex, index) => (
            <TableRow key={vertex.id}>
              <TableCell>
                <Button
                  onClick={() => vertices_onAddNewRow(index)}
                  className="text-xl font-bold"
                >
                  +
                </Button>
              </TableCell>

              <TableCell>
                <Button
                  onClick={() => vertices_onDeleteRow(index)}
                  className="text-xl font-bold"
                >
                  -
                </Button>
              </TableCell>

              <TableCell>
                <Input
                  type="text"
                  name={`name-${index}`}
                  value={vertex.name}
                  onChange={(e) => vertices_onChange(e)}
                  className="w-24 text-right"
                />
              </TableCell>

              <TableCell>
                <Input
                  type="text"
                  name={`force-${index}`}
                  value={vertex.force}
                  onChange={(e) => vertices_onChange(e)}
                  className="w-24 text-right"
                />
              </TableCell>

              <TableCell>
                <Input
                  type="text"
                  name={`displacement-${index}`}
                  value={vertex.displacement}
                  onChange={(e) => vertices_onChange(e)}
                  className="w-24 text-right"
                />
              </TableCell>

              <TableCell>
                <input
                  type="checkbox"
                  name={`isRestricted-${index}`}
                  checked={vertex.isRestricted}
                  onChange={(e) => vertices_onClickCheckbox(e)}
                />
              </TableCell>

              <TableCell>
                <Input
                  type="text"
                  name={`userDOF-${index}`}
                  value={vertex.userDOF}
                  onChange={(e) => vertices_onChange(e)}
                  className={cn({ hidden: !config.userWantToDefineDOF })}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VerticesTable;
