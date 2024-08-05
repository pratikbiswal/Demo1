import React from "react"
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Section from "./Component/Section"
import Footer from "./Component/Footer"
const DataSample = [
    {
        Title: "Section1",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I"
    },
    {
        Title: "Section2",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I"
    },
    {
        Title: "Section3",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I"
    }
]
const App = (data) => {
    return (
        <div>
            <Navbar />
            <About />
            {
                DataSample.map((data, index, arr) => {
                    return (
                        <Section
                            data={data.Title}
                            content={data.content}
                        >
                            {index != arr.length - 1 ? <hr /> : ""}
                        </Section>
                    )
                })
            }
            <Footer />
        </div>
    )
}
export default App;