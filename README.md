# wx-graphql-request
小程序Graphql Client


## Quickstart

```js
import { request } from 'wx-graphql-request'
const query = `
  query getMovies($first: Int!) {
    allMovies(first:$first) {
      id
      slug
    }
  }
`
request('https://api.graph.cool/simple/v1/movies', query, { first: 3 })
    .then(data => (this.movies = data.allMovies))
    .catch(err => console.log(err))
```
