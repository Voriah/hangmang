var mtg = ["Ajani", "Chandra", "Dack", "Domri", "Elspeth", "Garruk", "Gideon", "Jace", "Karn", "Kiora", "Koth", "Liliana", "Narset", "Nicol", "Nissa", "Ob", "Ral", "Sarkhan", "Sorin", "Tamiyo", "Tezzeret", "Tibalt", "Ugin", "Venser", "Vraska", "Xenagos"];
var ow = ["DVA", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Bastion", "Doomfist", "Genji", "Hanzo", "Junkrat", "McCree", "Mei", "Pharah", "Reaper", "Soldier", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Ana", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta"];
var guessed = [];
var guesses = 0;
var right = 0;

function setWord(w) {
  var a = Math.floor(Math.random() * w.length);
  $('body').css('background-image', 'url("assets/images/over.jpg")');
  $("#box").empty();
  
  word.innerHTML = w[a];
  
  for (let i = 0; i < w[a].length; i++) {   
    $('#box').append(`<div class="letters" id="letter${i}">_</div>`);
  }

  guesses = 9;
  guessed = [""];
  right = 0;
  g.innerHTML = guesses + " guesses remaining";

  var hint = word.innerHTML;

  switch (hint) {
    case "DVA":
        h.innerHTML = "Doritos and Mountain Dew";
        break;
    case "Orisa":
        h.innerHTML = "Omnic roadblock";
        break;
    case "Reinhardt":
        h.innerHTML = "Beer Beer Beer";
        break;
    case "Roadhog":
        h.innerHTML = "Say bacon, one more time";
        break;
    case "Winston":
        h.innerHTML = "Space monkey";
        break;
    case "Bastion":
        h.innerHTML = "Omnic PTSD";
        break;
    case "Doomfist":
        h.innerHTML = "Like hellboy...but different";
        break;
    case "Genji":
        h.innerHTML = "I need healing";
        break;
    case "Hanzo":
        h.innerHTML = "RIP scatter";
        break;
    case "Junkrat":
        h.innerHTML = "Booooooooom";
        break;
    case "McCree":
        h.innerHTML = "My watch is broken";
        break;
    case "Mei":
        h.innerHTML = "Sorry";
        break;
    case "Pharah":
        h.innerHTML = "Justice";
        break;
    case "Reaper":
        h.innerHTML = "Im not a psychopath";
        break;
    case "Soldier":
        h.innerHTML = "He's not the father";
        break;
    case "Sombra":
        h.innerHTML = "Hack the planet";
        break;
    case "Symmetra":
        h.innerHTML = "Used to have 2 ults";
        break;
    case "Torbjorn":
        h.innerHTML = "afk potg";
        break;
    case "Tracer":
        h.innerHTML = "the first";
        break;
    case "Widowmaker":
        h.innerHTML = "whats an aimbot";
        break;
    case "Ana":
        h.innerHTML = "Nap time";
        break;
    case "Brigitte":
        h.innerHTML = "baby rein";
        break;
    case "Lucio":
        h.innerHTML = "rocketleague";
        break;
    case "Mercy":
        h.innerHTML = "hide and rez";
        break;
    case "Moira":
        h.innerHTML = "kamehameha";
        break;
    case "Zenyatta":
        h.innerHTML = "walk";
        break;
    case "Zarya":
        h.innerHTML = "I will break you";
        break;
    
  }

}

document.onkeypress = function (evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var guess = String.fromCharCode(charCode);
  
  var yes = 0;

  for (i = 0; i < guessed.length; i++) {
    if (guess === guessed[i]) {
      return;
    }
  }

  
  guessed.push(guess);

  var ans = word.innerHTML;

  for (let i = 0; i < ans.length; i++ ) {
    if (guess === ans[i].toLowerCase()) {
      document.getElementById("letter" + i).innerHTML = ans[i];
      right++;
      yes = 1;
      if (right === ans.length) {
        
        $('body').css('background-image', 'url("assets/images/owvictory.gif")');
        var hint = word.innerHTML;
        
        switch (hint) {
          case "DVA":
            var audio = new Audio("assets/audio/dva.ogg")
            audio.play();  
            break;
          case "Orisa":
            var audio = new Audio('assets/audio/orisa.ogg');
            audio.play();              
            break;
          case "Reinhardt":
            var audio = new Audio('assets/audio/reinhardt.ogg');
            audio.play();
            break;
          case "Roadhog":
            var audio = new Audio('assets/audio/roadhog.ogg');
            audio.play();  
            break;
          case "Winston":
            var audio = new Audio('assets/audio/winston.ogg');
            audio.play(); 
            break;
          case "Bastion":
            var audio = new Audio('assets/audio/bastion.ogg');
            audio.play();
            break;
          case "Doomfist":   
            var audio = new Audio('assets/audio/doomfist.ogg');
            audio.play();  
            break;
          case "Genji":
            var audio = new Audio('assets/audio/genji.ogg');
            audio.play();
            break;
          case "Hanzo":
            var audio = new Audio('assets/audio/hanzo.ogg');
            audio.play();
            break;
          case "Junkrat":
            var audio = new Audio('assets/audio/junkrat.ogg');
            audio.play();
            break;
          case "McCree":
            var audio = new Audio('assets/audio/mccree.ogg');
            audio.play();
            break;
          case "Mei":
            var audio = new Audio('assets/audio/mei.ogg');
            audio.play();
            break;
          case "Pharah":
            var audio = new Audio('assets/audio/pharah.ogg');
            audio.play();
            break;
          case "Reaper":
            var audio = new Audio('assets/audio/reaper.ogg');
            audio.play();  
            break;
          case "Soldier":
            var audio = new Audio('assets/audio/soldier.ogg');
            audio.play();   
            break;
          case "Sombra":
            var audio = new Audio('assets/audio/sombra.ogg');
            audio.play();              
            break;
          case "Symmetra":
            var audio = new Audio('assets/audio/symmetra.ogg');
            audio.play();  
            break;
          case "Torbjorn":
            var audio = new Audio('assets/audio/torbjorn.ogg');
            audio.play();       
            break;
          case "Tracer":
            var audio = new Audio('assets/audio/tracer.ogg');
            audio.play();        
            break;
          case "Widowmaker":
            var audio = new Audio('assets/audio/widowmaker.ogg');
            audio.play();              
            break;
          case "Ana":
            var audio = new Audio('assets/audio/ana.wav');
            audio.play();       
            break;
          case "Brigitte":       
            var audio = new Audio('assets/audio/brigitte.ogg');
            audio.play();  
            break;
          case "Lucio":
            var audio = new Audio('assets/audio/lucio.ogg');
            audio.play();           
            break;
          case "Mercy":
            var audio = new Audio('assets/audio/mercy.ogg');
            audio.play();           
            break;
          case "Moira":
            var audio = new Audio('assets/audio/moira.ogg');
            audio.play();         
            break;
          case "Zenyatta":
            var audio = new Audio('assets/audio/zenyatta.ogg');
            audio.play();   
            break;
          case "Zarya":
            var audio = new Audio('assets/audio/zarya.ogg');
            audio.play();   
            break;

        }

      }
    }
  }
 
    if (yes === 0) {
      guesses--;
    }

    if (guesses === 0) {
      $('body').css('background-image', 'url("assets/images/owdefeat.gif")');
      g.innerHTML = guesses + " guesses remaining";
      var audio = new Audio('assets/audio/defeat.mp3');
      audio.play(); 
    }
    
    g.innerHTML = guesses + " guesses remaining";

};
