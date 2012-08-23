[![build status](https://secure.travis-ci.org/dawnerd/Emre.png)](http://travis-ci.org/dawnerd/Emre)
## Emre - Object selection like a boss

With Emre, you can access object properties (and set them too!) using a string containing dot-notation-like syntax. Very useful for command like apps that have config settings.

## Installation
Emre can be used both on the client, and server-side. For client installs, just take the js file and include it in your project. For nodejs:

```npm install emre```

Then in your project:
```var emre = require('emre');```

## Usage
Reading values:
```emre(object, 'path.to.property')```
Returns the found property value.

Writing values:
```emre(object, 'path.to.property', value)```
Returns a modified object.