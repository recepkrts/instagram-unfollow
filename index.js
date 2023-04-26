$(function (){//Veri Çekme

    var takipEdilen = [], takipci = [];

    $("#follower_id").click(function(){
      var baseUrl = "http://localhost:3000";
      var tbody=$("#tbody_id_follower");
      //$.ajax().done().fail();
      $.ajax({
        method:"GET",
        url:baseUrl+"/follower"
      }).done(function(veriler){//Çalışacak Kısım
        for(var i=0;i<veriler.length;i++){
          var trHtml="";
          trHtml+='<tr><td><a href="'+veriler[i].string_list_data[0].href+'">'+veriler[i].string_list_data[0].href+'</a></td><td>'+veriler[i].string_list_data[0].value+'</td></tr>';
          tbody.append(trHtml);
          takipci.push(trHtml);
        }
      }).fail(function(){//Hata alındığında çalışan kısım
        alert("Listeleme Sırasında Hata Oluştu");
      });
    });
    $("#following_id").click(function(){
        var baseUrl = "http://localhost:3000";
        var tbody=$("#tbody_id_following");
        //$.ajax().done().fail();
        $.ajax({
          method:"GET",
          url:baseUrl+"/relationships_following"
        }).done(function(veriler){//Çalışacak Kısım
          for(var i=0;i<veriler.length;i++){
            var trHtml="";
            trHtml+='<tr><td><a href="'+veriler[i].string_list_data[0].href+'">'+veriler[i].string_list_data[0].href+'</a></td><td>'+veriler[i].string_list_data[0].value+'</td></tr>';
            tbody.append(trHtml);
            takipEdilen.push(trHtml);
          }
        }).fail(function(){//Hata alındığında çalışan kısım
          alert("Listeleme Sırasında Hata Oluştu");
        });
      });  
      $("#unf_id").click(function(){

        $(".unf").css("display","flex"); 
        
        takipEdilen.forEach(function(element){
            if(!takipci.includes(element)){
                //unf.push(element);
                $("#unf").append(element);
            } 
                //$("#unf").append(element);
                 
        });
    });   
});