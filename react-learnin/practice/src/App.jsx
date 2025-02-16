
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: "#2980b9", height: "100vh", width:"210vh",display: "flex" , justifyContent:"center", alignItems:"center" }}>  {/* Added height: 100vh */}
      <div style={{ }}>
        <div>
          <PostComponent />
        </div>
        <br />
        <div>
          <PostComponent />
        </div>
        <br />
        <div>
          <PostComponent />
        </div>
      </div>
    </div>
  );
}


const style = {width:370, backgroundColor : "white  ", borderRadius: 10, borderColor : "gray", borderWidth:1 }

function PostComponent(){
    return <div style={style}>
    <div style={{display:"flex"}}>
        <img src={"https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"} style={{
          width:100,
          height:100,
          borderRadius:200
        }} />

        <div style={{padding:25}}>
          <b>
            100x devs
          </b>
          <div>12m followers</div>
        </div>
        

    </div>
    <div style={{padding:5}}>
      wanna win big enter our hackathon
    </div>
    </div>

}
export default App
