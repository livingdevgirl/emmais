//--WORKING CODE----///

$(document).ready(function () {
    $(".buyNowButton").click(function() {
        $(".buyNowButton").text("item added!");

    setTimeout(function() {
        $(".buyNowButton").text("Buy Now!");
    }, 5000);

    });
});


$(".productDetails").click(function(){
  $(".firstTopic").css("display","block");
  $(".secondTopic").css("display", "none");
  $(".thirdTopic").css("display", "none");
    });

    $(".sizeAndFit").click(function(){
      $(".firstTopic").css("display","none");
      $(".secondTopic").css("display", "block");
      $(".thirdTopic").css("display", "none");
        });

        $(".reviews").click(function(){
              $(".firstTopic").css("display","none");
              $(".secondTopic").css("display", "none");
              $(".thirdTopic").css("display", "block");
            });


//----*****THIS IS CODE THAT DOESNT WORK BELOW***------//
//I was trying to make the button click and timeout...//



// $('.buyNowButton').click(function()
// {
//   if ($(this).text() == "Buy Now!")
//   {
//      $(this).text("Item Added!");
//   }
//   else
//   {
//      $(this).text("Buy Now!");
//   };
// });



//--WORKING CODE----///

// $(document).ready(function () {
//     $(".buyNowButton").click(function() {
//         var $self = $(this);
//         var originalText = $self.text().trim();
//         $(".buyNowButton").text("item added!");
//
//         if (originalText == "item added!") {
//             $self.text("buy now!");
//
//         }
//
//     });
// });



///--WORKING CODE----///

 // $(document).ready(function () {
 //     $(".productDetails").click(function() {
 //         $(".firstTopic").toggle("");
 //    });
 //
 // $(document).ready(function () {
 //     $(".sizeAndFit").click(function() {
 //         $(.firstTopic).toggle
 //            $(".secondTopic").toggle("");
 //      });
 //
 //       $(document).ready(function () {
 //           $(".reviews").click(function() {
 //               $(".thirdTopic").toggle("");
 //            });

//----WORKING CODE-----//



//----WORKING CODE-----//

            // $(".firstTopic").click(function(){
            //         $(.firstTopic).show();
            //         $(.secondTopic).hide();
            //         $(.thirdTopic).hide();
            //     });
            //
            //     $(".secondTopic").click(function(){
            //               $(.firstTopic).hide();
            //               $(.secondTopic).show();
            //               $(.thirdTopic).hide();
            //         });
            //
            //         $(".thirdTopic").click(function(){
            //               $(.firstTopic).hide();
            //               $(.secondTopic).show();
            //               $(.thirdTopic).show();
            //             });


// buyNowButton - functionality to click and have it say Item Added!
//


// $(document).ready(function() {
// });$(".buyNowButton").click(function(){
//         $(".buyNowButton").text("Item Added to Cart!");
// });


// $(".buyNowButton").click(function(){
//
//   ;}
