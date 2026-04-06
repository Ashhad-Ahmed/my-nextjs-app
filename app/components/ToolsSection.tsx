import React from 'react';

export default function ToolsSection() {
  const tools = [
    { title: "Logo design", desc: "Create your free logo" },
    { title: "Custom Business Websites", desc: "Build your website" },
    { title: "Social Media", desc: "Design social content" },
    { title: "Product Design", desc: "Get design help" },
    { title: "Elevated Elite Business Branding and Printing", desc: "Find tailored solutions" },
  ];

  return (
    <section className="w-full py-16 px-6 font-sans bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Tools to help build your business</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col cursor-pointer group">
              <div className="bg-[#F8F9F8] rounded-2xl p-6 aspect-square mb-4 relative overflow-hidden transition-transform group-hover:scale-105">
                <span className="text-sm font-semibold text-gray-700 z-10 relative block mb-4">{tool.desc}</span>
                {/* Abstract graphic */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200/60 rounded-xl rotate-12 transition-all group-hover:rotate-6"></div>
              </div>
              <h3 className="font-bold text-sm text-gray-900">{tool.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
