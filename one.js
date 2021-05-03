$(document).ready(function(){
    
    $("#first_form").submit(feedtable);
        function feedtable(e){
      e.preventDefault();
      var task = $("#fname").val(),
      male = $("input[type='radio']:checked").val(),
      //female = $("#female:checked").val(),
      desc = $("#age").val(),
      type = $("#city").val();
      
      
      $('.content').append(
        "<tr><td>"+task+"</td>"+
        "<td>"+male+"</td>"+
        "<td>"+desc+"</td>"+
        "<td>"+type+"</td>"+
        "<td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td></tr>"
      );
      $("#first_form").trigger('reset');
    }
      //    WILL RESET FORM TO ORIGINAL VLAUES
     // $("#first_form").trigger('reset');
      //DELETE FUNCTION
      $('body').on('click','.btn-delete',function() {
        $(this).closest('tr').remove();
      });
    // EDIT FUNCTION
        $('body').on('click','.btn-edit',function() {
            var currentRow=$(this).closest("tr"); 
            var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
            var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
            var col3=currentRow.find("td:eq(2)").text();
            var col4=currentRow.find("td:eq(3)").text();
            $(this).hide()
            currentRow.find("td:eq(4)").prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");
         $("#fname").val(col1);
       //  $(".male").val(col2);
         $('input:radio[name="gender"][value='+col2+']').prop('checked',true);
         $("#age").val(col3);
         $("#city").val(col4);
         $(".button").attr("disabled", true);
        // $(this).closest('tr').attr("td:eq(0)",col1);
      });
      $('body').on('click','.btn-update',function() {  
        
      var name = $("#fname").val();
      var gender = $("input[type='radio']:checked").val();
      //female = $("#female:checked").val(),
      var age = $("#age").val();
      var city = $("#city").val();
      $("#first_form").trigger('reset');
        $(this).closest('tr').find('td:eq(0)').text(name);
        $(this).closest('tr').find('td:eq(1)').text(gender);
        $(this).closest('tr').find('td:eq(2)').text(age);
        $(this).closest('tr').find('td:eq(3)').text(city);
        
  
        $(this).closest('tr').attr('fname',name);
        $(this).closest('tr').attr('gender',gender);
        $(this).closest('tr').attr('age',age);
        $(this).closest('tr').attr('city',city);
        
  
        $(this).closest('tr').find('.btn-edit').show();
        $(this).closest('tr').find('.btn-update').remove();
        $(".button").attr("disabled", false);
  
    
      });
});