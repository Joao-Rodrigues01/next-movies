const withImages = require('next-images')

module.exports = withImages({
		esModule: true,
	})

module.exports = {
	images: {
		domains: ['image.tmdb.org', 'cdn.myanimelist.net', 'wallpapercave.com',],
	}
}
