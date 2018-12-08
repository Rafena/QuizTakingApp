window.onload=function(){
var colleges = ['Queens College', 'Queens Borrough', 'Nassau Community','Baruch College'];
    var select = document.getElementById( 'college' );

for( college in colleges ) {

    select.add( new Option( colleges[college] ) );

    };
    
    
    
var departments = ['Computer Science', 'Physics', 'Finance','Math'];
    var select = document.getElementById( 'department' );

for( department in departments ) {

    select.add( new Option( departments[department] ) );

    };
}


