'use strict';

function transform(obj){
  var new_obj = {};
  for (var props in obj){
    obj[props].forEach(function(element){
      new_obj[element.toLowerCase()] = Number(props);
    })
  }
  return new_obj;
};
