import React, {useState, useEffect} from 'react';
import './Modal.css';
import { NavLink } from 'react-router-dom';
const AllContacts = () => {
    
    const [isChecked, setChecked]                   = useState(false);
    const [contacts, setContacts]                   = useState([]);
    const [filteredContacts, setFilteredContacts]   = useState([]);
    const [loading, setLoading]                     = useState(true);
    const [searchTerm, setSearchTerm]               = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`https://contact.mediusware.com/api/contacts/?search=${searchTerm}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data)
                setContacts(data?.results);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, [searchTerm]);

    useEffect(() => {
        console.log(contacts)
        if(isChecked){
            const filteredData = contacts?.filter(contact => contact?.id % 2 === 0);
            setFilteredContacts(filteredData);
        }
        else{
            setFilteredContacts(contacts);
        }
      }, [isChecked,contacts]);


    const handleCheckboxChange = () => {
        setChecked(!isChecked); 
        
        if (!isChecked) {
            
            console.log('Checkbox is checked');
            
        } else {
            
            console.log('Checkbox is unchecked');
            
        }
    };

    const handleSearchTermChange = event => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="row justify-content-center mt-5">
                    <div className="col-8">
                        <ul className="nav nav-pills mb-3 justify-content-center">
                            <li className="nav-item">
                            <a
                                href="/allcontacts"
                            >
                    
                                <button className="btn btn-lg btn-outline-primary" type="button" style={{color: '#46139f'}} >All Contacts</button>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                href="/uscontacts"
                            >
                    
                                <button className="btn btn-lg btn-outline-warning" type="button" style={{color: '#ff7f50'}} >US Contacts</button>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {loading?
                    <p>Loading...</p>    
                    :
                    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                    <h2>Contact List</h2>
                    <div>
                        <label>
                        Search phone:
                        <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
                        </label>
                    </div>
                    <div>
                        {filteredContacts?.map((contact, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{ fontWeight: 'bold' }}>Id:</span> 
                                    <span>{contact.id}</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{ fontWeight: 'bold' }}>Phone:</span> 
                                    <span>{contact?.phone}</span>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{ fontWeight: 'bold' }}>Country:</span> 
                                    <span>{contact?.country?.name}</span>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                }           

                <div className="row justify-content-between">
                    <div className="col-6">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Only Even
                            </label>
                        </div>
                    </div>
                    <div className="col-6 text-end">
                        <a href="/problem-2">
                            <button className="btn btn-secondary">Close</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllContacts;