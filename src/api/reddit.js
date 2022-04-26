const url = 'https://www.reddit.com';

export const fetchSubredditPosts = async (subreddit) => {
    const response = await fetch(`${url}/r/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map(post => post.data);
}

export const fetchPost = async (postId) => {
    const response = await fetch(`${url}/comments/${postId}.json`);
    const json = await response.json();
    return json;
}