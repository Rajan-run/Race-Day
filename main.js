let raceNumber = Math.floor(Math.random() * 1000);
let early=true;
let age=18;
if(age>18 && early)
{raceNumber+=1000;}

if(age>18 && early)
{
  console.log(`The race will begin at 9:30 am. Your racenumber is ${raceNumber}`)
}
else if(!early && age>18)
{
  console.log(`For older people the race will begin at 11:00 am. YOur raceNumber is ${raceNumber}`);
}
if(age<18) 
{console.log(`They will race at 12:30 pm. Their race number is ${raceNumber}`)}; 
else if (age===18) {
  console.log('Please approach the registration desk.Thanks!');
}
