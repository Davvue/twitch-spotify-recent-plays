import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  }
});

class SongApi {
  #channelId = null

  async getRecentSongs() {
    if (!this.isReady) return [];
    const {data} = await instance.get(`/${this.#channelId}`);
    return data;
  }

  async updateSongList(twitch_token, spotify_token) {
    const body = {
      twitch_token,
      spotify_token
    };
    const {data} = await instance.post(`/${this.#channelId}/refresh`, body, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data;
  }

  set channelId(id) {
    this.#channelId = id;
  }

  get isReady() {
    return !!this.#channelId;
  }
}

const apiInstance = new SongApi()
export default apiInstance;
