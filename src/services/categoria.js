import api from './api';

class CategoriaService {
  async getAllCategories() {
    const response = await api.get('/categorias/');
    return response.data;
  }
}

export default new CategoriaService();