import React from "react";
import { useSpringStore } from "../controller/springStore";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IoWarningOutline } from "react-icons/io5";

const Errors = () => {
  const errors = useSpringStore((state) => state.errors);
  const isEmptyVerticesErrors = errors.vertices.length === 0;
  const isEmptyEdgesErrors = errors.edges.length === 0;
  const isEmptyLogicErrors = errors.logic.length === 0;
  const isEmptyErrors =
    isEmptyVerticesErrors && isEmptyEdgesErrors && isEmptyLogicErrors;

  return (
    <div className="w-80 lg:w-[700px]">
      {!isEmptyErrors && (
        <div className="flex flex-col gap-2">
          {/* Vertices */}
          {!isEmptyVerticesErrors && (
            <div className="flex flex-col gap-2">
              {errors.vertices.map((error, i) => (
                <Alert variant="destructive" key={i}>
                  <IoWarningOutline className="h-6 w-6" />
                  <AlertTitle>{error.name}</AlertTitle>
                  <AlertDescription>{error.message}</AlertDescription>
                </Alert>
              ))}
            </div>
          )}

          {/* Edges */}
          {!isEmptyEdgesErrors && (
            <div className="flex flex-col gap-2">
              {errors.edges.map((error, i) => (
                <Alert variant="destructive" key={i}>
                  <IoWarningOutline className="h-6 w-6" />
                  <AlertTitle>{error.name}</AlertTitle>
                  <AlertDescription>{error.message}</AlertDescription>
                </Alert>
              ))}
            </div>
          )}

          {/* Logic */}
          {!isEmptyLogicErrors && (
            <div className="flex flex-col gap-2">
              {errors.logic.map((error, i) => (
                <Alert variant="destructive" key={i}>
                  <IoWarningOutline className="h-6 w-6" />
                  <AlertTitle>{error.name}</AlertTitle>
                  <AlertDescription>{error.message}</AlertDescription>
                </Alert>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Errors;
