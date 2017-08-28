$(document).ready(function () {
$('#calculation').submit(function(event){
  event.preventDefault();
  var asphaltSurface = parseFloat($('#asphaltSurface').val());
  var q = parseFloat($('#appliedLoad').val());
  var a = parseFloat($('#loadDiameter').val());
  var deltaPsi = parseFloat($('#deltaPsi').val());
  var zR = parseFloat($('#zR').val());
  var sZero = parseFloat($('#sZero').val());
  var esal = parseFloat($('#esal').val());
  var e1 = parseFloat($('#e1').val());
  var e2 = parseFloat($('#e2').val());
  var h1 = parseFloat($('#h1').val());

  var result = calculatePorous (asphaltSurface, q,a,deltaPsi,zR, sZero, esal,e1, e2, h1);
  $(".well").show();
  $("#sn").text(result.structuralNum);
  $("#mR").text(result.mR);
  $("#thick").text(result.thickness);
});

})
