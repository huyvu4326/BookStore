import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import { useForm } from 'react-hook-form';
import { getProductById, updateProduct } from '../../../api/book';
import { getCategories } from '../../../api/category';
import { message } from 'antd';
import axios from 'axios';

type Props = {};

const EditBook = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [product, setProduct] = useState<any>({});
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setValue('name', response.data.name);
        setValue('categoryId', response.data.categoryId);
        setValue('author', response.data.author);
        setValue('img', response.data.imageUrl);
        setValue('originalPrice', response.data.originalPrice);
        setValue('description', response.data.description);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy thông tin sách:', error);
      });
  }, [id, setValue]);

  const onSubmit = async (data: any) => {
    const updatedProduct = {
      _id: id,
      name: data.name,
      categoryId: data.categoryId,
      author: data.author,
      img: data.imageUrl,
      originalPrice: data.originalPrice,
      description: data.description,
    };
    if (data.newImg[0]) {
      const formData = new FormData();
      formData.append('image', data.newImg[0]); 

      try {
        // Tải lên hình ảnh mới
        setIsLoading(true);
        const response = await axios.post(
          'https://api.imgbb.com/1/upload?key=0aa0e3b122d3aa3b78f125147abc69e5',
          formData
        );
        updatedProduct.img = response.data.data.url;
        setIsLoading(false);
      } catch (error) {
        console.error('Lỗi khi tải ảnh mới:', error);
        setIsLoading(false);
        return;
      }
    }
    updateProduct(updatedProduct)
      .then((response) => {
        console.log('Sản phẩm đã được cập nhật:', response.data);
        navigate('/admin/list-book');
        message.success({ content: 'Cập nhật sản phẩm thành công!', key: 'updateProduct', duration: 2 });
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
        message.error({ content: 'Cập nhật sản phẩm không thành công.', key: 'updateProduct', duration: 2 });
      });
  };
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy danh mục sách:', error);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div id="content-page" className="content-page">
        <div className="container-fluid" style={{ width: '1200px' }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Cập nhật sách</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="bookName">Tên sách:</label>
                      <input type="text" className="form-control" id="bookName" {...register('name')} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bookCategory">Danh mục sách:</label>
                      <select id="bookCategory" className="form-control" {...register('categoryId')}>
                        <option value="" disabled>
                          Chọn danh mục sách
                        </option>
                        {categories &&
                          categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bookAuthor">Tác giả:</label>
                      <input type="text" className="form-control" id="bookAuthor" {...register('author')} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="newBookImage">Hình ảnh mới:</label>
                      <div className="custom-file">
                        <input type="file" className="form-control" id="newBookImage" {...register('newImg')} />
                      </div>
                    </div>
                    {isLoading ? (
                      <p>Đang tải ảnh lên...</p>
                    ) : uploadedImageUrl ? (
                      <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '100px' }} />
                    ) : (
                      <p>Kéo và thả ảnh hoặc nhấn để chọn ảnh</p>
                    )}
                    <div className="form-group">
                      <label htmlFor="bookPrice">Giá gốc:</label>
                      <input type="text" className="form-control" id="bookPrice" {...register('originalPrice')} />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="bookDescription">Nội dung:</label>
                      <textarea
                        className="form-control"
                        id="bookDescription"
                        rows={4}
                        {...register('description')}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Gửi
                    </button>
                    <button type="reset" className="btn btn-danger">
                      Trở lại
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
