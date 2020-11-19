import chai from "chai";
import { dirname, filename } from "./index.mjs";

import { dirname as pathDirname } from "path";
import { fileURLToPath } from "url";
const { expect } = chai;

describe("mjs-dirname", function () {
  it("dirname works", function () {
    expect(dirname(import.meta.url)).to.eql(
      pathDirname(fileURLToPath(import.meta.url))
    );
  });

  it("filename works", function () {
    expect(filename(import.meta.url)).to.eql(fileURLToPath(import.meta.url));
  });
});
