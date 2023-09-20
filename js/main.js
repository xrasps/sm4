let news_list = document.querySelector(".news");

let news = [
    {
        name:"Exhibition Van Gog",
        date:"1.09.20023",
        text:"Hola. Hola. Hola. Como estas? Estoy bien. Estoy muy bien",
        author: "Mario",
        id:"1"
    },
    {
        name:"Zelensky urges unity in dramatic UN address",
        date:"13.09.20023",
        text:"Ukrainian President Volodymyr Zelensky urged a global front against Russian aggression in a dramatic speech delivered Tuesday during the UN General Assembly – his first in-person address to the global body since Russia’s 2022 invasion.",
        author: "Bred",
        id:"2"
    },
    {
        name:"China declines to address WSJ report foreign minister ",
        date:"12.09.20023",
        text:"China’s Foreign Ministry on Tuesday declined to address a report its former foreign minister Qin Gang was ousted from his position over an alleged extramarital affair.",
        author: "Kim Chen En",
        id:"3"
    },
    {
        name:"Exclusive: Qatar PM touts",
        date:"11.09.20023",
        text:"Emad Shargi, Morad Tahbaz and Siamak Namazi, along with two Americans who have not been publicly named, arrived Tuesday at a military airfield in Virginia after being flown out of Iran the previous day on a Qatari government jet.",
        author: "Mahmud",
        id:"4"

    },
    {
        name:"Prince William announces his 2023 Earthshot finalists",
        date:"10.09.20023",
        text:"The Prince of Wales has revealed the shortlist of 15 innovators in the running to win one of five £1 million (about $1.2 million) grants from his prestigious eco-prize later this year.",
        author: "Wilgelm",
        id:"5"
    }
]

news.forEach( n => {
    news_list.insertAdjacentHTML("beforeend",
        `<div class="block"><div class="newss">
        <div class="header">
        <h2 class="name"> ${n.name}</h2>
        <h4 class="date"> ${n.date}</h4>
        </div>
        <p class="text"> ${n.text}</p>
        <div class="footer">
        <h3 class="author"> ${n.author}</h3>
        <h4 class="id"> ${n.id}</h4>
        </div>
    </div></div>`)
}
)