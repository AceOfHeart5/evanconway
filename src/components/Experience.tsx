type Month = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
interface CompanyDate {
    month: Month,
    year: number,
}


interface ExperienceProps {
    title: string,
    company?: string,
    start: CompanyDate,
    end?: CompanyDate,
    activities: string[],
}

const Experience = ({ title, company, start, end, activities }: ExperienceProps) => {
    const displayCompany = company ? `${company}, ` : "";
    const dateStart = `${start.month} ${start.year}`;
    const dateEnd = end === undefined ? "present" : `${end.month} ${end.year}`;

    return <>
        <h4 style={{ marginBottom: "0px" }}>{ title }</h4>
        <h5 style={{ marginTop: "5px" }}>{`${displayCompany} ${dateStart} to ${dateEnd}`}</h5>
        <ul>{activities.map(activity => <li>{activity}</li>)}</ul>
    </>;
};

export default Experience;
