import React from "react";

const Card = ({ username, object, btntext = "click me" }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 mx-auto lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                  {object.name}
                </h2>
                <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                  {username}
                </h1>
                <p className="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a className="inline-flex items-center text-indigo-500">
                  {btntext}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Card;
