import computerize from '../images/image-computer.png';
import computermini from '../images/image-devices.png';
const BodySection=()=>{
    return(<>
        <section id={"snippet"}>
            <div className={"max-w-6xl mx-auto text-center my-20 px-10"}>

                <h3>
                    Keep Track of Snippet
                </h3>
                <p className={"max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-gray-500"}>
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippet immediatly on all your devices.
                    Our IOS and Windows app will help you organize everything.
                </p>
            </div>
        </section>
        <section id={"features"}>

            <div className={"section-container my-20"}>
                <div className={"relative flex flex-col md:flex-row md:space-x-32"}>
                {/* inserting image */}
                <div className={"md:w-1/2"}>
                    <img src={computerize} alt={""} className={"md:absolute top-0 right-[50%]"}/>
                </div>
                    {/*Item Container */}
                    <div className={"flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16"}>
                        {/*item 1*/}
                        <div>
                            <h5 className={"mb-2 text-2xl font-bold text-gray-500"}>
                                Quick Search
                            </h5>
                            <p className={"max-w-md text-gray-500"}>
                                Easily search your snippet by content,categories ,web address,location and more.
                            </p>
                        </div>
                        {/*item 2*/}
                        <div>
                            <h5 className={"mb-2 text-2xl font-bold text-gray-500"}>
                                iCloude Sync
                            </h5>
                            <p className={"max-w-md text-gray-500"}>
                                Instantly saves and syncs snippets across all your devices.
                            </p>
                        </div>
                        {/*item 3*/}
                        <div>
                            <h5 className={"mb-2 text-2xl font-bold text-gray-500"}>
                                Completely History
                            </h5>
                            <p className={"max-w-md text-gray-500"}>
                                Retrive any snippets from the first moment you start using app.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section id={"snippets"}>
            <div className={"section-container my-20"}>
                <h3>Access Clipboard anywhere</h3>
                <p className={"max-w-xl mx-auto mb-24 text-xl leading-9 text-center text-gray-400"}>
                    Whether you're on the go, or at your computer, you can access all over Clipboard snippets in a few simple clicks
                </p>
                      <img src={computermini} alt={""} className={"mx-auto"}/>
            </div>
        </section>
        </>)
}
export default BodySection;