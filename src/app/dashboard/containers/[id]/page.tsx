import { ContainerPage } from "~/entities/container";

export default function ({ params }: { params: { id: string } }) {
  return <div><ContainerPage id={params.id} /></div>
}
