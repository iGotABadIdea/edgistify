export const Services = () => {
    return (
        <div class="relative w-full h-full wavy-2 flex flex-col items-center justify-center services">
            <div class="absolute hidden w-full lg:block h-96" />
            <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-200 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span class="relative">Affordable</span>
                        </span>{' '}

                        for
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            &nbsp; everyone

                        </span>
                    </h2>
                    <p class="text-base text-indigo-400 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">

                </div>
                <div class="container">
                    <div class="card a">
                        <span></span>
                        <div class="content">
                            <h2>D2C & Ecommerce Fulfillment</h2>
                            <p>D2C & e-commerce businesses juggle multiple tasks. From building versatile product shelves to guaranteeing timely delivery. Edgistify can make the journey easier for you. </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                    <div class="card b">
                        <span></span>
                        <div class="content">
                            <h2>Enterprise Warehousing Fulfillment</h2>
                            <p>Edgistify can meet enterprise-level storage and Omnichannel fulfillment requirements. Our robust network provides storage solutions in multiple locations . </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                    <div class="card c">
                        <span></span>
                        <div class="content">
                            <h2>Start-Up Logistics Support</h2>
                            <p>From managing inventory to fulfilling orders, a start-up has to be tremendously cautious at every step. Edgistify can be a part of your growth journey by making it smooth as silk. .</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};