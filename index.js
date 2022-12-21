
const quotes = [
    {
        author: 'Annie Dillard',
        isFemale: true,
        body: 'How we spend our days is, of course, how we spend our lives.',
        source: 'The Writing Life (New York: HarperPerennial, 1990), 32.',
        sourceImg: 'https://m.media-amazon.com/images/I/31yeM3aA2SS._SX330_BO1,204,203,200_.jpg',
        sourceReview: 'https://www.amazon.com/Writing-Life-Annie-Dillard/dp/0060919884',
        tags: 'Advice'
    },
    {
        author: 'Anne Lamott',
        isFemale: true,
        body: 'Almost everything will work again if you unplug it for a few minutes - including you.',
        source: '12 Truths I learned from Life and Writing, TED Talk, April 2017',
        sourceImg: 'https://www.ted.com/talks/anne_lamott_12_truths_i_learned_from_life_and_writing',
        sourceReview: 'https://www.dailygood.org/story/2187/12-truths-i-learned-from-life-and-writing/',
        tags: 'Advice'
    },
    {
        author: 'Susan Sontag',
        isFemale: true,
        body: 'Get up quickly - just switch on the white light of the will.',
        source: 'Journal entry, October 15, 1973, in As Consciousness Is Harnessed to Flesh: Journals and Notebooks, 1964-1980.',
        sourceImg: 'https://m.media-amazon.com/images/I/41KWOylw6dL._SX332_BO1,204,203,200_.jpg',
        sourceReview: 'https://www.amazon.com/Consciousness-Harnessed-Flesh-Notebooks-1964-1980/dp/0374100764',
        tags: 'Advice'
    },
    {
        author: 'May Sarton',
        isFemale: true,
        body: 'Keep busy with survival. Imitate the trees. Learn to lose in order to recover, and remember that nothing stays the same for long.',
        source: 'Journal of a Solitude (New York: W.W.Norton, 1973), 34.',
        sourceImg: 'https://m.media-amazon.com/images/I/41QXt+97BbL._SX330_BO1,204,203,200_.jpg',
        sourceReview: 'https://www.amazon.com/Journal-Solitude-May-Sarton/dp/0393309282',
        tags: 'Advice'
    },
    {
        author: 'Jeannette Winterson',
        isFemale: true,
        body: "I don't even want to please the reader, I want to change them.",
        source: 'Maya Jaggi, "Redemption Songs," Guardian, May 28, 2004.',
        sourceImg: 'https://www.laizquierdadiario.com/local/cache-vignettes/L720xH405/arton107751-d44a8.jpg',
        sourceReview: 'https://www.theguardian.com/books/2004/may/29/fiction.jeanettewinterson',
        tags: 'Audience'
    },
    {
        author: 'Junot Diaz',
        isFemale: false,
        body: "Every time the loneliness rears up in you like a seething, burning continent, you tie on your shoes and hit the paths and that helps; it really does.",
        source: 'This Is How You Lose Her, 2012.',
        sourceImg: 'https://m.media-amazon.com/images/I/51G2GGjeBjL._SX318_BO1,204,203,200_.jpg',
        sourceReview: 'https://www.amazon.com/-/es/Junot-D%C3%ADaz/dp/1594631778',
        tags: 'Love'
    },
    {
        author: 'Junot Diaz',
        isFemale: false,
        body: "She was the kind of girlfriend God gives you young, so you'll know loss the rest of your life.",
        source: 'The Brief Wondrous Life of Oscar Wao, 2007.',
        sourceImg: 'https://m.media-amazon.com/images/I/51lPJDcI5UL._SX318_BO1,204,203,200_.jpg',
        sourceReview: 'https://www.amazon.com/-/es/Junot-D%C3%ADaz/dp/1594483299',
        tags: 'Love'
    },
    {
        author: 'Rainer Maria Rilke',
        isFemale: false,
        body: 'I beg you to have patience with everything unresolved in your heart and try to love the questions themselves (...) the point is to live everything. Live the questions now.',
        source: 'Letters to a Young Poet, 1929.',
        sourceImg: 'https://m.media-amazon.com/images/I/510A5hPOyML._SX332_BO1,204,203,200_.jpg',
        sourceReview: 'https://www.amazon.com/-/es/Rainer-Maria-Rilke/dp/0393310396',
        tags: 'Advice'
    },
    {
        author: 'Roald Dahl',
        isFemale: false,
        body: 'I began to realize how important it was to be an enthusiast in life (...) if you are interested in something, no matter what it is, go at it at full speed ahead. Embrace it with both arms, hug it, love it and above all become passionate about it.',
        source: 'My Uncle Oswald, 1979',
        sourceImg: 'https://i.ebayimg.com/images/g/kcwAAOSwpoBf~ZFK/s-l500.jpg',
        sourceReview: 'https://www.goodreads.com/book/show/6691.My_Uncle_Oswald',
        tags: 'Love'
    },
    {
        author: 'Anne Lamott',
        isFemale: true,
        body: "Keep your butt in the chair. You do it at the same time every day. You never wait for inspiration - it's ridiculous, it will never come.",
        source: 'Beyond Bird by Bird, inverview by Kurt Andersen. April 29, 2011',
        sourceImg: 'https://pbs.twimg.com/profile_images/621797154235940866/yqqrt4op_400x400.jpg',
        sourceReview: 'https://www.wnyc.org/story/192108-anne-lamott-beyond-bird-bird/',
        tags: 'Discipline'
    },
    {
        author: 'Gabriel García Márquez',
        isFemale: false,
        body: 'Writing something is almost as hard as making a table. With both you are working with reality, a material just as hard as wood. Both are full of tricks and techniques. Basically very little magic and a lot of hard work are involved.',
        source: 'The Art of Fiction, interview by Peter H. Stone, Paris Review N° 82 (Winter 1981).',
        sourceImg: 'https://www.theparisreview.org/il/88f67bacad/large/GabrielGarciaMarquez.jpg',
        sourceReview: 'https://www.theparisreview.org/interviews/3196/the-art-of-fiction-no-69-gabriel-garcia-marquez',
        tags: 'Discipline'
    },
    {
        author: 'Raymond Carver',
        isFemale: false,
        body: "Isak Dinesen said that she wrote a little every day, without hope and without despair. Someday I'll put that on a three-by-five card and tape it to the wall beside my desk.",
        source: "A storyteller's Shoptalk. NYT Book Review, Feb 15, 1981",
        sourceImg: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/01/10/15471193982563.jpg',
        sourceReview: 'https://archive.nytimes.com/www.nytimes.com/books/01/01/21/specials/carver-shoptalk.html',
        tags: 'Discipline'
    },    
    {
        author: 'Kenneth Goldsmith',
        isFemale: false,
        body: 'If you work on something a little bit every day, you end up with something that is massive.',
        source: 'Interview by Mark Allen, Feb 6, 2013',
        sourceImg: 'https://i.ytimg.com/vi/FAJRQJGc7DU/maxresdefault.jpg',
        sourceReview: 'https://www.theawl.com/2013/02/proudly-fraudulent-an-interview-with-momas-first-poet-laureate-kenneth-goldsmith/',
        tags: 'Discipline'
    },
    {
        author: 'Ralph Waldo Emerson',
        isFemale: false,
        body: 'Finish each day before you begin the next, and interpose a solid wall of sleep between the two. This you cannot do without temperance.',
        source: 'Journal entry, Jan 26, 1844',
        sourceImg: 'https://m.media-amazon.com/images/I/51X3WDdjB7L._AC_SY780_.jpg',
        sourceReview: 'https://www.amazon.com/Journals-Miscellaneous-Notebooks-Ralph-Emerson/dp/0674484509',
        tags: 'Discipline'
    },
    {
        author: '',
        isFemale: false,
        body: '',
        source: '',
        sourceImg: '',
        sourceReview: '',
        tags: 'Love'
    },
    {
        author: '',
        isFemale: false,
        body: '',
        source: '',
        sourceImg: '',
        sourceReview: '',
        tags: 'Love'
    },
    {
        author: '',
        isFemale: false,
        body: '',
        source: '',
        sourceImg: '',
        sourceReview: '',
        tags: 'Love'
    },
    {
        author: '',
        isFemale: false,
        body: '',
        source: '',
        sourceImg: '',
        sourceReview: '',
        tags: 'Love'
    },
    {
        author: '',
        isFemale: false,
        body: '',
        source: '',
        sourceImg: '',
        sourceReview: '',
        tags: 'Love'
    },


]


const tagsFilter = document.querySelector("#tags")
let femFilter = false
const femFilterBtn = document.querySelector("#female-filter")
const displayQuotes = document.querySelector(".quotes");


quotes.forEach(quote => {
    displayQuotes.innerHTML += `
    <div class="tile is-parent column is-one-third">
        <article class="tile is-child box">
            <p class="title">${quote.body}</p>
            <p class="subtitle">${quote.author}</p>
            <div class="content">
                <p>${quote.source}</p>
            </div>
            <button class="button is-info is-light is-small">
            <a target="_blank" href="${quote.sourceReview}">Dig deeper</a></button>
            <button class="heart"> <i class="fa fa-heart"></i></button> <span id="likes"></span>
        </article>
    </div>
    `;
})


tagsFilter.onchange = () => {
    validateData()
}



femFilterBtn.onclick = () => {
    femFilter = femFilter ? false : true
    if (femFilter) {
        femFilterBtn.classList.add("is-active", "is-rounded")
        femFilterBtn.textContent = "Show all"
    } else {
        femFilterBtn.classList.remove("is-active", "is-rounded")
        femFilterBtn.textContent = "Women Words"
    }
    validateData()

}


const validateData = () => {

    const filteredQuotes = quotes.filter(quote => {
        if (!tagsFilter.value && !femFilter) {
            return quote
        }
        else if (!tagsFilter.value && femFilter) {
            return quote.isFemale
        }
        else if (tagsFilter.value && femFilter) {
            return tagsFilter.value === quote.tags && quote.isFemale
        }
        else if (tagsFilter.value && !femFilter) {
            return tagsFilter.value === quote.tags
        }
    })


    displayQuotes.innerHTML = ''

    filteredQuotes.forEach(quote => {
        displayQuotes.innerHTML += `
        <div class="tile is-parent column is-one-third">
            <article class="tile is-child box">
                <p class="title">${quote.body}</p>
                <p class="subtitle">${quote.author}</p>
                <div class="content">
                    <p>${quote.source}</p>
                </div>
                <button class="button is-info is-light is-small">
                <a target="_blank" href="${quote.sourceReview}">Dig deeper</a></button>
                <button class="heart"> <i class="fa fa-heart"></i></button> <span id="likes"></span>
            </article>
        </div>
    `

    })

    increaseLikes();

}


const increaseLikes = () => {

    const hearts = document.querySelectorAll(".heart")
    const likes = document.querySelectorAll("#likes")


    hearts.forEach((heart, heartIndex) => {
        heart.onclick = () => {
            let likesNumber = Number(likes[heartIndex].textContent);
            likesNumber++
            likes[heartIndex].textContent = likesNumber
        }
    });

}

increaseLikes();
