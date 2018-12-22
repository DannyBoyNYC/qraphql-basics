# Source

`https://www.youtube.com/watch?v=ed8SzALpx1Q`

`https://github.com/iamshaunjp/graphql-playlist`

`http://localhost:4000/graphql`

56:04 - no schema

```
{
  book(id: 1 ){
    name
    genre
    author {
      name
      age
      id
    }
  }
}
```

```
{
  author(id: 2 ){
    name
    age
    books {
      name
      genre
    }
  }
}
```

```
{
  books{
    name
  }
}
```

```
{
  books{
    name
    author{
      name
      age
    }
  }
}
```

```
{
  authors{
    name
    books{
      name
    }
  }
}
```

`mongodb://<dbuser>:<dbpassword>@ds141924.mlab.com:41924/gql-daniel`

```
mutation {
	addAuthor(name: "Doug", age: 53){
    name
    age
  }
}
```

`5c1e81b9733d78d8cb446e3b`

```
mutation {
	addBook(name: "Name of the Wind",
  genre: "Fantasy",
  authorId: "5c1e81b9733d78d8cb446e3b" ){
    name
    genre
  }
}
```
