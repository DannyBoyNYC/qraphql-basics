const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://daniel:dd2345@ds141924.mlab.com:41924/gql-daniel');
mongoose.connection.once('open', () => {
  console.log('Connected to db.');
});

// BEGIN supports import
const Book = require('./models/book');
const Author = require('./models/author');
app.get('/api/import/books', (req, res) => {
  Book.create(
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
    { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
    { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
    { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
    function(err) {
      if (err) return console.log(err);
      return res.sendStatus(202);
    },
  );
});

app.get('/api/import/authors', (req, res) => {
  Author.create(
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' },
    function(err) {
      if (err) return console.log(err);
      return res.sendStatus(202);
    },
  );
});
// END import support

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
