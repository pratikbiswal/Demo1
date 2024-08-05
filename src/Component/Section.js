import React from "react"
const Section=({data,content,children})=>{
    return(
        <div class="section">
            <h1>{data}</h1>
            <p>{content}</p>
            {children}
        </div>
    )
}

export default Section;