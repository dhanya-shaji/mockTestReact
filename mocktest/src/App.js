import React, { Fragment ,useState} from 'react';
import style from './App.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const App = () => {
    const history = useHistory();
    const [india_items] = useState([
        { label: "Ka", value: "Ka" },
        { label: "kl", value: "kl" },
        { label: "TN", value: "TN" },
        { label: "MH", value: "MH" }
      ]);
      const [us_items] = useState([
        { label: "AL", value: "Al" },
        { label: "DE", value: "DE" },
        { label: "GE", value: "GE" },
      ]);
      const [ca_items] = useState([
        { label: "QN", value: "QN" },
        { label: "QC", value: "QC" },
        { label: "BC", value: "BC" },
      ]);
      const [value, setValue] =useState();
      const [userId, setUserId] =useState();
      const [userData,setUserData]=useState();
      const toDisplayName=()=>{
        axios.get(`https://reqres.in/api/users/2`)
        .then(res => {
        console.log(res.data);
        })
    }
const onclickSubmit=()=>{
  let id= userId;
    axios.get(`https://reqres.in/api/users/${id}`)
        .then(res => {
        console.log(res.data.data);
        setUserData(res.data.data)
        })
}
      
    return (
        <Fragment>
            <div className={style.container} >
                <div>
                    <h2>TASK NUMBER :1</h2>
                    <select className="form-control">
                        <option value="select">More Actions</option>
                        <option value="View">View</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete" className={style.delete}>Delete</option>
                        <option value="Send">Send</option>
                    </select>
                </div>
                <div>
                    <h2>TASK NUMBER :2</h2>
                    <select value={value}
                      onChange={e => setValue(e.currentTarget.value)}>
                        <option value="select">Country</option>
                        <option value="IN">INDIA</option>
                        <option value="US">US</option>
                        <option value="CA">CA</option>  
                    </select>
                    <div>
                      {value ==="IN" ?
                      (<select>
                        <option value="select">State</option>
                        {india_items.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
                    </select>)
                    :null
                      }  
                    
                    </div>
                    <div>
                      {value ==="CA" ?
                      (<select>
                        <option value="select">State</option>
                        {ca_items.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
                    </select>)
                    :null
                      }  
                    
                    </div>
                    <div>
                      {value ==="US" ?
                      (<select>
                        <option value="select">State</option>
                        {us_items.map(item => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
                    </select>)
                    :null
                      }  
                    
                    </div>
                </div>
                <div>
                    <h2>TASK NUMBER :3 </h2>
                    <p onClick={toDisplayName}>DisplayName (click here)</p>
                </div>
                <div>
                    <h2>TASK NUMBER :4</h2>
                    <input placeholder='enter the user id' value={userId} 
                     onChange={e => setUserId(e.currentTarget.value)} />
                    <button  onClick={onclickSubmit}>SUBMIT</button>
                    {userData ?(
                        <div>
                             <img src={userData.avatar}/>
                             <h5>userId:{userData.id}</h5>
                    <h5>Email:{userData.email}</h5>
                    <h4>Name:{userData.first_name} {userData.last_name}</h4>
                        </div>
                    ):null}
                </div>
                <div className={style.selectbox} >
                    <h2>TASK NUMBER :5</h2>
                    <div onClick={() => history.push('/profile')}>User Profile
                    
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default App;