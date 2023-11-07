"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  session: Session | null;
}

const AuthGoogleButtonClient = ({ session }: Props) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/api/auth/callback` },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex items-center">
      {session === null ? (
        <Button onClick={handleSignIn}>Iniciar sesión</Button>
      ) : (
        // </button>
        // <button onClick={handleSignOut} className="btn btn-primary btn-sm">
        //   Cerrar sesión
        // </button>

        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/profile" passHref legacyBehavior>
              <DropdownMenuItem>Perfil</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Mis calculos</DropdownMenuItem>
            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>

        // <div className="dropdown dropdown-bottom dropdown-end">
        //   <label tabIndex={0} className="btn btn-primary btn-sm">
        //     Cuenta
        //   </label>
        //   <ul
        //     tabIndex={0}
        //     className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 space-y-2 p-2 shadow"
        //   >
        //     <li>
        //       <Link href={"/profile"}>Mi perfil</Link>
        //     </li>
        //     <li>
        //       <Link href={"/my-calculations"}>Mis calculos</Link>
        //     </li>
        //     <li>
        //       <button
        //         onClick={() => handleSignOut()}
        //         className="btn btn-xs btn-warning"
        //       >
        //         Cerrar sesión
        //       </button>
        //     </li>
        //   </ul>
        // </div>
      )}
    </div>
  );
};

export default AuthGoogleButtonClient;
