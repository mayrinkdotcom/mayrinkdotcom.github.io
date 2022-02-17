const PINNED_REPOS_ENDPOINT_BASE =
  "https://gh-pinned-repos-5l2i19um3.vercel.app/";
const ALL_REPOS_ENDPOINT_BASE = "https://api.github.com/users/";
const MAX_PINNED_REPOS = 6;
let maxRepos = 6;

function showMenuMobile() {
  var elementClasses = document.querySelector(".menu-mobile").classList;

  if (elementClasses.contains("disable")) {
    elementClasses.add("enable");
    elementClasses.remove("disable");
  } else {
    elementClasses.add("disable");
    elementClasses.remove("enable");
  }
  return;
}

function requisicaoAjaxAPI(API_ENDPOINT_BASE, route) {
  return $.ajax({
    url: API_ENDPOINT_BASE + `${route}`,
  });
}

function getPinnedRepos(qtdRepos) {
  let titulo;
  let descricao;
  let link;
  let lang;
  //Executar requisição AJAX
  requisicaoAjaxAPI(PINNED_REPOS_ENDPOINT_BASE, "?username=mayrinkdotcom")
    // Receber o JSON
    .done(function (data) {
      // console.log(data)
      let codigo_html = "";
      parsedData = JSON.parse(data);

      // Montar os cards
      for (i = 0; i < qtdRepos; i++) {
        // concatenar o código do card com os dados do JSON
        // console.log(parsedData[i])
        if (parsedData[i] == undefined) {
          continue;
        }
        titulo = parsedData[i].repo;
        descricao = parsedData[i].description;
        link = parsedData[i].link;
        lang = parsedData[i].language;

        codigo_html += `<div id="portfolio-card-pinned${i}" class="portfolio-card">
                <a href="${link}" target="_blank"><h3>${titulo}</h3>
                <p class="line-clamp">${descricao}</p>
                <div class="card-tags">
                <p class="tag">${lang}</p></a>
                </div>
            </div>`;
      }

      // Repassar os cards para a página
      $(".pinned-repos").html(codigo_html);
    })
    .fail(function (jqXHR, textStatus, msg) {
      alert(msg);
    });
}

function getAllRepos(qtdRepos) {
  let titulo;
  let descricao;
  let link;
  let lang;
  //Executar requisição AJAX
  requisicaoAjaxAPI(ALL_REPOS_ENDPOINT_BASE, "mayrinkdotcom/repos")
    // Receber o JSON
    .done(function (data) {
      console.log(data);
      let codigo_html = "";
      // parsedData = JSON.parse(data);

      // Montar os cards
      for (i = 0; i < qtdRepos; i++) {
        // concatenar o código do card com os dados do JSON
        // console.log(parsedData[i])
        if (data[i] == undefined) {
          continue;
        }
        titulo = data[i].name;
        descricao = data[i].description;
        link = data[i].html_url;
        lang = data[i].language;

        codigo_html += `<div id="portfolio-card-all${i}" class="portfolio-card">
                <a href="${link}" target="_blank"><h3>${titulo}</h3>
                <p class="line-clamp">${descricao}</p>
                <div class="card-tags">
                <p class="tag">${lang}</p></a>
                </div>
            </div>`;
      }

      // Repassar os cards para a página
      $(".all-repos").html(codigo_html);
    })
    .fail(function (jqXHR, textStatus, msg) {
      alert(msg);
    });
}

function maisRepos() {
  maxRepos += 6;
  getAllRepos(maxRepos);
}

$(document).ready(function () {
  getPinnedRepos(MAX_PINNED_REPOS);
  getAllRepos(maxRepos);

  $("header a").click(function (e) {
    e.preventDefault();
    var sectionId = $(this).attr("href"),
      targetTopOffset = $(sectionId).offset().top,
      menuHeight = $("header").innerHeight();
    console.log(menuHeight);

    $("html, body").animate(
      {
        scrollTop: targetTopOffset - menuHeight,
      },
      500
    );
  });

  const modal_container = document.getElementById("modal-container");
  const portfolio_cards = document.querySelectorAll(".portfolio-card");

  portfolio_cards.forEach((element) => {
    element.addEventListener("click", () => {
      modal_container.classList.add("show");
    });
  });

  modal_container.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });
});
