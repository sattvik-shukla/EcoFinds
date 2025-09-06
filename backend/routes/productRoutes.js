import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  getMyProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProducts).post(protect, createProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router.get('/top', getTopProducts);
router.route('/myproducts').get(protect, getMyProducts);
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, checkObjectId, updateProduct)
  .delete(protect, checkObjectId, deleteProduct);

export default router;
