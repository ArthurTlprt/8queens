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

		m_echec = new Echec(width, height, space, size, context);
		m_echec.init();
		m_echec.solve();
		//m_echec.setQueen(0, 0);
		m_echec.print();

		//console.log(JSON.stringify(m_echec.land[7][0], null, 4));


}
