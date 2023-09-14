import React from "react";

const VideoCard = ({info}) => {

    const {snippet,statistics} = info;
    const {thumbnails, channelTitle, title, publishedAt } = snippet;
    
    return(
        <div >
            <img alt="Video" src={thumbnails?.medium.url} />
            <ul>
                <li className="v-title">{title}</li>
                <li className="v-detail">{channelTitle}</li>
                <li className="v-detail">{statistics?.viewCount} <span>{publishedAt}</span></li>
            </ul> 
        </div>
    )


};


//Below AdVideo is Higher Order func , It takes videocard compo and return a new moified compo that is AdVideoCard
export const AdvideoCard = ({info}) =>{
    return(
        <div className="border border-black-700 rounded-md  p-2 v-box" >
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard;