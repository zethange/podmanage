"use client";

import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { containersApi } from "~/shared/lib/api";
import { Button } from "~/shared/ui/button";

export type ContainerPageProps = {
  id: string;
};

export const ContainerPage: FC<ContainerPageProps> = ({ id }) => {
  const { data: container } = useQuery({
    queryKey: [`container-${id}`],
    queryFn: () => containersApi.containerInspectLibpod({ name: id }),
  });

  return (
    <div className="grid gap-2">
      <span>{container?.name}</span>

      <div className="border rounded-md">
        <div className="text-xl p-2">Actions</div>
        <hr />
        <div className="p-2 flex gap-1">
          <Button variant='default'>Start</Button>
          <Button variant='outline'>Stop</Button>
          <Button variant='destructive'>Delete</Button>
        </div>
      </div>
    </div>
  );
};
