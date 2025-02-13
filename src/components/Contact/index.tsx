import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, message);
    }
    return (
        <div className="flex flex-col items-center justify-center text-white border-2 border-white rounded-md p-4">
            <h1>Contact</h1>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}> 
                <input className="border-2 border-white rounded-md p-2 m-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}    />
                <input className="border-2 border-white rounded-md p-2 m-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea className="border-2 border-white rounded-md p-2 m-2" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="border-2 border-black rounded-md p-2 m-2 bg-white text-black" type="submit">Send</button>
            </form>
        </div>
    )
}   

export default Contact;
