import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Aside = () => {
  const { videos } = useSelector((state) => state.videos);
  // console.log('All data:', videos);

  const [category, setCategory] = useState([]);
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    if (videos && videos.length > 0) {
      const categoryArr = videos.map((item) => item.category);
      
      // Extract unique categories
      setCategory([...new Set(categoryArr)]);

      // Count occurrences of each category
      const countMap = categoryArr.reduce((acc, cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      }, {});

      setCategoryCount(countMap);
      // console.log('Category Count:', countMap);
    }
  }, [videos]);

  console.log('Final category count:', categoryCount);

  return (
    <div className="hidden lg:block">
      <h1 className="font-extrabold text-2xl mb-5">Topics</h1>
      <div className=" w-[100%] flex flex-col gap-8">
        {category.map((cat) => (
          <div key={cat} className="flex justify-between [&>p]:font-light">
            <p className="">{cat}</p>
            <p>{categoryCount[cat] || 0}</p> {/* ✅ Ensure rendering doesn't fail */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
