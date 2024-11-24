import React from "react";


import Stats from "../Stats/Stats";
import Background from "./Background";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
    <section>
      {/* Background Banner */}
     <Background/>

      {/* Main Content */}
      
      <ContactForm/>

      <br></br>
      <Stats/>
      
    </section>
    </>

    
  );
};

export default Contact;
