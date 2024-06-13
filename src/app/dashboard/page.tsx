import { redirect } from "next/navigation";
import { Logout, logoutAction } from "~/features/auth";
import { getSessionData } from "~/shared/lib";
import { Button } from "~/shared/ui/button";


export default async function () {

  return (
    <main>
      <Button type="submit" variant="outline">
      </Button>
      <Logout />
    </main>
  );
}
