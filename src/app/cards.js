import { db, collection, getDocs, doc, updateDoc, deleteDoc } from "./config/firebase";
export const Home =  () => {
async function getData(){
  const querySnapshot = await getDocs(collection(db, "Data"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}
getData()

    let title = "Car"
    return (
      <div className="bg-dark">
    
    <h2 align="center"  style={{color:"white"}}>Cards</h2>
    <div className="bg-dark " style={{display:"flex", flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap"}}>
        <div className="card mt-3" style={{width:"18rem"}}>
  <img src="https://images.unsplash.com/photo-1695131402412-e342cbccae53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">HI i am selling my Car</p>
    <a href="#" class="btn btn-primary">Puchase Now</a>
  </div>
</div>
<div class="card mt-3" style={{width:"18rem"}}>
  <img src="https://images.unsplash.com/photo-1695056721216-dbf554a091a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tree</h5>
    <p class="card-text">HI i am selling my Tree</p>
    <a href="#" class="btn btn-primary">Puchase Now</a>
  </div>
</div>
<div class="card mt-3" style={{width:"18rem"}}>
  <img src="https://plus.unsplash.com/premium_photo-1680127401632-dcc0f571d4b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Home</h5>
    <p class="card-text">HI i am selling my Car</p>
    <a href="#" class="btn btn-primary">Now</a>
  </div>
</div>
<div class="card mt-3" style={{width:"18rem"}}>
  <img src="https://images.unsplash.com/photo-1694587970265-a6b828d4d1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Random</h5>
    <p class="card-text">Continue </p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    </div>
  )
}
