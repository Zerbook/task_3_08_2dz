console.log(111);
//"proxy": "http://localhost:3001",
// const test = fetch('http://localhost:3001/posts').then((res) => res.json());

// console.log('test', test);

fetch('http://localhost:3001/posts')
	.then((res) => res.json())
	.then((data) => {
		console.log('posts:', data.data.posts);
	})
	.catch((err) => {
		console.error('Ошибка при получении постов:', err);
	});
