function progress(button){
    if(button.id==1)
    {
        $('.Rounded_Rectangle_5_copy').show();
        $('.Rounded_Rectangle_5').hide();
        $('.Rounded_Rectangle_505_copy').hide();
        $('.Rounded_Rectangle_50505_copy').hide();
        $('#can1').show();
        $('#can2').hide();
        $('#can3').hide();
        var element= document.getElementById("period");
        element.innerHTML='Monthly Revenue Progress';
    }    
    else if(button.id==2){
        $('.Rounded_Rectangle_5_copy').hide();
        $('.Rounded_Rectangle_505_copy').show();
        $('.Rounded_Rectangle_50505_copy').hide();
        $('#can2').show();
        $('#can1').hide();
        $('#can3').hide();
        var element= document.getElementById("period");
        element.innerHTML='Daily Revenue Progress';

    }
         else{
            $('.Rounded_Rectangle_5_copy').hide();
            $('.Rounded_Rectangle_505_copy').hide();
            $('.Rounded_Rectangle_50505_copy').show();
            $('#can3').show();
            $('#can2').hide();
            $('#can1').hide();
            var element= document.getElementById("period");
        element.innerHTML='Yearly Revenue Progress';
         }
    
}
function valid(form){
   
    var element= document.getElementById(form.name.value);
    if(element){
    element.style.backgroundColor = "pink";}
    else   alert(form.name.value +" is not founded");
}    
function stylefon(form){
    form.style.backgroundColor = "white";
}
function search(form1){
    alert(form1.name.value + " is founded");
}
var bool1=true;
var bool2=true;
var bool3=true;
var bool4=true;
function task(ell){
if(ell.id=="e1"){
    if(bool1){
        ell.style.backgroundColor = "rgb(253, 120, 88)";
        bool1=false;
    }
    else {
        ell.style.backgroundColor="white";
        bool1=true;
    }
}
else if(ell.id=="e2"){
    if(bool2){
        ell.style.backgroundColor = "rgb(253, 120, 88)";
        bool2=false;
    }
    else {
        ell.style.backgroundColor="white";
        bool2=true;
    }
}
else if(ell.id=="e3"){
    if(bool3){
        ell.style.backgroundColor = "rgb(253, 120, 88)";
        bool3=false;
    }
    else {
        ell.style.backgroundColor="white";
        bool3=true;
    }
}
else{
    if(bool4){
        ell.style.backgroundColor = "rgb(253, 120, 88)";
        bool4=false;
    }
    else {
        ell.style.backgroundColor="white";
        bool4=true;
    }
    

}    
   
}
var pr = true;
function showme(){
    if(!pr)
    {
        $(".info").slideUp(1000);
        pr=true;
    }
    else{
        $(".info").slideDown(1000);
        pr = false;
    }
}
var bool5=true;
function hideMain(){
    if(bool5){
        bool5=false;
        $('.main_contents').slideUp();
        $('#prog').show();
        $('#progress').show();
        $('#hour').show();
        $('#today task').show();
        $('#customers feed').show();
        $('#shipments').show();

    }
    else{
        bool5=true;
        $('#prog').hide();
        $('#progress').hide();
        $('#hour').hide();
        $('#today task').hide();
        $('#customers feed').hide();
        $('#shipments').hide();
        $('.main_contents').slideDown();

    }
}
var bool6=true;
function changesidebar(){
    if(bool6){
        $('.Rectangle_8').css("left","137px");
        $('.hid').slideDown();
        bool6=false;

    }
    else{
        $('.Rectangle_8').css("left","37px");
        $('.hid').slideUp();
        bool6=true;
    }
}

var block=$('.main_contents');
function getajax(){
    $.ajax({
        type:'GET',
        url: "data.json",
        dataType:'json',
        success:function(data){
          
            console.log(data);
            $.each(data.person, function(i, f) {
                var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
                 "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
                 $(tblRow).appendTo(".main_contents");
            })   },
      
        error:function(){
            alert('error')
        }
    });
}