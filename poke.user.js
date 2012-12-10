// ==UserScript==
// @name           PokeWars
// @namespace      http://drewmcdermott.net
// @version        1.0
// @include        https://www.facebook.com/pokes*
// @include        http://www.facebook.com/pokes*
// ==/UserScript==



var ref_time = 100;

var t= setInterval(main,ref_time);

function main()
{
    var pokes = getPokes();
	
	for(var i = 0; i < pokes.length; i++)
	{
	  pokes[i].click();
	}
}


function getPokes()
{
	var poke_panel = document.getElementById("pagelet_pokes");
	var r_pokes = poke_panel.getElementsByClassName("uiIconText");
	return r_pokes;
}