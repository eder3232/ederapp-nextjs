"use client";

import TypographyH1 from "@/shared/components/typography/typography-h1";
import TypographyH2 from "@/shared/components/typography/typography-h2";
import TypographyP from "@/shared/components/typography/typography-p";
import React, { use, useLayoutEffect } from "react";
import { IInputReactVertices } from "./interfaces/vertices";
import { IInputReactEdges } from "./interfaces/edges";
import VerticesTable from "./components/table/vertices-table";
import { useSpringStore } from "./controller/springStore";
import EdgesTable from "./components/table/edges-table";
import Save from "@/shared/supabase/save/save-button-client";
import SaveButtonClient from "@/shared/supabase/save/save-button-client";
import { Button } from "@/components/ui/button";
import Errors from "./components/errors";
import Results from "./components/results/resultsx";

const Springs = ({
  initialData,
}: {
  initialData: { vertices: IInputReactVertices[]; edges: IInputReactEdges[] };
}) => {
  const isCalculated = useSpringStore((state) => state.isCalculated);
  const firstCalculate = useSpringStore((state) => state.firstCalculate);

  const config = useSpringStore((state) => state.config);

  const controler_userWantToDefineDOF = useSpringStore(
    (state) => state.controller_userWantToDefineDOF,
  );

  const controller_userWantToDefineDOF = useSpringStore(
    (state) => state.controller_userWantToDefineDOF,
  );

  const setInitialData = useSpringStore((state) => state.setInitialData);

  const calculate = useSpringStore((state) => state.calculate);

  useLayoutEffect(() => {
    setInitialData(initialData);
    firstCalculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative flex flex-col gap-4 overflow-x-hidden">
      <TypographyH1>Resortes</TypographyH1>

      {/* <SaveButtonClient /> */}

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

        <div className="flex items-center gap-2">
          <span>¿Los restringidos van arriba?</span>

          <input
            type="checkbox"
            className="h-5 w-5 accent-primary"
            checked={config.isRestrictedAbove}
            onChange={controller_userWantToDefineDOF}
          />
        </div>

        <Button className="w-fit" onClick={calculate}>
          Calcular
        </Button>

        <Errors />

        {isCalculated && <Results />}
      </div>
    </div>
  );
};

export default Springs;
