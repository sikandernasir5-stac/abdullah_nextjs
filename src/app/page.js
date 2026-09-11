import Image  from "next/image";
import styles from "./page.module.css";
import products from '@/public/products.json' 
export default function Home(){ 
    return (
    <main> 
       <div> 
       {products.map((p)=>(
        <div key = {p.id}>
          <h1>{p.title}</h1>
          <Image src={p.image} width={120} height={40} alt="bb"/> 
        </div> 
       ))} 
       </div> 
       </main> 
    );
} 

    
