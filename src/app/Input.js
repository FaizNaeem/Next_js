"use client"
import { useState } from "react";
import { collection, addDoc ,db ,getStorage, ref, uploadBytes,getDownloadURL } from "./config/firebase";
import './input.css' 
export const Input = () => {
    // Hooks NOt working In Par
    const [name ,setName]=useState("")
    const [title ,setTitle]=useState("")
    const [price ,setPrice]=useState("")
    const [des ,setDes]=useState("")
    const [file ,setfile]=useState("")
    const submit = async ()=>{
      // console.log("hi");
      const storage = getStorage();
      let random_id= new Date().getTime().toString()
      const storageRef = ref(storage, random_id);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(ref(storage, random_id))
        .then(async(url) => {
          try {
            const docRef = await addDoc(collection(db, "Data"), {
           name:name,
           Title:title,
           price:price,
           des:des,
           url:url 
       
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
      })

    }
  return (
    <div className='bg-dark'>
      <h1 align="center" style={{color:"white"}}>Adding Inputs</h1>
    <div style={{display:"flex" , flexWrap:"wrap", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" onChange={(e)=>setName(e.currentTarget.value)}  placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">^</span>
  <input type="text" class="form-control"  onChange={(e)=>setTitle(e.currentTarget.value)} placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">:/</span>
  <input type="text" class="form-control"  onChange={(e)=>setDes(e.currentTarget.value)} placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
 
    </div>
     <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="text" class="form-control"  onChange={(e)=>setPrice(e.currentTarget.value)} placeholder="Price" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">~</span>
  <input type="file" class="form-control"  onChange={(e)=>setfile(e.currentTarget.files[0])} placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<button className='btn btn-success' onClick={submit} style={{width:"300px"}}>Submit</button>
 
    </div>
    </div>

  )
}
