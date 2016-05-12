var Echec = class {
  constructor(height, width, space, size) {
    this.height = height;
    this.width = width;
		this.space = space;
		this.size = size;
		this.land = [];
		this.queensPlaced = 0;
		this.backtrack = [];
		for(var i=0; i<width; ++i){
			this.backtrack[i].push([]);
		}
  }

	init(){
		for(let y = 0; y < this.height; ++y){
			this.land.push([]);
			for(let x = 0; x < this.width; ++x){
				this.land[y].push({ color: "rgb(36, 96, 213)", threat: false, free: true, x: x, y: y });
			}
		}
	}


	print(context){
		for(let i in this.land){
			for(let j in this.land[i]){
				context.fillStyle = this.land[i][j].color;
				context.fillRect( i*(this.size+this.space), j*(this.size+this.space) , this.size, this.size);
			}
		}
	}

	solve(context){
		if (this.queensPlaced < 5) {
			this.placeOne(context);
			setTimeout(this.solve(context), 1000);
		}
	}

	placeOne(context){
		for(let i in this.land){
			for(let j in this.land[i]){
				if(this.land[i][j].threat == false && this.land[i][j].free == true){
					setTimeout(this.setQueen(parseInt(j), parseInt(i)), 1000);
					this.print(context);
					return;
				}
			}
		}
	}

	threat(x, y){

	}

	setQueen(x, y){
		this.queensPlaced++;
		this.land[y][x].free = false;
		this.land[y][x].color = 'rgb(39, 201, 19)';

		for(let i in this.land){
			for(let j in this.land[i]){
				if( ((y == i || x == j) || (y == i)) && !(y == i && x == j) ){
					this.land[i][j].threat = true;
					this.land[i][j].color = "rgb(215, 15, 45)";
				}
			}
		}
		for(let a=1; y-a>=0 && x-a >=0 ; a++){
			this.land[y-a][x-a].threat = true;
			this.land[y-a][x-a].color = "rgb(215, 15, 45)";
		}
		for(let a=1; (y-a)>=0 && (x+a) < this.width ; a++){
			this.land[y-a][x+a].threat = true;
			this.land[y-a][x+a].color = "rgb(215, 15, 45)";
		}
		for(let a=1; y+a < this.height && x-a >=0 ; a++){
			this.land[y+a][x-a].threat = true;
			this.land[y+a][x-a].color = "rgb(215, 15, 45)";
		}
		for(let a=1; y+a < this.height && x+a < this.width; a++){
			this.land[y+a][x+a].threat = true;
			this.land[y+a][x+a].color = "rgb(215, 15, 45)";
		}
	}

	removeQueen(x, y){
		this.queensPlaced--;
		this.land[y][x].free = true;
		this.land[y][x].color = 'rgb(36, 96, 213)';

		for(let i in this.land){
			for(let j in this.land[i]){
				if( ((y == i || x == j) || (y == i)) && !(y == i && x == j) ){
					this.land[i][j].threat = false;
					this.land[i][j].color = "rgb(36, 96, 213)";
				}
			}
		}
		for(let a=1; y-a>=0 && x-a >=0 ; a++){
			this.land[y-a][x-a].threat = false;
			this.land[y-a][x-a].color = "rgb(36, 96, 213)";
		}
		for(let a=1; (y-a)>=0 && (x+a) < this.width ; a++){
			this.land[y-a][x+a].threat = false;
			this.land[y-a][x+a].color = "rgb(36, 96, 213)";
		}
		for(let a=1; y+a < this.height && x-a >=0 ; a++){
			this.land[y+a][x-a].threat = false;
			this.land[y+a][x-a].color = "rgb(36, 96, 213)";
		}
		for(let a=1; y+a < this.height && x+a < this.width; a++){
			this.land[y+a][x+a].threat = false;
			this.land[y+a][x+a].color = "rgb(36, 96, 213)";
		}
	}

	debug(){
		console.log(JSON.parse(JSON.stringify(this.land[2][2])));
	}

};
