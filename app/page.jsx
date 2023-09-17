import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Descubre & Comparte
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Especia es un concepto de red social que permite a Felipe compartir sus prompts y recibir feedback de otros usuarios.
      </p>

      <Feed />

    </section>
  );
};

export default Home