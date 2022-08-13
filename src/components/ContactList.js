import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    //console.log(props);

    const deleteContactandler = (id) => {
        props.getContactId(id);
    }

    //define a function
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactandler}></ContactCard>
        );
    });

    
    return (
    <div className="ui main">
        <div className="ui celled list"></div>
        <h2>Contact List
           <Link to="/add"> <button className="ui button blue right">Add Contact</button> </Link>
        </h2>
        <div className="ui celled list">
            {renderContactList}
        </div>
    </div>
        
    );
}

export default ContactList;