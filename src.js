window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

    //global
    var width = 8, height = 8, space = 1, size = 60;

		m_echec = new Echec(width, height, space, size);
		m_echec.init();
		function yourFunction(){
			m_echec.solve(context);
    	setTimeout(yourFunction, 1000);
		}
		yourFunction();
		m_echec.removeQueen(0, 0);
		m_echec.print();

}
