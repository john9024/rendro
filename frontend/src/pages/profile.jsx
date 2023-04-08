import React, { useRef, useState } from "react";
import { Input } from "@material-tailwind/react";
import Form from "react-validation/build/form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import initimg from "/img/Carla Fernandez.jpg";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE } from "@/actions/types";


export function Profile() {

    const navigate = useNavigate();
    const [uploadedimg, setUpload] = useState("");
    const [isUploaded, setTrue] = useState(false);
    const [updateprofile, setUpdateprofile] = useState("");
    const inputRef = useRef();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState(
        {
            username: auth.user.username,
            email: auth.user.email,
            address: auth.user.address,
            photo: auth.user.photo,
        }
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('address', newUser.address);
        formData.append('username', newUser.username);
        formData.append('email', newUser.email);
        
        axios.post("http://localhost:8080/api/auth/profile", formData)
             .then(res => {
                
                setUpload(res.data.photo);
                setTrue(true);
                setUpdateprofile(res.data);
                console.log('===========');
                console.log(`${uploadedimg}`);
                console.log(res.data);
                
              })
              .catch(err => {
                console.log(err);
              });
              dispatch({
                type: UPDATE_PROFILE, 
                payload: updateprofile,
              });
              setTimeout(() => {
              navigate("/home");
              
            }, 1300);
        
    }

    const handleUsername = (e) => {
      setNewUser({...newUser, username: e.target.value});
    }

    const handleEmail = (e) => {
      setNewUser({...newUser, email: e.target.value});
    }

    const handleAddress = (e) => {
      setNewUser({...newUser, address: e.target.value});
    }

    const handlePhoto = (e) => {
      setNewUser({...newUser, photo: e.target.files[0]});
    }

    const handleUploadClick = () => {
      // 👇 We redirect the click event onto the hidden input element
      inputRef.current?.click();
    };

    return (
      <div className="flex flex-col relative items-center justify-center w-auto mt-[10rem]">
        <div className="relative items-center top-[8rem]">
          <button onClick={handleUploadClick}>
          {newUser.photo ? `${newUser.photo.name}` : 'Upload photo'}
        </button>
        </div>
        
        <Form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div className="flex flex-col items-center justify-center">
            {isUploaded? <img src={`http://localhost:8080/${uploadedimg}`} alt='' className=" w-[60px] h-[60px] rounded-full"/> 
              : <img src={initimg} alt='' className=" w-[60px] h-[60px] rounded-full"/>}
              
          </div>

            {/* <p className=" text-[#344054] text-[18px] font-normal mt-5">Photo</p> */}
            
            <input 
              className="w-[10%] justify-center items-center"
              type="file" 
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handlePhoto}
              ref={inputRef}
              style={{display:'none'}}
            />
            <div className="relative top-[10rem]">
              <p className=" text-[#344054] text-[18px] font-normal mt-5">Username</p>
              <Input 
                type="text"
                // placeholder="username"
                name="name"
                value={newUser.username}
                onChange={handleUsername}
                label="Username" size="lg"
              />
              <p className=" text-[#344054] text-[18px] font-normal mt-5">Email</p>
              <Input 
                type="text"
                // placeholder="email"
                name="email"
                value={newUser.email}
                onChange={handleEmail}
                label="Email" size="lg"
              />
              <p className=" text-[#344054] text-[18px] font-normal mt-5">Address</p>
              <Input 
                type="address"
                // placeholder="address"
                name="address"
                value={newUser.address}
                onChange={handleAddress}
                label="address" size="lg"
              />
              <button 
                className="w-full h-[3rem] items-center justify-center text-[24px] text-center text-[#f8f5f5] rounded-xl mt-6 bg-[#4a40d1]">
                Save Changes
              </button>  
            </div>
            
        </Form>  
       
      </div>
        
    );
}

export default Profile;