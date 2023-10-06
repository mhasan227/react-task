import React, {useState, useEffect} from 'react';

const Problem1 = () => {

    const [show, setShow]                           = useState('all');
    const [formObject, setFormObject]               = useState({ name: '', status: '' });
    const [savedArrayData, setSavedArrayData]       = useState([]);
    const [filteredDataArray, setFilteredDataArray] = useState([]);

    const handleClick = (val) =>{
        setShow(val);
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormObject((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSavedArrayData((prevList) => [...prevList, formObject]);
        setFormObject({ name: '', status: '' });
    }

    useEffect(() => {
        if (show === 'all') {
            setFilteredDataArray(savedArrayData);
        } else {
            setFilteredDataArray(savedArrayData?.filter(data => data?.status?.toLowerCase() === show));
        }
    }, [show,savedArrayData]);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Name"
                                name="name"
                                value={formObject.name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="col-auto">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Status"
                                name="status"
                                value={formObject.status}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                            {filteredDataArray?.map((data, index) => (
                                <tr key={index}>
                                    <td>{data?.name}</td>
                                    <td>{data?.status}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;