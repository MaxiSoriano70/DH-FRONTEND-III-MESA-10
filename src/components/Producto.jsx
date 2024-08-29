
const Producto = (props) => {
    return (
        <div className="card" style={{ width: "350px" }}>
            <div className="card-image">
                <figure className="image is-4by3">
                <img
                    src={props.imagen}
                    alt={props.titulo}
                />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img
                            src={props.imagen}
                            alt={props.titulo}
                        />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{props.titulo}</p>
                    </div>
                </div>
                <div class="content">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls={`${props.id}`}>
                            <span>Descripción</span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id={`dropdown-menu4${props.id}`} role="menu">
                            <div class="dropdown-content">
                            <div class="dropdown-item">
                                <p>
                                {props.descripcion}
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto;
