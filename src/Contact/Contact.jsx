import React from "react";
import { Navbar } from "../SharedComponents/Navbar";
import { Footer } from "../SharedComponents/Footer";
import imagenContacto from "./assets/contact.svg";
import AppContextProvider from "../GlobalStates";
import { Helmet } from "react-helmet-async";

export function Contact() {
    return (
        <div className="w-full h-full relative">
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Contact information" />
            </Helmet>
            <AppContextProvider>
                <Navbar />
            </AppContextProvider>
            <main className="flex justify-center w-full min-h-[calc(100vh-3.5rem)]">
            <div className="xl:w-3/4 xl:ml-[15%] mt-8 lg:pt-0 pt-16 top-16 sm:bottom-14 bottom-28 bg-white w-full flex flex-col md:px-20 px-6 font-main lg:min-h-max min-h-[90vh]">
                <h1 className=" font-bold text-purple1 text-5xl lg:pt-14 pt-8 select-none">Contacto</h1>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col lg:w-1/2 w-full ml-24">
                        <form className="select-none">
                            <label htmlFor="name" className="text-main block mt-8">Nombre completo <span className="text-main text-red1">*</span></label>
                            <input type="text" name="name" id="name" className="border-b-2 block" required/>

                            <label htmlFor="tlf" className="text-main block mt-8">Teléfono</label>
                            <input type="tel" name="tlf" id="tlf" className="border-b-2 block"/>

                            <label htmlFor="email" className="text-main block mt-8">Correo Electrónico <span className="text-main text-red1">*</span></label>
                            <input type="email" name="email" id="email" className="border-b-2 block" required></input>

                            <label for="details" className="text-main block mt-8">Mensaje</label>
                            <textarea name="details" id="" cols="30" rows="5" className="mt-2 sm:w-1/2 w-full rounded-xl border-2 p-2"></textarea>

                            <input type="submit" value="Enviar" className="block mt-6 bg-purple1 font-main text-white px-4 py-1 rounded-full font-semibold drop-shadow-xl hover:hue-rotate-15"/>
                        </form>
                        
                    </div>
                    <div className="flex-col lg:flex hidden lg:w-1/2 h-auto">
                        <div className="text-right text-main flex flex-row justify-center">
                            <img src={imagenContacto} alt="Imagen de About Us" className=" xl:max-h-96 lg:max-h-80 sm:max-h-80 xl:mt-0 lg:mt-10 mt-10" />
                        </div>
                        <div className="text-center text-main lg:mt-10 mt-5 pr-4 pt-3 text-md leading-6 mb-4 ">
                            <p>También puedes contactarnos por correo electrónico</p>
                            <p className=" underline text-purple1">
                                <a href="mailto: support@sendit.cat ">support@sendit.cat</a>
                            </p>
                            <p>... o a través de nuestras redes sociales</p>
                        </div>
                    </div>

                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}