import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintPokemonPage,
  PrintDashboard,
  PrintHangedPage,
  PrintTresEnRaya,
  PrintMemoryPage,
  PrintTopoGame,
} from "../pages";
/// estas paginas se haran en el punto 6 ------> Login, PrintPokemonPage, printTemplateDashboard

//! ----------------------------------------------------------------------------------------------------------------------
//? ------------ CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? PrintDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      PrintDashboard();
      break;
    case "Hanged":
      PrintHangedPage();
      break;
    case "Login":
      Login();
      break;
    case "TresEnRaya":
      PrintTresEnRaya();
      break;
    case "Memory":
      PrintMemoryPage();
      break;
    case "TopoGame":
      PrintTopoGame();
      break;
  }
};
