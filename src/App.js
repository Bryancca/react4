import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container p-3 my-3">

        <header class="row bg-secondary p-3">
          <img src="https://i.ibb.co/z529btT/header.jpg" alt="header" border="0" />
        </header>

        <nav class="navbar navbar-expand-lg navbar-dark row bg-danger">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>  


        <section class="row bg-primary"> 
          <article class="col-md-6 bg-warning"> 
            Articulo 1
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://i.ibb.co/m8yvK7s/galeria1.jpg" class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                  </div>
                  <div class="carousel-item">
                  <img src="https://i.ibb.co/RhFjXV1/galeria2.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <img src="https://i.ibb.co/bPmyjQw/galeria3.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum praesentium eum. Dolor quas commodi 
                reprehenderit officia. </p> 

          </article>

          <article class="col-md-4 bg-secondary">
            Articulo 2
            <div class="card" style={{width: " 18rem"}}>
              <img src="https://i.ibb.co/RDjfgpp/colibri.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </article>


          <aside class="col-md-2 bg-primary">
            aside

            <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                      <label for="validationCustom01" class="form-label">NOMBRES</label>
                      <input type="text" class="form-control" id="validationCustom01" value=" " required/>
                      <div class="valid-feedback">
                      Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustom02" class="form-label">APELLIDO</label>
                      <input type="text" class="form-control" id="validationCustom02" value="" required/>
                      <div class="valid-feedback">
                      Looks good!
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="validationCustom03" class="form-label">CIUDAD</label>
                      <input type="text" class="form-control" id="validationCustom03" required/>
                      <div class="invalid-feedback">
                      Please provide a valid city.
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                      <label class="form-check-label" for="invalidCheck">
                        ACEPTAR CONDICIONES
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary" type="submit">ENVIAR FORMULARIO</button>
                    </div>
                    </form>

                </div>
              </div>
          </aside>
        </section>

        <footer class="row bg-dark text-light">
          

          <article class="col-md-6 bg-Dark">
            footer
            <div>
              <div class="d-flex align-items-stretch pt-2">
                <iframe width="100%" height="380"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.8446757469184!2d-71.54916641680117!3d-16.387950589452185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses-419!2spe!4v1626405026975!5m2!1ses-419!2spe"  allowfullscreen="" loading="lazy"></iframe>
              </div>
                <h5>Los Arces 202 Distrito de cayma - Arequipa. </h5>
                <p>Numero de contacto: 054232323</p>
            </div>
            
          </article> 
          
          <article class="col-md-6 bg-Dark">
              <iframe width="100%" height="464" src="https://www.youtube.com/embed/RRg38oNQ9vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </article>

         
        </footer>
    </div>
  );
}

export default App;
