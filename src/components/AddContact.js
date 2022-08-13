import React, { useState } from "react";
import {useNavigate, Navigate} from 'react-router-dom';

/*function AddContact(props){

    // state = {
    //     name:"",
    //     email:"",
    // };

    const [contact,setContact] = useState({name:"",email:""});
    let navigate = useNavigate();
    const add = (e) => {
        e.preventDefault();
        if(contact.name === "" || contact.email === ""){
            alert("All the fields are mandatory.");
            return;
        }
     
        props.addContactHandler(contact);
        // once we add the contact, we want to clear the text fields
        // this.setState({name: "",email: ""}); // that's why we have used value fileds = this.state.name or email in below text fields
        setContact({name: "",email: ""})
        navigate('/');
    }
    // render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={contact.name} onChange = {(e) => setContact({name: e.target.value}) } />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={contact.email} onChange = {(e) => setContact({email: e.target.value})} />
                    </div><button className="ui button blue">Add</button>
                </form>
            </div>
        );
    // }
}*/

class AddContact extends React.Component{

    state = {
        name:"",
        email:"",
        added: false,
    };
    
    add = (e) => {
        
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory.");
            return;
        }
     
        this.props.addContactHandler({name: this.state.name, email: this.state.email});
        // once we add the contact, we want to clear the text fields
        this.setState({name: "",email: "",added:false}); // that's why we have used value fileds = this.state.name or email in below text fields

        this.setState({added:true});

    }
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange = {(e) => this.setState({name: e.target.value}) } />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange = {(e) => this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                {this.state.added && (<Navigate to="/" />)}
            </div>
        );
    }
}

export default AddContact;