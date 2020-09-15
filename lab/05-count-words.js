function countWords(anArray) {
	let wordCount = {};
	const makeSpaces = / |,|\.|\-+/gm;
	let wordsArray = anArray[0].replace(makeSpaces, " ").split(" ");
	for (word of wordsArray) {
		if (word.length === 0) {
			continue;
		} else if (!wordCount[word]) {
			//	console.log(word.length);
			wordCount[word] = 1;
		} else {
			wordCount[word]++;
		}
	}
	console.log(JSON.stringify(wordCount));
}

countWords([`Far too slow, you're far too slow.`]);
countWords(["JS devs use Node.js for server-side JS.-- JS for devs"]);
