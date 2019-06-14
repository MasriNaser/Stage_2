style="color:#91cda6;padding-bottom:7px"
style="color:#ed6d7b"


<div class="container">
    <form action="#" id="form" class="animated fadeInDown">
      <div id="test">
        <input name="email" autocomplete="off" type="email" placeholder="Your e-mail address" autofocus value="" id="input" required>
        <button id="btn">SIGN UP</button>
      </div>
    </form>
<p id="test">Welcome there! </p>
<button onclick="myFunction()">click me!</button>
  </div>
<style>
p{color:red}
</style>
  <script>
let emails = [];
jQuery(document).ready(function($,e) {
  $("#form").on("submit", function(e) {
console.log(e.target.baseURI,"from input")
    e.preventDefault();
    let test = $("#input").val();
console.log("copy test",test);
    let validator = $("#form").validate();
    if (validator.form()) {
      if ($.inArray(test, emails) == -1) {
        console.log(test);
        console.log("email is sent");
$("#form")[0].reset();
      } else {
        console.log("email is already exised");
      }
    } else {
      console.log("not valid email");
    }
  });
});
function myFunction() {
  document.getElementById("test").innerHTML = "Hello World"+"Time now is:"+ Date();
}
</script>

<p id="test">Welcome there! </p>
<button onclick="myFunction()">click me!</button>
  </div>
<style>
p{color:red}
</style>
  <script>
 jQuery(document).ready(function($) {
console.log("heyyy there!!!")
});
let emails = [1,2,3,4,5];
console.log(emails);
       if(emails.length !== 0){
alert("not empty")
}
console.log("hello");
function myFunction() {
  document.getElementById("test").innerHTML = "Hello World"+"Time now is:"+ Date();
}
</script>


{/* <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <head>
    <!-- Add local resources -->
    <css src="css/my-styles.css"/>
    <!-- The following two ways to add local JavaScript files are equal -->
    <script src="Magento_Catalog::js/sample1.js"/>
    <link src="js/sample.js"/>
    <!-- Add external resources -->
    <css src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css" src_type="url" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" src_type="url" />
    <link rel="stylesheet" type="text/css" src="http://fonts.googleapis.com/css?family=Montserrat" src_type="url" />
  </head>
</page> */}
