function processUser()
{
  var parameters = location.search.substring(1).split("&");

  alert(unescape(parameters[0].split("=")[1])) ;
  alert(unescape(parameters[1].split("=")[1])) ;

}
