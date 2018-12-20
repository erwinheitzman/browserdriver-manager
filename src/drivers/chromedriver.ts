import fetch, { Request, Response } from "node-fetch";

export class ChromeDriver {
    public static async getLatestVersion(): Promise<string> {
        const url = "https://chromedriver.storage.googleapis.com/LATEST_RELEASE";
        const response: Response = await fetch(new Request(url));
        const body: string = await response.text();
        return body;
    }
}
