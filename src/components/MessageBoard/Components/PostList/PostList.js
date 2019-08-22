import React  from 'react'
import PostPreview from '../PostPreview/PostPreview'

export default function PostList(props){
return (
<section>
     {props.posts.map(post=><PostPreview post={post} key={post.id}></PostPreview>)}
</section>
)
}