
import axios from 'axios';

interface Data {
  status: string;
  isComplete:boolean;
  userName:string;
  resultType:string;
  sameType:string[];
  userKey:string;
}
 const login = async (arg: { email: string,password:string}): Promise<Data> => {
  try {
    console.log("api호출");
    const response = await axios.post(`${window.location.origin}/user/loginCheck`,
      arg
    )
    console.log("리스폰스"+response.data);
    return response.data;
    // const url = `${host}/api/board/v1/folder/all`;
    // const response = await axios.get(url, { headers, params: arg });
    // return response.data;
  } catch (e) {
    alert(e);
    throw new Error();
  }
}

const userApi = {
  login,
};
export default userApi;