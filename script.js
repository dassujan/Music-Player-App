const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let isplaying = false;

const songs = [
    {
        name: "music-1",
        title: "On My Way",
        artist: "Farruko",
    },
    {
        name: "music-2",
        title: "Faded",
        artist: "Alan Walker, Iselin Solheim",
    },
    {
        name: "music-3",
        title: "Heaven",
        artist: "Julia Michaels",
    },
];

// for play function
const playMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    // if (isplaying) {
    //     pauseMusic();
    // } else {
    //     playMusic();
    // }
    isplaying ? pauseMusic() : playMusic();
});

// changing the music data 
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "musics/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;
// loadSong(songs[0]);

const nextSong = () => {
    // songIndex++;
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);