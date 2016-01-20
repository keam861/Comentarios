// $(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 

// });

// Una manera corta de escribir document.ready
$(function(){
  
  hideForm();
  hideError();
  hideButton();
  displayNewComment();

  $("#new_comment").submit(function( event ) {
    event.preventDefault();
   
    var new_comment = $("textarea").val();
    var new_author = $("input#authorName").val();

    console.log(validation(new_comment, new_author))
    if (validation(new_comment, new_author) == true){

      $("<li>" + new_comment + "<span class='author'>" + new_author + "</span>" + "</li>").appendTo("ul#comment_list")

      clearInputs();
      $( this ).hide();
      $( "#new_comment_button" ).show();

      hideError();

    } else {
      console.log("hubo un error");
    }

  });

});

function hideForm(){
  var hid = $("#new_comment").hide();

}

function hideButton(){
  $("#new_comment_button").click(function( event ) { 
    $( this ).hide();
    });
}

function displayNewComment(){
  $("#new_comment_button").click(function( event ){
    $("#new_comment").show();
  });
}

function clearInputs(){
  $("#comment").val('');
  $("#authorName").val('');
}

function hideError(){
  $(".divErrors").hide();
}

function validation(new_comment, new_author){

  console.log(new_comment)
  // if (new_comment == "") {
  //   // return false
  //   $("div.errorComment").show();
  // } else {
  //   return true
  // }

  if (new_author == "" || new_comment == "") {
    // return false
    $("div.divErrors").show();
  } else {
    return true
  }
}
