
const headers = {
    'Authorization': 'myToken'
  }

//Upvotes or downvotes a comment
export function changeCommentVote(commentId, voteType){
  return fetch(`http://localhost:3001/comments/${commentId}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          option: voteType
      })
    }
  )
  .then( res => res.json() )
}

//delete comment on server
export function deleteCommentOnServer(commentId){
  return fetch(`http://localhost:3001/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers
    }
  }
)
.then( res => res.json())
}

//Fetch single post
export function fetchSinglePost(postId){
  return fetch(`http://localhost:3001/posts/${postId}`, { headers })
  .then( res  => res.json())
}
//Add comment to server
export function addCommentToServer(comment){
  return fetch(`http://localhost:3001/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }
)
.then( res => res.json())
}

//Update comment to server
export function updateCommentToServer(comment){
  return fetch(`http://localhost:3001/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      timestamp: comment.timestamp,
      body: comment.body
    })
  }
)
.then( res => res.json())
}

//Fetch comments from server
export function fetchCommentsFromServer(postId){
  return fetch(`http://localhost:3001/posts/${postId}/comments`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }
)
.then( res => res.json())
}

//Delete post from server
export function deleteSinglePost(postId){
  return fetch(`http://localhost:3001/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers
    }
  }
)
.then( res => res.json())
}

//Update post to the serve
export function saveEditedPost(post){
  return fetch(`http://localhost:3001/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }
)
.then( res => res.json())
}

//Add new Post
export function addPost(post){
  return fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }
  )
  .then( res => res.json())
}

//Upvotes or downvotes a single post
export function changePostVote(postId, voteType){
  return fetch(`http://localhost:3001/posts/${postId}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          option: voteType
      })
    }
  )
  .then( res => res.json())
}


//Fetches all categories from the server.  
export function fetchCategories () {
  
    return fetch(`http://localhost:3001/categories`, { headers })
      .then( res  => res.json())
      .then( data => data.categories)
}

//Fetches all posts from the server
export function fetchPosts () {
  
    return fetch(`http://localhost:3001/posts`, { headers })
      .then( res  => res.json())
}


