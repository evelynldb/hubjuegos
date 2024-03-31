import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";
/// estas paginas se haran en el punto 6 ------> Login, PrintPokemonPage, printTemplateDashboard

//! ----------------------------------------------------------------------------------------------------------------------
//? ------------ CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      "PrintTopoPage() -----> en caso de que lo haya";
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "PrintMemoryPage() ------> en caso de que lo haya";
      break;
  }
};
