import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import productData from "/productData.json";

const TestingFile = () => {
  // const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const { id } = useParams();
  console.log('testing id', id);

  return (
    <div className="container mx-auto p-4">
      <h1>Thisi is testing filr</h1>
    </div>
  );
};

export default TestingFile;
