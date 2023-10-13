import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// To upload a video
export const uploadVideo = async(body) => {
    // Call POST HTTP request to "http://localhost/videos" to add video into JSON server and return response to Add.jsx component
    return commonAPI("POST", `${serverURL}/videos`, body)
}

export const getAllVideo = async() => {
    // Call GET HTTP request to "http://localhost/videos" to get video from JSON server and return response to View.jsx component
    return commonAPI("GET", `${serverURL}/videos`, "")
}

export const getVideo = async(id) => {
    // Call GET HTTP request to "http://localhost/videos/id" to get a video from JSON server and return response to VideoCard.jsx component
    return commonAPI("GET", `${serverURL}/videos/${id}`, "")
}

export const deleteVideo = async(id) => {
    // Call DELETE HTTP request to "http://localhost/videos/id" to delete video from JSON server and return response to VideoCard.jsx component
    return commonAPI("DELETE", `${serverURL}/videos/${id}`, {})
}

// Store watching history of videos
export const addHistory = async(videoHistory) => {
    // Call POST HTTP request to "http://localhost:4000/history" to add video into JSON server and return response to VideoCard.jsx component
    return commonAPI("POST", `${serverURL}/history`, videoHistory)
}

// Store watching history of videos
export const getHistory = async() => {
    // Call POST HTTP request to "http://localhost:4000/history" to add video into JSON server and return response to WatchHistory.jsx component
    return commonAPI("GET", `${serverURL}/history`, "")
}

export const addCategory = async(body) => {
    return commonAPI("POST", `${serverURL}/categories`, body)
}

export const getAllCategory = async() => {
    return commonAPI("GET", `${serverURL}/categories`, "")
}

export const deleteCategory = async(id) => {
    return commonAPI("DELETE", `${serverURL}/categories/${id}`, {})
}

export const updateCategory = async(id, body) => {
    return commonAPI("PUT", `${serverURL}/categories/${id}`, body)
}

// Delete watch history
export const deleteHistory = async(id) => {
    return commonAPI("DELETE", `${serverURL}/history/${id}`, {})
}