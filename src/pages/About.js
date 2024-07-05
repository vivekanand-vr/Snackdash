import burger from "../assets/img/burger-image.png"; 

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-wrap mx-4 my-10">
        
        <div className="flex flex-wrap flex-col justify-center items-start overflow-hidden md:mt-20 md:ml-40">
            <h1 className="text-3xl text-red-600 md:text-[80px]">
              Welcome to the world of 
            </h1>
            <h1 className="mt-2 px-2 pb-1 text-3xl bg-red-600 rounded-lg text-white md:text-[80px] md:px-6 md:py-10 md:mt-10">
              Tasty & Fresh Food
            </h1>
        </div>
        <img className="mt-6 md:ml-10" src={burger} alt="Burger Image" />
        <h4 className="text-2xl mt-4 ml-4 italic text-light items-center md:text-4xl md:ml-40">
              Better you will feel if you eat a Snack<span className="text-red-600 font-semibold">Dash</span> tasty
              meal
        </h4>
      </div>
    </div>
  );
};

export default About;
