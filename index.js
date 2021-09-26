let categories = [];

function addCategory(category) {
	categories.push(category);
}

function vote(id) {
	categories[id].v += 1;
}

let c = { id: 0, n: "Javacript", v: 0 };

addCategory(c);

vote(0);
