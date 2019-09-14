const request = require('request')

module.exports = function (url){
    return (new Promise((resolve, reject) => {
        try {
            request(url, (err, response, body) => {
                if (!err)
                    resolve({response, body})
                else
                    reject(new Error(err))
            })
        } catch (e) {
            reject({e})
        }
    }))
}
