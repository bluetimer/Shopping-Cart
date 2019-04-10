var Items= [];
var Prices= [];

$("#update").click(function(){
    var item = $("#item").val();
    Items.push(item);
    var price = $("#price").val();
    price = parseInt(price);
    Prices.push(price);
    $("#itemoutput").append("<p>"+item+"</p>");
    $("#priceoutput").append("<p>"+price+"</p>");

    $( ".numberOfItems" ).html(Items.length);
});

$("#checkout").click(function(){
    var totalprice = 0;
    Prices.forEach(function(n) {
        totalprice = totalprice + n;
    });
    var totalitems = Items.length ;
    console.log(totalitems);
    alert("The total is $ "+totalprice+"."+"Thanks for the pruchase of "+Items[0]+" and all of your other items!");
});



