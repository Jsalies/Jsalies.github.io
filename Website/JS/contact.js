var element1= document.getElementById('tete1');
var element2= document.getElementById('tete2');

function premier() {
    $('#info').empty();
    $('#1').empty();
    $('#2').empty();
    $('#3').empty();
    $('#4').empty();
    $('#5').empty();
    $('#6').empty();
    $('#1').append('Age : 21ans');
    $('#2').append('Type de jeux : Mmorpg, Mmoba');
    $('#3').append('Jeux du moment: lol, minecraft');
    $('#4').append('Pseudo(par jeux) : Deathxchaos(lol), IggDrazil(minecraft)');
    $('#5').append('E-mail : jimmy.salies@gmail.com');
    $('#6').append('Hobbies : aeromodelisme, jeux video, programmation');
};

function second() {
    $('#info').empty();
    $('#1').empty();
    $('#2').empty();
    $('#3').empty();
    $('#4').empty();
    $('#5').empty();
    $('#6').empty();
    $('#1').append('Age : 21ans');
    $('#2').append('Type de jeux : FPS, Mmoba');
    $('#3').append('Jeux du moment: lol, Civ6');
    $('#4').append('Pseudo(par jeux) : Bakanos(lol), bob(minecraft)');
    $('#5').append('E-mail : hamza.chegraoui@gmail.com');
    $('#6').append('Hobbies : jeux video, mathematiques');
};

element1.addEventListener('mouseover',premier());
element2.addEventListener('mouseover',second());
