const myElement = document.getElementById("currentDay");
myElement.innerHTML = dayjs().format('dddd, MMMM D, YYYY')

$(function () {
  var saveButtons = $(".saveBtn");
  saveButtons.each(function(){
    console.log($(this))
    $(this).on("click", function(){
      console.log("Hello");
      console.log(this);
      var divId = $(this).parent().attr('id');
      console.log(divId);
      var textarea = $(this).siblings('textarea').val();
      console.log(textarea);
      localStorage.setItem(divId,textarea);
    }) 
  }) 
  var timeBlock = $(".time-block");
  timeBlock.each(function(){
    console.log(this);
    var blockid=$(this).attr("id");
    console.log(blockid);
    $(this).children("textarea").val(localStorage.getItem(blockid));
  })
});
