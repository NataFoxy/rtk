import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createProduct } from './productsSlice';

export default function ProductCreate():JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const dispatch = useAppDispatch();

    const [error, setError] = useState<string>('');

    function valedateInputs(): boolean {
        if (title.trim() === '') {
            setError('title is not valid');
            return false;
        }
        if (category.trim() === '') {
            setError('category is not valid');
            return false;
        }
        if (description.trim() === '') {
            setError('description is not valid');
            return false;
        }
        if (image.trim() === '') {
            setError('image is not valid');
            return false;
        }
        if (price <= 0) {
            setError('price is not valid');
            return false;
        }
        return true;
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (valedateInputs()) {
            dispatch(createProduct(
                {
                  title,
                  price,
                  category,
                  description,
                  image
                }
            ));
        }
    }

  return (
    <div>
        <h1>Product Creation Form</h1>
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
                <option value="" disabled>category</option>
                <option value="jewelery">jewelery</option>
                <option value="men`s clothing">men`s clothing</option>
            </select>
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    </div>
  );
}
