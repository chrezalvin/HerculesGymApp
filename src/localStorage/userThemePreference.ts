import { Storage } from "@ionic/storage";

export type ThemePreference = "light" | "dark";

export function isValidThemePreference(themePreference: unknown): themePreference is ThemePreference {
    return themePreference === "light" || themePreference === "dark";
}

export class UserThemePreference {
  private storage: Storage = new Storage();

  constructor(storage: Storage) {
    this.storage = storage;
  }

  public async getThemePreference(): Promise<ThemePreference | undefined> {
    const themePreference = await this.storage.get("themePreference") as unknown;

    if (isValidThemePreference(themePreference))
        return themePreference;
    else
        return undefined;
  }

  public async setThemePreference(themePreference: ThemePreference): Promise<void> {
    await this.storage.set("themePreference", themePreference);
  }
}

export default UserThemePreference;