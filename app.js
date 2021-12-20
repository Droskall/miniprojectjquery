// part 1
$('#myId').text('Hello World !');

$('a').attr("href", "https://youtu.be/dQw4w9WgXcQ").text('my link');

$('#div1').height('100px').width('100px');

let divs = $('div div')
divs.eq(1).text('deuxième div');

alert("En JS, les tableaux commence avec l'index " + divs.index())