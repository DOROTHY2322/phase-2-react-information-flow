

export default function Navbar (){
    return(
      <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <h1 class="navbar-brand">GROUPWORK</h1>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    )
}