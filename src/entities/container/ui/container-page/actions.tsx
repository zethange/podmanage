"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { toast } from "sonner";
import { queryClient } from "~/app/providers";
import { containersApi } from "~/shared/lib/api";
import { Button } from "~/shared/ui/button";

export const ContainerActions: FC<{ id: string }> = ({ id }) => {
  const { replace } = useRouter();

  const { mutate: start } = useMutation({
    mutationFn: () => containersApi.containerStartLibpod({ name: id }),
    mutationKey: [`container-${id}-start`],
    onSuccess: () => {
      toast("Container started", { closeButton: true });
      queryClient.invalidateQueries({ queryKey: [`container-${id}`] });
    },
  });
  const { mutate: stop } = useMutation({
    mutationFn: () => containersApi.containerStopLibpod({ name: id }),
    mutationKey: [`container-${id}-stop`],
    onSuccess: () => {
      toast("Container successfuly stopped", { closeButton: true });
      queryClient.invalidateQueries({ queryKey: [`container-${id}`] });
    },
  });

  const { mutate: deleteContainer } = useMutation({
    mutationFn: () =>
      containersApi.containerDeleteLibpod({
        name: id,
        force: true,
      }),
    mutationKey: [`container-${id}-delete`],
    onSuccess: () => {
      toast("Container removed");
      replace("/dashboard");
    },
  });

  return (
    <div className="border rounded-md">
      <div className="text-xl p-2">Actions</div>
      <hr />
      <div className="p-2 flex gap-1">
        <Button variant="default" onClick={() => start()}>
          Start
        </Button>
        <Button variant="outline" onClick={() => stop()}>
          Stop
        </Button>
        <Button variant="destructive" onClick={() => deleteContainer()}>
          Delete
        </Button>
      </div>
    </div>
  );
};
