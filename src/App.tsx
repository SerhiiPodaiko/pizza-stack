import {Header} from "@app/common/components/header/header.component"
import MenuList from "@app/modules/menu/components/menu-list/menu-list.component"
import pizzaData from "@app/mocks/pizza.json"
import {Footer} from "@app/common/components/footer/footer.component"

export const App = () => {
    return (
        <div>
            <Header />
            <main className="px-4">
                <MenuList items={pizzaData} />
            </main>
            <Footer />
        </div>
    )
}

export default App

