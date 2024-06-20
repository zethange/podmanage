import Link from "next/link";
import { FC } from "react";
import { InspectContainerData } from "~/shared/lib/api";
import { Button } from "~/shared/ui/button";
import { Table, TableBody, TableCell, TableRow } from "~/shared/ui/table";

export const ContainerDetails: FC<{
  container: InspectContainerData | undefined;
}> = ({ container }) => {
  return (
    <div className="border rounded-md">
      <div className="text-xl p-2">Details</div>
      <hr />
      <div className="p-2 flex gap-1">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Image</TableCell>
              <TableCell>
                <Link href={`/dashboard/images/${container?.image}`}>
                  <Button className="p-0" variant="link">
                    {container?.imageName}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CMD</TableCell>
              <TableCell>{container?.config?.cmd?.join(" ")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Enviroment</TableCell>
              <TableCell>
                {container?.config?.env?.map((env) => (
                  <div>{env}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Create command</TableCell>
              <TableCell>
                {container?.config?.createCommand?.join(" ")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Network settings</TableCell>
              <TableCell>
                {Object.entries(container?.networkSettings?.ports ?? {}).map(
                  ([containerPort, host]) => (
                    <div>
                      {/** @ts-ignore */}
                      {containerPort} {"->"} {host[0].HostIp}:{host[0].HostPort}
                    </div>
                  )
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
