import { Input } from "@/components/ui/input";
import TypographyH1 from "@/shared/components/typography/typography-h1";
import TypographyH2 from "@/shared/components/typography/typography-h2";
import TypographyP from "@/shared/components/typography/typography-p";
import React from "react";
import { IInputReactVertices } from "./interfaces/vertices";
import { IInputReactEdges } from "./interfaces/edges";
import VerticesTable from "./components/table/vertices-table";

interface Props {
  initialData: { vertices: IInputReactVertices[]; edges: IInputReactEdges[] };
}

const Springs = ({
  initialData,
}: {
  initialData: { vertices: IInputReactVertices[]; edges: IInputReactEdges[] };
}) => {
  return (
    <div className="relative overflow-x-hidden">
      <TypographyH1>Resortes</TypographyH1>

      <TypographyP>Ingresa los datos:</TypographyP>

      <div className="flex flex-col gap-y-4">
        <TypographyH2>Nudos:</TypographyH2>

        <div className="flex items-start gap-2">
          <span className="">¿Desea ingresar los grados de libertad?</span>

          <Input type="checkbox" className="h-5 w-5" />
        </div>

        <VerticesTable />
      </div>
      <TypographyH2>Resortes:</TypographyH2>
    </div>
  );
};

export default Springs;
