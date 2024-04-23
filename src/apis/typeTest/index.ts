import axios from 'axios';

interface Data {
  status: string;
  resultType:string;
  sameType: string[];
}
 const getType = async (arg:{userKey:string,score:number}): Promise<Data> => {
  try {
    console.log(arg)
    const response = await axios.post(`${window.location.origin}/typeTest`,  
      arg,  
    )
    console.log("타입testApi 호출");
    return response.data;
    // const url = `${host}/api/board/v1/folder/all`;
    // const response = await axios.get(url, { headers, params: arg });
    // return response.data;
  } catch (e) {
    alert(e);
    throw new Error();
  }
}

const typeTestApi = {
  getType
};
export default typeTestApi;