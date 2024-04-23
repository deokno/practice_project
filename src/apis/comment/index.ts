import axios from 'axios';

interface Data {
  status: string;
  commentList : {
    commentKey: string;
    userKey : string;
    userName: string;
    commentText: string;
    createdDate: string;
}[]}
interface SaveData {
  status:string
}
 const getComment = async (): Promise<Data> => {
  try {
    console.log("GDGDGDGD");
    const response = await axios.post(`${window.location.origin}/comments/getComment`,
    )
    return response.data;
    // const url = `${host}/api/board/v1/folder/all`;
    // const response = await axios.get(url, { headers, params: arg });
    // return response.data;
  } catch (e) {
    alert(e);
    throw new Error();
  }
}
const saveComment = async (arg:{userKey:string,commentText:string}): Promise<SaveData>=>{
  try{
    const response = await axios.post(`${window.location.origin}/comments`,
      arg,
    )
    return response.data;
  }catch(e){
    alert(e);
    throw new Error();
  }

}
//수정
const updateComment = async (arg:{commentKey:string,commentText:string}): Promise<SaveData>=>{
  try{
    console.log(arg);
    const response = await axios.post(`${window.location.origin}/comments/setComment`,
      arg,
    )
    return response.data;
  }catch(e){
    alert(e);
    throw new Error();
  }

}
//삭제
const delComment = async(arg:{commentKey:string}):Promise<SaveData>=>{
  try{
    console.log(arg);
    const response = await axios.post(`${window.location.origin}/comments/delComment`,
      arg,
    )
    return response.data;
  }catch(e){
    alert(e);
    throw new Error();
  }
}
const commentApi = {
  getComment,saveComment,updateComment,delComment
};
export default commentApi;