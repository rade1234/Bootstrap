var obj_i=0;

function kolko(){
	this.id=obj_i++,
	this.promien="30",
	this.kolor='#000',
	this.rysuj=function(){
		return '<div class="kolko" id="kolko_'+this.id+'" style="width:'+(this.promien*2)+'px; height:'+(this.promien*2)+ 'px; background-color:'+this.kolor+';">';
	}
	this.szejk_ass=function(typ){
		if(typ=='pion'){
			$('#kolko_'+this.id).addClass('kolko_szejk_ass_pion');
		}else{
			$('#kolko_'+this.id).addClass('kolko_szejk_ass_poziom');
		}
	}
	this.migaj=function(){
		$('#kolko_'+this.id).addClass('kolko_migaj');
	}
};

$(document).ready(function(){
	for(i=1;i<=5;i++){
		x=new kolko();
		$('.wyniki').append(x.rysuj());
		if(i==2){
			x.migaj('migaj');
		}
		if(i==3){
			x.szejk_ass('pion');
		}
		if(i==5){
			x.szejk_ass('poziom');
		}
	}
});