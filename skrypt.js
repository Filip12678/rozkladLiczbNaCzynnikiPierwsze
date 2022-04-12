function rozkladLiczbNaCzynnikiPierwsze(n) {
	
	var pierw = Math.sqrt(n);
	var k = 2;
	var liczbyPierwsze = "";
	
	
	while (n > 1 && k <= pierw) {
		
		
		while (n % k == 0) {
			
			liczbyPierwsze = liczbyPierwsze + k.toString() + " ";
			
			n /= k;
			
			
		}
		++k;
		
	}
	
	
	if (n > 1) {
		
		liczbyPierwsze = liczbyPierwsze + n.toString() + " ";
		
	}
	
	return liczbyPierwsze;
	
	
	
}



function myFunction(){
	
	var liczba = document.getElementById('liczba').value;
	
	var liczbaRozlozonaNaCzynnikiPierwsze = rozkladLiczbNaCzynnikiPierwsze(liczba);
	
	document.getElementById("liczbaRozlozonaNaCzynnikiPierwsze").innerHTML = `Liczba rozłożona na czynniki pierwsze: ${liczbaRozlozonaNaCzynnikiPierwsze}`;
	
	
}