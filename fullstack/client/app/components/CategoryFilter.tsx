"use client";

type CategoryFilterProps = {
  categories: string[];
  setSelectedCategory: (category: string) => void;
};

const CategoryFilter = ({ categories, setSelectedCategory }: CategoryFilterProps) => (
  <div className="flex space-x-4 mb-4">
    <button onClick={() => setSelectedCategory('')}  className="p-2 border rounded-md hover:bg-gray-300 duration-300">Todas</button>
    {categories.map((category) => (
      <button key={category} onClick={() => setSelectedCategory(category)}  className="p-2 border rounded-md hover:bg-gray-300 duration-200">
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;