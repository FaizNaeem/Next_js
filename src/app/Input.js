// import { useState } from "react";
// import { collection, addDoc ,db} from "./config/firebase";
import './input.css' 
export const Input = () => {
    // Hooks NOt working In Par
    // const [name ,setName]=useState("")
    // console.log(name);
    // const [title ,setTitle]=useState("")
    // const [price ,setPrice]=useState("")
    // const [des ,setDes]=useState("")
    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //       first: "Ada",
    //       last: "Lovelace",
    //       born: 1815
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
  return (
    <div className='bg-dark'>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control"  placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">^</span>
  <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">:/</span>
  <input type="text" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
 
    </div>
     <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="text" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">~</span>
  <input type="text" class="form-control" placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<button className='btn btn-success' style={{width:"300px"}}>Submit</button>
 
    </div>
    </div>

  )
}
