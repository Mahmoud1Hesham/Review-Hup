import { Ui } from "./ui.js";
export class Details {
  constructor(id) {
    this.ui = new Ui;
    document.querySelector(".btn-close").addEventListener("click", () => {
      document.querySelector(".games-details").classList.add("d-none");
      document.querySelector(".games-home").classList.remove("d-none");
    });
    this.getGameDetails(id);
  }
  async getGameDetails(id) {
    document.querySelector(".loader-box").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e4eb259338mshaf586460bdd4d5ap1c8f66jsn0517ceccdf9d",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let api = await fetch(url, options);
      if (!api.ok) throw new Error(`Error: ${api.status}`);
      let res = await api.json();
      document.querySelector(".loader-box").classList.add("d-none");
      this.ui.displayGameDetails(res);
    } catch (error) {
      console.error("Fetching game Details failed", error);
    }
  }
}
