# dotcms-js-example
Shows an example about how to create a rest endpoint to expose a content type mixed with a third party

This example has been made with dotcli you can find doc about it here:
https://www.dotcms.com/docs/latest/cli

This project encapsulates a blank starter + a content type called CoffeeBar (with name and address attributes)
3 instances of that content type are also there and finally an endpoint to expose by id the content type

For instance:
http://localhost:8080/api/js/coffee?coffeeId=20285e8ed523860e67c92fd71ecc7cc9

Will retrieve the object under that id, plus a random coffee image, it could be 
something such as (the image may change):

{
"address": "Via Milano, 23, 11103",
"image": "https://coffee.alexflipnote.dev/PiU9Ky9SvSg_coffee.jpg",
"name": "Caffe Bar di Fondi"
}

This example uses two js view tools:

- dotcontent
- dotcache

The first one allows you to retrieve contentlets from the dotCMS system.
The second one is a cache abstraction, you will see that even if the image retrieve 
from the fetch call to a third party is a random image, it is being returned as the same image.
You may need to clear the cache to see a different image.

