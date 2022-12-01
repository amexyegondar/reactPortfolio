import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Tewodros II's first task after having reunited the other provinces was
         to bring Shewa under his control. During the Era of the Princes, Shewa was, 
         even more than most provinces, an independent entity, its ruler even styling himself 
         Negus (Neguece), the title for King. In the course of subduing the Shewans, Tewodros took with
          him a Shewan prince, 
        Menelik II who he brought up as his own son, who would later become Emperor (or Atse) himself.
        </p>

        <br />

        <p className="text-xl">
        Despite his success against Shewa, Tewodros faced constant rebellions
         by stiffnecked nobles in other regions not understanding the benefits of 
         modernization. He ultimately committed suicide at the Battle of Magdala,
          during the British Expedition to Abyssinia.


        </p>
      </div>
    </div>
  );
};

export default About;