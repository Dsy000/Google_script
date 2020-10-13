function loadPartialHTML_(partial) {
  const htmlServ= HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}
function login_view(){
  return loadPartialHTML_("login");
}
function home_view(){
  return loadPartialHTML_("home_fram");
}
function home_view1(){
  return loadPartialHTML_("dashboard");
}
function home_view2(){
  return loadPartialHTML_("add_cases");
}
function home_view3(){
  return loadPartialHTML_("case_manager");
}
function logout_view(){
  return loadPartialHTML_("dylog");
}

function include(filename){
  return  HtmlService.createHtmlOutputFromFile(filename).getContent();
}
