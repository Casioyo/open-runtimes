# Generate short URL

A PHP Cloud Function that for URL shortener service name and URL returns shorten link.

Available services:

* [Bitly](https://bitly.com)
* [Tinyurl](https://tinyurl.com/)

_Example input:_

```json
{
  "provider": "bitly",
  "url": "https://appwrite.io/"
}
```

_Example output:_

```json
{
  "success": true,
  "url": "https://bit.ly/3SDBqnK"
}
```

## 📝 Environment Variables

List of environment variables used by this cloud function:

- **API_BITLY_AUTHORIZATION_TOKEN** - Bitly authorization token
- **API_TINYURL_AUTHORIZATION_TOKEN** - Tinyurl authorization token

## 🚀 Deployment

1. Clone this repository, and enter this function folder:

```
$ git clone https://github.com/open-runtimes/examples.git && cd examples
$ cd php/generate-short-url
```

2. Enter this function folder and build the code:

```
docker run --rm --interactive --tty --volume $PWD:/usr/code openruntimes/php:8.1 sh /usr/local/src/build.sh
```

As a result, a `code.tar.gz` file will be generated.

3. Start the Open Runtime:

```
docker run -p 3000:3000 -e INTERNAL_RUNTIME_KEY=secret-key -e INTERNAL_RUNTIME_ENTRYPOINT=index.php --rm --interactive --tty --volume $PWD/code.tar.gz:/tmp/code.tar.gz:ro openruntimes/php:8.1 sh /usr/local/src/start.sh
```

Your function is now listening on port `3000`, and you can execute it by sending `POST` request with appropriate
authorization headers. To learn more about runtime, you can visit PHP
runtime [README](https://github.com/open-runtimes/open-runtimes/tree/main/runtimes/php-8.1).

## 📝 Notes

- This function is designed for use with Appwrite Cloud Functions. You can learn more about it
  in [Appwrite docs](https://appwrite.io/docs/functions).
- This example is compatible with PHP 8.1. Other versions may work but are not guaranteed to work as they haven't been
  tested.
