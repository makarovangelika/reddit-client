import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Card } from './Card';

export function Subreddit() {
    let { subreddit } = useParams();
    let example = {
        subredditName: subreddit,
        posts: [
            {
                title: 'Zambian student arrested in Russia on ‘Nazism’ charges for twerking at war memorial',
                rating: 1200,
                comments: 71
            },
            {
                title: 'US defense secretary being regularly briefed on any potential Russian nuclear moves, officials say',
                rating: 7900,
                comments: 456
            }
        ]
    }
    let [subredditList, setSubredditList] = useState(example);
    return (
        subredditList.posts.map(post => {
            return <Card key={post.title} post={post} subreddit={subredditList.subredditName} />
        })
    );
}