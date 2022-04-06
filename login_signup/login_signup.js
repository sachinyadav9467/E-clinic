let login_click_flag=0;//1 means active
let signup_click_flag=0;//1 means active
getElementById('register').addEventListener("click",signup_click());
function login_click(){
    if(!(login_click_flag || signup_click_flag)){
    document.getElementById('login_signup_page').style.display="block";
    document.getElementById('login_card').style.display="block";
    document.getElementById('signup_card').style.display="none";   
    document.getElementsByClassName('search_doctor_card')[0].style.display="none";
    }
    else if(signup_click_flag)
    {  
        document.getElementById('signup_card').style.display="none";
        document.getElementById('login_card').style.display="block";
        signup_click_flag=!signup_click_flag;
    }
    else
    {
        document.getElementById('login_signup_page').style.display="none";
        document.getElementsByClassName('search_doctor_card')[0].style.display="block";
    }
    login_click_flag=!login_click_flag;
}
function signup_click(){
    if(!(login_click_flag || signup_click_flag)){
        document.getElementById('login_signup_page').style.display="block";
        document.getElementById('signup_card').style.display="block";
        document.getElementById('login_card').style.display="none";
        document.getElementsByClassName('search_doctor_card')[0].style.display="none";
        }
        else if(login_click_flag)
        {  
            document.getElementById('signup_card').style.display="block";
            document.getElementById('login_card').style.display="none";
            login_click_flag=!login_click_flag;
        }
        else
        {
            document.getElementById('login_signup_page').style.display="none";
            document.getElementsByClassName('search_doctor_card')[0].style.display="block";
        }
    signup_click_flag=!signup_click_flag;
}