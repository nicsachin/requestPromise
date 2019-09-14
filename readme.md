##just to make request asynchronous
```javascript
const requestPromise = require('@nicsachin/requestpromise')

try {
        const data = await requestPromise('https://www.amazon.in');
        const response = data.response;
        const body = data.body;
        
}

catch (e) {
      console.log(e)
}
```
