// コマンドライン引数からurl request
const url = Deno.args[0];
if(url) {
  // request
  const res = await fetch(url);
  const body = new Uint8Array(await res.arrayBuffer());
  await Deno.stdout.write(body);
} else {
  console.log("url: none");
}
