var Echec = class {
  constructor(height, width, space, size, context) {
    this.height = height;
    this.width = width;
		this.space = space;
		this.size = size;
		this.land = [];
		this.queensPlaced = 0;
		this.backtrack = [];
		for(var i=0; i<width; ++i){
			this.backtrack.push([]);
		}
		this.context = context;
  }

	init(){
		for(var i = 0; i < this.height; ++i){
			this.land.push([]);
			for(var j = 0; j < this.width; ++j){
				this.land[i].push({ color: "rgb(36, 96, 213)", threat: false, free: true, x: j, y: i });
			}
		}
	}

	getPossibleSol(a){
		var tab = [];
		for(var i in this.land[a]){
			if(this.land[a][i].threat == false && this.land[a][i].free == true)
				tab.push(i);
			return tab;
		}
	}


	print(){
		for(var i in this.land){
			for(var j in this.land[i]){
				if(this.land[i][j].color == 'rgb(39, 201, 19)'){
					console.log('color');
				}
				this.context.fillStyle = this.land[i][j].color;
				this.context.fillRect( j*(this.size+this.space), i*(this.size+this.space) , this.size, this.size);
			}
		}
	}

	solveRec(x){
		if (this.queensPlaced < 5) {
			if(this.backtrack[x].length != 8){
				possibleSol = this.getPossibleSol(x);
				this.setQueen(possibleSol[possibleSol.length-1]);
				this.backtrack[x].push(possibleSol.pop());
				this.solveRec(x+1);
			}else {
				this.backtrack[x] = [];
				this.solveRec(x-1);
			}
		}
	}

	solve(){
		solveRec(0);
	}
/*
	placeOne(){
		for(var i in this.land){
			for(var j in this.land[i]){
				if(this.land[i][j].threat == false && this.land[i][j].free == true){
					setTimeout(this.setQueen(parseInt(j), parseInt(i)), 1000);
					return;
				}
			}
		}
	}
*/
	threat(x, y){

	}

	setQueen(x, y){
		this.queensPlaced++;
		this.land[x][y].free = false;
		this.land[x][y].color = 'rgb(39, 201, 19)';
		console.log('queen');
		for(var i in this.land){
			for(var j in this.land[i]){
				if( ((y == i || x == j) || (y == i)) && !(y == i && x == j) ){
					this.land[i][j].threat = true;
					this.land[i][j].color = "rgb(215, 15, 45)";
				}
			}
		}
		for(var a=1; y-a>=0 && x-a >=0 ; a++){
			this.land[y-a][x-a].threat = true;
			this.land[y-a][x-a].color = "rgb(215, 15, 45)";
		}
		for(var a=1; (y-a)>=0 && (x+a) < this.width ; a++){
			this.land[y-a][x+a].threat = true;
			this.land[y-a][x+a].color = "rgb(215, 15, 45)";
		}
		for(var a=1; y+a < this.height && x-a >=0 ; a++){
			this.land[y+a][x-a].threat = true;
			this.land[y+a][x-a].color = "rgb(215, 15, 45)";
		}
		for(var a=1; y+a < this.height && x+a < this.width; a++){
			this.land[y+a][x+a].threat = true;
			this.land[y+a][x+a].color = "rgb(215, 15, 45)";
		}
	}

	removeQueen(x, y){
		this.queensPlaced--;
		this.land[y][x].free = true;
		this.land[y][x].color = 'rgb(36, 96, 213)';

		for(var i in this.land){
			for(var j in this.land[i]){
				if( ((y == i || x == j) || (y == i)) && !(y == i && x == j) ){
					this.land[i][j].threat = false;
					this.land[i][j].color = "rgb(36, 96, 213)";
				}
			}
		}
		for(var a=1; y-a>=0 && x-a >=0 ; a++){
			this.land[y-a][x-a].threat = false;
			this.land[y-a][x-a].color = "rgb(36, 96, 213)";
		}
		for(var a=1; (y-a)>=0 && (x+a) < this.width ; a++){
			this.land[y-a][x+a].threat = false;
			this.land[y-a][x+a].color = "rgb(36, 96, 213)";
		}
		for(var a=1; y+a < this.height && x-a >=0 ; a++){
			this.land[y+a][x-a].threat = false;
			this.land[y+a][x-a].color = "rgb(36, 96, 213)";
		}
		for(var a=1; y+a < this.height && x+a < this.width; a++){
			this.land[y+a][x+a].threat = false;
			this.land[y+a][x+a].color = "rgb(36, 96, 213)";
		}
	}

	debug(){
		console.log(JSON.parse(JSON.stringify(this.land[2][2])));
	}

};
