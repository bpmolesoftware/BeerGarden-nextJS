const AddtoFavModal = ({title , toggle} : any) => {

  return (
    <div className="fav-overlay" onClick={toggle}>
      <div className='add-to-fav-modal'>
        <div className="fav-info">{title} added to favourites!</div>
        <div className="close-button">

        <button className='close-modal' onClick={toggle}>&#10006;</button>
        </div>
      </div>
    </div>
  )
}

export default AddtoFavModal;