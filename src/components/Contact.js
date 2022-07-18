import React, { useState } from "react";

const Contact=()=>{

    const [status,setStatus] = useState("Submit")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setStatus("Sending...")
        const {name,email,message} = e.target.elements
        let details = {
            name:name.value,
            email:email.value,
            message:message.value
        }
        fetch("server/contact",{
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details),
        }).then(res =>{
            console.log('response received')
            setStatus("Submit")
            alert(res.status)
        })
    
        
        
      
    }
    return(
        <section id="contact">
        <div className="container mt-4 pt-4 divborder">
            <div className="row mt-4 ">
                <div className="col-sm-12 col-md-12 col-lg-6"><h1 className="text-center">Contact Me</h1></div>
                <div className="col-sm-12 col-md-12 col-lg-6 ">
                    <form  onSubmit={handleSubmit} id="contact-form">
                    <label htmlFor="name">Name:</label> 
                        <input type="text" id="name" required placeholder="Your Name" />
                    <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Your email address" required />
                    <label htmlFor="message">Message: </label> 
                        <textarea id="message" placeholder="Your message" required></textarea>
                        <input type="submit" value={status}/>
                    </form>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Contact

