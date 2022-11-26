
import WebProj from "../images/Web_Project.png"
import ProgProj from "../images/Prog_Project.png"
import Home_Budget from "../images/Home_Budget.png"


const data = [

    {
        title: "MediaMaster",
        image: WebProj,
        description:"MVC Web Application which users can use for their music."+
        "It allows them to store, retrieve, update and delete music from their list of songs (CRUD)."+
        "For them to be able to do so, they have to create an account which will be associated with their music. "+
        "The application uses cookies for several purposes like tracking the user's theme"
        +"The data is stored on a local MySQL database in a docker image.",
        contributors: "",
        github: ["https://github.com/EvanLaverdiere", "https://github.com/jeremyoroc"]
    },
    {
        title: "Inventory Tracker",
        image: ProgProj,
        description:"WPF Application which allows users to keep track of their inventory. Therefore they can store their products, see its quantity, "+
        "set its vendor, and it also generates a excel report. The application allows the user to manipulate their products in any way they see fit.",
        contributors: "",
        github: ["https://github.com/EvanLaverdiere", "https://github.com/jeremyoroc"]
    },
    {
        title: "Inventory Tracker",
        image: Home_Budget,
        description:"WPF Home Budget Application that allow users to keep track of their expenses. Therefore, users can modify (CRUD) all their expenses and "+
        "have an idea of much money they spent on different expenses that are also categorized i.e. (education). This way, they also can easily sort and view the desires expenses for each category. "+
        "This data is stored on a database file. And, The expenses can also be sorted out by month, and date. The app will also display a chart for more visual feedback. Finally it has a search bar for quick access.",
        contributors: "",
        github: ["https://github.com/EvanLaverdiere", "https://github.com/jeremyoroc"]
    },
]

export default data