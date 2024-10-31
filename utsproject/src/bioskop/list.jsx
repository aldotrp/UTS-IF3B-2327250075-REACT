import React,{useEffect,useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function List() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://uts-if-3-b-2327250075-api.vercel.app/api/api/bioskop")
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            <h1>Daftar Bioskop</h1> 
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Kapasitas</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.alamat}</td>
                            <td>{item.kapasitas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}