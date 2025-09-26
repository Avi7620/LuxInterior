import React from "react";

const BeforeAfter: React.FC = () => {
  const beforeAfterProjects = [
    {
      id: 1,
      before:
        "/images/beforeb.png",
      after:
        "/images/afterb.png",
      title: "Living Room Transformation",
    },
    {
      id: 2,

      before:
        "/images/befork.png",
      after:
        "/images/afterk.png",
      title: "Kitchen Renovation",
    },
  ];

  return (
    <section className="py-20 bg-neutral-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Before & After
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Hover over the images to reveal the transformation.
          </p>
        </div>

        <div className="space-y-20">
          {beforeAfterProjects.map((project) => (
            <div key={project.id} className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                {project.title}
              </h3>

              <div
                className="relative overflow-hidden rounded-lg shadow-2xl group"
                style={{ height: "500px" }}
              >
                {/* Before Image */}
                <img
                  src={project.before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* After Image (hidden to half, expand on hover) */}
                <div
                  className="absolute inset-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:clip-path-full"
                  style={{
                    clipPath: "inset(0 80% 0 0)", // start half-half
                  }}
                >
                  <img
                    src={project.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Labels */}
                {/* <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium">
                  After
                </div>
                <div className="absolute top-4 right-4 bg-yellow-600/90 text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Before
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-neutral-400 text-lg mb-8">
            Ready to transform your space?
          </p>
          <button className="px-8 py-4 bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Extra CSS for clip-path hover */}
      <style>{`
        .group-hover\\:clip-path-full:hover {
          clip-path: inset(0 0% 0 0) !important;
        }
      `}</style>
    </section>
  );
};

export default BeforeAfter;
