import React from 'react'

const ShowClosesGardens = ({setShowClosest} : any ) => {

  function handleClick(): void {
        setShowClosest(0);
  }

  return (
    <>
    <div className='show-closest'>
      <button className="show" onClick={() => handleClick()}>Show Closest Gardens</button>
    </div>
    </>
  )
}

export default ShowClosesGardens
