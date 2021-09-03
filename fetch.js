const axios = require('axios');

const res = async ()=>{
    let data = await axios.get('admin.json');
    console.log(data.data);
}
res();