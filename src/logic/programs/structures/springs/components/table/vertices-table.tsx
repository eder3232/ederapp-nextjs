import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import { useSpringStore } from "../../controller/springStore";

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
            <TableHead className="text-center">Add</TableHead>
            <TableHead className="text-center">Remove</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">Fuerza</TableHead>
            <TableHead className="text-center">Desplazamiento</TableHead>
            <TableHead className="text-center">Restringido</TableHead>
            <TableHead
              className={cn("text-center", {
                hidden: !config.userWantToDefineDOF,
              })}
            >
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

              <TableCell className="text-center">
                <input
                  type="checkbox"
                  name={`isRestricted-${index}`}
                  checked={vertex.isRestricted}
                  onChange={(e) => vertices_onClickCheckbox(e)}
                  className="h-5 w-5 accent-primary"
                />
              </TableCell>

              <TableCell>
                <Input
                  type="text"
                  name={`userDOF-${index}`}
                  value={vertex.userDOF}
                  onChange={(e) => vertices_onChange(e)}
                  className={cn("w-24 text-right", {
                    hidden: !config.userWantToDefineDOF,
                  })}
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
