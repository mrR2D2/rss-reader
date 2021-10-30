import React from "react";

import './Feed.css'

class Feed extends React.Component {

  render() {
    const feedData = this.props.feedData
    const postsData = this.props.postsData
    return (
      <div className="feed">
        <FeedHeader feedData={feedData} />
        <FeedBody postsData={postsData} />
      </div>
    )
  }

}

const FeedHeader = (props) => {
  const feedData = props.feedData

  const feedUrl = (new URL(feedData.url)).origin
  const iconUrl = new URL("/favicon.ico", feedUrl)

  return (
    <div className="feed-header">
      <img src={iconUrl} alt={feedData.name} />
      <a href={feedUrl} target="_blank" rel="noopener noreferrer nofollow">
        {feedData.name}
      </a>
      <br/>
      <small>
        {/* TODO: calculate last post time */}
        Last post 30 minutes ago
      </small>
    </div>
  )
}

const FeedBody = (props) => {
  const rows = props.postsData.map((post, index) => {
    return <FeedPost key={index} postData={post} />
  })
  return (
    <div className="feed-body">
      {rows}
    </div>
  )
}

const FeedPost = (props) => {
  const postData = props.postData
  return (
    <div className="post">
      <a href={postData.url} target="_blank" rel="noopener noreferrer nofollow">
        {postData.title}
      </a>
    </div>
  )
}

export default Feed