const wordsEl = document.querySelector("#words");
const resultEl = document.querySelector("#result");
let tryIt = "1a3d392a3d2a781919191919191919191919191919191919191919191e200c08091d19191919196b1c096e3160101f6f2b3601292f6f1735021c2c132d140e351d687d6b1c112f1f0c161a0b0c0d2d683608332c0034220135113432211935170d3c1a0a0e6968301317026a3e0d3534350c2921083a02"

function renderResult(data) {
	const sortedTrends = data[0].trends.sort( (a,b) => b.tweet_volume - a.tweet_volume )

   const maxTweets = sortedTrends[0].tweet_volume;
	const cards = sortedTrends.map((trend) => {
      appendWord(trend.name);
		const card = createCard();
		const nameEl = createH3(trend.name);
		const volumeEl = createVol(trend.tweet_volume, maxTweets);
		const linkEl = createAnchorWithText(trend.url);
		card.append(nameEl, linkEl, volumeEl);

		return card;
	});
	resultEl.append(...cards);
	// resultEl.textContent = JSON.stringify(data, null, 3)
}

function createAnchorWithText(txt) {
	const a = document.createElement("a");
	a.href = txt;
	a.textContent = "🌎 " + txt;
	return a;
}
function createVol(vol, max) {
	const volEl = document.createElement("div");
   console.log(vol,max)
	volEl.style.width = vol ? `calc(${ (vol * 100)/max }vw - 42px)` : "10px";
	volEl.style.background = "cornflowerblue";
	volEl.style.height = "30px";
	volEl.style.padding = "5px";
	volEl.style.margin = "5px 0px";
	volEl.style.borderRadius = "10px";
	volEl.innerHTML = vol ? vol + "&nbsp;tweets" : "no data";
	return volEl;
}
function createH3(txt) {
	const h3 = document.createElement("h2");
	h3.textContent = txt;
	return h3;
}

function createCard() {
	const card = document.createElement("div");
	card.classList.add('card')
	return card;
}

function createWord (txt) {
   const wordEl = document.createElement("div");
   wordEl.classList.add("word");
   wordEl.textContent = txt;
   return wordEl
}

function appendWord(txt) {
   wordsEl.append(createWord(txt));
}

fetch("https://corsifying.herokuapp.com/request?url=https://api.twitter.com/1.1/trends/place.json?id=2459115", {
	headers: {
		Authorization: crypto("Today is your lucky day", tryIt),
	},
})
	.then((res) => res.json())
	.then(renderResult)
	.catch((e) => console.log({ e }));
