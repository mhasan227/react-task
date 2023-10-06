import React, {useState} from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import AllContacts from './Allcontacts';

const Problem2 = () => {

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <a
                    href="/allcontacts"
                >
                
                    <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                </a>
                <a
                    href="/uscontacts"
                >
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </a>
                </div>
                
            </div>
            {/* <AllContacts onClose={onCloseAllContactsModal} />} */}
        </div>
    );
};

export default Problem2;