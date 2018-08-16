var mtg = ["Ajani", "Chandra", "Dack", "Domri", "Elspeth", "Garruk", "Gideon", "Jace", "Karn", "Kiora", "Koth", "Liliana", "Narset", "Nicol", "Nissa", "Ob", "Ral", "Sarkhan", "Sorin", "Tamiyo", "Tezzeret", "Tibalt", "Ugin", "Venser", "Vraska", "Xenagos"];
var ow = ["DVA", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Bastion", "Doomfist", "Genji", "Hanzo", "Junkrat", "McCree", "Mei", "Pharah", "Reaper", "Soldier", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Ana", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta"];
var lot = ["Frodo", "Gandalf", "Sauron", "Aragorn", "Legolas", "Gollum", "Bilbo", "Arwen", "Galadriel", "Gimli", "Balrog", "Saruman", "Elrond", "Samwise", "Eowyn", "Boromir", "Peregrin", "Faramir", "Meriadoc", "Theoden", "Eomer", "Denethor", "Treebeard", "Shelob", "Isildur", "Celeborn", "Grima"];
var bm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var guesses = 0;
var right = 0;
var winScreen = "";
var loseScreen = "";
var wins = 0;
var losses = 0;

function setWord(w) {
  var a = Math.floor(Math.random() * w.length);
  
  if (w === ow) {
    $('body').css('background-image', 'url("assets/images/over.jpg")');
    $("p, div, body").css("font-family", "ow");
    $("p, div, body").css("color", "black");
    winScreen = "assets/images/owvictory.gif";
    loseScreen = "assets/images/owdefeat.gif";
    

  }
  else if (w ===  mtg) {
    $('body').css('background-image', 'url("assets/images/magicback.jpg")');
    $("p, div, body").css("font-family", "magic");
    $("p, div, body").css("color", "black");
    winScreen = "assets/images/magicvictory.gif";
    loseScreen = "assets/images/magicdefeat.gif";
  }
  else if (w === lot) {
    $('body').css('background-image', 'url("assets/images/lotrback.jpg")');
    $("p, div, body").css("font-family", "ring");
    $("p, div, body").css("color", "gold");
    winScreen = "assets/images/lotrvictory.jpg";
    loseScreen = "assets/images/lotrdefeat.jpg";
  }
  
  $("#box").empty();
  
  word.innerHTML = w[a];
  
  for (let i = 0; i < w[a].length; i++) {   
    $('#box').append(`<div class="letters" id="letter${i}">_</div>`);
  }

  guesses = 9;
  guessed = [""];
  right = 0;
  g.innerHTML = guesses + " Guesses Remaining";
  win.innerHTML = wins + " Wins";
  lose.innerHTML = losses + " Losses";

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
        h.innerHTML = "I Will Break You";
        break;
    case "Ajani":
        h.innerHTML = "Leonin Auramancer";
        break;
    case "Chandra":
        h.innerHTML = "Pyromancer from Kaladesh";
        break;
    case "Dack":
        h.innerHTML = "Psychometry Thief";
        break;
    case "Domri":
        h.innerHTML = "Grull initiate";
        break;
    case "Elspeth":
        h.innerHTML = "Ravaged Plane";
        break;
    case "Garruk":
        h.innerHTML = "Beast Summoner";
        break;
    case "Gideon":
        h.innerHTML = "Heiromancer from Theros";
        break;
    case "Jace":
        h.innerHTML = "Telepath";
        break;
    case "Karn":
        h.innerHTML = "Silver Atificer";
        break;
    case "Kiora":
        h.innerHTML = "Zendikar Merfolk";
        break;
    case "Koth":
        h.innerHTML = "Mirran Geomancer";
        break;
    case "Liliana":
        h.innerHTML = "Necromancer";
        break;
    case "Narset":
        h.innerHTML = "Ojutai Scholar";
        break;
    case "Nicol":
        h.innerHTML = "Necromantic Elder Dragon";
        break;
    case "Nissa":
        h.innerHTML = "Zendikar Elf";
        break;
    case "Ob":
        h.innerHTML = "Death Magic Demon";
        break;
    case "Ral":
        h.innerHTML = "Izzet Guildmage";
        break;
    case "Sarkhan":
        h.innerHTML = "Dragon Worshipper";
        break;
    case "Sorin":
        h.innerHTML = "Lord of Innistrad";
        break;
    case "Tamiyo":
        h.innerHTML = "Moonfolk";
        break;
    case "Tezzeret":
        h.innerHTML = "Esper Artificer";
        break;
    case "Tibalt":
        h.innerHTML = "Half-Devil";
        break;
    case "Ugin":
        h.innerHTML = "Ressurected Elder Dragon";
        break;
    case "Venser":
        h.innerHTML = "Pathmage";
        break;
    case "Vraska":
        h.innerHTML = "Gorgon Assassin";
        break;
    case "Xenagos":
        h.innerHTML = "Theros Satyr";
        break;
    case "Frodo":
        h.innerHTML = "Derp Hobbit";
        break;
    case "Gandalf":
        h.innerHTML = "Mithrandir";
        break;
    case "Sauron":
        h.innerHTML = "The End Game";
        break;
    case "Aragorn":
        h.innerHTML = "He Fell";
        break;
    case "Bilbo":
        h.innerHTML = "Tells the Story";
        break;
    case "Gollum":
        h.innerHTML = "We Don't Have Any Friends";
        break;
    case "Arwen":
        h.innerHTML = "Daughter of Elrond";
        break;
    case "Galadriel":
        h.innerHTML = "The World Is Changed";
        break;
    case "Legolas":
        h.innerHTML = "And My Bow";
        break;
    case "Gimli":
        h.innerHTML = "Not The Beard";
        break;
    case "Balrog":
        h.innerHTML = "He Is Beyond Any Of You";
        break;
    case "Saruman":
        h.innerHTML = "White Wizard";
        break;
    case "Elrond":
        h.innerHTML = "I Was There";
        break;
    case "Samwise":
        h.innerHTML = "Loyal Companion";
        break;
    case "Eowyn":
        h.innerHTML = "I Am No Man";
        break;
    case "Boromir":
        h.innerHTML = "Favorite Son";
        break;
    case "Peregrin":
        h.innerHTML = "A Took";
        break;
    case "Faramir":
        h.innerHTML = "Wants to Impress";
        break;
    case "Meriadoc":
        h.innerHTML = "A Brandybuck";
        break;
    case "Theoden":
        h.innerHTML = "Possessed";
        break;
    case "Eomer":
        h.innerHTML = "Horse Master";
        break;
    case "Denethor":
        h.innerHTML = "Sing Me A Song";
        break;
    case "Shelob":
        h.innerHTML = "Web Weaver";
        break;
    case "Treebeard":
        h.innerHTML = "Ancient";
        break;
    case "Isildur":
        h.innerHTML = "Fall of Man";
        break;
    case "Celeborn":
        h.innerHTML = "Stoic";
        break;
    case "Grima":
        h.innerHTML = "Manipulator";
        break;
    
  }

}


function bossMode(w) {

    $('body').css('background-image', 'url("assets/images/bosswall.jpg")');
    $("p, div, body").css("font-family", "boss");
    $("p, div, body").css("color", "black");
    $("p, div, body").css("text-shadow", "red");
    $("#titleContainer, #h, #butts, #score").remove();

    var audio = new Audio('assets/audio/diablo.mp3');
    audio.play();

    var a = Math.floor(Math.random() * w.length);
    $("#box").empty();

    var bossW = "";


    for (let i = 0; i < 20; i++) {
        var x = Math.floor(Math.random() * 26);
        bossW = bossW.concat(w[x]);
    }

    word.innerHTML = bossW;

    for (let i = 0; i < word.innerHTML.length; i++) {
        $('#box').append(`<div class="letters" id="letter${i}">_</div>`);
    }
    wins = 0;
    guesses = 9;
    guessed = [""];
    right = 0;
    g.innerHTML = guesses + " Guesses Remaining";


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
        wins++;
        win.innerHTML = wins + " Wins";
          


        $('body').css('background-image', `url("${winScreen}")`);
        
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
    if (wins === 10) {
        bossMode(bm);
    }

  }
 
    if (yes === 0) {
      guesses--;
    }

    if (guesses === 0) {
      $('body').css('background-image', `url("${loseScreen}")`);
      g.innerHTML = guesses + " Guesses Remaining";
      var audio = new Audio('assets/audio/defeat.mp3');
      audio.play(); 
        losses++;
        lose.innerHTML = losses + " Losses";
    }
    
    g.innerHTML = guesses + " Guesses Remaining";






};

