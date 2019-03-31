
function fortune()
{
    var luck = [];
    
    
    
    luck.push("Today it's up to you to create the peacefulness you long for.");
    luck.push("A friend asks only for your time not your money.");
    luck.push("If you refuse to accept anything but the best, you very often get it.");
    luck.push("A smile is your passport into the hearts of others.");
    luck.push("A good way to keep healthy is to eat more Chinese food.");
    luck.push("Your high-minded principles spell success.");
    luck.push("Hard work pays off in the future, laziness pays off now.");
    luck.push("Change can hurt, but it leads a path to something better.");
    luck.push("Enjoy the good luck a companion brings you.");
    luck.push("People are naturally attracted to you.");
    luck.push("Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.");
    luck.push("A chance meeting opens new doors to success and friendship.");
    luck.push("You learn from your mistakes... You will learn a lot today.");
    luck.push("If you have something good in your life, don't let it go!");
    luck.push("What ever you're goal is in life, embrace it visualize it, and for it will be yours.");
    luck.push("Your shoes will make you happy today.");
    luck.push("You cannot love life until you live the life you love.");
    luck.push("Be on the lookout for coming events; They cast their shadows beforehand.");
    luck.push("Land is always on the mind of a flying bird.");
    luck.push("The man or woman you desire feels the same about you.");
    luck.push("Meeting adversity well is the source of your strength.");
    luck.push("A dream you have will come true.");
    luck.push("Our deeds determine us, as much as we determine our deeds.");
    luck.push("Never give up. You're not a failure if you don't give up.");
    luck.push("You will become great if you believe in yourself.");
    luck.push("Accept something that you cannot change, and you will feel better.");
    luck.push("Adventure can be real happiness.");
    luck.push("Advice is like kissing. It costs nothing and is a pleasant thing to do.");
    luck.push("Advice, when most needed, is least heeded.");
    luck.push("You will marry your lover.");
    luck.push("All the troubles you have will pass away very quickly.");
    luck.push("A very attractive person has a message for you.");
    luck.push("All your hard work will soon pay off.");
    luck.push("You already know the answer to the questions lingering inside your head.");
    luck.push("There is no greater pleasure than seeing your loved ones prosper.");
    luck.push("Any decision you have to make tomorrow is a good decision.");
    luck.push("Competence like yours is underrated.");
    luck.push("Better ask twice than lose yourself once.");

    
    
    
    var fortune = (Math.floor(Math.random()*luck.length));
    
    // alert("Your Fortune : " + luck[fortune]);
    var msg = document.getElementById('changeme');
    msg.innerHTML = luck[fortune];
}
