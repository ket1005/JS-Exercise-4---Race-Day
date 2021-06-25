let raceNumber = Math.floor(Math.random()*1001);
let runnerRegistred = false;
let runnersAge = 18;
if (runnersAge>=18&&runnerRegistred){
    raceNumber+=1000;
}
if (runnersAge>=18&&runnerRegistred)
{
    console.log('Early adults run at 9:30 am.' +' Your race number = '+ raceNumber);
}else if(runnersAge>=18&&!runnerRegistred){
    console.log('Late adults run at 11:00 am.' + 'Your race number = '+ raceNumber);
}else if(runnersAge<18){
    console.log('Youth registrants run at 12:30 pm.' + +'Your race number = '+ raceNumber);
}else{
    console.log('You are not our race participant!');
}
