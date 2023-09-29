import api from "../plugins/api";

class ItemService {
    async getAllItems() {
        const response = await api.get("/itens/");
        return response.data;
    }
    
    async getItemById(id) {
        const response = await api.get(`/itens/${id}`);
        return response.data;
    }
    
    async updateItem(item) {
        const response = await api.put(`/itens/${item.id}`, item);
        return response.data;
    }
    
    async deleteItem(id) {
        const response = await api.delete(`/itens/${id}`);
        return response.data;
    }
    }

export default new ItemService();