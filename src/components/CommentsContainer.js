import React from 'react';
// import CommentList from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const commentsData = [
  {
    name: "@ashima98",
    text: "I can't live without you Krishna ji. I always remember you every hour, every minute and every second",
    replies: [

    ]
  },
  {
    name: "@singhsingh5889 ",
    text: "I can't live without you Krishna ji. I always remember you every hour, every minute and every second",
    replies: [
      {
        name: "@singhsingh5889 ",
        text: "I can't live without you Krishna ji. I always remember you every hour, every minute and every second",
        replies: [
          {
            name: "Ashima",
            text: "commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib",
            replies: [
        
            ]
          },
          {
            name: "Ashima",
            text: "commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib",
            replies: [
        
            ]
          }
        ]
      },
      {
        name: "Ashima",
        text: "commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib",
        replies: [
    
        ]
      }
    ]
  },
  {
    name: "Ashima",
    text: "commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib",
    replies: [

    ]
  }
];

const Comment = ({data}) => {
  const {name, text} = data;
  
  return (
    <div className='comm-container'>
      <div className='comm-avatar'>
          <span>A</span>
      </div>
      <div>
          <div className='comm-user'>
              <a href='/' > {name}</a><span> 2 days ago </span>
          </div>
          <div>{text} </div>
          <div className='comm-like'>
              <span> <FontAwesomeIcon icon={faThumbsUp} /></span>
              <span>12</span>
              <span><FontAwesomeIcon icon={faThumbsDown} /></span>
              <span>0</span>
              <span className='comm-reply'>Reply</span>
          </div>
      </div>
    </div>
)
}

const CommentsList = ({ comments }) => {
  return comments.map( (comment , index) =>(
    <div className='p-2' key={index}>
      <Comment  data={comment}/>
      <div className='pl-5  ml-5'>
      <CommentsList comments= {comment.replies}/>
      </div>
    </div>
  ));
  };

const CommentsContainer = () => {
  return (
    <>
      <CommentsList comments = {commentsData}/>
      </>
  )
}

export default CommentsContainer;
