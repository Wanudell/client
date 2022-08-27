import http from "../http-common";
import IUserData from "../interfaces/IUserData";

class AdminDataService {
  getAllUsers() {
    return http.get("/Admin/list");
  }
  get(id: string) {
    return http.get<IUserData>(`/get/${id}`);
  }
  create(data: IUserData) {
    return http.post<IUserData>("/add", data);
  }
  update(data: IUserData, id: any) {
    return http.put<any>(`/update/${id}`, data);
  }
  delete(id: any) {
    return http.delete<any>(`/delete/${id}`);
  }
}
export default new AdminDataService();
