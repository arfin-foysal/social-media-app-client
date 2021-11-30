import { MoreVert } from "@mui/icons-material"
import "./post.css"
import {Users} from '../../dummyData'
import { useState } from "react"
export default function Post({ post }) {
   const [like, setlike] = useState(post.like)
    const [islike, setislike] = useState(false)
    const likeHandeler = () => {
        setlike(islike ? like - 1 : like + 1)
        setislike(!islike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={ Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{ Users.filter((u)=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{ post.date}</span>
                    </div>
                    <div className="postTopRight">
                       <MoreVert/> 
                    </div>
            </div>
                <div className="postCenter">
                    <span className="postText">{ post?.desc}</span>
                    <img className="postImg" src={ post.photo }alt="" />
            </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" onClick={likeHandeler} className="likeIcon" />
                        <img src="assets/heart.png" alt="" onClick={likeHandeler}  className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCpmmentText">{post.comment} Comments</span>
                    </div>
                </div>
                </div>
        </div>
    )
}
