import fetch, { Request, Response } from "node-fetch";

export abstract class GeckoDriver {
    public static async getLatestVersion(): Promise<string> {
        const url = "https://api.github.com/repos/mozilla/geckodriver/releases/latest";
        const response: Response = await fetch(new Request(url));
        const body: IGetLatestGeckoDriverResponse = await response.json();
        const tagname = body.tag_name;
        const version = tagname.startsWith("v") ? tagname.substr(1, tagname.length) : tagname;
        return version;
    }
}

interface IGetLatestGeckoDriverResponse {
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: string;
    node_id: string;
    tag_name: string;
    target_commitish: string;
    name: string;
    draft: string;
    author: string;
    prerelease: string;
    created_at: string;
    published_at: string;
    assets: string;
    tarball_url: string;
    zipball_url: string;
    body: string;
  }