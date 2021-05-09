
const resultEl = document.querySelector("#result")
function renderResult(data){
   resultEl.textContent = JSON.parse(data, null, 3)
}
			fetch("https://api.twitter.com/1.1/trends/place.json?id=1", {
				headers: {
               "Access-Control-Allow-Origin": "*",
					"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAFxTPQEAAAAA3DQ6i8HG7snYqw7OmZDtKuLVmE0%3DIwGTNBSTUu0nPktXlzYmIljyAmOUdBRV10hKOZ2fUmlmTqyPbZ",
				},
			})
				// .then(function (res) {
				// 	return res.json()
				// })
				.then(console.log)
				.catch((e) => console.log({ e }));

