import { create } from "apisauce";
import settings from '../setting/setting';

const apiClient = create({
  baseURL: settings.apiUrl
});

export default apiClient;