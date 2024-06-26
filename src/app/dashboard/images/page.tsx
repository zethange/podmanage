import { ImageList } from "~/entities/image";

export default function () {
  return (
    <main className="grid gap-2">
      <span className="text-3xl text-stone-500">Images</span>
      <ImageList />
    </main>
  );
}
