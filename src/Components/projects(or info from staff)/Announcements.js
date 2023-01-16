import React from 'react'
import AnnouncementSummary from './AnnouncementSummary'
import { Link } from 'react-router-dom'

const Announcements = ({projects}) => {
    return(
        <div className="project-list section">
            { projects && projects.map(project => {
                return(
                    <Link to={'/project/' + project.id}>
                    <AnnouncementSummary project={project} key={project.id} />
                     </Link>
                )
            })}
        
        </div>
    )
}


export default Announcements