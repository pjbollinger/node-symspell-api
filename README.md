# SymSpell API using Node.js

This project is to help provide a web API for [thenerd31](https://github.com/thenerd31)'s [`eloquent` project](https://github.com/thenerd31/eloquent) of the SymSpell project.

This is not ready for any kind of production system, so use with caution.

## Requirements

You need to have Node.js installed.

My system configuration when testing this:
```
➜  node --version
v18.17.0
➜  npm --version
9.8.1
```

## Installation

1. Download the repository locally via `.zip` or `git clone`.
2. Using a terminal, navigate to the directory of this project.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the web server.

## Example

After running the web server, you can run the following to test that the server is up-and-running.

```
➜  curl localhost:3000
Hello World!
```

In JavaScript, you can run the following to execute the word segmentation:

```javascript
const options = {
  method: 'POST',
  headers: {'Content-Type': 'text/plain'},
  body: 'thequickbrownfoxjumpsoverthelazydog'
};

try {
  const response = await fetch('http://localhost:3000/word-segmentation');
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

This will log an object that looks like this:

```json
{
  "result": {
    "segmentedString": "the quick brown fox jumps over the lazy dog",
    "correctedString": "the quick brown fox jumps over the lazy dog",
    "distanceSum": 8,
    "probabilityLogSum": -34.491167981910635
  },
  "error": null
}
```

If you are getting errors when trying to make the request from a React application, you may need to add a Content Security Policy to allow the React app to "safely" call this API: https://stackoverflow.com/questions/37298608/content-security-policy-the-pages-settings-blocked-the-loading-of-a-resource
