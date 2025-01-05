import { useEffect, useState } from "react";
export default function About() {
  const [contents, setContents] = useState([]);
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  const handleShowMore = (id) => {
    console.log(id);
    // setShowMore(!showMore);
    setShowMore((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the showMore state based on content id
    }));
  };
  return (
    <section className="bg-base-200 my-10 py-16 space-y-12">
      <h1 className="text-4xl text-center font-bold text-blue-400">About Me</h1>
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {contents.map((content) => (
          <div
            key={content.id}
            className="p-6 rounded-lg border border-blue-400 shadow-sm shadow-blue-400 space-y-4"
          >
            <h1 className="text-lg font-bold text-center">{content.title}</h1>
            <p className="text-justify">
              {/* {showMore ? content.text : content.text.slice(0, 250) + "..."} */}
              {showMore[content.id]
                ? content.text
                : content.text.slice(0, 250) + "..."}
            </p>
            {showMore[content.id] ? (
              <button
                onClick={() => handleShowMore(content.id)}
                className="btn btn-sm btn-outline text-blue-400 hover:bg-transparent hover:text-orange-500"
              >
                See Less
              </button>
            ) : (
              <button
                onClick={() => handleShowMore(content.id)}
                className="btn btn-sm btn-outline text-blue-400 hover:bg-transparent hover:text-orange-500"
              >
                See More
              </button>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
              {content.tags.map((tag, index) => (
                <p
                  key={index}
                  className="px-3 py-1.5 italic text-orange-400 text-xs font-poppins"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
