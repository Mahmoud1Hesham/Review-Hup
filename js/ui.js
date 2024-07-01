export class Ui {
  displayGames(games) {
    let container = ``;
    for (var i = 0; i < games.length; i++) {
      container += `
          <div class="col">
            <div game-id="${games[i].id}" class="card h-100 bg-transparent">
              <div class="card-body">
                <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${games[i].thumbnail}" />
                </figure>
                <figcaption>
                  <div class="hstack justify-content-between">
                    <h3 class="h6 small">${games[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text small text-center text-white py-4">
                    ${games[i].short_description}
                  </p>
                </figcaption>
              </div>
              <footer class="card-footer small hstack justify-content-between">
                <span class="badge badge-color">${games[i].genre}</span>
                <span class="badge badge-color">${games[i].platform}</span>
              </footer>
            </div>
          </div>
        `;
    }
    document.getElementById("games-box").innerHTML = container;
  }
  displayGameDetails(game) {
    let container = `
            <div class="col-md-4">
               <img src="${game.thumbnail}" class="w-100" alt="game cover">
            </div>
            <div class="col-md-8">
               <div class="game-data pb-5">
                  <p>Title : <span>${game.title}</span></p>
                  <p>Category : <span class="badge text-bg-info">${game.genre}</span></p>
                  <p>Platform : <span class="badge text-bg-info">${game.platform}</span></p>
                  <p>Status : <span class="badge text-bg-info">${game.status}</span></p>
                  <p>Publisher : <span class="badge text-bg-info">${game.publisher}</span></p>
                  <p>Developer : <span class="badge text-bg-info">${game.developer}</span></p>
                  <p>Release Date : <span class="badge text-bg-info">${game.release_date}</span></p>
                  <p class="small">${game.description}
                  </p>
                  <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
               </div>
            </div>
`;
    document.getElementById("content").innerHTML = container;
  }
}
