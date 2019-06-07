var database = [];

$("#finish").on("click", function() {
  console.log("click");
  var friendProfile = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val()
    ]
  };
  console.log(friendProfile);
  database.push(friendProfile);
  console.log(database);

  $.ajax("/api/data", {
    type: "POST",
    data: friendProfile
  }).then(function() {});
});
