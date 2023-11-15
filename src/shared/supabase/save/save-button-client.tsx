"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { TfiSave } from "react-icons/tfi";

import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { is } from "date-fns/locale";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  data: any;
  calculation_name: string;
  calculation_type: string;
}

const SaveButtonClient = ({}: Props) => {
  const [error, setError] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const router = useRouter();

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getSession = async () => {
      const { data: supabaseSession } = await supabase.auth.getSession();
      const user_id = supabaseSession?.session?.user?.id;

      if (!user_id) {
        setIsUserLogged(false);
      } else {
        setIsUserLogged(true);
      }
    };
    getSession();
  }, [supabase.auth]);

  const handleSubmit = async () => {
    const { data: supabaseSession } = await supabase.auth.getSession();
    const user_id = supabaseSession?.session?.user?.id;

    if (!user_id) {
      setError(true);
    }
  };

  return (
    <div className="flex w-48 flex-col gap-2">
      {/* <AlertDialog open={true}>hostia!</AlertDialog> */}

      <Button
        className="w-fit text-xl font-bold"
        onClick={handleSubmit}
        disabled={!isUserLogged}
      >
        <TfiSave className="mr-4 h-6 w-6" />
        Guardar
      </Button>

      {!isUserLogged && (
        <Alert>
          <AlertTitle>Hey!</AlertTitle>
          <AlertDescription>
            Para poder guardar, debes iniciar sesión!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default SaveButtonClient;
