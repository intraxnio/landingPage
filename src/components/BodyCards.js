import React from 'react'

function BodyCards() {
  return (
    <>
    
    <div className="container row pt-5 pb-4 mx-auto">
        <div className="col-md-6 col-12">
        <img className="img-fluid rounded" src="/influencers-collage.jpg" alt="micro-influencers" width={500} height={500} />

        </div>
        <div className="col-md-6 col-12 my-auto">
        <div className="row inf-txt-1"><p>Be a<br />smart<br /><span className="creator-underline">marketer</span></p></div>
                <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Pick right influencer</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Make impact on Marketing ROI</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Save tons of marketing budget</p></div>
        </div>
    </div>
    
    </>
  )
}

export default BodyCards