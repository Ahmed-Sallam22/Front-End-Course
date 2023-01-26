var quotes=[
    {author:'― Oscar Wilde',quote:'“Be yourself; everyone else is already taken.”'},
    {author:'― Marilyn Monroe',quote:'“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”'},
    {author:'― Albert Einstein',quote:'“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”'},
    {author:'― Frank Zappa',quote:'“So many books, so little time.”'},
    {author:'― Marcus Tullius Cicero',quote:'“A room without books is like a body without a soul.”'},
    {author:'― Mahatma Gandhi',quote:'“Be the change that you wish to see in the world.”'},
]
function newQuotes(){
var randomQuotes= Math.floor(Math.random() * (quotes.length))
document.getElementById("quote").innerHTML=quotes[randomQuotes].quote;
document.getElementById("author").innerHTML=quotes[randomQuotes].author;
}