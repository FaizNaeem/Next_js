
export const Input = () => {
  return (
    <>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
        <div class="input-group mb-3 mt-3" style={{width:"300px"}}>
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
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
    </>

  )
}
