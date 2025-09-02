import HackathonCard from './HackathonCard';

export default function HackathonList() {
    let certificates = [
        {
            name: "Healthcare Management System Hackathon",
            organizer: "Fluxus - IIT Indore",
            duration: "",
            date: "15 March 2025",
            certificate: "/healthcare_hackathon_certificate.png",
            redirect: "https://www.linkedin.com/feed/update/urn:li:activity:7312830126600175616/"
        },
        {
            name: "Code of Phoenix Hackathon",
            organizer: "IIIT Naya Raipur",
            duration: "24hrs",
            date: "15-16 Feb 2025",
            certificate: "",
            redirect: ""
        },
        {
            name: "Ecothon 4.0 Hackathon",
            organizer: "Sipna College of Engineering and Technology, Amravati",
            duration: "",
            date: "10 March 2025",
            certificate: "/ecothon_4.0_certificate.jpg",
            redirect: ""
        },
        {
            name: "HackOn 2025 Hackathon",
            organizer: "Government College of Engineering (GCOE), Nagpur",
            duration: "8hrs",
            date: "21 Feb 2025",
            certificate: "/hackon_hackathon_certificate.png",
            redirect: ""
        }
    ];

    return (
        <div className="row px-3">
        {
            certificates.map((obj, idx) => (
                <HackathonCard
                    key={idx}
                    name={obj.name}
                    organizer={obj.organizer}
                    duration={obj.duration}
                    date={obj.date}
                    certificate={obj.certificate}
                    redirect={obj.redirect}
                />
            ))
        }
        </div>
    );
};
