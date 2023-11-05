$(document).ready(function() {
    $("#generate-button").click(function() {
      let tone = $("#tone-select").val();
      let verseType = $("#verse-select").val();
      let verseText = $("#verse-text").val();

      if (tone == "upbeat") {
        if (verseType === "free-form") {
          tone = "Verse: " + verseText + "In the morning light so fair A world of possibilities, in the air. With every dawn, a new chance to see,The beauty of life and all that could be. ";
        } else {
          tone = "Beneath the sky, so vast and blue, Dreams take flight, as they often do. In each heartbeat, a rhythm and rhyme, A little piece of magic, frozen in time.";
        }
      } else {
        if (verseType === "free-form") {
          tone = "Verse: " + verseText + " The stars above, they softly gleam, Guiding us through the night's dream. With hope in our hearts and love in our sight, We journey through life, embracing the light.";
        } else {
          tone = "Underneath the moon's gentle glow, In the quiet night, stars aglow. Dreams take flight on a silver stream, Guided by hope, we dare to dream";
        }
      }

      $("#poem").text(tone);
    });
  });
