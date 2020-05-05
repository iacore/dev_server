import type { DirMetadata } from "./types.ts";

import { join } from "https://deno.land/std@v1.0.0-rc1/path/mod.ts";
const { readDir } = Deno;

export async function resolveDir(p: string): Promise<DirMetadata> {
  const m: DirMetadata = {};
  for await (const entry of readDir(p)) {
    m[entry.name] = entry.isDirectory
      ? await resolveDir(join(p, entry.name))
      : 1;
  }
  return m;
}

export function debounce<T extends unknown[]>(
  cb: (...args: T) => void,
  ms: number,
) {
  let timer: number;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, ms);
  };
}
