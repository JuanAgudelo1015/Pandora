// import { Footer } from "./footer";
import darkTheme from "./dark_theme.js"
import { Footer } from "./footer.js";
import { Menu } from "./menu.js";

const newComponentMenu = new Menu(); // No se le pasan valores al constructor, ya que no recibe ningun valor
const newComponentFooter = new Footer();
darkTheme('.dark-theme-btn', 'dark-mode');
