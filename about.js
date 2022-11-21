console.log("hello world");



//function handleSubmit(evt) {
//	evt.preventDefault();
	
//	console.log('form submit');
//}
function showAlert() {
    var myText = "Form has been submitted successfully!";
    alert (myText);
  }


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let pic = document.querySelector('#duckPic');
pic.addEventListener('mouseover' , () =>
alert("you looking ducking good!"))
