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

  const songTitle = document.createElement("p");
  songTitle.innerText = song.title;
  container.appendChild(songTitle);

  const songArtist = document.createElement("p");
  songArtist.innerText = song.artist;
  container.appendChild(songArtist)

  songContainer.appendChild(container);
}
