const AddtoFavModal = ({title , toggle} : any) => {

  return (
    <div className="fav-overlay" onClick={toggle}>
      <div className='add-to-fav-modal'>
        <div className="fav-info">{title} added to favourites!</div>
      </div>
    </div>
  )
}

export default AddtoFavModal;