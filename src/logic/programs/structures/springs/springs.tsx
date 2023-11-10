"use client";

import TypographyH1 from "@/shared/components/typography/typography-h1";
import TypographyH2 from "@/shared/components/typography/typography-h2";
import TypographyP from "@/shared/components/typography/typography-p";
import React, { useLayoutEffect } from "react";
import { IInputReactVertices } from "./interfaces/vertices";
import { IInputReactEdges } from "./interfaces/edges";
import VerticesTable from "./components/table/vertices-table";
import { useSpringStore } from "./controller/springStore";
import EdgesTable from "./components/table/edges-table";

const Springs = ({
  initialData,
}: {
  initialData: { vertices: IInputReactVertices[]; edges: IInputReactEdges[] };
}) => {
  const config = useSpringStore((state) => state.config);

  const controler_userWantToDefineDOF = useSpringStore(
    (state) => state.controller_userWantToDefineDOF,
  );
  const setInitialData = useSpringStore((state) => state.setInitialData);

  useLayoutEffect(() => {
    setInitialData(initialData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative overflow-x-hidden">
      <TypographyH1>Resortes</TypographyH1>

      <TypographyP>Ingresa los datos:</TypographyP>

      <div className="flex flex-col gap-y-4">
        <TypographyH2>Nudos:</TypographyH2>

        <div className="flex items-start gap-2">
          <span className="">¿Desea ingresar los grados de libertad?</span>

          <input
            type="checkbox"
            className="h-5 w-5 accent-primary"
            checked={config.userWantToDefineDOF}
            onChange={controler_userWantToDefineDOF}
          />
        </div>

        <VerticesTable />

        <TypographyH2>Resortes:</TypographyH2>

        <EdgesTable />
      </div>
    </div>
  );
};

export default Springs;
