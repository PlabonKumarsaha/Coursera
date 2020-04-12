

<h1>JavaScript Homework</h1>
	<p>Add the JavaScript code needed to enable auto-complete on this form.  Whenever the checkbox is checked, the code should automatically copy the values from Shipping Name and Shipping Zip into the Billing Name and Billing Zip.  If the checkbox is unchecked, the Billing Name and Billing Zip should go blank.</p>

<form>
		<fieldset>
			<legend>Shipping Information</legend>
			<label for ="shippingName">Name:</label>
			<input type = "text" name = "shipName" id = "shippingName" required><br/>
			<label for = "shippingZip">Zip code:</label>
			<input type = "text" name = "shipZip" id = "shippingZip" pattern = "[0-9]{5}" required><br/>
		</fieldset>
		<input type="checkbox" id="same" name="same" onchange= "billingFunction()"/>
		<label for = "same">Is the Billing Information the Same?</label>
				
		<fieldset> 
			<legend>Billing Information</legend>
			<label for ="billingName">Name:</label>
			<input type = "text" name = "billName" id = "billingName" required><br/>
			<label for = "billingZip">Zip code:</label>
			<input type = "text" name = "billZip" id = "billingZip" pattern = "[0-9]{5}" required><br/>
		</fieldset>
			<input type = "submit" value = "Verify" onClick="billingFunction()"/>
		</form>

<style>

input{
			border:1px solid black;
		}
		input:focus{
			background-color: #E6E6E6;
		}
		fieldset{
			margin-bottom: 4%;
		}

</style>


<script>
/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
  
  	if (same.checked){
      var sname =  document.getElementById("shippingName").value;//this will copy the value entered by the user in shipping name block
      var sZip = document.getElementById("shippingZip").value;
      
      //billing details
      var bName = document.getElementById("billingName").value;
      var bZip = document.getElementById("billingZip").value;
      
      
   
		}else{
      
           var sname =  document.getElementById("shippingName").value;//this will copy the value entered by the user in shipping name block
      var sZip = document.getElementById("shippingZip").value;
    }
}
</script>