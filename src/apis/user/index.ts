
import axios from 'axios';

interface Data {
  isComplete: boolean;
}
 const login = async (arg: { userName: string, email: string,gu:string }): Promise<Data> => {
  try {
    const response = await axios.post('http://192.168.128.125:8080/user',
      arg,
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

const userApi = {
  login,
};
export default userApi;