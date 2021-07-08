
// Q.>> Problem  No.2 >>

var library = [
      {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
      },
      {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
      },
      {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
      }];
var b = Object.values(library);
const values = Object(b);
console.log(values);
