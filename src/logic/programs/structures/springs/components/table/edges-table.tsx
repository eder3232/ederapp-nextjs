import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useSpringStore } from "../../controller/springStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomSelect from "../utils/custom-select";

const EdgesTable = () => {
  const reactEdges = useSpringStore((state) => state.reactEdges);

  const reactVertices = useSpringStore((state) => state.reactVertices);

  const edges_onChange = useSpringStore((state) => state.edges_onChange);
  const edges_onChange2 = useSpringStore((state) => state.edges_onChange2);
  const edges_onAddNewRow = useSpringStore((state) => state.edges_onAddNewRow);
  const edges_onDeleteRow = useSpringStore((state) => state.edges_onDeleteRow);

  return (
    <div>
      <Table className="w-auto table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Add</TableHead>
            <TableHead className="text-center">Remove</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">From</TableHead>
            <TableHead className="text-center">To</TableHead>
            <TableHead className="text-center">K</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {reactEdges.map((edge, index) => (
            <TableRow key={edge.id}>
              <TableCell>
                <Button
                  className="text-xl font-bold"
                  onClick={() => edges_onAddNewRow(index)}
                >
                  +
                </Button>
              </TableCell>

              <TableCell>
                <Button
                  className="text-xl font-bold"
                  onClick={() => edges_onDeleteRow(index)}
                >
                  -
                </Button>
              </TableCell>

              <TableCell>
                <Input
                  type="text"
                  name={`name-${index}`}
                  value={edge.name}
                  onChange={(e) => edges_onChange(e)}
                  className="w-24 text-right"
                />
              </TableCell>

              <TableCell>
                <CustomSelect
                  edge={edge}
                  onChange={edges_onChange2}
                  identifier="from"
                  index={index}
                  collection={reactVertices}
                />
              </TableCell>
              <TableCell>
                <CustomSelect
                  edge={edge}
                  onChange={edges_onChange2}
                  identifier="to"
                  index={index}
                  collection={reactVertices}
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  name={`k-${index}`}
                  value={edge.k}
                  onChange={(e) => edges_onChange(e)}
                  className="w-24 text-right"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        <pre>
          <code>{JSON.stringify(reactEdges, null, 2)}</code>
        </pre>
      }
    </div>
  );
};

export default EdgesTable;
