
const headers = {
    'Authorization': 'myToken'
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


