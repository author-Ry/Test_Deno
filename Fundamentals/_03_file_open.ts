import { copy } from "https://deno.land/std@0.164.0/streams/conversion.ts";

// コマンドライン引数からファイルopen
const filenames = Deno.args;
if(filenames.length > 0) {
  for (const filename of filenames) {
    const file = await Deno.open(filename);
    await copy(file, Deno.stdout);
    file.close();
  }
} else {
  console.log("file: none");
}

// *file access
// --allow-read
