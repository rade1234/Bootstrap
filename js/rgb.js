$(document).ready(function(){
	start();
});

var r = 'F';
var g = 'F';
var b = 'F';
zrob_przyciski
styluj_przyciski
sluchaj_przyciskow
function start(){
	zrob_boxy();
    zrob_przyciski('r');
    zrob_przyciski('g');
    zrob_przyciski('b');
    styluj_przyciski();
    sluchaj_przyciskow();
}

function zrob_boxy(){
	txt='<div class="box_kolorow">Tu zmienia się kolor tła</div>'
	$('.box').html(txt);
	$('.box_kolorow').css({
	'border':'1px solid #000',
	'margin':'10px 0px',
	'height':'100px',
	'padding':'10px'
	});
	$('.box_kolorow').addClass('anim');
	txt='<div class="box_przyciskow">Wybierz kolor RGB</div>';
	$('.box').append(txt);
	$('.box_przyciskow').css({
		'borderTop':'1px solid #ccc',
		'margin':'10px 0px',
		'padding':'10px'
	});
	txt='<div class="box_liter"><br>Tu zmienia się kolor czcionki</div>';
	$('.box ').append(txt);
	$('.box_liter').css({
		'borderTop':'1px solid #ccc',
		'margin':'240px 0px',
		'height':'60px',
		'padding':'10px',
		'background':'#000'
	});
}

function zrob_przyciski(typ){
	label='<div class="label">';
	if(typ=='r'){label+='red ';}
	else if(typ=='g'){label+='green ';}
	else if(typ=='b'){label+='blue ';}
	label+='</div>';
	$('.box_przyciskow').append(label);
	for(i=0;i<=15;i++){
		rgb_value=zamien_na_hex(i.toString());
		box='<div class="przycisk" id="przycisk_'+typ+'_'+rgb_value+'"data-val="'+rgb_value+'"data-type="'+typ+'">'+rgb_value+'</div>';
		$('.box_przyciskow').append(box);
	}
}

function styluj_przyciski(){
	$('.label').css({
		'text-align':'center',
		'padding':'10px 0px',
		'backgroundColor':'#222',
		'color':'#fff',
		'float':'left',
		'width':'100%'
	});
	$('.przycisk').css({
		'text-align':'center',
		'padding':'10px 0px',
		'backgroundColor':'#eee',
		'float':'left',
		'width':(1/16*100)+'%',
		'cursor':'pointer'
	});
	$('.przycisk').addClass('anim');
	
	zaznacz_domyslne();
}

function zaznacz_domyslne(){
	$('#przycisk_r_'+r).addClass('aktywny');
	$('#przycisk_g_'+g).addClass('aktywny');
	$('#przycisk_b_'+b).addClass('aktywny');
}

function sluchaj_przyciskow(){
	$('.przycisk').on('click',function(){
		type=$(this).data('type');
		if(type=='r'){r=$(this).data('val');}
		else if(type=='g'){g=$(this).data('val');} 
		else if(type=='b'){b=$(this).data('val');}
		koloruj();
		$('.przycisk').removeClass('aktywny');
		zaznacz_domyslne();
	});
}

function koloruj(){
	$('.box_kolorow').css('backgroundColor','#'+r+g+b);
	$('.box_liter').css('color','#'+r+g+b);
}

function zamien_na_hex(wartosc){
	switch(wartosc){
		case '10': text='A'; break;
		case '11': text='B'; break;
		case '12': text='C'; break;
		case '13': text='D'; break;
		case '14': text='E'; break;
		case '15': text='F'; break;
		default: text=wartosc;
	}
	return text;
}