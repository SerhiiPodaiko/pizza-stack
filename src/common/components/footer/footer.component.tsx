import {Logo} from "@app/common/components/header/header.component";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 p-12">
            <div className="mb-4">
                <span className="uppercase text-bold text-sm text-zinc-500">Контакти</span>
            </div>
            <div className="mb-8">
                <ul>
                    <li><a href="tel:+380976512093" className="text-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">
                        844 123 45 67</a>
                    </li>
                    <li>
                        <a href="mailto:podajko1997@gmail.com" className="text-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">
                            info@pizzastack.com
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
            <div className="flex">
                <Logo />
                <span className="pl-2 text-xl">Pizza</span>
            </div>
        </footer>
    )
}


