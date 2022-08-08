declare module "yelp-fusion" {
    export interface YelpClient {
        search(params: any): Promise<any>;
    }
    export const client: YelpClient;
    export const creatClient: (apiKey: string) => YelpClient;
    export const search: (client: YelpClient, params: any) => Promise<any>;
}