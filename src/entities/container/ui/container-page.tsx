"use client";

import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { containersApi } from "~/shared/lib/api";
import { ContainerActions } from "./container-page/actions";
import { toast } from "sonner";

export type ContainerPageProps = {
  id: string;
};

export const ContainerPage: FC<ContainerPageProps> = ({ id }) => {
  const { data: container } = useQuery({
    queryKey: [`container-${id}`],
    queryFn: () => containersApi.containerInspectLibpod({ name: id }),
    throwOnError(error, query) {
      toast("Container not found");
      location.replace("/dashboard");
      return true;
    },
  });

  return (
    <div className="grid gap-2">
      <h1 className="text-xl">
        Container details: {container?.name}, status: {container?.state?.status}
      </h1>
      <ContainerActions id={id} />
    </div>
  );
};
