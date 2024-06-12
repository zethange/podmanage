import { redirect } from "next/navigation";
import { Logout, logoutAction } from "~/features/auth";
import { getSessionData } from "~/shared/lib";
import { Button } from "~/shared/ui/button";

const getUser = async () => {
  const user = await getSessionData();

  if (!user) redirect("/login");
  return user;
};

export default async function () {
  const user = await getUser();

  return (
    <main>
      <Button type="submit" variant="outline">
        {user.username}
      </Button>
      <Logout />
    </main>
  );
}
