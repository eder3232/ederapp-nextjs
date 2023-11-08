import {
  initialSpringsEdgesData,
  initialSpringsVerticesData,
} from "@/logic/programs/structures/springs/data/data1";
import Springs from "@/logic/programs/structures/springs/springs";
import React from "react";

const Page = () => {
  return (
    <div className="py-4">
      <Springs
        initialData={{
          vertices: initialSpringsVerticesData,
          edges: initialSpringsEdgesData,
        }}
      />
    </div>
  );
};

export default Page;
