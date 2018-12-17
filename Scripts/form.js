




var subjects_list =["Binary Trees", "Linkced Lists","Matematical Induction"];

 //var  subjects_element = document.getElementById('qexampleFormControlSelect1') ;



alert("Eco");
$(document).ready(function(){


  var  ans = $('#id10').html();



for (var i=0; i<subjects_list.length;i++){

$("select").append( $("<option />").val(subjects_list[i]).text(subjects_list[i]));
}

});









// then append the select to an element in the dom
