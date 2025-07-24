import React from "react";
import CTAButton from "./CTAButton";
import { portfolioItems } from "./portfolioData";

const PortfolioModal = ({ project, onClose, setProject }) => {
  if (!project) return null;

  const relatedProjects = portfolioItems.filter((p) =>
    project.related?.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-0 md:p-4">
      <div className="bg-background text-neutral w-full md:max-w-[1280px] md:w-full grid grid-cols-1 md:grid-cols-[400px,1fr] gap-0 md:gap-4 rounded-none md:rounded-lg overflow-auto max-h-screen md:max-h-[90vh] relative border border-neutral/20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-nuted hover:text-primary z-10"
        >
          &times;
        </button>

        {/* 🟡 Mobile Video Full Width */}
        <div className="md:hidden w-full pt-20">
          <div className="aspect-video w-full">
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                title={project.brand}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.thumbnail}
                alt={project.brand}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Left Panel (Content) */}
        <div className="py-10 px-6 md:py-16 md:pl-12 md:pr-4 space-y-10 flex flex-col justify-center">
          <div>
            <h2 className="text-2xl font-bold">{project.brand}</h2>
            <p className="text-neutral-400">{project.category}</p>
            <hr className="border-neutral-700 my-4" />
          </div>

          {/* Summary */}
          {project.summaryHighlights?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Project Summary</h3>
              <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                <p>{project.description}</p>
                <ul className="list-disc ml-6 space-y-1">
                  {project.summaryHighlights.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Involvement */}
          {project.involvement?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Zi Creates' Involvement</h3>
              <ul className="space-y-1 text-sm text-neutral-300">
                {project.involvement.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <CTAButton text="Give Zi Create a try" />
        </div>

        {/* Right Panel (Video + Related) - only on desktop */}
        <div className="hidden md:block bg-background py-16 pr-12 pl-4 space-y-6">
          <div className="aspect-video rounded-md overflow-hidden">
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                title={project.brand}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.thumbnail}
                alt={project.brand}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div>
              <h4 className="text-lg font-medium mb-2">Related Projects</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setProject(item)}
                    className="space-y-2 cursor-pointer group"
                  >
                    <img
                      src={item.src}
                      alt={item.brand}
                      className="rounded-md w-full group-hover:opacity-80 transition"
                    />
                    <p className="text-sm font-medium">{item.brand}</p>
                    <p className="text-xs text-neutral-400">{item.category}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
