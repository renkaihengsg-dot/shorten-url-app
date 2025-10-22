class ShortenService {
    async shortenLink (url) {
        //return fake value after 3 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ shortUrl: 'https://short.ly/abcd1234' })
            }, 3000)
        })
    }
}

export default new ShortenService()