import {FC} from "react"

interface MenuItemProps {
    imagePath: string,
    weight: number,
    title: string,
    ingredients: string,
    price: number
}

export const MenuItem: FC<MenuItemProps> = ({imagePath, weight, title, ingredients, price }) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl bg-white">
            <div className="relative">
                <img
                    src={imagePath}
                    className="w-full h-[15rem] rounded-t-2xl object-center object-cover"
                    alt={title}/>
                    <span className="absolute bottom-1.5 right-3 px-2 bg-gray-900/50 text-white text-sm rounded-[2rem]">
                        {weight} гр
                    </span>
            </div>
            <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="font-medium mb-8">
                    {ingredients}
                </p>
                <span className="text-xl font-semibold">
                    {price} грн.
                </span>
            </div>
        </div>
    )
}




