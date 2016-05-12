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
    /*
		function stepByStep(){
			m_echec.solve();
    	setTimeout(stepByStep, 1000);
		}
		stepByStep();*/

    var width = 8, height = 8, space = 1, size = 60;

		m_echec = new Echec(width, height, space, size, context);
		m_echec.init();
		m_echec.solve();
		for(var i=0; i < width; ++i){
			console.log(m_echec.getPossibleSol(i));
		}
		m_echec.print();


}
