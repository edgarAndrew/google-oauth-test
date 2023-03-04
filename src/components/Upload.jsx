import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Upload.css'

const Upload = () => {
    const [key,setKey] = useState(0)
    const [images,setImages] = useState([]);
    const [caption,setCaption] = useState("");

    const handleImageChange = (e)=>{
        const files = [...e.target.files]
        files.forEach((ele)=>{
            const file = ele
            const Reader = new FileReader()
            Reader.readAsDataURL(file)
            Reader.onload = ()=>{
                if(Reader.readyState === 2){
                    setImages(images=>[...images,{key:uuidv4(),img:Reader.result}])
                    setKey(key + 1)
                }
            }   
        })
    }
    const handleDelete = (e) =>{
        const id = e.target.parentElement.id
        setImages(images.filter(ele => ele.key != id))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        //dispatch(uploadPost(caption,image))
    }
    return (
        <div className='newPost'>
            <form className='newPostForm' onSubmit={handleSubmit}>
                <h3>Upload Post</h3>
                {images.map((ele)=>
                <div id={ele.key} key={ele.key}>
                    <button onClick={handleDelete}>delete</button>
                    <img src={ele.img} alt="pic"/>
                </div>
                )}
                <input type="file" accept='image/*' multiple onChange={handleImageChange}/>
                <input type="text" placeholder='Caption...' value={caption} 
                    onChange={(e)=>setCaption(e.target.value)}/>
                <button type="submit">Done</button>
            </form>
        </div>
    )
}

export default Upload