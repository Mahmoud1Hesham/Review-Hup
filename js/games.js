import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Game {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".cats a").forEach((a) => {
      a.addEventListener("click", (e) => {
        document.querySelector(".cats .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
    this.ui = new Ui();
  }

  async getGames(category) {
    console.log(`Fetching games for category: ${category}`);
    document.querySelector(".loader-box").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
      this.ui.displayGames(res);
      this.runDetails();
    } catch (error) {
      console.error("Fetching games failed", error);
    }
  }

  runDetails() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("game-id");
        this.showDetails(id);
      });
    });
  }

  showDetails(id) {
    const details = new Details(id);
    document.querySelector(".games-details").classList.remove("d-none");
    document.querySelector(".games-home").classList.add("d-none");
}

}
