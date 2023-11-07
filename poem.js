let upbeat = [
  "Don't stop believin', hold on to that feeling!", 
  "Here comes the sun, and I say it's alright.",
  "We're soaring, flying, there's not a star in heaven that we can't reach.",
  "I got this feeling inside my bones.", 
  "I'm a survivor, I'm not gonna give up!",
  "Oh, what a beautiful mornin', oh, what a beautiful day.",
  "I'm walking on sunshine, whoa-oh!",
  "Don't Stop me now",
  "Clap along if you feel like a room without a roof",
  "Can't nothing, bring me down"

];

let Melancholy = [
  "And I will swallow my pride, you're the one that I love, and I'm saying goodbye.",
  "I find it hard to tell you, I find it hard to take.",
  "I will learn to live before I die.",
  "I'd trade all my tomorrows for one single yesterday.",
  "It's not a cry that you hear at night, it's not someone who's seen the light.",
  "I'd trade all my tomorrows for one single yesterday.",
  "I'm so tired but I can't sleep, standing on the edge of something much too deep.",
  "Moving seems harder to do when the ones you loved move faster than you.",
  "It's been a long day without you my friend",
  "I don;t love you like I loved you yesterday"
]

// Uses:
// the jQuery function, $
// .text, .html, .val,
// .append, .appendTo, .prependTo
// .before, .after

// addSmiley illustrates appending to the inside of an element,
// append adds to the end, prepend adds to the beginning
const addSmiley = (before) => {
  let paraNum = before
    ? $("#id_smileybefore").val()
    : $("#id_smileyafter").val();
  paraNum -= 1;
  let wantedParagraph = $("#letter p:eq(" + paraNum + ")");
  console.log("XXX", wantedParagraph.text());
  if (before) $("<span> Chorus: </span>").prependTo(wantedParagraph);
  else $("<span>...<span>").appendTo(wantedParagraph);
};

// randomFillParagraph takes a random value from the seed array
// and uses .val to set the content of the text area
const randomfillParagraph = () => {
  let rnd = Math.floor(Math.random() * upbeat.length);
  let newPara = upbeat[rnd];
  $("#id_freeform").val(newPara);
};
const randomfillParagraphSad = () => {
  let rnd = Math.floor(Math.random() * Melancholy.length);
  let newPara = Melancholy[rnd];
  $("#id_freeform").val(newPara);
};


// titleLetter, see example of val, html
// Here, html method is used to create H3 tag
// Note - the entire content of the div is overridden
const titleLetter = () => {
  // Add HTML content with selector to be added to
  // Try all techniques, uncomment and observe with inspector
  let piece = $("#id_titles").val();
  let author = $("#id_receiverName").val();
  let titleStr = `${piece} : by ${author}`;
  // .html(...) fills the container with the content
  $("#letter").html("<h3>" + titleStr + "</h3>");
  $("#letter").css('text-align','center');
  // .append adds to the end of the container
  // $("#letter").append("<h3>" + titleStr + "</h3>");
  // .appendTo also adds to the end of the container
  // $("<h3>" + titleStr + "</h3>").appendTo($("#letter"));
};

// Note how to get the matched set within a containing element.
//
function createParagraph() {
  // Make sure to insert in correct place
  let matchedSetParagraphs = $("#letter p");
  let paragraphNumber = parseInt($("#id_paragraphNumToCreate").val());
  //
  // Use jQuery to create a jQuery HTML object, a paragraph
  // get text from text area
  let paragraphContent = $("#id_freeform").val();
  // create the new element with the text area content
  let para = $(`<p>${paragraphContent}</p>`);
  //
  // append the new jQuery object to the selector,
  // in this case, #letter
  // note, the matched set is zero-based
  let lastPara = matchedSetParagraphs.eq(paragraphNumber - 1);
  // If the number is greater than the number of paragraphs,
  // add at end with appendTo,could use after last paragraph
  if (
    matchedSetParagraphs.length == 0 ||
    paragraphNumber > matchedSetParagraphs.length
  )
    // Note that the append method adds to the inside,
    // and at the end of the matched element.
    para.appendTo($("#letter"));
  else {
    // add the new paragraph in the position indicated by the number
    //
    lastPara.before(para);
  }
}

