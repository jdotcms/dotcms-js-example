
(async function get(context) {

    const dotlogger = context.dotlogger;
    const request = context.request;
    const response = context.response;
    const coffeeId = request.getParameter('coffeeId');

    dotlogger.info("coffeeId = "+ coffeeId);
    if (!coffeeId) {
        dotlogger.error('No coffeeId provided');
        throw new Error('No coffeeId provided');
    }

    const cacheContentlet = dotcache.get(coffeeId);
    if (!cacheContentlet) {

        const coffeeContentlet = dotcontent.load(coffeeId);
        dotlogger.info("coffeeContentlet = " + coffeeContentlet);

        if (!coffeeContentlet) {
            dotlogger.error('Not found the content: ' + coffeeId);
            throw new Error('Not found the content: ' + coffeeId);
        }

        fetch('https://coffee.alexflipnote.dev/random.json')
            .then(res => {

                const json = {
                    "name": coffeeContentlet.get('name'),
                    "address": coffeeContentlet.get('address'),
                    "image": res.json().file
                };
                dotlogger.info("json = " + json);
                dotcache.put (coffeeId, json);

                response.json(json);
            }).catch(error => {
            console.log("fetchResponse.error() 2", error);
        });
    } else {
        dotlogger.info("The coffeeId = " + coffeeId + " has found on the cache");
        response.json(cacheContentlet);
    }
})

