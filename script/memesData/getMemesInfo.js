export const getMemesObject = (memes) => {
	const result = Object.entries(memes).flatMap(([folder, count]) =>
		Array.from({ length: count }, (_, i) => ({
			name: `${i + 1}.jpg`,
			category: folder
		}))
	)

	return result
}