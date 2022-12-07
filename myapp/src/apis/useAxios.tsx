import axios from "axios";
import { BASE_URL } from "../data/const";

axios.create({
  baseURL: BASE_URL,
});
