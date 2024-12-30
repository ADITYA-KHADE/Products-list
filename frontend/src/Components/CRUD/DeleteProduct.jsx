import React from 'react';

const DeleteProduct = ({ productData, setDeleteModal }) => {
  const handleDelete = () => {
    console.log("Deleted Product:", productData);
    setDeleteModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-red-500">Delete Product</h2>
        <p className="text-gray-700">
          Are you sure you want to delete the product{" "}
          <span className="font-semibold">{productData.name}</span>?
        </p>
        <div className="flex justify-end mt-4 space-x-3">
          <button
            onClick={() => setDeleteModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct


