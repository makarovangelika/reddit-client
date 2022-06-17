import * as fs from 'node:fs';
import path from 'path';

const subredditsListResponse =
    JSON.parse(fs.readFileSync(path.resolve(__dirname, 'subredditsListResponse.json')));
const subredditPostsResponse =
    JSON.parse(fs.readFileSync(path.resolve(__dirname, 'subredditPostsResponse.json')));
const postResponse =
    JSON.parse(fs.readFileSync(path.resolve(__dirname, 'postResponse.json')));
const searchResultsResponse =
    JSON.parse(fs.readFileSync(path.resolve(__dirname, 'searchResultsResponse.json')));

export default async function mockFetch(url) {
    switch (url) {
        case "https://www.reddit.com/subreddits.json" : {
            return {
                ok: true,
                status: 200,
                json: async () => subredditsListResponse
            }
        }
        case "https://www.reddit.com/r/popular.json" : {
            return {
                ok: true,
                status: 200,
                json: async () => subredditPostsResponse
            }
        }
        case "https://www.reddit.com/comments/vdczrm.json" : {
            return {
                ok: true,
                status: 200,
                json: async () => postResponse
            }
        }
        case "https://www.reddit.com/search.json?q=news" : {
            return {
                ok: true,
                status: 200,
                json: async () => searchResultsResponse
            }
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}