export function Footer() {
    return (
        <div>
            <div className="flex flex-row mx-20">

                <div className="flex flex-col basis-1/2 w-auto py-[75px]">
                <div className="text-2xl font-lobster flex-grow flex">
                    Fodieland<p className="text-orange-500">.</p>
                </div> 
                <p className="text-base pt-4 opacity-60">Lorem ipsum dolor sit amet, consectetuipisicing elit. </p>
                </div>

                <div className="flex basis-1/2 py-[75px] font-medium text-base space-x-[60px] items-center justify-end">
                <a href="#" className="hover:underline underline-offset-2 hover:text-slate-500 transition-colors">Recipes</a>
                <a href="#" className="hover:underline underline-offset-2 hover:text-slate-500 transition-colors">Blog</a>
                <a href="#" className="hover:underline underline-offset-2 hover:text-slate-500 transition-colors">Contact</a>
                <a href="#" className="hover:underline underline-offset-2 hover:text-slate-500 transition-colors">About us</a>
                </div>
            </div>

            <div className="relative flex w-[90%] h-[110px] mx-20 justify-center items-center border-t">
                <div className="relative flex flex-auto items-center justify-center opacity-60">
                © 2020 Flowbase. Powered by <a href="#" className="text-orange-500 px-1">Webflow</a>
                </div>

                <div className="relative flex flex-end space-x-10">
                    <a href="#">
                        <svg className="fill-black hover:fill-slate-500 transition-colors" width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z"/>
                        </svg> 
                    </a> {/*FACEBOOK*/}

                    <a href="#">
                        <svg className="fill-black hover:fill-slate-500 transition-colors" width="23" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.962 2.116a9.404 9.404 0 0 1-2.6.712A4.485 4.485 0 0 0 22.348.336a9.012 9.012 0 0 1-2.86 1.091 4.509 4.509 0 0 0-7.802 3.084c0 .358.03.702.105 1.029C8.04 5.357 4.722 3.56 2.493.822a4.54 4.54 0 0 0-.617 2.28c0 1.562.804 2.947 2.003 3.748a4.454 4.454 0 0 1-2.037-.555v.05a4.531 4.531 0 0 0 3.613 4.43 4.5 4.5 0 0 1-1.182.15c-.29 0-.58-.017-.854-.078.584 1.787 2.242 3.1 4.214 3.142a9.063 9.063 0 0 1-5.592 1.924c-.37 0-.725-.017-1.08-.062a12.697 12.697 0 0 0 6.92 2.024c8.3 0 12.837-6.875 12.837-12.834 0-.2-.007-.392-.017-.583a8.999 8.999 0 0 0 2.26-2.342Z"/>
                        </svg>
                    </a> {/*TWITTER*/}

                    <a href="#">
                        <svg className="fill-black hover:fill-slate-500 transition-colors" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z"/>
                        <circle cx="17.8742" cy="5.08761" r="0.732875"/>
                        </svg>
                    </a> {/*INSTAGRAM*/}
                </div> 
            </div>
        </div>
    );
}