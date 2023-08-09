import Product from './types/Product';
import ProductDto from './types/ProductDto';

// GET - метод для получения данных
export async function getAll(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json(); // в этой строке без await
}

// DELETE - явно указали
export async function deleteProduct(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}

// PUT - edit -меняем целиком

// PATCH - меняем какое-то отдельное поле

// POST - создание новой сущности

export async function createProduct(product: ProductDto): Promise<Product> {
  const res = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    // body: JSON.stringify(product) - сокращённая запись при условии совпадения ключей
    body: JSON.stringify(
      {
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          category: product.category
      })
  });
  // если сервер обратно присылает только один id, то пишем так:
  const { id } = await res.json();
  return { ...product, id };
  // return res.json(); // выриант, когда сервер присылвет назад объект целиком
}
