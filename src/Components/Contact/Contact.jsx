
const Contact = () => {
    return (
        <div className="container my-24 mx-auto md:px-6 bg-red-600">
            {/* Section: Design Block */}
            <section className="mb-32 text-center ">
                <div className="py-12 md:px-12">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div className="relative z-[1] block rounded-lg bg-amber-950 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-12 text-3xl font-bold">
                                        Contact us
                                    </h2>
                                    <form>
                                        <div className="relative mb-6">
                                            <input
                                                type="text"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                                id="exampleInput90"
                                                placeholder="Name"
                                            />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                                htmlFor="exampleInput90"
                                            >
                                                Name
                                            </label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input
                                                type="email"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                                id="exampleInput91"
                                                placeholder="Email address"
                                            />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                                htmlFor="exampleInput91"
                                            >
                                                Email address
                                            </label>
                                        </div>
                                        <div className="relative mb-6">
                                            <textarea
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                                id="exampleFormControlTextarea1"
                                                rows="3"
                                                placeholder="Your message"
                                            ></textarea>
                                            <label
                                                htmlFor="exampleFormControlTextarea1"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out"
                                            >
                                                {/* Message */}
                                            </label>
                                        </div>
                                        <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                            <input
                                                type="checkbox"
                                                value=""
                                                id="exampleCheck96"
                                                checked
                                            />
                                            <label
                                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                                htmlFor="exampleCheck96"
                                            >
                                                Send me a copy of this message
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                                        >
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20 ">
                                    <iframe
                                        title="Google Map"
                                        src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </div>
    )
}

export default Contact
