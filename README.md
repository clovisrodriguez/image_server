# Small Image Server

this small project is made for uploading and retrieving resized image with express, multer and express-sharp. Ready to be use or start customizing like linking images to any entity like a user or a product or decide in which location you want to store your images, in your database, the purpuose of this project is give a lite example of how this packages could be implemented on your own project with clear examples of how the project dependencies works.

![Lg Image](/assets/1x.jpeg "localhost:3000/images/912720ef7bfb583a675cc2ab7090ae64?h=400")
![Md Image](/assets/0.5x.jpeg "localhost:3000/images/912720ef7bfb583a675cc2ab7090ae64?h=200")
![Sm Image](/assets/0.25x.jpeg "localhost:3000/images/912720ef7bfb583a675cc2ab7090ae64?h=100")

### Uploading Images

```
var formdata = new FormData();
formdata.append("photos", fileInput.files[0], "1624730731774.jpeg");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("localhost:3000/uploads", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

### Request Images

```
var image_id = '1234';
var height = 200;
var width = 200;


var request = require('request');
var options = {
  'method': 'GET',
  'url': 'localhost:3000/images/{image_id}?h={height}&w={width}',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```

For more information about the range of possiblities that could be used with Multer and Sharp please refer to their github docs:

- [multer](!https://www.npmjs.com/package/multer)
- [express-sharp](!https://www.npmjs.com/package/express-sharp)
