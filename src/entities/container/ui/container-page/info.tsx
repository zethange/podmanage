import { FC } from "react";
import { InspectContainerData } from "~/shared/lib/api";
import { Table, TableBody, TableCell, TableRow } from "~/shared/ui/table";

export const ContainerInfo: FC<{
  container: InspectContainerData | undefined;
}> = ({ container }) => {
  return (
    <div className="border rounded-md">
      <div className="text-xl p-2">Info</div>
      <hr />
      <div className="p-2 flex gap-1">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ID</TableCell>
              <TableCell>{container?.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Status</TableCell>
              <TableCell className="capitalize">
                {container?.state?.status}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Created at</TableCell>
              <TableCell>
                {new Date(container?.created!).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Started at</TableCell>
              <TableCell>
                {new Date(container?.state?.startedAt!).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
