import api from "./lib/api";

const songContainer = document.querySelector(".songs")
let twitchToken;

window.Twitch.ext.onAuthorized((auth) => {
  api.channelId = auth.channelId;
  twitchToken = auth.token;
});

async function wait(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  })
}

while(!api.isReady) {
  await wait(100)
}

async function getSongs() {
  const songs = await api.getRecentSongs();
  console.log(songs);

  if(songs === undefined)
    return

  for (const song of songs) {
    const container = document.createElement("div");
    container.classList.add("song-container");

    const coverImg = document.createElement("img");
    coverImg.src = song.cover;
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("song-cover");
    if (song.playing) imgContainer.classList.add("playing");
    imgContainer.appendChild(coverImg);
    container.appendChild(imgContainer);

    const songTitle = document.createElement("h3");
    songTitle.innerText = song.title;
    songTitle.classList.add("song-title");

    const songArtist = document.createElement("h4");
    songArtist.innerText = song.artist;
    songArtist.classList.add("song-artist");
    songArtist.classList.add("subtitle");

    const songInfo = document.createElement("div");
    songInfo.classList.add("song-info");
    songInfo.appendChild(songTitle);
    songInfo.appendChild(songArtist);
    container.appendChild(songInfo);

    songContainer.appendChild(container);
  }
}

void getSongs();
