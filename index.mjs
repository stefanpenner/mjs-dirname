import { dirname as pathDirname } from "path";
import { fileURLToPath } from "url";

export function dirname(importMetaUrl) {
  return pathDirname(fileURLToPath(importMetaUrl));
}

export function filename(importMetaUrl) {
  return fileURLToPath(importMetaUrl);
}
