["canvas", "input", "pre"].forEach((a) => {
	window[a] = document.querySelector([a]);
});

function inputChange(e) {
	let fr;
	function load() {
		let img = new Image();
		img.onload = () => {
			let size = img.width + img.height;
			if (size == 128 || size == 96) {
				pre.innerText = "";
				let ctx = canvas.getContext("2d");
				ctx.drawImage(img, 8, 8, 8, 8, 0, 0, 8, 8);
				ctx.drawImage(img, 40, 8, 8, 8, 0, 0, 8, 8);

				toEmojis();

				let png = new Image();
				png.src = canvas.toDataURL();
				png.onload = () => (document.querySelector('link[type="image/x-icon"]').href = upScale(png));
			} else {
				alert("invalid minecraft skin, this website only supports 64px skins.");
			}
		};
		img.src = fr.result;
	}

	if (e.target && e.target.tagName == "INPUT") {
		fr = new FileReader();
		fr.readAsDataURL(e.target.files[0]);
		fr.onload = load;
	} else {
		fr = { result: e };
		load();
	}
}

if (input.value) inputChange({ target: input });
else
	inputChange(
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFDUlEQVR42u2a20sUURzH97G0LKMotPuWbVpslj1olJXdjCgyisowsSjzgrB0gSKyC5UF1ZNQWEEQSBQ9dHsIe+zJ/+nXfM/sb/rN4ZwZ96LOrnPgyxzP/M7Z+X7OZc96JpEISfWrFhK0YcU8knlozeJKunE4HahEqSc2nF6zSEkCgGCyb+82enyqybtCZQWAzdfVVFgBJJNJn1BWFgC49/VpwGVlD0CaxQiA5HSYEwBM5sMAdKTqygcAG9+8coHKY/XXAZhUNgDYuBSPjJL/GkzVVhAEU5tqK5XZ7cnFtHWtq/TahdSw2l0HUisr1UKIWJQBAMehDuqiDdzndsP2EZECAG1ZXaWMwOCODdXqysLf++uXUGv9MhUHIByDOijjdiSAoH3ErANQD73C7TXXuGOsFj1d4YH4OTJAEy8y9Hd0mCaeZ5z8dfp88zw1bVyiYhCLOg1ZeAqC0ybaDttHRGME1DhDeVWV26u17lRAPr2+mj7dvULfHw2q65fhQRrLXKDfIxkau3ZMCTGIRR3URR5toU38HbaPiMwUcKfBAkoun09PzrbQ2KWD1JJaqswjdeweoR93rirzyCMBCmIQizqoizZkm2H7iOgAcHrMHbbV9KijkUYv7qOn55sdc4fo250e+vUg4329/Xk6QB/6DtOws+dHDGJRB3XRBve+XARt+4hIrAF4UAzbnrY0ve07QW8uHfB+0LzqanMM7qVb+3f69LJrD90/1axiEIs6qIs21BTIToewfcSsA+Bfb2x67OoR1aPPzu2i60fSNHRwCw221Suz0O3jO+jh6V1KyCMGse9721XdN5ePutdsewxS30cwuMjtC860T5JUKpXyKbSByUn7psi5l+juDlZYGh9324GcPKbkycaN3jUSAGxb46IAYPNZzW0AzgiQ5tVnzLUpUDCAbakMQXXrOtX1UMtHn+Q9/X5L4wgl7t37r85OSrx+TYl379SCia9KXjxRpiTjIZTBFOvrV1f8ty2eY/T7XJ81FQAwmA8ASH1ob68r5PnBsxA88/xAMh6SpqW4HRnLBrkOA9Xv5wPAZjAUgOkB+SHxgBgR0qSMh0zmZRsmwDJm1gFg2PMDIC8/nAHIMls8x8GgzOsG5WiaqREgYzDvpTwjLDy8NM15LpexDEA3LepjU8Z64my+8PtDCmUyRr+fFwA2J0eAFYA0AxgSgMmYBMZTwFQnO9RNAEaHOj2DXF5UADmvAToA2ftyxZYA5BqgmZZApDkdAK4mAKo8GzPlr8G8AehzMAyA/i1girUA0HtYB2CaIkUBEHQ/cBHSvwF0AKZFS5M0ZwMQtEaEAmhtbSUoDADH9ff3++QZ4o0I957e+zYAMt6wHkhzpjkuAcgpwNcpA7AZDLsvpwiuOkBvxygA6Bsvb0HlaeKIF2EbADZpGiGzBsA0gnwQHGOhW2snRpbpPexbAB2Z1oicAMQpTnGKU5ziFKc4xSlOcYpTnOIUpzgVmgo+XC324WfJAdDO/+ceADkCpuMFiFKbApEHkOv7BfzfXt+5gpT8V7rpfYJcDz+jAsB233r6yyBsJ0mlBCDofuBJkel4vOwBFPv8fyYAFPJ+wbSf/88UANNRVy4Awo6+Ig2gkCmgA5DHWjoA+X7AlM//owLANkX0w0359od++pvX8fdMAcj3/QJ9iJsAFPQCxHSnQt8vMJ3v2wCYpkhkAOR7vG7q4aCXoMoSgG8hFAuc/grMdAD4B/kHl9da7Ne9AAAAAElFTkSuQmCC"
	);
input.onchange = inputChange;

function upScale(t) {
	var a = document.createElement("canvas");
	(a.width = t.width), (a.height = t.height);
	var e = a.getContext("2d");
	e.drawImage(t, 0, 0);
	var h = e.getImageData(0, 0, t.width, t.height).data,
		r = 4 * t.width,
		d = 4 * t.height,
		i = document.createElement("canvas");
	(i.width = r), (i.height = d);
	for (var g = i.getContext("2d"), n = g.createImageData(r, d), o = n.data, v = 0, c = 0, m = 0; m < t.height; ++m)
		for (var w = 0; w < 4; ++w)
			for (var f = 0; f < t.width; ++f) {
				v = 4 * (m * t.width + f);
				for (var u = 0; u < 4; ++u) {
					var D = v;
					(o[c++] = h[D++]), (o[c++] = h[D++]), (o[c++] = h[D++]), (o[c++] = h[D++]);
				}
			}
	return g.putImageData(n, 0, 0), i.toDataURL();
}

const emojis = [
	{ e: "🟥", c: [221, 46, 68] },
	{ e: "🟧", c: [244, 144, 12] },
	{ e: "🟨", c: [253, 203, 88] },
	{ e: "🟩", c: [120, 177, 89] },
	{ e: "🟦", c: [85, 172, 238] },
	{ e: "🟪", c: [170, 142, 214] },
	{ e: "🟫", c: [193, 105, 79] },
	{ e: "⬛", c: [49, 55, 61] },
	{ e: "⬜", c: [230, 231, 232] },
];

function colorDif(a, b) {
	let sum = 0;
	a.forEach((e, i) => {
		sum += Math.pow(e - b[i], 2);
	});
	return Math.sqrt(sum);
}

function getColor(x, y) {
	let data = canvas.getContext("2d").getImageData(x, y, 1, 1).data;
	return [data[0], data[1], data[2]];
}

function toEmojis() {
	for (let i = 0; i < 8; i++) {
		for (let o = 0; o < 8; o++) {
			let b = 999,
				index = 0;
			emojis.forEach((a, ii) => {
				let c = colorDif(a.c, getColor(o, i));
				if (b > c) {
					b = c;
					index = ii;
				}
			});
			pre.innerText += emojis[index].e;
		}
		pre.innerText += "\n";
	}
	pre.innerText += "\n";
	if (twemoji) {
		twemoji.parse(pre);
		pre.style.lineHeight = 0;
	}
}
