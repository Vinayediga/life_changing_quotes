let pathname = window.location.pathname;

// Check if the pathname contains "index.html"
if (pathname.includes("index.html")) {
    scriptforindex_1_html();
} 
// Check if the pathname contains "other.html"
else if (pathname.includes("index2.html")) {
    scriptforindex_2_html();
}









function scriptforindex_1_html() {


    const Quotes = [
        {
            name: "Steve Jobs",
            quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
        },
        {
            name: "Bill Gates",
            quote: "It's fine to celebrate success, but it is more important to heed the lessons of failure."
        },
        {
            name: "Grace Hopper",
            quote: "The most dangerous phrase in the language is, 'We've always done it this way.'"
        },
        {
            name: "Ada Lovelace",
            quote: "I am more than ever now the bride of science."
        },
        {
            name: "Linus Torvalds",
            quote: "Talk is cheap. Show me the code."
        },
        {
            name: "Alan Turing",
            quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
        },
        {
            name: "Mark Zuckerberg",
            quote: "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
        },
        {
            name: "Tim Berners-Lee",
            quote: "The original idea of the web was that it should be a collaborative space where you can communicate through sharing information."
        },
        {
            name: "Larry Page",
            quote: "Always deliver more than expected."
        },
        {
            name: "Elon Musk",
            quote: "When something is important enough, you do it even if the odds are not in your favor."
        },
        {
            name: "Sheryl Sandberg",
            quote: "Done is better than perfect."
        },
        {
            name: "Steve Wozniak",
            quote: "Never trust a computer you can't throw out a window."
        },
        {
            name: "Jeff Bezos",
            quote: "If you double the number of experiments you do per year you're going to double your inventiveness."
        },
        {
            name: "Margaret Hamilton",
            quote: "There was no choice but to be pioneers."
        },
        {
            name: "Satya Nadella",
            quote: "Our industry does not respect tradition. It only respects innovation."
        },
        {
            name: "Sundar Pichai",
            quote: "I think it's important for companies to compete hard, but also remember that competition makes everyone better."
        },
        {
            name: "Katherine Johnson",
            quote: "We will always have STEM with us. Some things will drop out of the public eye and will go away, but there will always be science, engineering, and technology."
        },
        {
            name: "Susan Wojcicki",
            quote: "We need to continue to grow and evolve our advertising business to help marketers connect with people at all stages of the purchase cycle."
        },
        {
            name: "Jack Dorsey",
            quote: "Expect the unexpected. And whenever possible, be the unexpected."
        },
        {
            name: "Ginni Rometty",
            quote: "Growth and comfort do not coexist."
        },
        {
            name: "Marissa Mayer",
            quote: "I always did something I was a little not ready to do. I think that's how you grow."
        },
        {
            name: "Reed Hastings",
            quote: "We learned quickly that the most important metric is member satisfaction. If members enjoy our service, they will continue to use Netflix."
        },
        {
            name: "Reid Hoffman",
            quote: "You jump off a cliff and you assemble an airplane on the way down."
        },
        {
            name: "Meg Whitman",
            quote: "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials."
        },
        {
            name: "Michael Dell",
            quote: "As you start your journey, the first thing you should do is throw away that store-bought map and begin to draw your own."
        },
        {
            name: "Indra Nooyi",
            quote: "Just because you are CEO, don't think you have landed. You must continually increase your learning, the way you think, and the way you approach the organization."
        },
        {
            name: "Warren Buffett",
            quote: "The most important investment you can make is in yourself."
        },
        {
            name: "Oprah Winfrey",
            quote: "The biggest adventure you can take is to live the life of your dreams."
        },
        {
            name: "Richard Branson",
            quote: "You don't learn to walk by following rules. You learn by doing, and by falling over."
        },
        {
            name: "Peter Thiel",
            quote: "The most contrarian thing of all is not to oppose the crowd but to think for yourself."
        },
        {
            name: "Susan Kare",
            quote: "Good design is a lot like clear thinking made visual."
        },
        {
            name: "Paul Graham",
            quote: "Live in the future, then build what's missing."
        },
        {
            name: "Steve Ballmer",
            quote: "The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential."
        },
        {
            name: "Marissa Mayer",
            quote: "I always did something I was a little not ready to do. I think that's how you grow."
        },
        {
            name: "Reed Hastings",
            quote: "We learned quickly that the most important metric is member satisfaction. If members enjoy our service, they will continue to use Netflix."
        },
        {
            name: "Reid Hoffman",
            quote: "You jump off a cliff and you assemble an airplane on the way down."
        },
        {
            name: "Meg Whitman",
            quote: "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials."
        },
        {
            name: "Michael Dell",
            quote: "As you start your journey, the first thing you should do is throw away that store-bought map and begin to draw your own."
        },
        {
            name: "Indra Nooyi",
            quote: "Just because you are CEO, don't think you have landed. You must continually increase your learning, the way you think, and the way you approach the organization."
        },
        {
            name: "Warren Buffett",
            quote: "The most important investment you can make is in yourself."
        },
        {
            name: "Oprah Winfrey",
            quote: "The biggest adventure you can take is to live"
        },
        {
            name: "Stephen Hawking",
            quote: "Intelligence is the ability to adapt to change."
        },
        {
            name: "Nelson Mandela",
            quote: "Education is the most powerful weapon which you can use to change the world."
        },
        {
            name: "Albert Einstein",
            quote: "Imagination is more important than knowledge."
        },
        {
            name: "Maya Angelou",
            quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
        },
        {
            name: "Mahatma Gandhi",
            quote: "Be the change that you wish to see in the world."
        },
        {
            name: "Martin Luther King Jr.",
            quote: "The time is always right to do what is right."
        },
        {
            name: "Helen Keller",
            quote: "The only thing worse than being blind is having sight but no vision."
        },
        {
            name: "Walt Disney",
            quote: "All our dreams can come true, if we have the courage to pursue them."
        },
        {
            name: "Vincent van Gogh",
            quote: "I am seeking, I am striving, I am in it with all my heart."
        },
        {
            name: "Marie Curie",
            quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
        },
        {
            name: "Rosa Parks",
            quote: "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear."
        },
        {
            name: "Winston Churchill",
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
        },
        {
            name: "J.K. Rowling",
            quote: "It is our choices that show what we truly are, far more than our abilities."
        },
        {
            name: "Leonardo da Vinci",
            quote: "Simplicity is the ultimate sophistication."
        },
        {
            name: "Abraham Lincoln",
            quote: "The best way to predict the future is to create it."
        },
        {
            name: "Coco Chanel",
            quote: "The most courageous act is still to think for yourself. Aloud."
        },
        {
            name: "Frida Kahlo",
            quote: "Feet, what do I need them for if I have wings to fly?"
        },
        {
            name: "Pablo Picasso",
            quote: "Everything you can imagine is real."
        },
        {
            name: "Malala Yousafzai",
            quote: "We realize the importance of our voices only when we are silenced."
        },
        {
            name: "Stephen Covey",
            quote: "I am not a product of my circumstances. I am a product of my decisions."
        },
        {
            name: "Eleanor Roosevelt",
            quote: "The future belongs to those who believe in the beauty of their dreams."
        },
        {
            name: "John Lennon",
            quote: "Count your age by friends, not years. Count your life by smiles, not tears."
        },
        {
            name: "Albert Schweitzer",
            quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
        },
        {
            name: "Vincent van Gogh",
            quote: "Great things are not done by impulse, but by a series of small things brought together."
        },
        {
            name: "Henry Ford",
            quote: "Whether you think you can, or you think you can't - you're right."
        },
        {
            name: "Walt Disney",
            quote: "The way to get started is to quit talking and begin doing."
        },
        {
            name: "Maya Angelou",
            quote: "We may encounter many defeats but we must not be defeated."
        },
        {
            name: "Steve Jobs",
            quote: "Don’t let the noise of others’ opinions drown out your own inner voice."
        },
        {
            name: "Elon Musk",
            quote: "Persistence is very important. You should not give up unless you are forced to give up."
        },
        {
            name: "Oprah Winfrey",
            quote: "The biggest adventure you can take is to live the life of your dreams."
        },
        {
            name: "Napoleon Hill",
            quote: "Whatever the mind can conceive and believe, it can achieve."
        },
        {
            name: "Mark Twain",
            quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
        },
        {
            name: "Steve Jobs",
            quote: "Your time is limited, don't waste it living someone else's life."
        },
        {
            name: "Eleanor Roosevelt",
            quote: "No one can make you feel inferior without your consent."
        },
        {
            name: "Ralph Waldo Emerson",
            quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us."
        },
        {
            name: "Helen Keller",
            quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
        },
        {
            name: "Walt Disney",
            quote: "The way to get started is to quit talking and begin doing."
        },
        {
            name: "Stephen Covey",
            quote: "The key is not to prioritize what's on your schedule, but to schedule your priorities."
        },
        {
            name: "Malcolm X",
            quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        },
        {
            name: "Maya Angelou",
            quote: "You may encounter many defeats, but you must not be defeated."
        },
        {
            name: "Albert Einstein",
            quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
        },
        {
            name: "Anne Frank",
            quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world."
        },
        {
            name: "Thomas Edison",
            quote: "Many of life's failures are people who did not realize how close they were to success when they gave up."
        },
        {
            name: "Nelson Mandela",
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
        },
        {
            name: "Leonardo da Vinci",
            quote: "Simplicity is the ultimate sophistication."
        },
        {
            name: "Marcus Aurelius",
            quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking."
        },
        {
            name: "Audrey Hepburn",
            quote: "Nothing is impossible, the word itself says 'I'm possible'!"
        },
        {
            name: "Coco Chanel",
            quote: "The most courageous act is still to think for yourself. Aloud."
        },
        {
            name: "Plato",
            quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
        },
        {
            name: "Vincent van Gogh",
            quote: "I am seeking, I am striving, I am in it with all my heart."
        },
        {
            name: "J.K. Rowling",
            quote: "It is our choices that show what we truly are, far more than our abilities."
        },
        {
            name: "Rumi",
            quote: "The wound is the place where the Light enters you."
        },
        {
            name: "Socrates",
            quote: "An unexamined life is not worth living."
        },
        {
            name: "Leo Tolstoy",
            quote: "Everyone thinks of changing the world, but no one thinks of changing himself."
        },
        {
            name: "Buddha",
            quote: "The mind is everything. What you think you become."
        },
        {
            name: "Plato",
            quote: "Wise men speak because they have something to say; fools because they have to say something."
        },
        {
            name: "Albert Einstein",
            quote: "Imagination is more important than knowledge."
        },
        {
            name: "Dalai Lama",
            quote: "Happiness is not something ready-made. It comes from your own actions."
        },
        {
            name: "Maya Angelou",
            quote: "If you don't like something, change it. If you can't change it, change your attitude."
        }
    ];
    
    console.log(Quotes.length);
const quote_generator = document.getElementById("generateButton")

const quote_Text = document.getElementById("quoteText")

const quote_Author = document.getElementById("quoteAuthor")

let google_secrch_text = document.getElementById("Google-search-text")

let searchEL = document.getElementById("search-el")



let heartimg = document.getElementById("heart-img")

let quote_data;

let quote_name;

let quote_text;

let Favourite_quotes_array= [];

let QUOTE = "Your predefined quote value";

let fav_quote_adder_id = document.getElementById("fav_quote_adder").addEventListener('click',fav_quote_adder)

console.log(Favourite_quotes_array.length);

searchEL.addEventListener('click',google_search)



quote_generator.addEventListener('click',function(){
    let random_index = Math.floor(Math.random()*100 + 1)
    console.log(random_index);
   
     quote_data = Quotes[random_index]
    
     
     localStorage.setItem('quote-data', JSON.stringify(quote_data));
    
    quote_name = quote_data.name
    localStorage.setItem('quote-name',JSON.stringify(quote_name))
    quote_text = quote_data.quote
    quote_Text.textContent = '"' + quote_text + '"';
    quote_Author.textContent = " - " + quote_name
    google_secrch_text.textContent = quote_name
    if (isQuoteAlreadyAdded(quote_data.quote)) {
        console.log(isQuoteAlreadyAdded(quote_data.quote));
        heart_adder();
    }
    else{
        heart_remover();
        console.log('Not in favorites');
    }
})

document.addEventListener('DOMContentLoaded',function(){
    let AUTHOR = JSON.parse(localStorage.getItem('quote-name'))
    google_secrch_text.textContent = AUTHOR
   
    let quote_DATA = JSON.parse(localStorage.getItem('quote-data'))
    console.log(quote_DATA.quote);

    console.log(isQuoteAlreadyAdded(quote_DATA.quote));
    
   
   
    Favourite_quotes_array = JSON.parse(localStorage.getItem('favourite-quotes')) || [];
   
   quote_Author.textContent = quote_DATA.name
   quote_Text.textContent = quote_DATA.quote
   console.log(Favourite_quotes_array);
   if (isQuoteAlreadyAdded(quote_DATA.quote)) {
    heart_adder();
}
else{
    heart_remover()
}

})
  




function google_search(){
    let search_text = google_secrch_text.textContent
    let search_url = "https://www.google.com/search?q=" + encodeURI(search_text)
    window.open(search_url, "_blank");
}


function fav_quote_adder() {
    let quote_DATA = JSON.parse(localStorage.getItem('quote-data'));
    QUOTE = quote_DATA.quote;

    // Check if the quote is not already present in Favourite_quotes_array
    if (!isQuoteAlreadyAdded(QUOTE)) {
        Favourite_quotes_array.push(quote_DATA);
        localStorage.setItem('favourite-quotes',JSON.stringify(Favourite_quotes_array))
        console.log(Favourite_quotes_array);
        console.log("Quote added to favorites:", Favourite_quotes_array);
        heart_adder();
    } else {
        console.log("Quote already exists in favorites.");
    }
   
    
}

// Function to check if the quote is already present in Favourite_quotes_array
function isQuoteAlreadyAdded(quote) {
    for (let i = 0; i < Favourite_quotes_array.length; i++) {
        if (Favourite_quotes_array[i].quote === quote) {
            return true; // Quote already exists
        }
    }
    return false; // Quote not found
}

function heart_adder(){
    heartimg.setAttribute('src','favorite.png')
   
    
}
function heart_remover() {
  heartimg.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); // Transparent image data URI)
   
    
}

console.log(JSON.parse(localStorage.getItem('favourite-quotes')))

// Function for handling index.html

    console.log("Executing code for index.html");
}

// Function for handling other.html
function scriptforindex_2_html() {

    let stored_fav_quote = JSON.parse(localStorage.getItem('favourite-quotes'))
    console.log(stored_fav_quote);
    for (let i = 0; i < stored_fav_quote.length; i++) {
        let QUOTE = stored_fav_quote[i].quote;
        let author = stored_fav_quote[i].name
        
   
        
   
    // Create div element for the quote container
    let favoriteQuoteContainer = document.createElement('div');
    favoriteQuoteContainer.classList.add('fav-quote-item-container');
    favoriteQuoteContainer.style.display = "flex"; // Set display to flex
    favoriteQuoteContainer.style.flexDirection = "column"; // Stack items vertically
    favoriteQuoteContainer.style.alignItems = "center"; // Center items

    // Create paragraph element for the quote
    let quoteParagraph = document.createElement('p');
    quoteParagraph.id = 'quote';
    quoteParagraph.textContent = `" ${QUOTE} "`;

    // Create paragraph element for the author
    let authorParagraph = document.createElement('p');
    authorParagraph.id = 'AuthoR';
    authorParagraph.textContent = "-" + author;

    // Append quote paragraph to the quote container
    favoriteQuoteContainer.appendChild(quoteParagraph);

    // Append author paragraph to the quote container
    favoriteQuoteContainer.appendChild(authorParagraph);

    // Get the favorite-quote-container element from the HTML
    let favouriteQuoteContainerElement = document.getElementById("favorite-quote-container");

    // Append the entire quote container to the favorite-quote-container element
    favouriteQuoteContainerElement.appendChild(favoriteQuoteContainer);

    console.log(favouriteQuoteContainerElement);
    console.log('hi this is index2.html');
}


// Get the current pathname from window.location

}
