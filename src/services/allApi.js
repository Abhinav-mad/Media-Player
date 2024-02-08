import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

//upload videos
export const uploadVideos = async(reqBody)=>{
    //make post http request http://localhost:4000 to add videos to json server return response to add component
    return await commonApi("POST",`${serverUrl}/videos`,reqBody)

}

export const getAllVideos =  async()=>{
    //make GEt http request http://localhost:4000 to get all videos from json server return response to view compoment
    return await commonApi("GET",`${serverUrl}/videos`,"")

}




export const getAVideo =  async(id)=>{
    //make delete http request http://localhost:4000 to delete  videos from json server return response to vediocard
    return await commonApi("GET",`${serverUrl}/videos/${id}`,"")

}


export const deleteAVideos =  async(id)=>{
    //make delete http request http://localhost:4000 to delete  videos from json server return response to vediocard
    return await commonApi("DELETE",`${serverUrl}/videos/${id}`,{})

}

export const addToHistory = async(videodetails)=>{
    //make post http request http://localhost:4000 to add videos to json server return response to video card  component
    return await commonApi("POST",`${serverUrl}/history`,videodetails)

}


export const getAllHistory = async()=>{
    //make GET http request http://localhost:4000 to add videos to json server return response to watch history component
    return await commonApi("GET",`${serverUrl}/history`,"")

}


//delete a video watchhistory

export const deleteHistory = async(id)=>{
    //make post http request http://localhost:4000 to add videos to json server return response to video card  component
    return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})

}




export const addToCatogary = async(reqBody)=>{
    //make post http request http://localhost:4000 to add videos to json server return response to catogary  component
    return await commonApi("POST",`${serverUrl}/categories`,reqBody)

}


export const getAllCatogary = async()=>{
    //make post http request http://localhost:4000 to add videos to json server return response to catogary  component
    return await commonApi("GET",`${serverUrl}/categories`,"")

}

//DELETE catogories from json server

export const deleteCatogary = async(id)=>{
    //make post http request http://localhost:4000 to add videos to json server return response to catogary  component
    return await commonApi("DELETE",`${serverUrl}/categories/${id}`,{})

}


//update catagory


export const updateCatogary = async(id,body)=>{
    //make PUT http request http://localhost:4000 to update videos to json server return response to catogary  component
    return await commonApi("PUT",`${serverUrl}/categories/${id}`,body)

}


export const getACatogary = async(id)=>{
    //make PUT http request http://localhost:4000 to update videos to json server return response to catogary  component
    return await commonApi("GET",`${serverUrl}/categories/${id}`,'')

}

