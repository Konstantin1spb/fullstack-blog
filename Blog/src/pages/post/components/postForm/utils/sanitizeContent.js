export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp;', ' ')
		.replaceAll(/ +/g, ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
