var userData=[];
var userFilter;
$('.foradd button').click(function(){
    $('.background').show();
    $('.cedvel').hide();
    $('.background_2').hide();
})
$('.svg svg').click(function(){
    $('.background').hide();
    $('.cedvel').show();
})
$('.creat').click(function(){
    var date = new Date();
    var Millisecond=date.getMilliseconds(); 
    if($('.ad').val()!="" && $('.soyad').val()!="" &&  $('.Position').val()!="" && $('.Office').val()!="" &&$('.Salary').val()){
        userData.push({   
                id:Millisecond,
                name:$('.ad').val(),
                lastName:$('.soyad').val(),
                specality:$('.Position').val(),
                bussines:$('.Office').val(),
                botch:$('.Salary').val()
            });
            doldur();
            $('.background input').val("");
            $('.background').hide();
            $('.cedvel').show();
    }
});
doldur();
function doldur() {
    $('.tbody').html(" ");
    for (let i = 0; i < userData.length; i++) {
    $('.tbody').append(
        `
    <tr idem="${userData[i].id}">
        <td>${i+1}</td>
        <td>${userData[i].name}</td>
        <td>${userData[i].lastName}</td>
        <td>${userData[i].specality}</td>
        <td>${userData[i].bussines}</td>
        <td>${userData[i].botch}$</td>
        <td><i num="${userData[i].id}" class="fa-solid fa-pen-to-square"></i>
        <i idim="${userData[i].id}" class="fa-solid fa-ban"></i></td>
    </tr>
        `
        )};
}
$(document).ready(function(){
    $(document).on('click','.fa-ban',function() {
    for (let index = 0; index < userData.length; index++) {
       if(userData[index].id==$(this).attr("idim")) {
          $(this).parents('tr').remove();
          userData.splice(index,1);
          for(let i = 0; i < $(".tbody tr").length; i++) {
                $('.tbody').children().eq(i).children().first().html(i+1);
            }
            }
}
});
    $(document).on('click','.fa-pen-to-square',function(){
       $(".background_2").show();
       $('.cedvel').hide();
       userFilter=userData.filter((item)=> item.id==$(this).attr('num'))[0];
       $('.adUpdate').val(userFilter.name);
       $('.soyadUpdate').val(userFilter.lastName);
       $('.PositionUpdate').val(userFilter.specality);
       $('.OfficeUpdate').val(userFilter.bussines);
       $('.SalaryUpdate').val(parseInt(userFilter.botch));
    })
    $(".updateBtn").click(function(){
        userFilter.name=$('.adUpdate').val();
        userFilter.lastName=$('.soyadUpdate').val();
        userFilter.specality=$('.PositionUpdate').val();
        userFilter.bussines=$('.OfficeUpdate').val();
        userFilter.botch=$('.SalaryUpdate').val();
        doldur();
        $(".background_2").hide();
        $('.cedvel').show();
    });
});
$(document).ready(function(){
$("#sorch").on("keyup", function() {
    var inpVal = $(this).val().toLowerCase();
    console.log(inpVal);
    $(".tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(inpVal) > -1)
    });
  })
});