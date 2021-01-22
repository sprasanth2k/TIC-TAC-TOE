var turn,c=0;
turn="X";

var cell=[0,1,1,1,1,1,1,1,1,1];
var board=["","","","","","","","","",""];
function hoverfunc(n)
{
    if(cell[parseInt(n)])
    {
        if(turn=="X")
        {
            document.getElementById(n).innerHTML="X";
        }
        else
        {
            document.getElementById(n).innerHTML="O";
        }
    }
}

function nonhoverfunc(n)
{
    if(cell[parseInt(n)])
    {
        document.getElementById(n).innerHTML="";
    }
}

function clickfunc(n)
{
    if(turn=="X")
    {
        document.getElementById(n).innerHTML="X";
        board[parseInt(n)]="X";
        turn="O";
    }
    else
    {
        document.getElementById(n).innerHTML="O";
        board[parseInt(n)]="O";
        turn="X";
    }

    c++;
    
    document.getElementById(n).style.cursor="not-allowed";
    document.getElementById(n).style.background="transparent";
    document.getElementById(n).style.color="black";
    cell[parseInt(n)]=0;
    
    if(check("X"))
    {
        document.getElementById("x-won").style.display="grid";
        document.getElementById("o-won").style.display="none";
        document.getElementById("draw").style.display="none";
        document.getElementById("xo-board").style.display="none";

        document.body.style.background="rgba(0,0,0,0.9)";
        document.getElementById("header").innerHTML="GAME OVER";

    }
    else if(check("O"))
    {
        document.getElementById("x-won").style.display="none";
        document.getElementById("o-won").style.display="grid";
        document.getElementById("draw").style.display="none";
        document.getElementById("xo-board").style.display="none";

        document.body.style.background="rgba(0,0,0,0.9)";
        document.getElementById("header").innerHTML="GAME OVER";
    }
    if(c==9)
    {
        document.getElementById("x-won").style.display="none";
        document.getElementById("o-won").style.display="none";
        document.getElementById("draw").style.display="grid";
        document.getElementById("xo-board").style.display="none";

        document.body.style.background="rgba(0,0,0,0.9)";
        document.getElementById("header").innerHTML="GAME OVER";
    }
}

function check(ch)
{
    if((board[1]==ch&&board[2]==ch&&board[3]==ch)||(board[4]==ch&&board[5]==ch&&board[6]==ch)||(board[7]==ch&&board[8]==ch&&board[9]==ch)||
    (board[1]==ch&&board[4]==ch&&board[7]==ch)||(board[2]==ch&&board[5]==ch&&board[8]==ch)||(board[3]==ch&&board[6]==ch&&board[9]==ch)||
    (board[1]==ch&&board[5]==ch&&board[9]==ch)||(board[3]==ch&&board[5]==ch&&board[7]==ch))
    {
        return 1;
    }
    return 0;
}
function restartfunc()
{
    window.location.href=window.location.href;
}