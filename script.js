// your code here

document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
	let name = document.getElementById("name").value;
	let year =document.getElementById("year").value;

	let display= document.getElementById("url");
	let ans="https://localhost:8080/";

	if(name || year)
	{
		ans+="?";
		let added=false;
		if(name )
		{
			added=true;
			ans+="name="+name;
		}
		if(year)
		{
			if(added)
			{
				ans+="&";
			}
			ans+="year="+year;
		}
	}

	display.innerText=ans;
	
});
function generateLink() {

	

	
	
}
