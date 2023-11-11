"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { TfiSave } from "react-icons/tfi";

import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { set } from "date-fns";
import { AlertDialog } from "@/components/ui/alert-dialog";

interface Props {
  data: any;
  calculation_name: string;
  calculation_type: string;
}

const SaveButtonClient = ({}: Props) => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSubmit = async () => {
    const { data: supabaseSession } = await supabase.auth.getSession();
    const user_id = supabaseSession?.session?.user?.id;

    if (!user_id) {
      setError(true);
    }
  };

  return (
    <div>
      <AlertDialog open={true}>hostia!</AlertDialog>
      <Button className="w-fit text-xl font-bold" onClick={handleSubmit}>
        <TfiSave className="mr-4 h-6 w-6" />
        Guardar
      </Button>
    </div>
  );
};

export default SaveButtonClient;
