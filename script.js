var protein=[
'sardines',
'tuna',
'lentils',
'sausages',
'chicken',
'cheese',
'kidney beans',
'chickpeas',
];

var carbs=[
'mashed potato',
'chips',
'pasta',
'noodles',
'rice',
];

var veg1=[
'carrots',
'peas',
'tomatoes',
'onion',
'sultanas',
'squash',
'parsnips',
'cabbage', 
];

var veg2=[
'carrots',
'peas',
'tomatoes',
'onion',
'sultanas',
'squash',
'parsnips',
'cabbage',
];

var headline=["",""];
function pickone(list) { return(list[Math.floor(Math.random()*list.length)]); }

function mainCourse() {
		headline[0]=pickone(protein) +", " +pickone(carbs) +", " +pickone(veg1)+ ", " +pickone(veg2);
		document.getElementById('main').innerHTML = headline[0];
}


