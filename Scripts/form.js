




var subjects_list =["Unit 1: Introduction","Unit 2: Array-Based Lists","Unit 3: Linked Lists","Unit 4: Skiplists","Unit 5: Hash Tables","Unit 6: Recursion","Unit 7: Binary Trees","Unit 8: Scapegoat Trees","Unit 9: Red–Black Trees","Unit 10: Heaps","Unit 11:Sorting Algorithms","Unit 12: Graphs","Unit 13: Binary Trie"];
var question;
 //var  subjects_element = document.getElementById('qexampleFormControlSelect1') ;



$(document).ready(function(){


  var  ans = $('#id10').html();



for (var i=0; i<subjects_list.length;i++){

$("select").append( $("<option />").val(subjects_list[i]).text(subjects_list[i]));
}

});



function when_typed(){
  question= $('#questionid').val();


$('#qid').text(question);

//  alert(question);



}





// then append the select to an element in the dom
