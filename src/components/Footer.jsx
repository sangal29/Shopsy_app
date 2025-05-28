function Footer() {
    return (
        <footer className="mt-7 bg-black py-3 px-10 rounded-t-3xl">
            <figure>
                <img className="w-36" src="/App Logo.png" />
            </figure>

            <article className="mt-5 min-[630px]:mt-0 flex flex-col items-center">
                <p className="text-white font-semibold text-center text-sm min-[400px]:text-base min-[630px]:text-md">Copyright Reserved - Rishabh Sangal</p>
            </article>
        </footer>
    )
}

export default Footer;