import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.locations.helpers({
  locations: function() {
  	var mdb = Locations.find().fetch();
  	//var array = mdb.fetch();
  	var cmByLocation = {};
  	for (a of mdb) {
  		cmByLocation=countCostumers(cmByLocation,a);
	}
	var i = 0;
	var result = [];
	for(o in cmByLocation){
		result[i]=cmByLocation[o];
		i++;
	}
    return result;
  }
});

function countCostumers(cmByLocation, element){
	var array=cmByLocation;
	if(element.data.location in array){
		var obj = array[element.data.location];
		obj.count ++;
	}else{
		var obj = {location:element.data.location, count:1, image:getImage(element.data.location)};
		array[element.data.location]=obj;
	}
	return array;
}

function getImage(location){
	var image = "";
	switch(location) {
    case "Carnes":
        image="Carnes.jpg";
        break;
    case "Snacks":
        image="Snacks.jpg";
        break;
    case "Bebidas":
        image="Bebidas.jpg";
        break;
    case "Verduras":
        image="Verduras.jpg";
        break;
    case "Frutas":
        image="Frutas.jpg";
        break;
    default:
        image="none";
	}
	return image;
}