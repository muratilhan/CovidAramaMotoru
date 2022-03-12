import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {


  const [veri,setVeri] = useState("");
  const [tarih,setTarih] = useState("");

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))

  },[veri,tarih])




  return (
    <div className="App">
      <div className="container">
        <div className="row"></div>
        <div className="col-md-8 mx-auto mt-4">
          <h2 className="text-center text-white display-5">Türkiye Covid-19 Arama Motoru</h2>
          <br />
          <input className='form-control' placeholder='GG/AA/YYYY' type="text" onChange={(e)=>{setTarih(e.target.value)}} />
          <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col">Tarih</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Ölüm sayısı</th>
                </tr>
              </thead>
              <tbody className={veri===undefined ? "bg-danger" : "bg-success"}>
                <tr>
                  <th scope="row">{veri===undefined ? "veri bekleniyor" : tarih}</th>
                  <td>{veri===undefined ? "veri bekleniyor" : veri.totalTests}</td>
                  <td>{veri===undefined ? "veri bekleniyor" : veri.totalPatients}</td>
                  <td>{veri===undefined ? "veri bekleniyor" : veri.deaths}</td>
                </tr>
                
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default App;
