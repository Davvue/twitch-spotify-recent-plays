import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:3000"
});

class SongApi {
  #channelId = null

  async getRecentSongs() {
    if(!this.isReady) return;
    const {data} = instance.get(`/${this.#channelId}`);
    return data
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
