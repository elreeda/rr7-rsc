import { useLoaderData } from "react-router";

export async function loader() {
  // const repsone = await fetch(
  //   "",
  //   {
  //   }
  // );
  // const data = await repsone.json();
  //   return data?.assets;
  return (
    <div>
      <h1>hello there</h1>
    </div>
  );
}

export default function Gallery() {
  const assets = useLoaderData();
  console.log(assets);
  return (
    <div>
      <h1>Gallery</h1>
      <div>{assets}</div>
    </div>
  );
}
