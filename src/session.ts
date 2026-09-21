export interface PackageInfo {
  name?: string;
  version?: string;
  description?: string;
  type?: string;
}

export const session = {
  projectRoot: "",
  packageInfo: {} as PackageInfo,
};
