export class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/`
            <nav class="navbar navbar-expand-lg bg-dark mb-5 fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Pandora</a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link active text-white" aria-current="page" href="../index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="../new_messages.html">Nuevos mensajes</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item text-white" href="../general.html">General</a></li>
                        <li><a class="dropdown-item text-white" href="../frequent_questions.html">Preguntas frecuentes</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-white" href="../support.html">Soporte</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled text-white" aria-disabled="true">Usuarios</a>
                </li>
            </ul>
            <div class="d-flex ms-auto pt-1">
                <a class="btn btn-primary me-2" href="../login.html">Iniciar sesión</a>
                <a class="btn btn-primary" href="../register.html">Registrar</a>
            </div>
            <form class="d-flex ms-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>

        `
    }
}

customElements.define('menu-component', Menu);