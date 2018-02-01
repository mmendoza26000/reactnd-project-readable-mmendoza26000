
const headers = {
    'Authorization': 'myToken'
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

//Upvotes a single post
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


