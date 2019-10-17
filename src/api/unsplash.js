import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 44104e6d40fe3e60317ee7d62345180f2af6cc5ad1fdaad144da60d553ae04ff"
  }
});
