export default function NewsListItem({name, description, category, onDelete}) {
    let elementClassName;
    switch(category) {
      case 'Hot News':
        elementClassName = 'bg-danger bg-gradient'
        break
      case 'Sport News':
        elementClassName = 'bg-primary bg-gradient'
        break
      case 'World News':
        elementClassName = 'bg-secondary bg-gradient'
        break
      default:
        elementClassName = 'bg-info bg-gradient'
    }
  return (
    <>
        <li className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`}>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <img src='https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
            alt="News Img" 
            className="img-fluid w-25 d-inline" 
            style={{'objectFit': 'cover'}}
            />
            <span className="position-absolute top-0 end-90 translate-middle badge border rounded-pill bg-light" id="btn_close">
              <button onClick={onDelete} type="button" className="btn-close" aria-label="Close"></button>
            </span>
        </li>
    </>
  )
}
