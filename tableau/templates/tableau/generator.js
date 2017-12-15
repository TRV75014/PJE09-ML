//Données à exporter
var tableau = {
	"user": document.getElementById("pseudo").value,
	"note": document.getElementById("note").value,
	"progressif": document.getElementById("progressive").checked,
	"black": [],
"white": []};

function genererTableau(){
	// Initialisation du canevas
	var canvas = document.getElementById("monCanvas"); 
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// taille Canevas
	var myCanvasWidth = 800;
	var myCanvasHeight = 800;

	var myWidth = 577;
	var myHeight = 577;

	var marge_param = 6 ;

	var marge = myWidth*marge_param/80;
	var xUpperLeft = (myCanvasWidth-myWidth)/2;
	var yUpperLeft = (myCanvasHeight-myHeight)/2;
	var widthmin = myWidth*5/80;
	var heightmin = myHeight*5/80;
	var deltaxmin = myWidth*3/80;
	var deltaymin = myHeight*3/80;
	// contraintes de voisinage diminuant progressivement de init a min si (progressif=true)
	var deltaxinit = myWidth*6/80;
	var deltayinit = myHeight*6/80;
	var progressif = document.getElementById("progressive").checked;

	// AurÃ©lie Nemours 



	// si on veut des rectangles blancs, nRectWhite > 0
	var nbRect = document.getElementById("nbRectInp").value;
	var nbRectWhite = document.getElementById("nbRectWhiteInp").value;

	var indfond = 0;
	var couleurs = new Array("","");

	couleurs[indfond] = "white";
	couleurs[1-indfond]= "black";




	// on initialise l'array(ligne,colonne) avec fond
	var myLine = new Array() ;
	for (i = 0; i < myWidth; i++)
	{
	  myLine[i] = indfond;
	}

	// rectangles noirs
	var rectangles = new Array()
	for (i = 0; i < nbRect; i++)
	{
	  rectangles[i] = [0,0,0,0];
	}

	// rectangles blancs
	var rectanglesWhite = new Array()
	for (i = 0; i < nbRectWhite; i++)
	{
	  rectanglesWhite[i] = [0,0,0,0];
	}

	// remplir une ligne avec le code couleur indcoul
	function fillLine(ligne,lmax,indcoul)
	 {
	   for (c = 0; c < lmax; c++)
	   {
		  setTimeout("ligne[c]=indcoul", 5000);
	   }
	 }
	// remplir toutes les lignes
	  function fillRect(rectangle, lmax, cmax,indcoul)
	 {
	   for (l = 0; l < cmax; l++)
	   {
		  setTimeout("fillLine(rectangle[l],lmax,indcoul)", 5000);
	   }
	 }
	 

	// dessiner un rectangle
	function rectangle3(x,y,w,h,couleur)
	{
	  var canvas = document.getElementById("monCanvas"); 
	  var context = canvas.getContext("2d");
	  context.fillStyle=couleur;
	  context.fillRect(x,y,w,h);
	}


	for (i = 0; i < nbRect; i++) 
	{ 
	 
	  do
	  {
		notok = true
		// contraintes de voisinage 
		if (progressif==true) {
			deltaxi = (deltaxmin - deltaxinit)*i/(nbRect-1) + deltaxinit
			deltayi = (deltaymin - deltayinit)*i/(nbRect-1) + deltayinit ;
		} else {
			deltaxi = deltaxmin
			deltayi = deltaymin ;
		}
		
		// 4 coins du rectangle 
		x1 =Math.floor(Math.random()*(myWidth-2*marge))+xUpperLeft+marge+1
		y1 =Math.floor(Math.random()*(myHeight-2*marge))+yUpperLeft+marge+1
		x2 =Math.floor(Math.random()*(myWidth-2*marge))+xUpperLeft+marge+1
		y2 =Math.floor(Math.random()*(myHeight-2*marge))+yUpperLeft+marge+1
	  
		xmin = Math.min(x1,x2)
		xmax = Math.max(x1,x2)
	  
		ymin = Math.min(y1,y2)
		ymax = Math.max(y1,y2)
		
		// contrÃ´le de largeur
		w1 = xmax-xmin
		if (w1>=widthmin) { notok = false ;
		}
		
		// contrÃ´le de hauteur
		h1 = ymax-ymin
		if (h1<heightmin) { notok = true ;
		}
		
		if (notok == false)
		{
		for (j = 0; j < i; j++)
		{
			if (Math.abs(xmin-rectangles[j][0])<deltaxi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(xmin-rectangles[j][2])<deltaxi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(xmax-rectangles[j][0])<deltaxi) 
			{ 
				notok = true
				break;
			}		
			if (Math.abs(xmax-rectangles[j][2])<deltaxi) 
			{ 
				notok = true
				break;
			}	
			if (Math.abs(ymin-rectangles[j][1])<deltayi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(ymin-rectangles[j][3])<deltayi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(ymax-rectangles[j][1])<deltayi) 
			{ 
				notok = true
				break;
			}		
			if (Math.abs(ymax-rectangles[j][3])<deltayi) 
			{ 
				notok = true
				break;
			}	
		}
		} 
		
		
	  }	 	
	  while(notok==true);
	  rectangles[i] = [xmin, ymin, xmax, ymax]
	  if (i<nbRect) {
		rectangle3(xmin,ymin,w1,h1,"black");
	  }
	 
	}


	// les rectangles blancs
	for (i = 0; i < nbRectWhite; i++) 
	{ 
	 
	  do
	  {
		notok = true
		// contraintes de voisinage 
		if (progressif==true) {
			deltaxi = (deltaxmin - deltaxinit)*i/(nbRect-1) + deltaxinit
			deltayi = (deltaymin - deltayinit)*i/(nbRect-1) + deltayinit ;
		} else {
			deltaxi = deltaxmin
			deltayi = deltaymin ;
		}
		
		// 4 coins du rectangle 
		x1 =Math.floor(Math.random()*(myWidth-2*marge))+xUpperLeft+marge+1
		y1 =Math.floor(Math.random()*(myHeight-2*marge))+yUpperLeft+marge+1
		x2 =Math.floor(Math.random()*(myWidth-2*marge))+xUpperLeft+marge+1
		y2 =Math.floor(Math.random()*(myHeight-2*marge))+yUpperLeft+marge+1
	  
		xmin = Math.min(x1,x2)
		xmax = Math.max(x1,x2)
	  
		ymin = Math.min(y1,y2)
		ymax = Math.max(y1,y2)
		
		// contrÃ´le de largeur
		w1 = xmax-xmin
		if (w1>=widthmin) { notok = false ;
		}
		
		// contrÃ´le de hauteur
		h1 = ymax-ymin
		if (h1<heightmin) { notok = true ;
		}
		
		if (notok == false)
		{
		for (j = 0; j < i; j++)
		{
			if (Math.abs(xmin-rectanglesWhite[j][0])<deltaxi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(xmin-rectanglesWhite[j][2])<deltaxi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(xmax-rectanglesWhite[j][0])<deltaxi) 
			{ 
				notok = true
				break;
			}		
			if (Math.abs(xmax-rectanglesWhite[j][2])<deltaxi) 
			{ 
				notok = true
				break;
			}	
			if (Math.abs(ymin-rectanglesWhite[j][1])<deltayi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(ymin-rectanglesWhite[j][3])<deltayi) 
			{ 
				notok = true
				break;
			}
			if (Math.abs(ymax-rectanglesWhite[j][1])<deltayi) 
			{ 
				notok = true
				break;
			}		
			if (Math.abs(ymax-rectanglesWhite[j][3])<deltayi) 
			{ 
				notok = true
				break;
			}	
		}
		} 
		
		
	  }	 	
	  while(notok==true);
	  rectanglesWhite[i] = [xmin, ymin, xmax, ymax]
	  rectangle3(xmin,ymin,w1,h1,"white");
	 
	}
	
	// On update les données relatives au tableau
	tableau.progressif = progressif;
	tableau.black = rectangles;
	tableau.white = rectanglesWhite;
	return false;
}

function exportData() {
	console.log(tableau);
	console.log(tableau.black[1]);
	var tableauJSON = JSON.stringify(tableau);
	localStorage.setItem("data", tableauJSON);
	alert(tableauJSON);
}