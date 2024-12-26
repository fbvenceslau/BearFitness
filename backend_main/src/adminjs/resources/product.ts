import uploadFileFeature from "@adminjs/upload"; 
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const productResourceOptions: ResourceOptions = {
  navigation: 'Produtos',
  editProperties: [
    'name', 
    'uploadThumbnail',
    'description', 
    'mockUpId', 
    'costPrice', 
    'salePrice', 
    'sizeId',
    'minimumStockId', 
    'link', 
    'featured' 
  ],
  filterProperties: [
    'name', 
    'description', 
    'mockUpId', 
    'sizeId', 
    'minimumStockId', 
    'link', 
    'featured'
  ],
  listProperties: [
    'name', 
    'description', 
    'salePrice', 
    'sizeId', // Mostra o valor da coluna size, em vez de sizeId
    'featured'
  ],
  showProperties: [
    'name', 
    'thumbnailUrl', 
    'description', 
    'mockUpId', 
    'costPrice', 
    'salePrice', 
    'sizeId', // Mostra o valor da coluna size
    'minimumStockId', 
    'link', 
    'featured', 
    'createdAt', 
    'updatedAt'
  ]
};

export const productResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../public')
      }
    },
    properties: {
      key: 'thumbnailUrl',
      file: 'uploadThumbnail'
    },
    uploadPath: (record, filename) => `thumbnails/product-${record.get('id')}/${filename}`
  })
];
