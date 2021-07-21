import '../styles/HostCard.css'

function HostCard ({hostName, hostImageURL}) {
    return <div className="hostcard">
        <span className="hostcard-name">{hostName}</span>
        <img className="hostcard-picture" src={hostImageURL} alt={"Photo de profil de " + hostName}/>
      </div>
  }

  export default HostCard