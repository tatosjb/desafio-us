import TwitterButton from '../TwitterButton'
import FacebookButton from '../FacebookButton'
import YouTubeButton from '../YoutubeButton'
import { fullName } from '../../services/congress-person'

export default function CongresspeopleList({ congresspeople }) {
  return (
    <div className="row">
      {congresspeople.map(congressperson => {
          return (
            <div key={congressperson.id} className="col-12 col-sm-6 col-lg-4 mt-4">
                <div className="card">
                  <header className="card-header">
                    <h5 className="card-title" role="header">{fullName(congressperson)}</h5>
                  </header>
                  <div className="card-body text-start">
                    <p className="card-text">Party: <strong>{congressperson.party}</strong></p>
                    <p className="card-text">State: <strong>{congressperson.state}</strong></p>
                    <p className="card-text">Can apply from <strong>{congressperson.next_election}</strong></p>
                  </div>
                  <footer className="card-footer text-end">
                    <TwitterButton profile={congressperson.twitter_account} />
                    <FacebookButton profile={congressperson.facebook_account} />
                    <YouTubeButton profile={congressperson.youtube_account} />
                  </footer>
                </div>
              </div>
          )
        })}
    </div>
  )
}
