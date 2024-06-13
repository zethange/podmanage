import path from "node:path";
import got from "got";

export async function GET(
  request: Request,
  { params: { route } }: { params: { route: string[] } }
) {
  const searchParams = new URL(request.url).searchParams;
  const url = "http://d/" + route.join("/") + "?" + searchParams.toString();
  try {
    const res = await got(
      "http://unix:/run/user/1000/podman/podman.sock:" + url,
      {
        method: "GET",
        enableUnixSockets: true,
        throwHttpErrors: false,
      }
    );

    try {
      const body = JSON.parse(res.body);
      return Response.json(body, { status: res.statusCode });
    } catch (e) {
      return Response.json(res.body, { status: res.statusCode });
    }
  } catch (e) {
    return Response.json((e as Error).message);
  }
}

export async function DELETE(
  request: Request,
  { params: { route } }: { params: { route: string[] } }
) {
  const searchParams = new URL(request.url).searchParams;
  const url = "http://d/" + route.join("/") + "?" + searchParams.toString();
  try {
    const res = await got(
      "http://unix:/run/user/1000/podman/podman.sock:" + url,
      {
        method: "DELETE",
        enableUnixSockets: true,
        throwHttpErrors: false,
      }
    );

    try {
      const body = JSON.parse(res.body);
      return Response.json(body, { status: res.statusCode });
    } catch (e) {
      return Response.json(res.body, { status: res.statusCode });
    }
  } catch (e) {
    return Response.json((e as Error).message);
  }
}

export async function POST(
  request: Request,
  { params: { route } }: { params: { route: string[] } }
) {
  const body = await request.text();

  const searchParams = new URL(request.url).searchParams;
  const url = "http://d/" + route.join("/") + "?" + searchParams.toString();
  try {
    const res = await got(
      "http://unix:/run/user/1000/podman/podman.sock:" + url,
      {
        method: "POST",
        body: body,
        enableUnixSockets: true,
        throwHttpErrors: false,
      }
    );

    try {
      const body = JSON.parse(res.body);
      return Response.json(body, { status: res.statusCode });
    } catch (e) {
      return Response.json(res.body, { status: res.statusCode });
    }
  } catch (e) {
    return Response.json((e as Error).message);
  }
}
