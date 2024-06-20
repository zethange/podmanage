"use client";

import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { containersApi } from "~/shared/lib/api";
import { ContainerActions } from "./container-page/actions";
import { toast } from "sonner";
import { ContainerInfo } from "./container-page/info";
import { ContainerDetails } from "./container-page/details";

export type ContainerPageProps = {
  id: string;
};

export const ContainerPage: FC<ContainerPageProps> = ({ id }) => {
  const { data: container } = useQuery({
    queryKey: [`container-${id}`],
    queryFn: () => containersApi.containerInspectLibpod({ name: id }),
    throwOnError(_error, _query) {
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
      <ContainerInfo container={container} />
      <ContainerDetails container={container} />
    </div>
  );
};
