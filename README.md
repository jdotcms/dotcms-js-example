# dotcms-js-example

This is an example of how to create a rest endpoint with Javascript.
DotCMS used to allows the creation of REST endpoints with Java or Velocity and now also with Javascript, powered by GraalVM.

## DOTCLI

The example has been made with dotcli, you can find doc about it here:
https://www.dotcms.com/docs/latest/cli

In recap to test this locally you can install a brand new site with the empty starter and push the current git repo.
The push command, will upload a CoffeeBar content type with the attributes:
- name
- address

And 3 instances of that content type.

And the endpoint with just a get verb implemented under the folder structure:
application/apijs/coffee/get.js

The convention to follow is to put all your rest entities under apijs folder, followed by a name of the entity, in this case coffee.
You can drop different rest verbs as files under the entity folder, such as
get.js, post.js, put.js, delete.js, etc.

## JAVASCRIPT
In our example as soon as you upload the repo, you can run this url locally:
http://localhost:8080/api/js/coffee?coffeeId=20285e8ed523860e67c92fd71ecc7cc9

it will retrieve the object associated to the id, plus a random coffee image, it could be 
something such as (the image may change):

{
"address": "Via Milano, 23, 11103",
"image": "https://coffee.alexflipnote.dev/PiU9Ky9SvSg_coffee.jpg",
"name": "Caffe Bar di Fondi"
}

The code under this execution is in the following path:
/files/live/en-us/default/application/apijs/coffee/get.js 

Note: this structure is the required by the dotcli, but it will be translated into the site browser under the path:
application/apijs/coffee/get.js

Getting back to the code, in this example you can see how use two js view tools:

- dotcontent
- dotcache

The first one allows you to retrieve contentlets from the dotCMS system by identifier (but there are more of methods available).
The second one is a cache abstraction, you will see that even if the image retrieve 
from the fetch call to a third party is a random image, it is being returned as the same image.
You may need to clear the cache to see a different image.

The example shows just a little piece of the possibilities with javascript and dotCMS, such as fetch, viewtools and error handling, but 
there is so much more to explore and more things to come in the future, the current state of the javascript framework is an alpha version, 
so it is a good time to start playing with it and give feedback to the dotCMS team.
