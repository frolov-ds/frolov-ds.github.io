let stroka = "BlaBla Bla HHHmm";
let blob = new Blob([stroka], {type: "text/plain"});
let link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "my-text.txt");
link.click();

function saveToPC(str){
	let blob = new Blob([str], {type: "text/plain"});
	let link = document.createElement("a");
	link.setAttribute("href", URL.createObjectURL(blob));
	link.setAttribute("download", Date.now()+"");
	link.click();
 }