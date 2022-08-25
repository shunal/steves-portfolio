function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#1e1d24"}}>
        <div class="container-fluid" style={{backgroundColor:"#1e1d24"}}>
            <a class="navbar-brand" href="/">Steven Hunal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" style={{color:"black"}} href="google.com">Browser Game</a>
            </div>
            </div>
        </div>
        </nav>
    )
}
export default Navbar