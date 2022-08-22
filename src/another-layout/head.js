import logo from './images/logo.svg';
import logo1 from './images/bg-header-desktop.png';
{/*import logo2 from './images/bg-header-mobile.png'; */}
const NewSite=()=>{

     const backgroundImage={
          backgroundImage:`url(${logo1})`,
  backgroundRepeat: 'no-repeat ',
  backgroundSize: 'contain'
    }
    return(

        <>


            <section id={"hero"} style={backgroundImage}>
                <div className={"max-w-6xl mx-auto text-center mb-40 px-10 pt-16"} style={backgroundImage}>
                    <img src={logo} alt={"the logo"} className={'mx-auto my-16'}/>
                    <h3 className={"mb-8 text-4xl font-bold text-darkGreyisBlue md:text-5xl"}>
                        A History of Everything you copy
                    </h3>
                    <p className={"max-w-3xl mx-auto mb-10 text-2xl text-gray-600"}>Clipboard allows you to track and organize everything you copy.
                    Instant access your clipboard on all your devices.</p>

                    {/*Button Container */}
                    <div className={"button-container"}>
                        <a href={"#"} className={"p-4 px-8 rounded-full shadow-lg bg-cyan-500 duration-200 hover:opacity-80"}>Download for IOS</a>

                        <a href={"#"} className={"p-4 px-8 rounded-full shadow-lg bg-amber-500 duration-200 hover:opacity-20"}>Download for Windows</a>
                    </div>
                </div>
            </section>


        </>
    )
}
export default NewSite;