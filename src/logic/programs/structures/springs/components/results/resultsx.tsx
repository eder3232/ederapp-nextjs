import React from "react";
import TypographyH2 from "@/shared/components/typography/typography-h2";
import TypographyH3 from "@/shared/components/typography/typography-h3";
import TypographyP from "@/shared/components/typography/typography-p";
import { useSpringStore } from "../../controller/springStore";

const Results = () => {
  const orderDOF = useSpringStore((state) => state.res.orderDOF);
  const locals = useSpringStore((state) => state.res.locals);
  const config = useSpringStore((state) => state.config);
  const kGlobalHistory = useSpringStore(
    (state) => state.res.utils.kGlobalHistory,
  );

  const errors = useSpringStore((state) => state.errors);
  const isEmptyVerticesErrors = errors.vertices.length === 0;
  const isEmptyEdgesErrors = errors.edges.length === 0;
  const isEmptyLogicErrors = errors.logic.length === 0;
  const isEmptyErrors =
    isEmptyVerticesErrors && isEmptyEdgesErrors && isEmptyLogicErrors;
  return (
    <div className="flex flex-col gap-4">
      <TypographyH2>Resultados</TypographyH2>

      <div className="flex flex-col gap-4">
        <TypographyH3>
          Definimos el orden de los grados de libertad:
        </TypographyH3>

        <TypographyP>
          Los nudos restringidos se ordenarán ascendentemente de acuerdo al
          grado de libertad ingresado, al igual que los no restringidos.
        </TypographyP>
      </div>
    </div>
  );
};

export default Results;
