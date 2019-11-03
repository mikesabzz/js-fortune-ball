const randomAnswers = [
    'Yes',
    'No',
    'Maybe',
    'Figure out what you want!',
    'Set your intention',
    'It is certain',
    'Definately',
    'Without a doubt',
    'Ask again later',
    'No means no',
    'Absolutely not',
    'Better not tell you now',
    'Not promising',
    'Perhaps',
    'Cannot predict now'
];

function fortuneTeller(randomAnswers){
    let answers = randomAnswers[Math.floor(Math.random() * randomAnswers.length)]
        document.querySelector('.answers').innerHTML = "loading";
    setTimeout(function(){
        document.querySelector('.answers').innerHTML = answers;
    }, 2000);
}