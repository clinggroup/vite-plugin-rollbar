import { Plugin } from "vite";

type Options = {
  accessToken: string;
  version: string;
  baseUrl: string;
  silent?: boolean;
  rollbarEndpoint?: string;
  ignoreUploadErrors?: boolean;
  base?: string;
  outputDir?: string;
};

declare function plugin(options: Options): Plugin;

export { plugin as default };
