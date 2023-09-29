const score1=document.getElementById("score1");
const score2=document.getElementById("score2");
const rockbtn = document.getElementById("rockbtn");
const paperbtn = document.getElementById("paperbtn");
const scissorsbtn = document.getElementById("scissorsbtn");
const restbtn = document.getElementById("resetbtn");
const stmt= document.getElementById("statement");
const img1=document.getElementById("userimg");
const img2=document.getElementById("compimg");

const l=['rock','paper','scissors'];
let s1=0;
let s2=0;
function toss(x,y){
    if (x===y){
        return [0,0];
    }
    else if (x==='rock'){
        if (y==='paper'){
            return [0,1];
        }else{
            return [1,0];
        }
    }
    else if (x==='paper'){
        if (y==='rock'){
            return [1,0];
        }else{
            return [0,1];
        }
    }
    else if (x==='scissors'){
        if (y==='rock'){
            return [0,1];
        }else{
            return [1,0];
        }
    }
    
}
rockbtn.onclick=function(){
    
    let r=Math.floor(Math.random()*3);
    let x='rock';
    img1.src="rock.png";
    img1.alt="Rock";
    let y=l[r];
    let [a,b]=toss(x,y);
    if (a===b){
        stmt.innerHTML="It's a tie";
        img2.src="rock.png";
        img2.alt="Rock";
    }else if (a>b){
        stmt.innerHTML="Rock beats Scissors";
        img2.src="scissors.png";
        img2.alt="Scissors";
        s1++;
    }else if (a<b){
        stmt.innerHTML="Paper beats Rock";
        s2++;
        img2.src="paper.png"
        img2.alt="Paper";
    }
    stmt.style.display="block";
    score1.innerHTML=s1;
    score2.innerHTML=s2;

}
paperbtn.onclick=function(){
    
    let r=Math.floor(Math.random()*3);
    let x='paper';
    img1.src="paper.png";
    img1.alt="Paper";
    let y=l[r];
    let [a,b]=toss(x,y);
    if (a===b){
        stmt.innerHTML="It's a tie";
        img2.src="paper.png";
        img2.alt="Paper";
    }else if (a>b){
        stmt.innerHTML="Paper beats Rock";
        s1++;
        img2.src="rock.png";
        img2.alt="Rock";
    }else if (a<b){
        stmt.innerHTML="Scissors beats Paper";
        s2++;
        img2.src="scissors.png";
        img2.alt="Scissors";
    }
    stmt.style.display="block";
    score1.innerHTML=s1;
    score2.innerHTML=s2;
}
scissorsbtn.onclick=function(){
    let r=Math.floor(Math.random()*3);
    let x='scissors';
    img1.src="scissors.png";
    img1.alt="Scissors";
    let y=l[r];
    let [a,b]=toss(x,y);
    if (a===b){
        stmt.innerHTML="It's a tie";
        img2.src="scissors.png";
        img2.alt="Scissors";
    }else if (a>b){
        stmt.innerHTML="Scissors beats Paper";
        s1++;
        img2.src="paper.png";
        img2.alt="Paper";
    }else if (a<b){
        stmt.innerHTML="Rock beats Scissors";
        s2++;
        img2.src="rock.png";
        img2.alt="Rock";
    }
    stmt.style.display="block";
    score1.innerHTML=s1;
    score2.innerHTML=s2;
}

restbtn.onclick=function(){
    s1=0;
    score1.innerHTML=s1;
    s2=0;
    score2.innerHTML=s2;
    img1.src="userprofile.webp";
    img2.src="botuser.png";
    stmt.style.display="none";
}

