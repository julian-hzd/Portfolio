
import linkedln from "../icons/linkedin.svg"
import github from "../icons/github4.svg"
import wakatime from "../icons/wakatime.svg"
import data from "../data/contact_info"
export default function Contact() {

    let dt = data.map(contact => <a href={contact.link}><img src={contact.icon}></img></a>)

    return (
        <div className="center">
            {dt}
        </div>
    )
}