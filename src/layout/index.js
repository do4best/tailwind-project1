import logo from './headphone1.jpg';
import heart from './hear.jpg';
import balance from './balance.jpg';
export default function ProductModel() {
  return (<>
    <div className="flex items-center justify-center m-h-screen bg-slate-500">
      {/* Card Container */}
      <div className={"flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16"}>
        {/* Image Tool */}
<img src={logo} className={"mx-auto duration-200 hover:scale-105 w-30 h-60"} />

        {/* Content*/}
        <div className={"flex flex-col space-y-6"}>
            {/* Label & Item Discription */}
            <div className={"flex flex-col mb-4 space-y-5 text-center md:text-left"}>
                <div>
                    <div className={"inline-block px-3 py-1 text-sm text-white bg-black rounded-full"}>
                        Free Shipping
                    </div> </div>
                {/*title */}
                <div className={"mx-w-sm text-2xl font-medium"}>
                    Razer Kraken Edt Gaming Head Quartz
                </div>
                {/*Price Container */}
                <div className={"flex flex-col mb-4 space-y-3 text-center md:text-left"}>
                    <p className={"line-through"}>$799</p>
                    <p className={"text-5xl font-bold"}>$599</p>
                    <p className={"text-sm font-light text-gray-400"}>
                        This Offer is valid until 5th September as long as stock lasts!
                    </p>
                </div>
                {/* Button Group */}
                <div className={"group"}>
                    <button className={"w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg"}>
                        <div className={"px-8 py-4 bg-blue-500 rounded-lg duration-150 group-hover:bg-blue-700"}>Add to cart</div>
                    </button>
                </div>
                {/* Stock */}
                <div className={"flex items-center space-x-3 group"}>
                    <div className={" w-3 h-3 bg-green-400 rounded-full group-hover: animate-ping"}></div>
                        <div className={"text-sm"}>50+ pcs in stock</div>
                    {/*Bottom Button*/}
                    <button className={"flex items-center justify-center px-5 py-3 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg" +
                        "hover:-translate-y-0.5 transition-all duration-150"}>
                        <img src={balance} alt={""} className={"w-8"} />
                        <span>Add to cart</span>
                    </button>
                    {/*Bottom Button*/}
                    <button className={"flex items-center justify-center px-5 py-3 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg" +
                        "hover:-translate-y-0.5 transition-all duration-150"}>
                        <img src={heart} alt={""} className={"w-8"} />
                        <span>Add to wishlist</span>
                    </button>



                </div>
                </div>
            </div>
        </div>

    </div>{/*main dive*/}
      </>
  )
}