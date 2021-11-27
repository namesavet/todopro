import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({ baseURL: "https://focused-arch-327813.as.r.appspot.com/" });
