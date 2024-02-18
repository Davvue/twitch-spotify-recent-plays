const songContainer = document.querySelector(".songs")

for (const song of SONGS) {
  const container = document.createElement("div");
  container.classList.add("song-container");

  const coverImg = document.createElement("img");
  coverImg.src = song.cover;
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("song-cover");
  imgContainer.classList.toggle("song-playing", song.playing);
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
  songInfo.appendChild(songTitle);
  songInfo.appendChild(songArtist);
  container.appendChild(songInfo);

  songContainer.appendChild(container);
}
