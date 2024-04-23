import axios from 'axios';

interface Data {
  status: string;
}
 const joinUser = async (arg: { userName: string,email:string,password: string}): Promise<Data> => {
  try {
    const response = await axios.post(`${window.location.origin}/user/join`,
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
const checkJoin = async (arg: {email: string}): Promise<Data> => {
  try {
    const response = await axios.post(`${window.location.origin}/user/duplicateCheck`,
      arg,
    )
    console.log(1);
    return response.data;
    // const url = `${host}/api/board/v1/folder/all`;
    // const response = await axios.get(url, { headers, params: arg });
    // return response.data;
  } catch (e) {
    alert(e);
    throw new Error();
  }
}

const joinApi = {
  joinUser,checkJoin
};
export default joinApi;