var session_user;
var session_pass;
var session_id;


function log_check(user,pass){
  if(user === "deepak" && pass === "123"){
    Logger.log("Authantication_Done");
    session_user=user;
    session_pass=pass;  
    session_id = getsessionID();
    var status="ok";
    var data = [session_user,session_id,status];
    return data;
  }else{
    Logger.log("Authantication_Fail");
    return "Username or password incorrect !";
  }
 }


function session_check(uname,sessionid){
  alert("Serrver_session_check function");
  if(uname === session_user && sessionid === session_id){
     return true;
  }else{
   //auth fail
    return false;
  }
}

function getsessionID(){
  return Math.floor((Math.random() * 10000000000) + 1);
}


function logout(){
   session_user="";
   session_pass="";
  if( session_user === "" && session_pass=== ""){
    //logout sucsessfully
  }else{
    session_user="abc";
    session_pass="abc";
  }
}
