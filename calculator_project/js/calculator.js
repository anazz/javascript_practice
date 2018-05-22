function Calculator() 
{
	/*
		on récupere les valeurs 
	*/
	that        = this, 
	this.field  = "input#number",
	this.button = "#body .buttons",
	this.init   = false,

	/*
		on initialise le field input number
		pour qu'il affiche pas 0 si le champ est == false
		pour que = s'affiche pas lorsqu'on click dessus 
	*/
	this.run = function()
	{
		$(this.button).click(function() {
			var value = $(this).html();

			if (that.init == false)
			{
				$(that.field).val("");
				that.init = true;
			}

			if (value != "=") {
				$(that.field).val($(that.field).val() + value);
			}

			that.dispatcher(value);
		});
	},

	/*
		on relie les symbols aux opérations
	*/

	this.dispatcher = function(value)
	{
		if($(this.field).val().indexOf("/") != -1)
			this.operation(value, "/");

		if($(this.field).val().indexOf("*") != -1)
			this.operation(value, "*");

		if($(this.field).val().indexOf("-") != -1)
			this.operation(value, "-");

		if($(this.field).val().indexOf("+") != -1)
			this.operation(value, "+");
	},

	/*
		on mets en place les opérations
	*/

	this.operation = function(value, symbol)
	{
		//on recuperent les chiffres et le symbol
		var numbers = $(this.field).val().split(symbol),
			result;
		//on mets des conditions pour le resultat selon le symbol	
		if (symbol == "/")
			result = numbers[0]	/ numbers[1];

		if (symbol == "*")
			result = numbers[0]	* numbers[1];

		if (symbol == "-")
			result = numbers[0]	- numbers[1];

		if (symbol == "+")
			result = parseFloat(numbers[0])	+ parseFloat(numbers[1]);

		resultat = Math.round((result) * 100) / 100;

		if(numbers.length > 1)
		{
			if (value == "=")
				$(this.field).val(result);

			else if(numbers.length > 2 ) 
				$(this.field).val(result + symbol);
			//la condition sur C ne marche pas
			else if (value == "C")
				function clear(){
					document.that.field.value = ""
				}
			}
		}
	};
}