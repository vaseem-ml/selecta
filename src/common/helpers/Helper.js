//import { toast } from 'react-toastify';
import axios from 'axios';

const base_url = "http://localhost:3002";

var helper = {
    /*toaster: async (message, type="error" ,) => {
        if(type==="error") {
            console.log(type);
            toast.error(message);
        } else {
            toast.success(message);
        }
    },*/

    post: async (jsonObj = {}, path = "", Auth="" ) => {
        console.log('helper is listening', path);
        //const url=process.env.REACT_APP_API_BASE_URL;
        //console.log(url);
        const res = fetch(base_url+path, {
            method: "POST",
            body: JSON.stringify(jsonObj),
            headers: {
                "Content-Type": "application/json"
            }
        });

        return { response: await res, status: await res.status };
    },



    get: async (jsonObj = {}, path="") => { 

        const url = base_url + path;  
        const res = fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        return { response: await res, status: await res.status };

    },

    axios_get: async (jsonObj = {}, path = "") => {
        try{
            
            let query = await helper.serialize(jsonObj);
            const url = base_url + path + '?'+query;
            const res = await axios(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return res;
        } catch(error) {
            console.log(error);
        }
    },



    axios_post: async(jsonObj, path='') => {
        try{
            const url = base_url + path;
            const res = await axios(url,  {
                method: 'POST',
                body:JSON.stringify(jsonObj),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return res;
        }catch(error) {
            console.log('error');
        }
    },

    post_formdata: async (formData = {}, path = "") => {
        const url = base_url + path;
        const res = await fetch(url, {
            method: "POST", 
            body: formData,
            headers: {
                
            }
        });
        return { response: await res, status: await res.status };
    },
    


    serialize: function(obj, prefix) {
        var str=[],
            p;
        for (p in obj) {
            if(obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            } else {
            }
        }
        return str.join("&");
    },

}

export default helper;