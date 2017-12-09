
const headers = {
    'Authorization': 'myToken'
  }

export function fetchCategories () {
  
    return fetch(`http://localhost:3001/categories`, { headers })
      .then( res  => res.json())
      .then( data => data.categories)
}

export function fetchPosts () {
  
    return fetch(`http://localhost:3001/posts`, { headers })
      .then( res  => res.json())
}


