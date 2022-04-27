import moment from 'moment';

export function Comment({ comment }) {
    return (
        <div>
            <p>{comment.author}</p>
            <span>{moment.unix(comment.created).fromNow()}</span>
            <p>{comment.body}</p>
            {comment.replies &&
                comment.replies.data.children.map(reply => {
                    return <Comment comment={reply.data} />
                })}
        </div>
    )
}