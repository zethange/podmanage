import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Button } from "~/shared/ui/button";

export default (({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-[100dvh]">
      <div className="p-4 border-r max-w-[250px] bg-stone-50">
        <img
          src="https://podman.io/assets/images/podman-logo-orig-595af17fb326f4b7cadfa3be142bf810.png"
          alt="Podman logo"
        />
        <div className="grid gap-1">
          <Link href="/dashboard">
            <Button variant="outline" className="w-full justify-start">
              Containers
            </Button>
          </Link>
          <Link href="/dashboard/images">
            <Button variant="outline" className="w-full justify-start">
              Images
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="outline" className="w-full justify-start">
              Settings
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4 w-full">{children}</div>
    </div>
  );
}) as FC<PropsWithChildren>;
