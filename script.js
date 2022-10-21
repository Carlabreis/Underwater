// document.getElementById('#dolphin').onclick = playSound
// document.getElementById('#blueWhale').onclick = playSound
// document.getElementById('#beluga').onclick = playSound
// document.getElementById('#humpBack').onclick = playSound
// document.getElementById('#seaHorse').onclick = playSound

//document.getElementById('idgoeshere').addEventListener ('mouseenter', wiggleFunction);
//document.getElementById('idgoeshere').addEventListener ('mouseleave', resetFunction);

document.querySelector('#imgOrca').addEventListener('click', playOrca);
document.querySelector('#imgDolphin').addEventListener('click', playDolphin);
document.querySelector('#imgBlueWhale').addEventListener('click', playBlueWhale);
document.querySelector('#imgBeluga').addEventListener('click', playBeluga);
document.querySelector('#imgHumpBack').addEventListener('click', playHumpBack);
document.querySelector('#imgSeaHorse').addEventListener('click', playSeaHorse);

function playOrca() {
    var audio = new Audio("https://cdn.glitch.global/d4945722-ca3a-4aba-97fa-1b4fcf3beed2/Dolphin_Killer_Whale_01.wav?v=1646964128356");
    console.log(audio.volume);
    audio.volume = 0.50;
    audio.loop = false;
    audio.play();
}

function playDolphin() {
    var audio = new Audio("https://cdn.glitch.global/d4945722-ca3a-4aba-97fa-1b4fcf3beed2/Dolphin_Striped_01.wav?v=1646964136835");
    console.log(audio.volume);
    audio.volume = 0.50;
    audio.loop = false;
    audio.play();
}

function playBlueWhale() {
    var audio = new Audio("https://cdn.glitch.global/d4945722-ca3a-4aba-97fa-1b4fcf3beed2/Whale_Blue_04.wav?v=1646964142751");
    console.log(audio.volume);
    audio.volume = 0.50;
    audio.loop = false;
    audio.play();
}

function playBeluga() {
    var audio = new Audio("https://cdn.glitch.global/d4945722-ca3a-4aba-97fa-1b4fcf3beed2/Whale_Beluga_01.wav?v=1646964139308");
    console.log(audio.volume);
    audio.volume = 0.50;
    audio.loop = false;
    audio.play();
}

function playHumpBack() {
    var audio = new Audio("https://cdn.glitch.global/d4945722-ca3a-4aba-97fa-1b4fcf3beed2/Whale_Humpback_02.wav?v=1646964145978");
    console.log(audio.volume);
    audio.volume = 0.50;
    audio.loop = false;
    audio.play();
}

function playSeaHorse() {
    var audio = new Audio("https://cdn.glitch.global/d4945722-ca3a-4aba-97fa-1b4fcf3beed2/horse.wav?v=1646959126140");
    console.log(audio.volume);
    audio.volume = 0.50;
    audio.loop = false;
    audio.play();
}

document.querySelector('#imgOrca').addEventListener('click', revealOrca);
document.querySelector('#imgDolphin').addEventListener('click', revealDolphin);
document.querySelector('#imgBlueWhale').addEventListener('click', revealBlueWhale);
document.querySelector('#imgBeluga').addEventListener('click', revealBeluga);
document.querySelector('#imgHumpBack').addEventListener('click', revealHumpBack);
document.querySelector('#imgSeaHorse').addEventListener('click', revealSeaHorse);

function revealOrca() {
  document.querySelector('#orcaHidden').classList.toggle ('hidden');
}

function revealDolphin() {
  document.querySelector('#dolphinHidden').classList.toggle ('hidden');
}

function revealBlueWhale() {
  document.querySelector('#blueWhaleHidden').classList.toggle ('hidden');
}

function revealBeluga() {
  document.querySelector('#belugaHidden').classList.toggle ('hidden');
}

function revealHumpBack() {
  document.querySelector('#humpBackHidden').classList.toggle ('hidden');
}

function revealSeaHorse() {
  document.querySelector('#seaHorseHidden').classList.toggle ('hidden');
}
