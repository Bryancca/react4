import React from 'react' 

function Galeria1 () {
    return (
        <div>


    <section class="row bg "> 
            <article class="col-md-4 bg-warning p-3 ">

                <center><p>DISEÑO WEB</p> </center> 
                
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/CzcQd00/album1.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/2PfZwcn/album2.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                         
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/6YQKfHQ/album3.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
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
            </article>
            
        <aside class="col-md-4 bg-secondary p-3">
			
			<div class="card" style={{width: '6rem'}}/>

				<img src="https://i.ibb.co/FgMWKM4/cartaalbum.jpg" class="card-img-top" alt="..."/>
				<div class="card-body">
				  <h5 class="card-title">Curso de Diseño Web</h5>
				  <p class="card-text">CRUZ CALLO BRYAN PEDRO</p>
				  <a href="#" class="btn btn-primary">Ir a la pagina Web</a>
				</div>
			  
		</aside>
        
        <aside class="col-md-4 p-3 bg-primary">
			 
			<p>
             Pongase en Contaco:
            Siempre estamos listos para brindarle nuestros productos y servicios 
            para su hogar, oficina o empresa. Contáctenos para averiguar cómo podemos ayudarlo.</p> 
				
		
			<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			  <div class="offcanvas-header">
				<h5 id="offcanvasRightLabel">Video Informativo</h5>
			
				
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				
			  </div>
              <center><iframe width="300" height="415" src="https://www.youtube.com/embed/41ZhJ8xekAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
      
			</div>
				
		</aside>
	</section>
      
     


            

    </div>

    )
}

export default Galeria1