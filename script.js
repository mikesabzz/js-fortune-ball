const randomAnswers = [
    'Yes',
    'It is certain',
    'Definately',
    'Without a doubt',
    'You may rely on it',
    'Outlook looks good',
    'No',
    'No means no',
    'Absolutely not',
    'Very doubtful',
    'Don\'t count on it',
    'Doesn\'t look good',
    'Maybe',
    'Ask again later',
    'Better not tell you now',
    'Not promising',
    'Perhaps',
    'Cannot predict now'
];
function fortuneTeller(randomAnswers){
    let answers = randomAnswers[Math.floor(Math.random() * randomAnswers.length)]
        document.querySelector('.answers').innerText = "loading"
    setTimeout(function(){
        document.querySelector('.answers').innerHTML = answers;
    }, 2000);
}
