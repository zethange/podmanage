import got from "got";

export async function GET(
  request: Request,
  { params: { route } }: { params: { route: string[] } }
) {
  const res = await got(
    "unix:/var/run/podman/podman.sock:http://d/" + route.join('/'),
    {
      method: "GET",
      enableUnixSockets: true,
      throwHttpErrors: false,
    }
  ).json();

  return Response.json(res);
}
