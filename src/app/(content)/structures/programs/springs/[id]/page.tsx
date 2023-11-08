import Springs from "@/logic/programs/structures/springs/springs";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { Database } from "@/shared/types/database";
import TypographyH1 from "@/shared/components/typography/typography-h1";
import Link from "next/link";
import { create } from "domain";
import { IInputReactEdges } from "@/logic/programs/structures/springs/interfaces/edges";
import { IInputReactVertices } from "@/logic/programs/structures/springs/interfaces/vertices";
// import {}

interface IInitialData {
  vertices: IInputReactVertices[];
  edges: IInputReactEdges[];
}

async function getDataFromSupabase(id: string) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  if (!data) {
    redirect("/auth/login");
  }

  const { data: springsData, error } = await supabase
    .from("calculations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return springsData;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/user/not-found");
  }

  const dataFromSupabase = await getDataFromSupabase(id);

  if (dataFromSupabase === null) {
    return (
      <>
        <TypographyH1>No se ha encontrado este cálculo.</TypographyH1>;
        <Link href={"/structures/programs/springs"}>
          Click aquí para volver a la calculadora de resortes.
        </Link>
      </>
    );
  }

  //TODO: Se debe verificar que el id del calculo solicitado es del tipo de calculo de resortes

  const parsedJsonData = dataFromSupabase!.data as unknown;

  const initialData: IInitialData = parsedJsonData as IInitialData;

  return (
    <div>
      <Springs initialData={initialData} />
    </div>
  );
};

export default Page;
