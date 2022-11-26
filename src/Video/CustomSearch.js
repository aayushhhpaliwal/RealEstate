import React from 'react'
import reactSelect from 'react-select';

function CustomSearch() {
    const [userData, setUserdata] = React.useState([]);
    const [userSearchData, setuserSearchData] = React.useState([]);
    const[name, setName] = React.useState('');

    React.useEffect(()=> {
            const data =[
                   { name:"manoj", age:"28", profession:"SE"},
                    {name:"chetan", age:"21", profession:"Me"},
                    {name:"manoj", age:"25", profession:"Ch"},
                    {name:"pinky", age:"27", profession:"sad"},
                    {name:"rinku", age:"24", profession:"Ssa"},
                    {name:"manoj", age:"22", profession:"saE"},
                    {name:"manoj", age:"20", profession:"sa"},
                    {name:"manoj", age:"28", profession:"Se"}
            ];

            setUserdata(data);
            setuserSearchData(data);
    },[])

    const handleSearch = () => {
       debugger
       const newData= userData.filter(x=> x.name == (name == '' ? x.name : name));  
       setUserdata(newData);

    }
  return (
    <div>
        <table>
            <tr>
            <td>
                <input placeholder='Enter the name' onChange={(e) => setName(e.target.value)}></input>
            </td>
            <td>
                <input placeholder='Enter the name'></input>
            </td>
            <button onClick={()=> handleSearch()}>Submit</button>
            </tr>
        </table>

        <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            </tr>
            </thead>
            <tbody>
            {
                userSearchData && userSearchData.length > 0 ?
                userData.map(item => 
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.profession}</td>
                    </tr>
                    )
                    :''   
                }            </tbody>
        </table>
    </div>
  )
}

export default CustomSearch